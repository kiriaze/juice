---
layout: default
title: grid
permalink: /grid/
---

<section class="hero">
	<div class="container">
		<h1>The Grid.</h1>
		<h5>A human friendly, semantic, hybrid grid framework <br>utilizing floats, extends and data attributes.</h5>
		{% include header.html %}
	</div>
</section>

<section class="example-grid text-align-center juice-bg">
	<div class="container">

		<h2 class="text-align-left">Classic Floats yo.</h2>

		<div class="row">
			<div class="columns-12">12</div>
			<div class="columns-12">12</div>
			<div class="columns-12">12</div>
			<div class="columns-12">12</div>
			<div class="columns-12">12</div>
			<div class="columns-12">12</div>
			<div class="columns-12">12</div>
			<div class="columns-12">12</div>
			<div class="columns-12">12</div>
			<div class="columns-12">12</div>
			<div class="columns-12">12</div>
			<div class="columns-12">12</div>
		</div>

		<div class="row">
			<div class="columns-6">6</div>
			<div class="columns-6">6</div>
			<div class="columns-6">6</div>
			<div class="columns-6">6</div>
			<div class="columns-6">6</div>
			<div class="columns-6">6</div>
		</div>

		<div class="row">
			<div class="columns-4">4</div>
			<div class="columns-4">4</div>
			<div class="columns-4">4</div>
			<div class="columns-4">4</div>
		</div>

		<div class="row">
			<div class="columns-10">10</div>
			<div class="columns-30">30</div>
			<div class="columns-40">40</div>
			<div class="columns-20">20</div>
		</div>

		<div class="row">
			<div class="columns-2">2
	            <div class="row">
	                <div class="columns-2">2</div>
	                <div class="columns-2">2</div>
	            </div>
	        </div>
			<div class="columns-2">2
	            <div class="row">
	                <div class="columns-70">70</div>
	                <div class="columns-30">30</div>
	            </div>
	        </div>
		</div>

	</div>
</section>

<section class="example-grid stripe">
	<div class="container">
		<h2>Extendable, of course.</h2>
		<div class="row">
			<article class="columns-70">
				<h2>Article</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem architecto ipsam dolores ea quas ut dolorem libero reprehenderit est quibusdam ex aperiam, distinctio natus impedit mollitia veniam repellendus commodi atque!
				</p>
			</article>
			<aside class="columns-30">
				<h2>Sidebar</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, repudiandae aliquid fuga aperiam, vel veniam quae ipsa expedita magnam odio deserunt alias! Dolores aliquam eum quidem culpa quos, explicabo fugiat.</p>
			</aside>
		</div>
	</div>
</section>

<section class="example-grid stripe">
	<div class="container">
		<h2>Vertical Split. .valign & .no-gutter inline-block.</h2>
		<div class="row valign no-gutter">
			<div class="columns-2">
				<h2>Article</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem architecto ipsam dolores ea quas ut dolorem libero reprehenderit est quibusdam ex aperiam, distinctio natus impedit mollitia veniam repellendus commodi atque!
				</p>
			</div>
			<div class="columns-2">
				<img src="http://placehold.it/600x450" alt="">
			</div>
		</div>
	</div>
</section>

<section class="example-grid stripe">
	<div class="container">
		<h2>[Data Attributes FTW]</h2>
		<div data-layout="grid">
			<div data-columns=".3">
				<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem architecto ipsam dolores ea quas ut dolorem libero reprehenderit est quibusdam ex aperiam, distinctio natus impedit mollitia veniam repellendus commodi atque!
				</p>
			</div>
			<div data-columns=".4">
				<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem architecto ipsam dolores ea quas ut dolorem libero reprehenderit est quibusdam ex aperiam, distinctio natus impedit mollitia veniam repellendus commodi atque!
				</p>
			</div>
			<div data-columns=".3">
				<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem architecto ipsam dolores ea quas ut dolorem libero reprehenderit est quibusdam ex aperiam, distinctio natus impedit mollitia veniam repellendus commodi atque!
				</p>
			</div>
		</div>
	</div>
</section>

<section class="example-grid stripe">

	<div class="container">
		<h3>Full Width mannn.</h3>
	</div>

	<ul class="row">
		<li class="columns-70">
			<h2>Columns 7</h2>
		</li>
		<li class="columns-30">
			<h2>Columns 3</h2>
		</li>
	</ul>

	<ul class="row">
		<li class="columns-3">
			<h2>Columns 3</h2>
		</li>
		<li class="columns-3">
			<h2>Columns 3</h2>
		</li>
		<li class="columns-3">
			<h2>Columns 3</h2>
		</li>
	</ul>

</section>

<section class="example-grid stripe">

	<div class="container">
		<h3>Full Width. No Gutter. Crazy.</h3>
	</div>

	<ul class="row no-gutter">
		<li class="columns-2">
			<h2>Columns 2</h2>
		</li>
		<li class="columns-2">
			<h2>Columns 2</h2>
		</li>
	</ul>

	<ul class="row no-gutter">
		<li class="columns-3">
			<h2>Columns 3</h2>
		</li>
		<li class="columns-3">
			<h2>Columns 3</h2>
		</li>
		<li class="columns-3">
			<h2>Columns 3</h2>
		</li>
	</ul>
</section>
