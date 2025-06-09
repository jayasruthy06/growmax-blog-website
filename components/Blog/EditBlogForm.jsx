"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./CreateBlog.module.css";
import dynamic from "next/dynamic";
import "quill/dist/quill.snow.css";
import Notification from "../Authentication/Notification";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

const EditBlogForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogId = searchParams.get('id');
  
  const [content, setContent] = useState("");
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
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
  const [existingCoverImage, setExistingCoverImage] = useState("");

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

  useEffect(() => {
    if (blogId) {
      fetchBlogData();
    } else {
      router.push('/admin/dashboard/view-blogs');
    }
  }, [blogId]);

  const fetchBlogData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/blogs/${blogId}`);
      const result = await response.json();

      if (result.success) {
        const blog = result.blog;
        setFormData({
          title: blog.title || "",
          description: blog.description || "",
          authorname: blog.authorname || "",
          category: blog.category || "",
          slug: blog.slug || "",
          date: blog.date ? new Date(blog.date).toISOString().split('T')[0] : ""
        });
        setContent(blog.content || "");
        setExistingCoverImage(blog.coverimg || "");
      } else {
        showNotification('error', 'Failed to fetch blog data');
        router.push('/admin/dashboard/view-blogs');
      }
    } catch (error) {
      showNotification('error', 'Network error occurred while fetching blog data');
      router.push('/admin/dashboard/view-blogs');
    } finally {
      setIsLoading(false);
    }
  };

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
      
      formDataToSend.append("id", blogId);
      
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("authorname", formData.authorname);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("content", content);
      formDataToSend.append("slug", formData.slug);
      formDataToSend.append("date", formData.date);
      
      const coverImageFile = form.querySelector('input[type="file"]').files[0];
      if (coverImageFile) {
        formDataToSend.append("coverimg", coverImageFile);
      }
      const selectedAuthor = authors.find(author => author.name === formData.authorname);

      if (selectedAuthor && selectedAuthor.profilephoto) {
        formDataToSend.append("authorimg", selectedAuthor.profilephoto);
      }

      const response = await fetch("/api/blogs", {
        method: "PUT",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        showNotification('success', 'Blog updated successfully! Your changes have been saved.');
      } else {
        showNotification('error', `Failed to update blog: ${result.message}`);
      }
    } catch (error) {
      showNotification('error', 'Network error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="create-blog-form-wrap">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <p>Loading blog data...</p>
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexDirection:"column"}}>
          <p className={styles.createBlogHeading}>Edit Blog Post</p>
          <button 
            type="button" 
            onClick={() => router.push('/admin/dashboard/view-blogs')}
            style={{
              padding: '8px 16px',
              backgroundColor: 'white',
              color: 'red',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              boxShadow: "1px 1px 3px 3px rgba(223, 219, 221, 0.4)",
              fontFamily: "Outfit"
            }}
          >
            Back to Blogs
          </button>
        </div>
        
        <div className={styles.createBlogFormContainer}>
          <form onSubmit={handleSubmit}>
            <label className={styles.createblogLabel}>Title:</label>
            <br/>
            <input 
              type="text" 
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              autoComplete="off"
              required
              className={styles.createblogInput}
            />
            <br/>
            <label className={styles.createblogLabel}>Description:</label>
            <br/>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              className={styles.blogTextArea}
            ></textarea>
            <br/>
            <label className={styles.createblogLabel}>Cover Image:</label>
            <br/>
            {existingCoverImage && (
              <div style={{ marginBottom: '10px' }}>
                <p style={{ fontSize: '14px', color: '#666' }}>Current cover image:</p>
                <img 
                  src={existingCoverImage} 
                  alt="Current Cover of Blog" 
                  style={{ maxWidth: '200px', maxHeight: '150px', objectFit: 'cover' }}
                />
                <p style={{ fontSize: '12px', color: '#888', marginTop: '5px' }}>
                  Upload a new image to replace the current one, or leave empty to keep the existing image.
                </p>
              </div>
            )}
            <input 
              type="file" 
              accept="image/*" 
              autoComplete="off"
              className={styles.createblogInput}
            />
            <br/>
            <label className={styles.createblogLabel}>Author:</label>
            <br/>
            <input 
              list="authors" 
              id="author" 
              name="authorname"
              value={formData.authorname}
              onChange={handleInputChange}
              required
              className={styles.createblogInput}
            />
            <br/>
            <datalist id="authors">
              {Array.isArray(authors) && authors.map((author, index) => (
                <option key={index} value={author.name} />
              ))}
            </datalist>
            <br/>
            <label className={styles.createblogLabel}>Blog Content:</label>
            <br/>
            <>
              <div style={{
                overflowY: "hidden",
                minHeight: isMobile ? "200px" : "450px" ,
                borderBottom: "1px solid grey",
                borderRight: "1px solid grey",
                borderTop: "1px solid grey"
              }}>
                {editorLoaded && (
                  <ReactQuill
                    ref={quillRef}
                    value={content}
                    onChange={setContent}
                    className={styles.myQuillWrapper}
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
            <label className={styles.createblogLabel}>Category:</label>
            <br/>
            <input 
              list="categories" 
              id="category" 
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className={styles.createblogInput}
            />
            <datalist id="categories">
              <option value="AI & INSIGHTS"></option>
              <option value="MARKETING"></option>
              <option value="SALES"></option>
              <option value="B2B COMMERCE"></option>
            </datalist>
            <br/>
            <label className={styles.createblogLabel}>Slug/URL:</label>
            <br/>
            <input 
              type="text" 
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              autoComplete="off"
              required
              className={styles.createblogInput}
            />
            <br/>
            <label className={styles.createblogLabel}>Publishing Date:</label>
            <br/>
            <input 
              type="date" 
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              autoComplete="off"
              className={styles.createblogInput}
            />
            <br/>
            <div style={{ display: 'flex', gap: '10px', alignItems: "center" }}>
              <button type="submit" disabled={isSubmitting} className={styles.updateButton}>
                {isSubmitting ? "UPDATING..." : "UPDATE POST"}
              </button>
              <button 
                type="button" 
                onClick={() => router.push('/admin/dashboard/view-blogs')}
                className={styles.deleteButton}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlogForm;