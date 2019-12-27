// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.
const posts = [
  {
    title: "How to setup this thing on python 3.4",
    slug: "how-to-setup-this-thing-on-python34",
    contents: `
= Code examples

[.subtitle]
Lets see if it highlights

[.date]
Apr 24, 2019

[.hero]
image::https://picsum.photos/1920/1080?random=1434545[]

This is an optional introduction to the article. As you'll see in this article, we'll discuss these things.

[source, javascript]
----
const { count } = this.get();
this.set({
  count: count + 1
});
----

[source, python]
----
def foo(a, b):
  return a + b

if __main__ == "__main__":
  add(1, 2)
----

.ruby
[source,ruby]
----
require 'sinatra' // <1>

get '/hi' do // <2>
  "Hello World!" // <3>
end
----
<1> Library import
<2> URL mapping
<3> HTTP response body

[source,xml]
----
<section>
  <title>Section Title</title> <!--1-->
</section>
----
<1> The section title is required.

.bash
[source, bash]
----
$ mkdir -p /tmp/foobar

$ curl https://google.com | grep script
----

.bash
[source, bash]
----
mkdir -p /tmp/foobar

curl https://google.com | grep script
----
    `
  },
  {
    title: "Testing article",
    slug: "testing-article",
    contents: `
= Testing article

[.subtitle]
And why you thought this was going to be a fruitless excercise for no good reason

[.date]
Apr 1, 2019

This is an optional introduction to the article. As you'll see in this article, we'll discuss these things.

[.hero]
image::https://picsum.photos/1920/1080?random=1434545[]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v +austin.cc+ four loko vaporware skateboard cray brunch.

.bash
[source, bash]
----
mkdir -p /tmp/foobar

curl https://google.com | grep script
----

    `
  },
  {
    title: "This is a long article",
    slug: "this-is-a-long-article",
    contents: `

= Another Lorem ipsum super fluid

[.subtitle]
And why you thought this was going to be a fruitless excercise for no good reason

[.date]
Apr 1, 2019

This is an optional introduction to the article. As you'll see in this article, we'll discuss these things.

[.hero]
image::https://picsum.photos/1920/1080?random=1434545[]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v +austin.cc+ four loko vaporware skateboard cray brunch.

_Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin ++vim foo.py++ four loko vaporware skateboard cray brunch._

Lorem *ipsum dolor* amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch. Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh http://powerman.name/doc/asciidoc[AsciiDoc Cheat Sheet this one is long hey!^] man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. The command +main.py+ can typically be used right before. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

first term:: definition of first term

And this other one

first term:: definition of first term
second term:: definition of second term

[nicer#id2.class1.class2]
Main header
===========

[.big]
.How easy it is
image::https://cdn-images-1.medium.com/max/1200/1*-fCK_LIT4kM5eSqgxJtqLw.gif[]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

Second heading
--------------

[.fullbleed]
image::https://picsum.photos/1920/1080?random=13234[]

.python
[source, python]
----
def add(x, y):
  return x + y

if __main__ == "__main__":
  add(1, 2)
----

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

[.big]
image::https://cdn-images-1.medium.com/max/1200/1*ZYlHavkT1ChU4es53D_R7A.png[]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

[qanda]
What is Asciidoctor?::
  An implementation of the AsciiDoc processor in Ruby.
What is the answer to the Ultimate Question?:: 42

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

.bash
[source, bash]
----
mkdir -p /tmp/foobar

curl https://google.com | grep script
----

.ruby
[source,ruby]
----
require 'sinatra' // <1>

get '/hi' do // <2>
  "Hello World!" // <3>
end
----
<1> Library import
<2> URL mapping
<3> HTTP response body

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

[.big]
image::https://cdn-images-1.medium.com/max/800/1*p9qJOs0j5cU4Qfx0Z5vzUA.png[]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones.

video::JyECrGp-Sw8[youtube]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones.

[.big]
video::JyECrGp-Sw8[youtube]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones.

[.fullbleed]
video::JyECrGp-Sw8[youtube]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones.

How about this?

.Description of the image
[.big]
image::https://cdn-images-1.medium.com/max/800/1*p9qJOs0j5cU4Qfx0Z5vzUA.png[xxyy]

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

[quote, Albert Einstein]
A person who never made a mistake never tried anything new and then some

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

[quote]
A person who never made a mistake never tried anything new and then some

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

[quote, 'https://www.linkedin.com/in/karmel[Karmel Allison]', TF Engineering Leader at Google]
We don’t think you should have to choose between a simple API and scalable API. We want a higher level API that takes you all the way from MNIST to planet scale.

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland.

[quote]
TF 2.0 is a beginner's paradise

Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.


[source,xml]
----
<section>
  <title>Section Title</title> <!--1-->
</section>
----
<1> The section title is required.

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

Final thoughts
~~~~~~~~~~~~~~


Lorem ipsum dolor amet #skateboard# pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.  Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v austin four loko vaporware skateboard cray brunch.

NOTE: An admonition paragraph draws the reader's attention to
auxiliary information.
Its purpose is determined by the label
at the beginning of the paragraph.

Here are the other built-in admonition types:

TIP: Pro tip...

here comes important section

IMPORTANT: Don't forget...

Always remember

WARNING: Watch out for...

And this too

CAUTION: Ensure that...

==== Final thoughts
This section should be the ending. Hope you had fun reading this
We covered

. this first item
. this second item that is long
. third item

The following checklist might be useful

* [*] checked
* [x] also checked
* [ ] not checked
*     normal list item

===== Final thoughts
This section should be the ending. Hope you had fun reading this

* level 1
** level 2
*** level 3
**** level 4
***** level 5
* level 1


    `
  },
  {
    title: "Keyboard examples",
    slug: "keyboard-examples",
    contents: `
= Keyboard examples

[.subtitle]
Keyboard highlights

[.date]
Apr 26, 2019

|===
|Shortcut |Purpose

|kbd:[F11]
|Toggle fullscreen

|kbd:[Ctrl+T]
|Open a new tab

|kbd:[Ctrl+Shift+N]
|New incognito window

|kbd:[\\ ]
|Used to escape characters

|kbd:[Ctrl+\\]]
|Jump to keyword

|kbd:[Ctrl + +]
|Increase zoom
|===


== Menu stuff

To save the file, select menu:File[Save].

Select menu:View[Zoom > Reset] to reset the zoom level to the default setting.

== Button stuff

Press the btn:[OK] button when you are finished.

Select a file in the file navigator and click btn:[Open].

== Footnotes
A statement.footnote:[Clarification about this statement.]

A bold statement!footnote:disclaimer[Opinions are my own.]

Another bold statement.footnote:disclaimer[]


== Bibliography

_The Pragmatic Programmer_ <<pp>> should be required reading for all developers.
To learn all about design patterns, refer to the book by the "\`Gang of Four\`" <<gof>>.

[bibliography]
== References

- [[[pp]]] Andy Hunt & Dave Thomas. The Pragmatic Programmer:
  From Journeyman to Master. Addison-Wesley. 1999.
- [[[gof,2]]] Erich Gamma, Richard Helm, Ralph Johnson & John Vlissides. Design Patterns:
  Elements of Reusable Object-Oriented Software. Addison-Wesley. 1994.
    `
  }
];

posts.forEach(post => {
  post.contents = post.contents.replace(/^\t{3}/gm, "");
});

export default posts;
