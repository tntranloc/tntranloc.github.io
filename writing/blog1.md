---
layout: blog
title: "Blog Page 1"
permalink: /writing/blog1/
---

<h2>Welcome to Blog Page 1</h2>
<p>Here you can find all the posts related to Blog Page 1.</p>

<ul>
  {% for post in site.writing %}
    {% if post.category == "blog1" %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <p>{{ post.excerpt }}</p>
      </li>
    {% endif %}
  {% endfor %}
</ul>
