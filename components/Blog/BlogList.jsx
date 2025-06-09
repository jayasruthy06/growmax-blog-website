import React from 'react'
import styles from "./BlogList.module.css"
import BlogDisplay from './BlogDisplay';

const BlogList = () => {
  return (
    <div>
        <h3 className={styles.blogCategoryHeading}>View All Blogs</h3>
        <BlogDisplay
          filtered = "NULL"
          />
    </div>
  )
}

export default BlogList