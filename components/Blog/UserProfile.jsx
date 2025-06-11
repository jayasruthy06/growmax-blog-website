"use client";

import React, { useState, useEffect, useRef } from 'react';
import Notification from '../Authentication/Notification';
import styles from "./CreateBlog.module.css";
import Image from "next/image";
import { sanitizeHTML, sanitizeText } from "../../lib/sanitizeClient";

const UserProfile = () => {
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [imageKey, setImageKey] = useState(Date.now()); 
  const fileInputRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileno: '',
    role: '',
    currentPassword: '',
    newPassword: ''
  });

  const [notification, setNotification] = useState({
    isVisible: false,
    type: 'success',
    message: ''
  });

  const showNotification = (type, message) => {
    setNotification({
      isVisible: true,
      type,
      message
    });
  };

  const hideNotification = () => {
    setNotification(prev => ({
      ...prev,
      isVisible: false
    }));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      setFetchLoading(true);
      
      const authResponse = await fetch('/api/auth/me', {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      
      if (!authResponse.ok) {
        showNotification('error', 'Please login to view your profile');
        return;
      }
      
      const authData = await authResponse.json();
      const userEmail = authData.user.email;

      const timestamp = new Date().getTime();
      const response = await fetch(`/api/users?email=${encodeURIComponent(userEmail)}&t=${timestamp}`, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache'
        },
      });
      
      const data = await response.json();

      if (data.success) {
        setUser(data.user);
        setFormData({
          name: data.user.name,
          email: data.user.email,
          mobileno: data.user.mobileno,
          role: data.user.role,
          currentPassword: '',
          newPassword: ''
        });
                
        setImageKey(Date.now());
      } else {
        showNotification('error', data.message || 'Failed to fetch user data');
      }
    } catch (error) {
      showNotification('error', 'Failed to fetch user data');
    } finally {
      setFetchLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user?._id) {
      showNotification('error', 'User data not found');
      return;
    }

    try {
      setLoading(true);
      
      const formDataToSend = new FormData();
      formDataToSend.append('userId', user._id);
      formDataToSend.append('name', sanitizeText(formData.name));
      formDataToSend.append('email', sanitizeText(formData.email));
      formDataToSend.append('mobileno', sanitizeText(formData.mobileno));
      formDataToSend.append('role', sanitizeText(formData.role.toLowerCase()));
      if (formData.newPassword) {
        if (!formData.currentPassword) {
          showNotification('error', 'Current password is required to change password');
          setLoading(false);
          return;
        }
        formDataToSend.append('currentPassword', formData.currentPassword);
        formDataToSend.append('newPassword', formData.newPassword);
      }
      
      if (profilePhoto) {
        formDataToSend.append('profilephoto', profilePhoto);
      }

      const response = await fetch('/api/users', {
        method: 'PUT',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setUser(data.user);
        
        setFormData(prev => ({
          name: data.user.name,
          email: data.user.email,
          mobileno: data.user.mobileno,
          role: data.user.role,
          currentPassword: '',
          newPassword: ''
        }));
        
        setProfilePhoto(null);
        
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        
        setImageKey(Date.now());
        
        showNotification('success', 'Profile updated successfully');
        
      } else {
        showNotification('error', data.message || 'Failed to update profile');
      }
    } catch (error) {
      showNotification('error', 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        showNotification('error', 'Please select a valid image file');
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        showNotification('error', 'File size should be less than 5MB');
        return;
      }

      setProfilePhoto(file);
    }
  };

  const handleChangeProfilePhoto = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteProfilePhoto = async () => {
    if (!user?.profilephoto) {
      showNotification('info', 'No profile photo to delete');
      return;
    }

    const confirmDelete = window.confirm(
      'Are you sure you want to delete your profile photo?'
    );
    
    if (!confirmDelete) return;

    try {
      setLoading(true);
      
      const formDataToSend = new FormData();
      formDataToSend.append('userId', user._id);
      formDataToSend.append('profilephoto', 'true'); 

      const response = await fetch('/api/users', {
        method: 'PUT',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setUser(prev => ({ ...prev, profilephoto: null }));
        setProfilePhoto(null);
        setImageKey(Date.now()); 
        showNotification('success', 'Profile photo deleted successfully');
      } else {
        showNotification('error', data.message || 'Failed to delete profile photo');
      }
    } catch (error) {
      showNotification('error', 'Failed to delete profile photo');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!user?._id) {
      showNotification('error', 'User data not found');
      return;
    }

    const confirmDelete = window.confirm(
      'Are you sure you want to delete your account? This action cannot be undone.'
    );
    
    if (!confirmDelete) return;

    try {
      setDeleteLoading(true);
      
      const response = await fetch(`/api/users?userId=${user._id}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (data.success) {
        showNotification('success', 'Account deleted successfully');
        
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      } else {
        showNotification('error', data.message || 'Failed to delete account');
      }
    } catch (error) {
      showNotification('error', 'Failed to delete account');
    } finally {
      setDeleteLoading(false);
    }
  };

  const getProfileImageUrl = () => {
    if (user?.profilephoto) {
      return `${user.profilephoto}?t=${imageKey}`;
    }
    return "/images/default-picture.jpg";
  };

  if (fetchLoading) {
    return (
      <div className={styles.createBlogFormWrap}>
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles.createBlogFormWrap}>
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <p>Unable to load profile. Please try again.</p>
          <button 
            onClick={fetchUserData}
            style={{
              border: "none", 
              outline: "none", 
              backgroundColor: "black", 
              fontFamily: "Outfit", 
              fontWeight: "bold", 
              color: "white", 
              padding: "10px 20px", 
              borderRadius: "10px", 
              cursor: "pointer",
              marginTop: "10px"
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Notification 
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />
      
      <div className={styles.createBlogFormWrap}>
        <p className={styles.createBlogHeading}>Update your Profile</p>
        <div className={styles.createBlogFormContainer}>
          <form onSubmit={handleSubmit}>
            <div style={{
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              justifyContent: "center", 
              gap: "15px"
            }}>
              <label className={styles.createblogLabel}>Profile Photo:</label>
              <Image 
                src={getProfileImageUrl()} 
                width={80} 
                height={80} 
                style={{borderRadius: "50%", objectFit: "cover"}}
                alt="User Profile Photo"
                key={imageKey} 
                onError={(e) => {
                  e.target.src = "/images/default-picture.jpg";
                }}
              />
              
              {profilePhoto && (
                <p style={{ fontSize: '12px', color: '#666', margin: '0' }}>
                  Selected: {profilePhoto.name}
                </p>
              )}
              
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleProfilePhotoChange}
                accept="image/*"
                style={{ display: 'none' }}
                className={styles.createblogInput}
              />
              
              <button 
                type="button"
                onClick={handleChangeProfilePhoto}
                disabled={loading}
                className={styles.updateButton}
              >
                CHANGE PROFILE PHOTO
              </button>
              
              {user.profilephoto && (
                <button 
                  type="button"
                  onClick={handleDeleteProfilePhoto}
                  disabled={loading}
                  className={styles.deleteButton}
                >
                  DELETE PROFILE PHOTO
                </button>
              )}
            </div>
            
            <label className={styles.createblogLabel}>Name:</label>
            <br/>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              autoComplete="off"
              required
              disabled={loading}
              className={styles.createblogInput}
            />
            <br/>
            
            <label className={styles.createblogLabel}>Email:</label>
            <br/>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={loading}
              className={styles.createblogInput}
            />
            <br/>
            
            <label className={styles.createblogLabel}>Current Password (required to change password):</label>
            <br/>
            <input
              type="password" 
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleInputChange}
              placeholder="Enter current password to change it"
              disabled={loading}
              className={styles.createblogInput}
            />
            <br/>
            
            <label className={styles.createblogLabel}>New Password (leave empty to keep current):</label>
            <br/>
            <input
              type="password" 
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              placeholder="Enter new password"
              disabled={loading}
              className={styles.createblogInput}
            />
            <br/>
            <label className={styles.createblogLabel}>Role:</label>
            <br/>
            <input
              list="userrole"
              id="users"
              name="role"
              value={(formData.role).toUpperCase()}
              onChange={handleInputChange}
              required
              className={styles.createblogInput}
            />
            <br/>
            <datalist id="userrole">
              <option value="Editor"></option>
              <option value="Admin"></option>
            </datalist>
            <br/>
            <label className={styles.createblogLabel}>Phone Number:</label>
            <br/>
            <input 
              type="tel" 
              name="mobileno"
              value={formData.mobileno}
              onChange={handleInputChange}
              autoComplete="off"
              required
              disabled={loading}
              className={styles.createblogInput}
            />
            <br/>
            
            <button 
              type="submit"
              disabled={loading || deleteLoading}
              className={styles.updateButton}
            >
              {loading ? "UPDATING..." : "UPDATE PROFILE"}
            </button>
            <button 
              type="button"
              onClick={handleDeleteAccount}
              disabled={loading || deleteLoading}
              className={styles.deleteButton}
            >
              {deleteLoading ? "DELETING..." : "DELETE ACCOUNT"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;