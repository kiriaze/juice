---
layout: default
title: Type
heading: Typography.
subheading: Basic typography styles.
permalink: /type/
image: http://unsplash.it/800/400
---

{% include header.html %}

<section class="stripe">
	<div class="container">
		{% include typography.html %}
	</div>
</section>

<section class="stripe">
	<div class="container">
		<div class="row">
			{% include forms.html %}
		</div>
	</div>
</section>

<section class="stripe">
	<div class="container">
		<div class="row">
			{% include alerts.html %}
		</div>
	</div>
</section>

<section class="stripe">
	<div class="container">
		<div class="row">
			{% include callouts.html %}
		</div>
	</div>
</section>

<section class="stripe">
	<div class="container">
		<div class="row">
			{% include notes.html %}
		</div>
	</div>
</section>

<section class="dark">
	<div class="container">
		<div class="row">
			{% include buttons.html %}
		</div>
	</div>
</section>

<section class="stripe">
	<div class="container">
		<div class="row">
			{% include tabs-toggles.html %}
		</div>
	</div>
</section>

<section class="dark">
	<div class="container">
		<form class="form-login" action="login" method="post">
			<div class="content">
				<h4>Log In</h4>
				<p>Lorem ipsum dolor sit amet.</p>
				<div class="simpleforms">
					<label for="username">Username</label>
					<input id="username" type="text" name="username" class="required" type="text" title="Username" required placeholder="Username">
				</div>
				<div class="simpleforms">
					<label for="password">Password</label>
					<input id="password" type="password" name="password" class="password required" required placeholder="Password">
				</div>
			</div>
			<div class="options">
				<div class="simpleforms">
					<input type="submit" value="Login" name="submit" class="btn solid">
					<a class="btn solid invert" href="javascript:;">Lost your password?</a>
				</div>
	        </div>
	    </form>
	</div>
</section>
