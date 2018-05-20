---
layout: journal
title: Journal
category: content
permalink: /blog/
excerpt: "My fortnightly journal is where I write about things that interest me, lately it’s been running and mental health. The next entry comes out "
---
<!-- <h2 class="h4">Recent entries</h2> -->

{% for post in site.posts limit:20 %}
{% unless post.category == "case-study" %}

<article class="post-preview">
<!--<h3 class="h3 post-heading post-type--{{ post.category }}">
	<a class="post-link" href="{{ post.url | prepend: site.baseurl }}"><span style="{% if post.text %} color: black; {% else %} color: white; {% endif %} {% if post.color %} background-color: {{ post.color }};{% endif %}" >{{ post.title | markdownify | strip_html | trim  }}</span></a>
</h3>-->
<h3 class="h3 post-heading post-heading--listing post-type--{{ post.category }}">
	<a class="post-link" href="{{ post.url | prepend: site.baseurl }}" style="{% if post.color %} background-image: linear-gradient(to bottom, {{ post.color }} 100%, {{ post.color }} 100%){% endif %}">
	    {{ post.title | markdownify | strip_html | trim  }}
	</a>
</h3>

{% if post.excerpt %}
      <div>
      <p><span class="post-ordinal" style="{% if post.color %} color: {{ post.color }};{% else %} color: #00B86B; {% endif %}">&#8470;{{ site.posts | size | minus:forloop.index | plus:1 }}</span>{% include date.html type="listing" %}{% include reading-time.html type="post" %}</p>
      {{ post.excerpt | markdownify }}</div>
{% endif %}
</article>

{% endunless %}
{% endfor %}

<h3 class="h4 subheading" id="more-posts">Haven&rsquo;t had enough yet?</h3>

<p>
	You&rsquo;ll find all {{ site.posts | size }} entries, across {{ site.tags | size}} topics in <a href="/archive">the archive</a>.
</p>
