"use client";

import styles from "./FourSlider.module.css";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import {useRouter} from "next/navigation";

const FourSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

    const slides = [
      {
        id: 1,
        title: "AI-Powered Ordering Apps: The Future of B2B Sales",
        description: "AI-powered ordering apps are transforming B2B sales by streamlining processes and enhancing customer experiences. These smart solutions use artificial intelligence to personalize interactions and deliver actionable insights. Discover why they’re becoming essential tools for driving growth and staying competitive in today’s market.",
        image: "/images/BlogImg/blog1.jpg",
        alt: "AI-Powered Ordering Apps: The Future of B2B Sales",
        author: "Aravindan Varatharajan",
        authorpic:"/images/Admin/aravindan.jpg",
        date: "June 23, 2024",
        slug: "/blog/ai-powered-ordering-apps-the-future-of-b2b-sales"
      },
      {
        id: 2,
        title: "Everything You Need To Know About B2B eCommerce",
        description: "B2B eCommerce can be complex, especially for startups and mid-sized businesses entering a competitive space. Implementing the right strategies is key to driving efficiency and long-term growth. This blog explores practical B2B eCommerce tactics and how to make them work for your business.",
        image:"/images/BlogImg/blog2.jpeg", 
        alt: "Everything You Need To Know About B2B eCommerce",
        author: "Sudhakar Varatharajan",
        authorpic: "/images/Admin/sudhakar.jpg",
        date: "December 10, 2021",
        slug: "/blog/everything-you-need-to-know-about-b2b-ecommerce"
      },
      {
        id: 3,
        title: "Make 2X Faster Decisions In Your Sales Cycle",
        description: "B2B sales thrive on fast, informed decisions—but many businesses lack the visibility to act quickly. This blog explores where decision-making gaps exist and how different roles impact the process. Learn how Growmax enables seamless collaboration and faster outcomes across your sales cycle.",
        image: "/images/BlogImg/blog3.png", 
        alt: "Make 2X Faster Decisions In Your Sales Cycle",
        author: "Sudhakar Varatharajan",
        authorpic: "/images/Admin/sudhakar.jpg",
        date: "December 23, 2021",
        slug: "/blog/make-2x-faster-decisions-in-your-sales-cycle"
      },
      {
        id: 4,
        title: "Digital Can Drive 5X Growth For B2B Companies",
        description: "Many B2B companies still operate traditionally, missing the digital edge that drives significant revenue growth. This blog explores the common challenges B2B sellers face and why digital hesitation holds them back. Discover how Growmax simplifies the shift with customer portals and smart tools for scalable, AI-ready sales.",
        image: "/images/BlogImg/blog4.jpg", 
        alt: "Digital Can Drive 5X Growth For B2B Companies",
        author: "Aravindan Varatharajan",
        authorpic:"/images/Admin/sudhakar.jpg",
        date: "September 22, 2021",
        slug: "/blog/digital-can-drive-5x-growth-for-b2b-companies"
      },
      {
        id: 5,
        title: "Your Traditional Competitors Are Not Your Only Threats",
        description: "The B2B landscape is changing—new digital competitors are breaking traditional local boundaries. This blog explores how adapting to digitization is critical for survival and growth in today’s market. Learn why embracing digital transformation and exceptional customer service is the key to staying ahead.",
        image: "/images/BlogImg/blog5.jpg",
        alt: "Your Traditional Competitors Are Not Your Only Threats",
        author: "Gnanavel Sivasami",
        authorpic: "/images/Admin/Gnanavel.png",
        date: "December 23, 2021",
        slug: "/blog/your-traditional-competitors-are-not-your-threats"
      }
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => 
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
      }, 4000); 
  
      return () => clearInterval(interval);
    }, [slides.length]);
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };
  
    const goToSlide = (index) => {
      setCurrentSlide(index);
    };

    const handleRouting = (slug) => {
      router.push(slug);
    }
    
    return (
      <div className={styles.sliderMainContainer}>
        <div className={styles.sliderHeadingDiv}>
          <h1 className={styles.heading}>Our Featured Blogs</h1>
        </div>
  
        <div className={styles.sliderWrapper}>
          <div 
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className={styles.slide}onClick={() => handleRouting(slide.slug)}>
                <div className={styles.slideContent}>
                  <div className={styles.contentSection}>
                    <div className={styles.blogContent}>
                        <h2 className={styles.slideTitle}>{slide.title}</h2>
                        <p className={styles.slideDescription}>{slide.description}</p>
                    </div>
                    <div className={styles.authorNameImage}>
                        <Image src={slide.authorpic} width = {40} height = {40} alt="Image of the Author"/>
                        <div className={styles.dateName}>
                        <p className={styles.authorName}>{slide.author}</p>
                        <p className={styles.authorDate}>{slide.date}</p>
                        </div>
                    </div>
                  </div>
                  
                  {/* Image section */}
                  <div className={styles.imageSection}>
                      <Image src = {slide.image} alt={slide.alt} height = {250} width = {400}
                      className={styles.slideImage}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }} 
                      />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <div className={styles.dotsContainer}>
          {slides.map((_, index) => (
            <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`${styles.dot} ${currentSlide === index ? styles.dotActive : ''}`}
            aria-label={`Go to slide ${index + 1}`}
            />

          ))}
        </div>
      </div>
  )
}

export default FourSlider