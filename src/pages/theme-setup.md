---
layout: page
title: Theme Setup
description: "Instructions on how to install and customize the modern Jekyll theme Juice."
permalink: /theme-setup/
---

General notes and suggestions for customizing **Juice**.

## Basic Setup for a new Jekyll site

1. [Install Jekyll](http://jekyllrb.com) `gem install jekyll`.
2. Fork the [Juice Jekyll Theme repo](https://github.com/kiriaze/juice/fork).
3. Clone the repo you just forked and rename it.
4. Edit `_config.yml` to personalize your site.
5. Check out the sample posts in `_posts` to see examples for pulling in large feature images, assigning categories and tags, and other YAML data.
6. Read the documentation below for further customization pointers and documentation.

<div markdown="0"><a href="https://github.com/kiriaze/juice/archive/master.zip" class="btn">Download the Theme</a></div>

**Pro-tip:** Delete the `gh-pages` branch after cloning and start fresh by branching off `master`. There is a bunch of garbage in `gh-pages` used for the theme's demo site that I'm guessing you don't want on your site.
{: .notice}

---

## Setup for an Existing Jekyll site

1. Clone the following folders: `_includes`, `_layouts`, `_sass`, `assets`, and `images`.
2. Clone the following folders/files and personalize content as need: `about/`, `posts/`, `tags/`, `feed.xml`. and `index.html`.
3. Set the following variables in your `config.yml` file:

~~~ yaml
title:            Site Title
description:      Describe your website here.
disqus_shortname: shortname
# Your site's domain goes here (eg: //kiriaze.github.io, http://kiriaze.com, etc)
# When testing locally leave blank or use http://localhost:4000
url:              //kiriaze.github.io

# Owner/author information
owner:
  name:           Your Name
  avatar:         avatar.jpg
  bio:            "Your bio goes here. It shouldn't be super long but a good two sentences or two should suffice."
  email:          you@email.com
  # Social networking links used in footer. Update and remove as you like.
  twitter:
  facebook:
  github:
  stackexchange:
  linkedin:
  instagram:
  flickr:
  tumblr:
  # google plus id, include the '+', eg +kiriaze
  google_plus:    +yourid

# Analytics and webmaster tools stuff goes here
google_analytics:
google_verify:
# https://ssl.bing.com/webmaster/configure/verify/ownership Option 2 content= goes here
bing_verify:

# http://en.wikipedia.org/wiki/List_of_tz_database_time_zones
timezone:    America/New_York
future:      true
pygments:    true
markdown:    kramdown

# Amount of posts to show on home page
paginate: 5
~~~

---

## Installation

Run the line below to install all the dependencies for the theme contained in `package.json` as well as `bower.json`:

~~~ bash
$ bower install
$ npm install --global gulp && npm install
~~~

*This will install Gulp globally. Depending on your user account, you may need to [configure your system](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md) to install packages globally without administrative privileges.*

From the theme's root, use `gulp` concatenate/minify/autoprefix/sourcemap/flatten/bower JavaScript/CSS/Font files, optimize all image types in the `images/` directory, run a server, and to watch for updates of CSS/JS/HTML/MD files that Gulp will then automatically re-build as you write your code and refresh your browser when developing locally. You can also use `gulp prod` before uploading to your server or before running `gulp gh-pages` or `gulp deploy` to minify html, remove unused css and gzipping the whole site.

---

## Build

Gulp will take care of everything for you, even building out Jekyll!

> How awesome is this? Just one command and your whole site gets built, optimized, served with live reload, and starts watching for changes. Boom.

~~~ bash
$ gulp
~~~

---

## Folder Structure

~~~ bash
juice/
├── _includes
|    ├── browser-upgrade.html       # prompt to upgrade browser on < IE8
|    ├── footer.html                # site footer
|    ├── head.html                  # site head
|    ├── navigation.html            # site navigation
|    └── scripts.html               # jQuery, plugins, GA, etc
├── _layouts
|    ├── page.html                  # page layout
|    ├── page.html                  # post-index layout used on home page
|    └── post.html                  # post layout
├── _posts
├── _sass                           # Sass partials
├── assets
|    ├── css                        # compiled stylesheets
|    ├── js
|    |   ├── _main.js               # plugin options
|    |   ├── scripts.min.js         # concatenated and minifed site scripts
|    |   ├── plugins                # plugin scripts
|    └── └── vendor                 # jQuery and Modernizr scripts
├── images                          # images for posts and pages
├── _config.yml                     # Jekyll options
├── about/                          # about page
├── posts/                          # all posts
├── tags/                           # all posts grouped by tag
└── index.html                      # home page with pagination
~~~

---

## Customization

Most of the variables found here are used in the .html files found in `_includes` if you need to add or remove anything. A good place to start would be to add the `title`, `description`, and `url` for your site. Links are absolute and prefixed with `{{ "{{ site.url " }}}}` in the various `_includes` and `_layouts`, so remember to properly set `url`[^1] to `http://localhost:3000` when developing locally.

### Disqus Comments

Create a [Disqus](http://disqus.com) account and change `disqus_shortname` in `_config.yml` to the Disqus *shortname* you just setup. By default comments appear on all post and pages if you assigned a shortname. To disable commenting on a post or page, add the following to its YAML Front Matter:

~~~ yaml
comments: false
~~~

### Social Share Links

To enable Facebook, Twitter, and Google+ share links on a post or page, add the following to its front matter:

~~~ yaml
share: false
~~~

### Owner/Author Information

Change your name, and avatar photo (200x200 pixels or larger), email, and social networking URLs. If you want to link to an external image on Gravatar or something similar you'll need to edit the path in `head.html` since it assumes it is located in `/images`.

### Google Analytics and Webmaster Tools

Your Google Analytics ID goes here along with meta tags for [Google Webmaster Tools](http://support.google.com/webmasters/bin/answer.py?hl=en&answer=35179) and [Bing Webmaster Tools](https://ssl.bing.com/webmaster/configure/verify/ownershi) site verification.

### Navigation Links

To add additional links to the menu edit `_config.yml`. Use the following format to set the URL and title for as many links as you'd like.

~~~ yaml
- title: Portfolio
  url: /portfolio/

- title: Kiriaze
  url: http://kiriaze.com
~~~

---

### Jekyll _includes

For the most part you can leave these as is since the author/owner details are pulled from `_config.yml`. That said you'll probably want to customize the copyright stuff in `footer.html` to your liking.

### Reading Time

On by default. To turn off remove `reading_time` from `_config.yml. Default words per minute is set at 200 and can changed by updating `words_per_minute` in `_config.yml`.

### Feature Images

A good rule of thumb is to keep feature images nice and wide so you don't push the body text too far down. An image cropped around around 1024 x 256 pixels will keep file size down with an acceptable resolution for most devices. If you want to serve these images responsively I'd suggest looking at the [Jekyll Picture Tag](https://github.com/scottjehl/picturefill)[^2] plugin.

To add a feature image to a post or page just include the filename in the front matter like so.

~~~ yaml
image: feature-image-filename.jpg
~~~

#### Post/Page Thumbnails for OG and Twitter Cards

Post and page thumbnails work the same way. These are used by [Open Graph](https://developers.facebook.com/docs/opengraph/) and [Twitter Cards](https://dev.twitter.com/docs/cards) meta tags found in `head.html`. If you don't assign a thumbnail the image you assigned to `site.owner.avatar` in `_config.yml` will be used.

### Videos

Video embeds are responsive and scale with the width of the main content block with the help of [FitVids](http://fitvidsjs.com/).

~~~ html
<iframe width="560" height="315" src="http://www.youtube.com/embed/0oMEuyhBkRo" frameborder="0"></iframe>
~~~

### Twitter Cards

Twitter cards make it possible to attach images and post summaries to Tweets that link to your content. Summary Card meta tags have been added to `head.html` to support this, you just need to [validate and apply your domain](https://dev.twitter.com/docs/cards) to turn it on.

### Link Post Type

Link blog like a champ by adding `link: http://url-you-want-linked` to a post's YAML front matter. Arrow glyph links to the post's permalink and the the `post-title` links to the source URL. Here's an [example of a link post]({{ site.url }}/blog/sample-link-post/) if you need a visual.

---

## Questions?

Having a problem getting something to work or want to know why I setup something in a certain way? Ping me on Twitter [@kiriaze](http://twitter.com/kiriaze) or [file a GitHub Issue](https://github.com/kiriaze/juice/issues/new). And if you make something cool with this theme feel free to let me know.

---

## License

This theme is free and open source software, distributed under the [GPL v2 License](http://opensource.org/licenses/GPL-2.0) version 2 or later. So feel free to to modify this theme to suit your needs.

---

[^1]: Used to generate absolute URLs in `feed.xml`, and for canonical URLs in `head.html`. Don't include a trailing `/` in your base url ie: http://kiriaze.com. When developing locally I suggest using http://localhost:3000 or whatever localhost you're using to properly load all theme stylesheets, scripts, and image assets. If you leave this variable blank all links will resolve correctly except those pointing to home.

[^2]: If you're using GitHub Pages to host your site be aware that plugins are disabled. So you'll need to build your site locally and then manually deploy if you want to use this sweet plugin.
