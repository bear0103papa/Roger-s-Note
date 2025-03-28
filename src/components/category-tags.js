import React from "react"
import { Link } from "gatsby"

const CategoryTags = ({ categories }) => {
  if (!categories || categories.length === 0) return null
  
  return (
    <div className="categories">
      分類：
      {categories.map((category, index) => (
        <React.Fragment key={category}>
          <Link 
            to={`/categories#${encodeURIComponent(category)}`} 
            className="category-link"
          >
            {category}
          </Link>
          {index < categories.length - 1 && " "}
        </React.Fragment>
      ))}
    </div>
  )
}

export default CategoryTags 