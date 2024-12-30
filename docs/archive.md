---
layout: page
title: 文章列表
---

<div class="space-y-8">
    {% for post in site.posts %}
    <article class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 class="text-xl font-bold mb-2">
            <a href="{{ post.url | relative_url }}" class="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300">{{ post.title }}</a>
        </h2>
        <div class="text-gray-600 dark:text-gray-400">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
        </div>
    </article>
    {% endfor %}
</div>