"use client";

import {React, useState} from 'react'
import Notification from '../Authentication/Notification'
import styles from "./CreateBlog.module.css";
import { sanitizeHTML, sanitizeText } from "../../lib/sanitizeClient";

const AddUser = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        mobileno:'',
        role: '',
        profilephoto: null
    });
    const [loading, setLoading] = useState(false);
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

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
        ...prev, [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(file){
        if(file.size > 5 * 1024 * 1024){
            showNotification('error', 'Image size should be less than 5MB');
            return;
        }
        setFormData(prev => ({
            ...prev,
            profilephoto: file
        }));
    }
  };

  // MOVED validateForm OUTSIDE of handleImageChange
  const validateForm = () => {
      const {name, email, password, mobileno}= formData;
      if(!name.trim()){
          showNotification('error', 'Name is required');
          return false;
      }
      if(!email.trim()){
          showNotification('error', 'Email is required');
          return false;
      }
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
          showNotification('error', 'Enter a valid email id');
          return false;
      }
      if(!password){
          showNotification('error', 'Password is required');
          return false;
      }
      if(password.length < 8){
          showNotification('error', 'Password length must be atleast 8 characters long');
          return false;
      }
      if(!mobileno.trim()){
          showNotification('error', 'Mobile number is required');
          return false;
      }
      const specialCharRegex = /[!@#$%^&*(),.?:{}|]/;
      if(!specialCharRegex.test(password)){
          showNotification('error', 'Password must contain atleast 1 special character');
          return false;
      }
      return true;
  };

  const handleUserSubmit = async (e) => {
      e.preventDefault(); 
      
      if(!validateForm()) return;
      
      setLoading(true);
      try{
          const formDataToSend = new FormData();
          formDataToSend.append('name', sanitizeText(formData.name.trim()));
          formDataToSend.append('email', sanitizeText(formData.email.trim().toLowerCase()));
          formDataToSend.append('password', sanitizeText(formData.password));
          formDataToSend.append('mobileno', sanitizeText(formData.mobileno.trim()));
          formDataToSend.append('role', sanitizeText(formData.role.toLowerCase()))
          
          if (formData.profilephoto) {
            formDataToSend.append('profilephoto', formData.profilephoto);
          }
          const plainObj = Object.fromEntries(formDataToSend.entries());
          
          const response = await fetch('/api/users', {
            method: 'POST',
            body: formDataToSend
          });
          
          const result = await response.json();
          
          if (result.success) {
            showNotification('success', 'User created successfully!');
            setFormData({
              name: '',
              email: '',
              password: '',
              mobileno: '',
              role: '',
              profilephoto: null
            });
            const fileInput = document.querySelector('input[type="file"]');
            if (fileInput) fileInput.value = '';
          } else {
            showNotification('error', result.message || 'Unable to create user');
          }
      }
      catch (error) {
        console.log(error.message);
        showNotification('error', 'Unable to create user');
      } finally {
        setLoading(false);
      }
  };
  
  return (
    <div>
      <Notification 
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />
      
      <div className={styles.createBlogFormWrap}>
        <p className={styles.createBlogHeading}>Add an User</p>
        <div className={styles.createBlogFormContainer}>
          <form onSubmit={handleUserSubmit}>
            <label className={styles.createblogLabel}>Profile Photo:</label>
            <br/>
            <input 
              type="file" 
              accept="image/*" 
              autoComplete="off"
              onChange={handleImageChange}
              className={styles.createblogInput}
            />
            <br/>
            <label className={styles.createblogLabel}>Name:</label>
            <br/>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              autoComplete="off"
              required
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
              autoComplete="off"
              className={styles.createblogInput}
            />
            <br/>
            <label className={styles.createblogLabel}>Password:</label>
            <br/>
            <input
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              autoComplete="off"
              className={styles.createblogInput}
            />
            <br/>
            <label className={styles.createblogLabel}>Role:</label>
            <br/>
            <input
              list="userrole"
              id="users"
              name="role"
              value={formData.role}
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
            <label className={styles.createblogLabel}>Phone Number:&nbsp;<span style={{color: "grey", fontWeight: "normal"}}>(Enter with country prefix and a space - Ex: +91&nbsp;1234567891)</span></label>
            <br/>
            <input 
              type="tel" 
              name="mobileno"
              value={formData.mobileno}
              onChange={handleInputChange}
              autoComplete="off"
              required
              className={styles.createblogInput}
            />
            <br/>
            <button type="submit" disabled={loading} className={styles.updateButton}>
              {loading? "CREATING..." : "CREATE"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddUser