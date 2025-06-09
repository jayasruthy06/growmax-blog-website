import React from 'react'
import styles from "./BlogList.module.css";
import Link from "next/link";

const BlogNav = () => {
  return (
    <div>
        <h3 className={styles.blogCategoryHeading}>Explore Blogs From Popular Categories</h3>
        <div className={styles.blogCategoriesList}>
          <Link href="/category/ai-insights"><button className={styles.categoryButton}>AI & Insights</button></Link>
          <Link href="/category/marketing"><button className={styles.categoryButton}>Marketing</button></Link>
          <Link href="/category/sales"><button className={styles.categoryButton}>Sales</button></Link>
          <Link href="/category/b2b-ecommerce"><button className={styles.categoryButton}>B2B E-Commerce</button></Link>
        </div>
    </div>
  )
}

export default BlogNav