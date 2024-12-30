---
layout: page
title: 文章列表
---

<div class="mb-6">
    <input type="text" 
           id="searchInput" 
           placeholder="搜尋文章..." 
           class="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
</div>

<div class="overflow-x-auto">
    <table class="w-full text-left">
        <thead class="bg-gray-100 dark:bg-gray-700">
            <tr>
                <th class="p-3">日期</th>
                <th class="p-3">標題</th>
                <th class="p-3">分類</th>
            </tr>
        </thead>
        <tbody id="postsTable">
            {% for post in site.posts %}
            <tr class="post-row border-b dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800">
                <td class="p-3 text-gray-600 dark:text-gray-400">
                    {{ post.date | date: "%Y-%m-%d" }}
                </td>
                <td class="p-3">
                    <a href="{{ post.url | relative_url }}" 
                       class="text-blue-600 dark:text-blue-400 hover:underline">
                        {{ post.title }}
                    </a>
                </td>
                <td class="p-3">
                    {% if post.categories %}
                        <div class="flex flex-wrap gap-1">
                        {% for category in post.categories %}
                            <span class="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-600 rounded">
                                {{ category }}
                            </span>
                        {% endfor %}
                        </div>
                    {% endif %}
                </td>
            </tr>
            {% endfor %}
        </tbody>
    </table>
</div>

<script>
document.getElementById('searchInput').addEventListener('keyup', function() {
    const searchText = this.value.toLowerCase();
    const rows = document.getElementsByClassName('post-row');
    
    Array.from(rows).forEach(row => {
        const title = row.querySelector('a').textContent.toLowerCase();
        const date = row.querySelector('td').textContent.toLowerCase();
        const categories = Array.from(row.querySelectorAll('span'))
            .map(span => span.textContent.toLowerCase())
            .join(' ');
        
        const content = `${title} ${date} ${categories}`;
        
        if (content.includes(searchText)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
</script>