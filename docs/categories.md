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
    <button class="filter-btn active" data-category="all">
      全部文章
      <span class="count">({{ site.posts.size }})</span>
    </button>
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
      <h2 class="category-title">{{ category[0] }}</h2>
      <div class="posts-list">
        {% for post in category[1] %}
          <div class="post-item" 
               data-title="{{ post.title }}" 
               data-category="{{ category[0] }}"
               data-date="{{ post.date | date: '%Y-%m-%d' }}">
            <a href="{{ post.url | relative_url }}" class="post-title">{{ post.title }}</a>
            <div class="post-meta">
              <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
              <span class="post-category">{{ category[0] }}</span>
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
  {% endfor %}
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
            // 移除所有按鈕的 active 狀態
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 添加當前按鈕的 active 狀態
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

        // 控制分類標題的顯示
        document.querySelectorAll('.category-section').forEach(section => {
            const hasVisiblePosts = Array.from(section.querySelectorAll('.post-item'))
                .some(item => item.style.display !== 'none');
            section.style.display = hasVisiblePosts ? '' : 'none';
        });
    }
});
</script>