import React from 'react'
import styles from "./BlogItem.module.css";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({slug, title, description, author, date, coverimg, authorimg, category}) => {
    const datestr = new Date(date).toLocaleDateString("en-GB", {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const isValidImageUrl = (url) => {
    return url && typeof url === 'string' && url.trim() !== '' && 
           (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/'));
  };
  
  return (
    <div className={styles.blogSlideWrap}>
    <div className={styles.blogSlideMain}>
        <div className={styles.blogSlideContent}>
            <div className={styles.blogContentSection}>
                <div className={styles.blogContent}>
                    <h2 className={styles.blogSlideTitle}>{title}</h2>
                    <div className={styles.blogContentCategory}><div>{category}</div></div>
                    <p className={styles.blogSlideDescription}>{description}</p>
                     <div className={styles.blogAuthorNameImage}>
                     {isValidImageUrl(authorimg)? (
                              <Image src={authorimg} width={50} height={50} alt="Image of the Author" className={styles.blogAuthorImg}/>
                            ):(
                              <div 
                                style={{
                                  width: '50px',
                                  height: '50px',
                                  borderRadius: '50%',
                                  backgroundColor: '#e0e0e0',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '18px',
                                  fontWeight: 'bold',
                                  color: '#666'
                                }}
                              >
                                {author ? author.charAt(0).toUpperCase() : 'A'}
                              </div>
                            )
                            }
                    <div className={styles.blogDateName}>
                        <p className={styles.blogAuthorName}>{author}</p>
                        <p className={styles.blogAuthorDate}>{datestr}</p> 
                    </div>
                 </div>
                 <div className={styles.blogReadMoreDiv}>
                    <Link href={`/blog/${slug}`}><button className={styles.blogReadMore}>Read More</button></Link>
                 </div>
                </div>
            </div>
                      
                      {/* Image section */}
            <div className={styles.blogImageSection}>
                <Image src = {coverimg} height = {200} width = {300} className={styles.blogSlideImage} alt="Blog Cover Image"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BlogItem
