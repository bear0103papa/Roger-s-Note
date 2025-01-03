---
layout: page
title: 文章分類
---

<div class="page-container">
  <!-- 分類過濾區塊 -->
  <div class="filter-section mb-6">
    <input type="text" 
           id="searchInput" 
           placeholder="搜尋文章..." 
           class="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100">
    
    <!-- 分類過濾按鈕 -->
    <div class="category-filters mt-4">
      <button class="filter-btn active" data-category="all">
        全部文章
        <span class="count">({{ site.posts.size }})</span>
      </button>
      {% assign all_categories = "" | split: "" %}
      {% for post in site.posts %}
        {% for category in post.categories %}
          {% assign category_str = category | strip %}
          {% assign all_categories = all_categories | push: category_str %}
        {% endfor %}
      {% endfor %}
      {% assign unique_categories = all_categories | uniq %}
      
      {% for category in unique_categories %}
        {% assign category_posts = site.posts | where_exp: "post", "post.categories contains category" %}
        <button class="filter-btn" data-category="{{ category | url_encode }}">
          {{ category }}
          <span class="count">({{ category_posts.size }})</span>
        </button>
      {% endfor %}
    </div>
  </div>

  <!-- 文章列表區塊 -->
  <div id="posts-container" class="mt-8">
    {% for category in unique_categories %}
      {% assign category_posts = site.posts | where_exp: "post", "post.categories contains category" %}
      <div class="category-section mb-8" data-category="{{ category | url_encode }}">
        <h2 class="category-title" id="{{ category | url_encode }}">{{ category }}</h2>
        <div class="posts-list">
          {% for post in category_posts %}
            <div class="post-item" 
                 data-title="{{ post.title }}" 
                 data-category="{{ category | url_encode }}"
                 data-date="{{ post.date | date: '%Y-%m-%d' }}">
              <a href="{{ post.url | relative_url }}" class="post-title">{{ post.title }}</a>
              <div class="post-meta">
                <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
              </div>
            </div>
          {% endfor %}
        </div>
      </div>
    {% endfor %}
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const postItems = document.querySelectorAll('.post-item');
    let activeCategory = 'all';

    // 搜尋功能
    searchInput.addEventListener('keyup', () => {
        const searchText = searchInput.value.toLowerCase();
        filterPosts(searchText, activeCategory);
    });

    // 分類過濾
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            activeCategory = button.dataset.category;
            filterPosts(searchInput.value.toLowerCase(), activeCategory);
        });
    });

    function filterPosts(searchText, category) {
        postItems.forEach(item => {
            const title = item.dataset.title.toLowerCase();
            const itemCategory = item.dataset.category;
            const date = item.dataset.date;
            
            const matchesSearch = title.includes(searchText) || 
                                itemCategory.toLowerCase().includes(searchText) || 
                                date.includes(searchText);
            
            const matchesCategory = category === 'all' || category === itemCategory;
            
            item.style.display = matchesSearch && matchesCategory ? '' : 'none';
        });

        document.querySelectorAll('.category-section').forEach(section => {
            const hasVisiblePosts = Array.from(section.querySelectorAll('.post-item'))
                .some(item => item.style.display !== 'none');
            section.style.display = hasVisiblePosts ? '' : 'none';
        });
    }
});
</script>