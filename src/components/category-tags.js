import React from "react"
import { Link } from "gatsby"

const CategoryTags = ({ categories }) => {
  if (!categories || categories.length === 0) return null
  
  return (
    <div className="categories">
      <span className="categories-label">分類：</span>
      {categories.map(category => (
        <Link 
          key={category}
          to={`/categories#${encodeURIComponent(category)}`} 
          className="category-link"
        >
          {category}
        </Link>
      ))}
    </div>
  )
}

export default CategoryTags 