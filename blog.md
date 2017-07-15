---
layout: journal
title: Journal
category: content
permalink: /blog/
excerpt: "I've kept an online journal for the past eight, going on nine years, writing about things that excite, annoy and fascinate me."
---
<!-- <h2 class="h4">Recent entries</h2> -->

{% for post in site.posts limit:13 %}
{% unless post.category == "case-study" %}

<article class="post-preview">
{% include date.html type="listing" %}{% include reading-time.html type="post" %}
<h3 class="h3 post-heading post-type--{{ post.category }}">
	<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
		<span style="{% if post.text %} color: black; {% else %} color: white; {% endif %} {% if post.color %} background-color: {{ post.color }};{% endif %}" >{{ post.title | markdownify | strip_html | trim  }}</span>
	</a>
</h3>

{% if post.excerpt %}
      <div>{{ post.excerpt | markdownify }}</div>
{% endif %}
</article>

{% endunless %}
{% endfor %}

<h3 class="h4 subheading" id="more-posts">Haven&rsquo;t had enough yet?</h3>

<p>
	You&rsquo;ll find all {{ site.posts | size }} entries, across {{ site.tags | size}} topics in <a href="/archive">the archive</a>.
</p>
