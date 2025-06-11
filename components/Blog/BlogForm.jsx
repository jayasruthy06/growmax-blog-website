"use client";

import React, { useState, useRef, useEffect } from "react";
import styles1 from "./CreateBlog.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import "quill/dist/quill.snow.css";
import Notification from "../../components/Authentication/Notification"
import { sanitizeHTMLFrontend, sanitizeText, sanitizeSlug } from "../../lib/sanitizeClient";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

const BlogForm = () => {
  const [content, setContent] = useState("");
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [notification, setNotification] = useState({
    isVisible: false,
    type: 'success',
    message: ''
  });
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    authorname: "",
    category: "",
    slug: "",
    date: ""
  });

  const quillRef = useRef(null);
  
  useEffect(() => {
    fetchAuthors();
  }, []);
  
  const fetchAuthors = async () => {
    try {
      const response = await fetch('/api/authors');
      const data = await response.json();

      if (data.success) {
        setAuthors(data.authors);
      } 
    } catch (err) {
      console.log(err.message);
    } finally {
      console.log("Fetching request processed.")
    }
  };

  useEffect(() => {
    setEditorLoaded(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        quill.insertEmbed(range.index, "image", reader.result);
      };
      reader.readAsDataURL(file);
    };
  };

  const getModules = () => {
    const baseToolbar = [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["link", "image"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
    ];

    const mobileToolbar = [
      [{ header: [1, 2, false] }],
      ["bold", "italic"],
      ["link", "image"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
    ];

    return {
      toolbar: {
        container: isMobile ? mobileToolbar : baseToolbar,
        handlers: {
          image: imageHandler,
        },
      },
    };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target;
      const formDataToSend = new FormData();
      
      const selectedAuthor = authors.find(author => author.name === formData.authorname);
      
      formDataToSend.append("title", sanitizeText(formData.title));
      formDataToSend.append("description", sanitizeText(formData.description));
      formDataToSend.append("authorname", sanitizeText(formData.authorname));
      formDataToSend.append("category", sanitizeText(formData.category));
      formDataToSend.append("content", sanitizeHTMLFrontend(content));
      formDataToSend.append("slug", sanitizeSlug(formData.slug));
      formDataToSend.append("date", formData.date);

      if (selectedAuthor && selectedAuthor.profilephoto) {
        formDataToSend.append("authorimg", selectedAuthor.profilephoto);
      }
      
      
      const coverImageFile = form.querySelector('input[type="file"]').files[0];
      if (coverImageFile) {
        formDataToSend.append("coverimg", coverImageFile); 
      }

      const response = await fetch("/api/blogs", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        showNotification('success', 'Blog created successfully! Your post has been published.');
        setFormData({
          title: "",
          description: "",
          authorname: "",
          category: "",
          slug: "",
          date: ""
        });
        setContent("");
        form.reset();
      } else {
        showNotification('error', `Failed to create blog: ${result.message}`);
      }
    } catch (error) {
      showNotification('error', 'Network error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
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
      
      <div className={styles1.createBlogFormWrap}>
        <p className={styles1.createBlogHeading}>Write A New Blog</p>
        <div className={styles1.createBlogFormContainer}>
          <form onSubmit={handleSubmit}>
            <label className={styles1.createblogLabel}>Title:</label>
            <br/>
            <input 
              type="text" 
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              autoComplete="off"
              required
              className={styles1.createblogInput}
            />
            <br/>
            <label className={styles1.createblogLabel}>Description:</label>
            <br/>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              className={styles1.blogTextArea}
            ></textarea>
            <br/>
            <label className={styles1.blogLabel}>Cover Image:</label>
            <br/>
            <input 
              type="file" 
              accept="image/*" 
              autoComplete="off"
              required
            />
            <br/>
            <label className={styles1.createblogLabel}>Author:</label>
            <br/>
            <input 
              list="authors" 
              id="author" 
              name="authorname"
              value={formData.authorname}
              onChange={handleInputChange}
              required
              className={styles1.createblogInput}
            />
            <br/>
            <datalist id="authors">
              {Array.isArray(authors) && authors.map((author, index) => (
                <option key={index} value={author.name} />
              ))}
            </datalist>
            <br/>
            <label className={styles1.createblogLabel}>Blog Content:</label>
            <br/>
            <>
              <div style={{
                overflowY: "hidden",
                minHeight: isMobile ? "200px" : "400px",
                borderBottom: "1px solid grey",
                borderRight: "1px solid grey",
                borderTop: "1px solid grey"
              }}>
                {editorLoaded && (
                  <ReactQuill
                    ref={quillRef}
                    value={content}
                    onChange={setContent}
                    className={styles1.myQuillWrapper}
                    modules={getModules()}
                    style={{
                      overflow: "auto",
                      fontSize: isMobile ? "14px" : "16px",
                      height: "400px"
                    }}
                  />
                )}
              </div>
            </>
            <br/>
            <label className={styles1.createblogLabel}>Category:</label>
            <br/>
            <input 
              list="categories" 
              id="category" 
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className={styles1.createblogInput}
            />
            <datalist id="categories">
              <option value="AI & INSIGHTS"></option>
              <option value="MARKETING"></option>
              <option value="SALES"></option>
              <option value="B2B COMMERCE"></option>
            </datalist>
            <br/>
            <label className={styles1.createblogLabel}>Slug/URL:</label>
            <br/>
            <input 
              type="text" 
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              autoComplete="off"
              required
              className={styles1.createblogInput}
            />
            <br/>
            <label className={styles1.createblogLabel}>Publishing Date:</label>
            <br/>
            <input 
              type="date" 
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              autoComplete="off"
              className={styles1.createblogInput}
            />
            <br/>
            <button type="submit" disabled={isSubmitting} className={styles1.updateButton}>
              {isSubmitting ? "POSTING..." : "POST"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;