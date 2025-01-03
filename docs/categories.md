---
layout: page
title: 文章分類
---

{% for category in site.categories %}
  <h2 id="{{ category[0] }}">{{ category[0] }}</h2>
  <ul>
    {% for post in category[1] %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <small>{{ post.date | date: "%Y-%m-%d" }}</small>
      </li>
    {% endfor %}
  </ul>
{% endfor %}