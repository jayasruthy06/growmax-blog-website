import React from 'react';
import Image from 'next/image';
import styles from "./BlogItemDash.module.css";

const BlogItemDash = ({ slug, title, description, authorname, date, coverimg, authorimg, category, onEdit, onDelete }) => {
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
    <div className={styles.blogItemDashContainer}>
      <div className={styles.blogItemDashImage}>
        {isValidImageUrl(authorimg)? (
          <Image src={authorimg} width={50} height={50} alt="Picture of the Author" />
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
            {authorname ? authorname.charAt(0).toUpperCase() : 'A'}
          </div>
        )
        }
      </div>
      <div className={styles.blogItemDashText}>
        <p className={styles.blogItemDashTitle}>{title}</p>
        <p className={styles.blogItemDashDate}>{datestr}</p>
      </div>
      <div className={styles.blogItemDashManage}>
        <button className={styles.blogItemEdit} onClick={onEdit}>EDIT</button>
        <button className={styles.blogItemDelete} onClick={onDelete}>DELETE</button>
      </div>
    </div>
  );
};

export default BlogItemDash;
