"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BlogItemDash from '../../components/Authentication/BlogItemDash';
import { handleEditRedirect, handleDeleteWithConfirmation } from "../../utils/blogUtils";
import styles from "./DisplayBlogDash.module.css";
import Notification from './Notification';
import styles2 from "../Blog/BlogList.module.css";

const DisplayBlogDash = () => {
  const [adminblogs, setAdminBlogs] = useState([]);
  const [adminloading, setAdminLoading] = useState(true);
  const [adminerror, setAdminError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [currentpg, setCurrentPg] = useState(1);
  const [notification, setNotification] = useState({
      isVisible: false,
      type: 'success',
      message: ''
  });

  const router = useRouter();
  const itemsperpage = 4;

  const fetchBlogs = async (page=1) => {
    try {
      const response = await fetch(`/api/blogs?page=${page}&limit=${itemsperpage}`);
      const data = await response.json();

      if (data.success) {
        setAdminBlogs(data.blogs);
        setTotalPages(data.totalPages);
      } else {
        setAdminError('Failed to fetch blogs');
      }
    } catch (err) {
      setAdminError('Error fetching blogs: ' + err.message);
    } finally {
      setAdminLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(1);
  }, []);

  const showNotification = (type, message) => {
    setNotification({ isVisible: true, type, message });
  };

  const hideNotification = () => {
    setNotification(prev => ({ ...prev, isVisible: false }));
  };

  const handleEdit = (blogId) => {
    handleEditRedirect(router, blogId);
  };

  const handleDelete = async (blogId) => {
    await handleDeleteWithConfirmation(
      blogId,
      (message) => {
        showNotification('success', message);
        fetchBlogs(); 
      },
      (message) => {
        showNotification('error', message);
      }
    );
  };

  const handlePageChange = (page) => {
    setCurrentPg(page);
    fetchBlogs(page)
  }

  if (adminloading)
    return <div style={{ padding: '20px', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;

  if (adminerror)
    return <div style={{ padding: '20px', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Error: {adminerror}</div>;

  return (
    <div className={styles.displayBlogDashContainer}>
    <div>
      <Notification
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />
      {adminblogs.length === 0 ? (
        <p style={{ padding: '20px', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>No blogs found.</p>
      ) : (
        adminblogs.map((item, index) => (
          <BlogItemDash
            key={item._id || index}
            slug={item.slug}
            title={item.title}
            description={item.description}
            authorname={item.authorname}
            date={item.date}
            coverimg={item.coverimg}
            authorimg={item.authorimg}
            category={item.category}
            onEdit={() => handleEdit(item._id)}
            onDelete={() => handleDelete(item._id)}
          />
        ))
      )}
    </div>
    {totalPages > 1 && (
        <div className={styles2.paginationControls}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`${styles2.paginationButton} ${currentpg === i + 1 ? styles2.active : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
      </div>
  );
};

export default DisplayBlogDash;
