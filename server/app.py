#!/usr/bin/env python3
#
# Author: Jeffrey Jose | jeffjosejeff@gmail.com
#
import asyncio
import requests
import environs
import time
import pathlib
import mimetypes
import randomcolor
from datetime import timedelta

import sanic
from spf import SanicPluginsFramework
from sanic import Sanic, response
from sanic.views import CompositionView
from sanic_sslify import SSLify
from sanic_scheduler import SanicScheduler, task
from sanic_cors.extension import cors

app = Sanic(__name__)

# Bootstrap plugins
#
SSLify(app, subdomains=True)
SanicScheduler(app)

spf = SanicPluginsFramework(app)
spf.register_plugin(cors, automatic_options=True)

env = environs.Env()
color = randomcolor.RandomColor()

CACHE = {}
CACHE_TIMEOUT = 100
BLOGPOST_URL = 'https://api.github.com/repos/jeffjose/personal-website/contents/src/posts'
ALL_BLOGPOSTS_URL = (
    "https://api.github.com/repos/jeffjose/personal-website/contents/src/posts"
)
REDIRECTS_URL = "https://raw.githubusercontent.com/jeffjose/personal-website/master/server/redirects"
STATIC_URL = "https://api.github.com/repos/jeffjose/personal-website/contents/static"


# CACHING
#
def get_cache(key):

    now = time.time()

    if now - CACHE.get(key, {}).get("expires", now - 100) < CACHE_TIMEOUT:
        results = CACHE[key]['data']
        return results
    else:
        return False


async def set_cache(key, data):

    print(f"setting cache for {key}")
    CACHE[key] = {"data": data, "expires": time.time()}

    return data


# Scan through dist/ and figure out what projects are in there
#
def setup_project(app, project):
    app.static(project.name, "./dist/{}/index.html".format(project.name))
    app.static(project.name, "./dist/{}".format(project.name))


projects = [x for x in pathlib.Path("dist/").iterdir() if x.name != "homepage"]

for project in projects:
    setup_project(app, project)


# Setup static redirects
#
@task(timedelta(seconds=CACHE_TIMEOUT))
def setup(_):

    CACHE["redirects"] = dict([
        map(lambda r: r.strip(), x.split("="))
        for x in requests.get(REDIRECTS_URL).text.splitlines()
    ])

    CACHE['static'] = dict([(x['name'], x['download_url'])
                            for x in requests.get(STATIC_URL).json()])


# API
#


@app.route("/_api/post/<name>", methods=["GET", "POST", "OPTIONS"])
async def catch_all(request, name):
    if get_cache(key=name):
        post = get_cache(key=name)
    else:
        name = name.replace('.adoc', '')

        post = requests.get(f'{BLOGPOST_URL}/{name}.adoc').json()
        try:
            post['contents'] = requests.get(post['download_url']).text
            post['colors'] = color.generate(count=2)

            # We dont need the encoded content, since we've fetched ascii
            # ourselves into `contents`. Remove `content`
            post.pop('content')

            # TODO
            #import json
            #post = json.loads(pathlib.Path(f'server/{name}.json').read_text())
        except:
            print('setting empty')
            pass
        finally:
            app.add_task(set_cache(name, post))

    if request.headers.get('ETag') == post['sha']:
        return response.json(None, status=304)
        #return response.json(post)
    else:
        return response.json(post)


@app.route("/_api/posts", methods=["GET", "POST"])
async def catch_all(request):
    if get_cache(key="latest"):
        posts = get_cache(key="latest")
    else:

        # Testing
        #
        # TODO
        #import json
        #posts = json.loads(pathlib.Path('server/posts.json').read_text())

        posts = requests.get(ALL_BLOGPOSTS_URL).json()
        for post in posts:
            post['contents'] = requests.get(post['download_url']).text

        posts = {x['name']: x for x in reversed(posts)}

        app.add_task(set_cache("latest", posts))

    return response.json(posts)


# Catch-all route to serve index.html or project's index.html
#
@app.route("/")
@app.route("/<path:path>")
async def catch_all(request, path=""):
    try:
        return await response.file("./dist/homepage/{}".format(path))
    except:

        if CACHE["redirects"].get(path):
            redirect = CACHE["redirects"].get(path)
            return response.redirect(redirect)
        elif CACHE["static"].get(path):
            file = CACHE["static"].get(path)
            mimetype = mimetypes.guess_type(path)[0] or 'text/plain'
            return response.raw(requests.get(file, stream=True).content,
                                content_type=mimetype)

        return await response.file("./dist/homepage/index.html")


if __name__ == "__main__":
    debug = env.bool("DEBUG", True)
    app.run(host="0.0.0.0", port=8080, debug=debug, access_log=debug)
