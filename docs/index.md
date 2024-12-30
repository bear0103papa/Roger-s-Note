---
layout: home
title: 首頁
---

<div class="space-y-12">
    {% for post in site.posts limit:5 %}
    <article class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 class="text-2xl font-bold mb-2">
            <a href="{{ post.url | relative_url }}" class="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300">{{ post.title }}</a>
        </h2>
        <div class="text-gray-600 dark:text-gray-400 mb-4">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
        </div>
        <div class="prose dark:prose-invert max-w-none mb-4">
            {{ post.excerpt }}
        </div>
        <a href="{{ post.url | relative_url }}" class="text-blue-600 dark:text-blue-400 hover:underline">繼續閱讀...</a>
    </article>
    {% endfor %}
</div>