---
layout: default
title: Home
published: true
heading: Juice.
subheading: A gulp, jekyll, bower &amp; sass powered <br> front-end static site framework.
---

{% include header.html %}

<section class="juice-bg text-align-center">

	<div class="container">

		<div class="row island">
			<h2>A better front-end framework.</h2>
			<h5>Trim the bloat - not the functionality.</h5>
		</div>

		<div class="row">

			<div class="columns-3">
				<span class="circle"></span>
				<!-- ??? -->
				<h3>Simple</h3>
				<p>
					Built to get you up and running in no time. No extra <em>styles</em>, no huge pattern library, no rediculous naming conventions. Just a clean, intuitive and semanticly structured system.
				</p>
			</div>
			<div class="columns-3">
				<span class="circle"></span>
				<!-- gears -->
				<h3>Configurable</h3>
				<p>
					Choose from predefined class structures to get building quickly or custom classes to build semantically. Set your breakpoints, font sizes, animations and more!
				</p>
			</div>
			<div class="columns-3">
				<span class="circle"></span>
				<!-- ??? -->
				<h3>Scalable</h3>
				<p>
					Build awesome web experiences that can scale to any size due to its clean and intuitive structure. Single page apps? Huge ecommerce sites? No prob.
				</p>
			</div>

		</div>

	</div>

</section>

<section class="stripe text-align-center">

	<div class="container">

		<div class="row island">

			<h2>Features</h2>

			<h5>Juice is the best place to start your next web project. Amazing features without the unessecary bloat other frameworks have. <br>Simple, clean, and fast.</h5>

		</div>

		<div class="row">

			<div class="columns-4">
				<span class="circle"></span>
				<!-- ??? -->
				<h3>Performance</h3>
				<p>Minify/concatenate and even gzip all your HTML, JavaScript, CSS and Images on the fly keeping your pages lean.</p>
			</div>
			<div class="columns-4">
				<span class="circle"></span>
				<!-- devices -->
				<h3>Multi-device RWD</h3>
				<p>A responsive framework optimized for the multi-screen web, with a high PageSpeed performance score.</p>
			</div>
			<div class="columns-4">
				<span class="circle"></span>
				<!-- pagespeed logo -->
				<h3>PageSpeed Insights</h3>
				<p>Web performance metrics showing how well your site performs on mobile and desktop all from your terminal.</p>
			</div>
			<div class="columns-4">
				<span class="circle"></span>
				<!-- feather -->
				<h3>Lightweight</h3>
				<p>A small footprint and blazing speed so you dont waste time and can focus on making rad stuff.</p>
			</div>

		</div>

		<div class="row">

			<div class="columns-4">
				<span class="circle"></span>
				<!-- servers -->
				<h3>Built in HTTP Server</h3>
				<p>A built in server for previewing your site means you can test your pages without messing with other tools.</p>
			</div>
			<div class="columns-4">
				<span class="circle"></span>
				<!-- logos -->
				<h3>Bower + Sass + Gulp</h3>
				<p>The simplest asset package manager, the best css preprocessor, and the fastest streaming build system.</p>
			</div>
			<div class="columns-4">
				<span class="circle"></span>
				<!-- ??? -->
				<h3>Cross-device Sync</h3>
				<p>Sync clicks, scrolls, forms and live-reload across multiple devices as you work. Powered by BrowserSync.</p>
			</div>
			<div class="columns-4">
				<span class="circle"></span>
				<!-- logo -->
				<h3>Live Reloading</h3>
				<p>Reload the browser in real-time anytime an edit is made without the need for an extension.</p>
			</div>

		</div>

	</div>

</section>

<section class="stripe">

	<div class="container">

		<div class="row text-align-center island">

			<h2>Get Started</h2>
			<h5>It's easy to get started. Just follow the steps below:</h5>

		</div>

		<br>

		<div class="row">

			<div class="columns-2">

				<h3>1. Download</h3>

				<p><a href="https://github.com/kiriaze/juice/archive/master.zip" data-download-button="get started download">Download Juice</a> or clone from Github.</p>

			</div>

			<div class="columns-2">

				{% highlight bash %}
				$ git clone git@github.com:kiriaze/juice.git
				{% endhighlight %}

			</div>

		</div>

		<hr>

		<div class="row">

			<div class="columns-2">

				<h3>2. Install Dependencies</h3>

				<p>
					Run Bower &amp; Node Package Manager to install all project dependencies.
				</p>

			</div>

			<div class="columns-2">
				{% highlight bash %}
				$ bower install
				$ npm install --global gulp && npm install
				{% endhighlight %}
			</div>

		</div>

		<hr>

		<div class="row">

			<div class="columns-2">

				<h3>3. Configure Site Settings</h3>

				<p markdown="1">Enter the desired values in the `./assets/scss/_settings.scss`, `./_config.yml`, and `./config.js` files. <br> <em>These are just a few of those settings.</em></p>

			</div>

			<div class="columns-2">
<pre class="highlight">
<code>
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
</code>
</pre>
			</div>

		</div>

		<hr>

		<div class="row">

			<div class="columns-2">

				<h3>4. Build</h3>

				<p>Run gulp. Your site will be preprocessed, conacatenating your bower dependcies with you main css/js files, assets will be optimized, jekyll will build out your pages, a sitemap will be generated, the size of your project will be outputted in the console, a server will initiate, and your browser will open up your site and will automatically watch and reload for changes.</p>

			</div>

			<div class="columns-2">
				{% highlight bash %}
				$ gulp
				{% endhighlight %}
			</div>

		</div>

	</div>

</section>

<section class="stripe text-align-center">

	<div class="container">

		<div class="row island">

			<h2>Simple Structure</h2>

			<h5>This is the project structure. It utilizes jekyll's underscore convention for logical groupings like custom post types(collections), layouts, data, includes, posts, etc. as well as a pages directory for much cleaner projects - optimized so you can get to building quickly.</h5>

		</div>

		<div class="row">
			<div class="columns-2">

<div markdown="1" class="text-align-left">

~~~ bash
|-- dist (ignored)
|-- gulp
	|-- tasks
		|-- *
	|-- index.js
|-- node_modules (ignored)
|-- src
	|-- _data
		|-- _navigation.yml
	|-- _includes
	|-- _layouts
	|-- _my-collection
	|-- _plugins
	|-- _posts
	|-- assets
	|-- blog
	|-- categories
	|-- pages
	|-- tags
	|-- favicon.ico
	|-- feed.xml
	|-- index.md
	|-- search.json
|-- .editorconfig
|-- .gitignore
|-- _config.yml
|-- bower.json
|-- CNAME
|-- config.js
|-- gulpfile.js
|-- LICENSE.md
|-- package.json
|-- README.md
~~~

</div>

			</div>
			<div class="columns-2 text-align-left">
				<p>
					Default posts can be placed within _posts, while posts with categories have their own directories - e.g. food. There's also categories and tag archive pages, and the blog layout lies within the blog directory. Any ruby plugins you'd like to include should be placed within _plugins directory, and Juice currently includes a search gem which its settings are located at ./src/search.json.
				</p>
				<p>
					The assets directory holds all your projects fonts, images, js, scss, and vendor assets managed by bower. For scss vendors, e.g. s-animate, you must import them within the ./src/assets/scss/vendor/_vendor.scss file. The scss directory structure utilizes SOMA, and you can learn more about it in the README.md included. It's a preffered system thats intuitive, clean and simple. The js directory houses the main app.js and a plugins directory that should only house files that aren't registered with bower.
				</p>
			</div>

		</div>
	</div>

</section>
