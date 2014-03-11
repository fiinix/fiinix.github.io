---
layout: page
title: Welcome
tagline: Supporting tagline
---
{% include JB/setup %}

Welcome. Please take your shoes off, I don't want anymore dirt in here even though the place looks like a mess.

<section class="blog-latest-posts">
{% for post in site.posts limit:5%}
<article>
<h2><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h2>
<p><time datetime="{{ post.date }}">{% assign m = post.date | date: "%B" %}
{% case m %}
  {% when 'May' or June' or 'July' %}{{ %-d m }}
  {% when 'September' %}Sept.
  {% else %}{{ post.date | date: "%-d %b" }}.
  {% endcase %}</time> {{ post.excerpt }}
<a href="{{ BASE_PATH }}{{ post.url }}">[{{ post.content | number_of_words | divided_by:180 | append: ' min' }}]</a>
</p>
</article>
  {% endfor %}
</section>

###To-Do

Everything. But I should really write down a list of priorities here. "Note to self: Write list"


