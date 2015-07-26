---
layout: page
title: My Collection
permalink: /my-collection/
heading: My Collection.
subheading: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aperiam, voluptate officia illo odio eius obcaecati fugiat ad, dolore doloremque nisi ratione enim, libero sint quod, quas nemo tenetur rerum.
---

{% for collection in site.my-collection limit:3 %}
<article>
	<h2>
		<a href="{{ collection.url | prepend: site.baseurl }}">{{ collection.title }}</a>
	</h2>
	<div class="post-meta">
		<span class="author">{{ collection.author }}</span>
		<span class="date">{{ collection.date | date: "%b %d, %Y" }}</span>
		<span class="categories">
			{% for category in collection.categories %}
				<a href="{{ site.url | prepend: site.baseurl }}/categories/#{{ category }}" title="Pages categorized in {{ category }}" class="category"><span class="term">{{ category }}</span></a>{% unless forloop.last %},{% endunless %}{% if forloop.last %}.{% endif %}
			{% endfor %}
		</span>
	</div>
	<p>
		{{ collection.excerpt }}
	</p>
	<a href="{{ collection.url | prepend: site.baseurl }}" class="">Read more</a>
</article>
{% endfor %}

{% include pagination.html %}
