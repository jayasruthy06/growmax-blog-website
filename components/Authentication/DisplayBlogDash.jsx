"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BlogItemDash from '../../components/Authentication/BlogItemDash';
import { handleEditRedirect, handleDeleteWithConfirmation } from "../../utils/blogUtils";
import styles from "./DisplayBlogDash.module.css";
import Notification from './Notification';

const DisplayBlogDash = () => {
  const [adminblogs, setAdminBlogs] = useState([]);
  const [adminloading, setAdminLoading] = useState(true);
  const [adminerror, setAdminError] = useState(null);
  const [notification, setNotification] = useState({
      isVisible: false,
      type: 'success',
      message: ''
  });

  const router = useRouter();

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();

      if (data.success) {
        setAdminBlogs(data.blogs);
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
    fetchBlogs();
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

  if (adminloading)
    return <div style={{ padding: '20px', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;

  if (adminerror)
    return <div style={{ padding: '20px', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Error: {adminerror}</div>;

  return (
    <div className={styles.displayBlogDashContainer}>
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
  );
};

export default DisplayBlogDash;
