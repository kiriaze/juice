---
layout: page
title: Theme Setup
description: "Instructions on how to install and customize the modern Jekyll theme Juice."
permalink: /theme-setup/
---

## Installation

[Install Jekyll](http://jekyllrb.com).

~~~ bash
gem install jekyll
~~~

Clone [Install Juice](http://github.com/kiriaze/juice).

~~~ bash
git clone git@github.com:kiriaze/juice.git
~~~

Run the line below to install all the dependencies for the theme contained in `package.json` as well as `bower.json`:

~~~ bash
$ bower install && npm install --global gulp && npm install
~~~

*This will install Gulp globally. Depending on your user account, you may need to [configure your system](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md) to install packages globally without administrative privileges.*

---

## Configure

Enter the desired values in the `./assets/scss/_settings.scss`, `./_config.yml`, and `./config.js` files.
**These are just a few of those settings.**

~~~ bash
// _settings.scss
$container-class: 'container';
$row-class: 'row';
$column-class: 'columns';
$number-of-columns: 12;
$gridDebug: true;
$gutter: 0;

// _config.yml
title: Juice
description: An awesome front end web framework.
disqus_shortname: kiriaze
reading_time:     true
words_per_minute: 200
search:           true
simpleforms:      green

// config.js
module.exports = {

  'serverport': 3000,

  // URL TO YOUR SITEMAP.XML
  'sitemapURL': 'http://kiriaze.com/sitemap.xml',

  // Google pagespeed
  'URL'       : 'http://kiriaze.com',
  'strategy'  : 'mobile'

}
~~~

---

## Build

Gulp will take care of everything for you, even building out Jekyll!

> How awesome is this? Just one command and your whole site gets built, optimized, served with live reload, and starts watching for changes. Boom.

~~~ bash
$ gulp
~~~

From the theme's root, run `gulp`. Your site will be preprocessed, conacatenating your bower dependcies with you main css/js files, assets will be optimized, jekyll will build out your pages, a sitemap will be generated, the size of your project will be outputted in the console, a server will initiate, and your browser will open up your site and will automatically watch and reload for changes. You can also use `gulp prod` before uploading to your server or before running `gulp gh-pages` or `gulp deploy` to minify html, remove unused css and gzipping the whole site.

---

## Folder Structure

~~~ bash
juice/
├── gulp
├── src
|   ├── _data
|        ├── navigation.yml             # site navigation
|   ├── _includes
|        ├── buttons.html               # buttons
|        ├── disqus.html                # disqus
|        ├── forms.html                 # site forms
|        ├── head.html                  # site head
|        ├── header.html                # site header
|        ├── footer.html                # site footer
|        ├── foot.html                  # site foot
|        ├── main.min.css               # inline stylesheet uncss'd
|        ├── pagination.html            # pagination
|        ├── social-share.html          # social-share
|        ├── typekit.html               # typekit
|        └── typography.html            # ui kit
|   ├── _layouts
|        ├── default.html               # default container layout
|        ├── blog.html                  # blog page layout
|        ├── page.html                  # page layout
|        ├── post.html                  # post layout
|        └── my-collection.html         # my-collection custom post type layout
|   ├── _my-collection
|   ├── _posts
|   ├── _plugins
|   ├── assets
|       ├── vendor                      # vendor assets
|       ├── fonts                       # fonts
|       ├── images                      # images
|       ├── scss                        # scss files
|       └── js
|           ├── app.js                  # app js file
|           └── plugins                 # plugin scripts
|   ├── blog/                           # blog page
|   ├── categories/                     # all posts grouped by category
|   ├── pages/
|       ├── 404.md                      # 404 page
|       ├── about.md                    # about page
|       ├── grid.md                     # grid page
|       ├── my-collection.md            # my-collection custom post type listings
|       ├── theme-setup.md              # theme setup page
|       └── type.md                     # ui kit page
|   ├── tags/                           # all posts grouped by tag
|   ├── _config.yml                     # Jekyll options
|   ├── search.json                     # Search functionality
|   └── index.html                      # home page
├── .editorconfig
├── .gitignore
├── _config.yml
├── bower.json
├── CNAME
├── config.js
├── gulpfile.js
├── LICENSE.md
├── package.json
└── README.md
~~~

---

## Customization

Most of the variables found here are used in the .html files found in `_includes` if you need to add or remove anything. A good place to start would be to add the `title`, `description`, and `url` for your site. Links are relative and prefixed with `{{ "{{ site.baseurl " }}}}` in the various `_includes` and `_layouts`, so remember to properly set `baseurl` before deploying live and can be left blank/commented out while developing locally.

---

#### Disqus Comments

Create a [Disqus](http://disqus.com) account and change `disqus_shortname` in `_config.yml` to the Disqus *shortname* you just setup. By default comments appear on all posts if you assigned a shortname. To disable commenting on a post, add the following to its YAML Front Matter:

~~~ yaml
comments: false
~~~

---

#### Social Share Links

Social share links are enabled by default on all posts. To disable Facebook, Twitter, and Google+ share links on a post or page, add the following to its front matter:

~~~ yaml
share: false
~~~

---

#### Owner/Author Information

Change your name, and avatar photo (200x200 pixels or larger), email, and social networking URLs. If you want to link to an external image on Gravatar or something similar you'll need to edit the path in `head.html` since it assumes it is located in `/images`.

---

#### Google Analytics and Webmaster Tools

Your Google Analytics ID goes here along with meta tags for [Google Webmaster Tools](http://support.google.com/webmasters/bin/answer.py?hl=en&answer=35179) and [Bing Webmaster Tools](https://ssl.bing.com/webmaster/configure/verify/ownershi) site verification.

---

#### Navigation Links

To add additional links to the menu edit `_config.yml`. Use the following format to set the URL and title for as many links as you'd like.

~~~ yaml
- title: Portfolio
	url: /portfolio/

- title: Kiriaze
	url: http://kiriaze.com
~~~

---

#### Jekyll _includes

For the most part you can leave these as is since the author/owner details are pulled from `_config.yml`. That said you'll probably want to customize the copyright stuff in `footer.html` to your liking.

---

#### Reading Time

On by default. To turn off remove `reading_time` from `_config.yml. Default words per minute is set at 200 and can changed by updating `words_per_minute` in `_config.yml`.

---

#### Feature Images

A good rule of thumb is to keep feature images nice and wide so you don't push the body text too far down. An image cropped around around 1024 x 256 pixels will keep file size down with an acceptable resolution for most devices. If you want to serve these images responsively I'd suggest looking at the [Jekyll Picture Tag](https://github.com/scottjehl/picturefill)[^2] plugin.

To add a feature image to a post or page just include the path to the file in the front matter like so.

~~~ yaml
image: PATH/TO/IMAGE.jpg
~~~

---

#### Post/Page Thumbnails for OG and Twitter Cards

Post and page thumbnails work the same way. These are used by [Open Graph](https://developers.facebook.com/docs/opengraph/) and [Twitter Cards](https://dev.twitter.com/docs/cards) meta tags found in `head.html`. If you don't assign a thumbnail the image you assigned to `site.owner.avatar` in `_config.yml` will be used.

---

#### Videos

Video embeds are responsive and scale with the width of the main content block with the help of [FitVids](http://fitvidsjs.com/).

~~~ html
<iframe width="560" height="315" src="http://www.youtube.com/embed/0oMEuyhBkRo" frameborder="0"></iframe>
~~~

---

#### Twitter Cards

Twitter cards make it possible to attach images and post summaries to Tweets that link to your content. Summary Card meta tags have been added to `head.html` to support this, you just need to [validate and apply your domain](https://dev.twitter.com/docs/cards) to turn it on.

---

#### Link Post Type

Link blog like a champ by adding `link: http://url-you-want-linked` to a post's YAML front matter. Arrow glyph links to the post's permalink and the the `post-title` links to the source URL. Here's an [example of a link post]({{ site.url }}/blog/sample-link-post/) if you need a visual.

---

## Setup for an Existing Jekyll site

1. Copy the following folders: `_includes`, `_layouts`, `_my-collection`, `_plugins`, `categories`, `tags`, and `assets`.
2. Clone the following folders/files and personalize content as need: `_data`, `pages/`, `blog/`, `posts/`, `feed.xml`. `index.html`, and `search.json`.
3. Set the following variables in your `_config.yml` file:

~~~ yaml
title:            Site Title
description:      Describe your website here.
disqus_shortname: shortname
# Uncomment if you are planning to run the blog in a subdirectory
# Note - if you enable this, and attempt to view your site locally you have to use the baseurl in your local path.
# Example, you must use http://localhost:3000/path/to/blog
# baseurl: /path/to/blog
# baseurl: /juice # for github pages, uncomment this line, and recomment for local dev env

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

~~~

---

## Questions?

Having a problem getting something to work or want to know why I setup something in a certain way? Ping me on Twitter [@kiriaze](http://twitter.com/kiriaze) or [file a GitHub Issue](https://github.com/kiriaze/juice/issues/new). And if you make something cool with this theme feel free to let me know.

---

## License

This theme is free and open source software, distributed under the [GPL v2 License](http://opensource.org/licenses/GPL-2.0) version 2 or later. So feel free to to modify this theme to suit your needs.

---


[^2]: If you're using GitHub Pages to host your site be aware that plugins are disabled. So you'll need to build your site locally and then manually deploy if you want to use this sweet plugin.
