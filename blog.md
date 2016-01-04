---
layout: journal
title: Journal
permalink: /journal/
excerpt: "I've kept an online journal for the past seven, going on eight years, writing about things that excite, annoy and fascinate me."
---
<!-- <h2 class="h4">Recent entries</h2> -->

{% for post in site.posts limit:13 %}
{% unless post.category == "case-study" %}
<article class="post-preview">
{% include date.html type="listing" %}{% include reading-time.html type="post" %}
<h3 class="h3 post-heading post-type--{{ post.category }}"><a class="post-link" href="{{ post.url | prepend: site.baseurl }}"><span {% if post.color %} style="color: white; background-color: {{ post.color }};"{% endif %} >{{ post.title | markdownify | strip_html | trim  }}</span></a></h3>
<p>{{ post.excerpt | markdownify | strip_html | trim }}</p>
</article>
{% endunless %}
{% endfor %}

<h3 class="h4 subheading" id="more-posts">Haven&rsquo;t had enough yet?</h3>

<p>
	You&rsquo;ll find all {{ site.posts | size }} entries in <a href="/archive">the archive</a>.
</p>