"use client";

import { React, useState, useEffect, useCallback } from 'react';
import Image from "next/image";
import DOMPurify from "dompurify";
import styles1 from "./BlogContent.module.css";
import styles2 from "./BlogPage.css";

const BlogPageText = ({ reqslug }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogBySlug = useCallback(async () => {
    if (!reqslug) {
      setError('No slug provided');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/blogs/${encodeURIComponent(reqslug)}`);
      
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const rawText = await response.text();

      let data;
      try {
        data = JSON.parse(rawText);
      } catch (parseError) {
        setError(`Server returned invalid JSON. Response: ${rawText.substring(0, 200)}...`);
        return;
      }

      if (data.success && data.blog) {
        setBlog(data.blog);
      } else {
        setError(data.message || 'Blog not found');
      }
    } catch (err) {
      setError('Network error: ' + err.message);
    } finally {
      setLoading(false);
    }
  }, [reqslug]);

  useEffect(() => {
    fetchBlogBySlug();
  }, [fetchBlogBySlug]);

  if (loading) {
    return (
      <div className="blog-loading" style={{ padding: '20px', textAlign: 'center' }}>
        <p>Loading blog...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        padding: '20px', 
        color: 'red', 
        display: "flex", 
        flexDirection: "column", 
        alignItems:"center", 
        justifyContent: "center", 
        gap:"20px"
      }}>
        <h3>Error Loading Blog</h3>
        <p>{error}</p>
        <button
          onClick={fetchBlogBySlug}
          style={{
            padding: '10px 20px',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontFamily: "Outfit",
            fontSize: "15px"
          }}
        >
          Retry
        </button>
        <p style={{ fontSize: '14px', color: '#666' }}>
          Debug info: Trying to fetch slug "{reqslug}"
        </p>
      </div>
    );
  }
  
  if (!blog) {
    return (
      <div className="blog-not-found" style={{ padding: '20px', textAlign: 'center' }}>
        <p>Blog not found</p>
      </div>
    );
  }

  const datestr = new Date(blog.date).toLocaleDateString("en-GB", {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const isValidImageUrl = (url) => {
    return url && typeof url === 'string' && url.trim() !== '' && 
           (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/'));
  };
  
  return (
    <div>
      <div className="blogHeroContainer">
        <div className="blogHeroMain">
          <div className="blogHeroImg">
            <Image 
              src={blog.coverimg} 
              width={300} 
              height={200} 
              alt={`Cover image for ${blog.title}`}
              priority
            />
          </div>
          <div className="blogHeroWrap">
            <div className="blogPageHeading">
              <h1>{blog.title}</h1> {/* Changed from h3 to h1 for SEO */}
            </div>
            <div className="blogPageAuthor">
              <div className="blogPageAuthorImg">
                 {isValidImageUrl(blog.authorimg)? (
                          <Image src={blog.authorimg} width={50} height={50} alt="Image of the Author" className="blogPageAuthorImgImage"/>
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
                            {blog.authorname ? blog.authorname.charAt(0).toUpperCase() : 'A'}
                          </div>
                        )
                        }
              </div>
              <div className="blogPageAuthorNameDate">
                <p className="blogAName">{blog.authorname}</p>
                <p className="blogD">{datestr}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blogTextDisplay">
        <div 
          className={styles1.blogTextContentBox}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }}
        />
      </div>
    </div>
  );
};

export default BlogPageText;