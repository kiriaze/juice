---
layout: post
title: "A Post with Images"
description: "Examples and code for displaying images in posts."
tags: [sample post, images, test]
---

Here are some examples of what a post with images might look like. If you want to display two or three images next to each other responsively use the grid classes `columns-` within the appropriate `row`.

## Figures (for images or video)

### One Up

<figure>
	<a href="http://unsplash.it/1200/450"><img src="http://unsplash.it/1200/450" alt=""></a>
	<figcaption><a href="http://unsplash.it/1200/450" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit.">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>.</figcaption>
</figure>

### Two Up

Apply the `columns-2` class like so to display two images side by side.

~~~ html
<div class="row">
	<div class="columns-2">
		<img src="http://unsplash.it/600/300" alt="">
	</div>
	<div class="columns-2">
		<img src="http://unsplash.it/600/300" alt="">
	</div>
</div>
~~~~

And you'll get something that looks like this:

<div class="row">
	<div class="columns-2">
		<img src="http://unsplash.it/600/300" alt="">
	</div>
	<div class="columns-2">
		<img src="http://unsplash.it/600/300" alt="">
	</div>
</div>

### Three Up

Apply the `columns-3` class like so to display three images side by side.

~~~ html
<div class="row">
	<div class="columns-3">
		<img src="http://unsplash.it/600/300" alt="">
	</div>
	<div class="columns-3">
		<img src="http://unsplash.it/600/300" alt="">
	</div>
	<div class="columns-3">
		<img src="http://unsplash.it/600/300" alt="">
	</div>
</div>
~~~

And you'll get something that looks like this:

<div class="row">
	<div class="columns-3">
		<img src="http://unsplash.it/600/300" alt="">
	</div>
	<div class="columns-3">
		<img src="http://unsplash.it/600/300" alt="">
	</div>
	<div class="columns-3">
		<img src="http://unsplash.it/600/300" alt="">
	</div>
</div>
