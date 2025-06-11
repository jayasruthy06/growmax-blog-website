"use client";

import React, { useState, useEffect } from 'react';
import styles from "./BlogList.module.css";
import BlogItem from "../../components/Blog/BlogItem.jsx";

const BlogDisplay = ({ filtered }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentpg, setCurrentPg] = useState(1); 
  const [totalPages, setTotalPages] = useState(1);
  const itemsperpage = 4;

  useEffect(() => {
    fetchBlogs(currentpg, filtered);
  }, [currentpg, filtered]);

  const fetchBlogs = async (page=1, category=filtered) => {
    try {
      const response = await fetch(`/api/blogs?page=${page}&limit=${itemsperpage}&category=${encodeURIComponent(category)}`);
      const data = await response.json();

      if (data.success) {
        setBlogs(data.blogs);
        setTotalPages(data.totalPages);
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

  const handlePageChange = (page) => {
    setCurrentPg(page);
    fetchBlogs(page);
  };
  

  return (
    <div>
      <div className={styles.blogListContainerDisplay}>
        {blogs.length === 0 ? (
          <p style={{ padding: '20px' , display:"flex", fontSize: "20px", alignItems:"center", justifyContent:"center" }}>No blogs found.</p>
        ) : (
          blogs.map((item, index) => (
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

      {totalPages > 1 && (
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
