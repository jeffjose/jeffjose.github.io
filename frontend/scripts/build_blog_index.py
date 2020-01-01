#!/usr/bin/env python3

import path
from dateutil import parser
import yaml

print('-------------------')
print('Running build_blog_index.py')
print('-------------------')

BLOG_DIR = '../blog'
INDEX = BLOG_DIR + '/index-blog.yaml'
DEV_INDEX = './index-blog-dev.yaml'

GITHUB_URL = 'https://raw.githubusercontent.com/jeffjose/personal-website/master/blog'


def find_dt(post):
    lines = post.lines(retain=False)

    dt = lines[lines.index('[.date]') + 1]

    return parser.parse(dt)


def create_index(items):

    items = sorted(items, key=lambda x: find_dt(x), reverse=True)

    return [{"file": f"{GITHUB_URL}/{x.basename()}"} for x in items]


def write_index(index, file):

    print(yaml.dump(index))
    yaml.dump(index, open(file, 'w'))

    print(f"2/2. Writing dev index: {DEV_INDEX}")
    yaml.dump(index, open(DEV_INDEX, 'w'))


# Find all blogposts
posts = [
    x for x in path.Path(BLOG_DIR).listdir("*.adoc")
    if not x.basename().startswith('_')
]

blog_index = create_index(posts)
print('1/2. Blog index')
write_index(blog_index, INDEX)
