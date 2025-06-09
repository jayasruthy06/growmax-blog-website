"use client";

import React, { useState, useEffect } from 'react';
import styles from "./BlogList.module.css";
import BlogItem from "../../components/Blog/BlogItem.jsx";

const BlogDisplay = ({ filtered }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentpg, setCurrentPg] = useState(1); 

  const itemsperpage = 4;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();

      if (data.success) {
        setBlogs(data.blogs);
      } else {
        setError('Failed to fetch blogs');
      }
    } catch (err) {
      setError('Error fetching blogs: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div style={{ padding: '20px' , fontSize: "20px", display:"flex", alignItems:"center", justifyContent:"center"}}>Loading...</div>;
  if (error) return <div style={{ padding: '20px' , fontSize: "20px", display:"flex", alignItems:"center", justifyContent:"center" }}>Error: {error}</div>;

  const filteredItems = filtered !== "NULL"
    ? blogs.filter(item => item.category === filtered)
    : blogs;

  const totalPages = Math.ceil(filteredItems.length / itemsperpage);
  const startIdx = (currentpg - 1) * itemsperpage;
  const currentItems = filteredItems.slice(startIdx, startIdx + itemsperpage);

  const handlePageChange = (page) => {
    setCurrentPg(page);
  };
  

  return (
    <div>
      <div className={styles.blogListContainerDisplay}>
        {filteredItems.length === 0 ? (
          <p style={{ padding: '20px' , display:"flex", fontSize: "20px", alignItems:"center", justifyContent:"center" }}>No blogs found.</p>
        ) : (
          currentItems.map((item, index) => (
            <BlogItem
              key={item.slug || index}
              slug={item.slug}
              title={item.title}
              description={item.description}
              author={item.authorname}
              date={item.date}
              coverimg={item.coverimg}
              authorimg={item.authorimg}
              category={item.category}
            />
          ))
        )}
      </div>

      {filteredItems.length > 0 && (
        <div className={styles.paginationControls}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`${styles.paginationButton} ${currentpg === i + 1 ? styles.active : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogDisplay;
