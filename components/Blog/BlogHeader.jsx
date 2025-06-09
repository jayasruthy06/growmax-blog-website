import React from 'react'
import styles from "./BlogHero.module.css"


const BlogHeader = ({uppertext}) => {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.heroTextContainer}>
            <div className={styles.textUpper}>{uppertext}</div>
        </div>
    </div>
  )
}

export default BlogHeader