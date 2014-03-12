---
layout: page
title: Welcome
tagline: Supporting tagline
---
{% include JB/setup %}



<section>
<article>
<h1>Welcome</h1>
<p>Yeah, I know. It’s looks like giant mess here, but what can you expect? I’m still building, cleaning and trying things out so everything is bound to be in a state of flux for a couple of months or so.</p>
<p>Meanwhile, that shouldn’t stop you from exploring. Here’s some of the latest ramblings from my blog. Enjoy and don’t be scared if something appears broken… it probably is.</p>
</article>
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

<aside>
<div class="introduction">
<h3>New here?</h3>

<p><small>Don’t worry. Just start from <a href="archive.html">the archive</a> and work your way <del>up</del> <del>down</del> <ins>forward</ins>.</small></p>

<p><small>Sooner or later you’ll end up here again and then you know you’re done.</small></p>
</div>

<div class="frequent-topics">
<h3>Frequent topics</h3>

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
<!-- site_tags: {{ site_tags }} -->
{% capture num_words %}
  {{ site_tags | split:',' | size }}
{% endcapture %}
<!-- num_words: {{ num_words }} -->
{% assign tag_words = site_tags | split:',' | sort %}
<!-- tag_words: {{ tag_words }} -->

<ul class="display-inline">
  {% for item in (0..num_words) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}
    <li><a class="tag" href="#{{ this_word | cgi_escape }}">{{ this_word }} </a></li>
  {% endunless %}{% endfor %}
  </ul>
</div>
</aside>


