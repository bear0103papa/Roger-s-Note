---
layout: page
title: 文章分類
---

<div class="filter-section mb-6">
  <input type="text" 
         id="searchInput" 
         placeholder="搜尋文章..." 
         class="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
  
  <div class="category-filters mt-4">
    {% for category in site.categories %}
      <button class="filter-btn" data-category="{{ category[0] }}">
        {{ category[0] }}
        <span class="count">({{ category[1].size }})</span>
      </button>
    {% endfor %}
  </div>
</div>

<div id="posts-container">
  {% for category in site.categories %}
    <div class="category-section" data-category="{{ category[0] }}">
      <h2 id="{{ category[0] }}">{{ category[0] }}</h2>
      <ul>
        {% for post in category[1] %}
          <li class="post-item" 
              data-title="{{ post.title }}" 
              data-category="{{ category[0] }}"
              data-date="{{ post.date | date: '%Y-%m-%d' }}">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <small>{{ post.date | date: "%Y-%m-%d" }}</small>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const postItems = document.querySelectorAll('.post-item');
    let activeFilters = new Set();

    // 搜尋功能
    searchInput.addEventListener('keyup', () => {
        const searchText = searchInput.value.toLowerCase();
        filterPosts(searchText, activeFilters);
    });

    // 分類過濾
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            button.classList.toggle('active');
            
            if (activeFilters.has(category)) {
                activeFilters.delete(category);
            } else {
                activeFilters.add(category);
            }
            
            filterPosts(searchInput.value.toLowerCase(), activeFilters);
        });
    });

    function filterPosts(searchText, activeFilters) {
        postItems.forEach(item => {
            const title = item.dataset.title.toLowerCase();
            const category = item.dataset.category;
            const date = item.dataset.date;
            
            const matchesSearch = title.includes(searchText) || 
                                category.toLowerCase().includes(searchText) || 
                                date.includes(searchText);
            
            const matchesFilter = activeFilters.size === 0 || 
                                activeFilters.has(category);
            
            item.style.display = matchesSearch && matchesFilter ? '' : 'none';
        });
    }
});
</script>