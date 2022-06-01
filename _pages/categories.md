---
layout: page
title: Categories
---

{% for category in site.categories %}
<h3 id="{{ category[0] }}">{{ category[0] | replace: "-", " " }}</h3>
<ul>
  {% for post in category[1] %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
{% endfor %}
