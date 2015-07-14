---
layout: page
title: My Collection
permalink: /my-collection/
desc: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aperiam, voluptate officia illo odio eius obcaecati fugiat ad, dolore doloremque nisi ratione enim, libero sint quod, quas nemo tenetur rerum.
---

{% for collection in site.my-collection limit:3 %}
<article>
	<h2>
		<a href="{{ collection.url | prepend: site.baseurl }}">{{ collection.title }}</a>
	</h2>
	<span class="date">{{ collection.date | date: "%b %d, %Y" }}</span>
	<span class="author">{{ collection.author }}</span>
	{{ collection.excerpt }}
	<a href="{{ collection.url | prepend: site.baseurl }}" class="">Read more</a>
</article>
{% endfor %}

{% include pagination.html %}
