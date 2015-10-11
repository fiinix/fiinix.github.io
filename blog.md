---
layout: journal
title: Journal
permalink: /journal/
excerpt: "Behold the mysterious musing of a moderately memorable man. Designer by day, asleep by night (I'm old and need my 8 hours)."
---
<h2 class="h3">Recent entries</h2>

{% for post in site.posts limit:10 %}
<article class="post-preview">
{% include date.html type="listing" %}{% include reading-time.html type="post" %}
<h3 class="h2 post-heading no-margin post-type--{{ post.category }}"><a class="post-link" href="{{ post.url | prepend: site.baseurl }}"><span {% if post.color %} style="color: white; background-color: {{ post.color }};"{% endif %} >{{ post.title | markdownify | strip_html | trim  }}</span></a></h3>
<p>{{ post.excerpt | markdownify | strip_html | trim }}</p>
</article>
{% endfor %}