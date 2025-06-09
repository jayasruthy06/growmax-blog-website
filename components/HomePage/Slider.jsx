"use client";

import styles from "./Slider.module.css"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import techStackImg from '/public/images/HomePageImg/tech-stack.png';
import flexibleSapImg from '/public/images/HomePageImg/flexible-sap.png';
import productivityImg from '/public/images/HomePageImg/productivity.png';

const slides = [
    {
      id: 1,
      title: "Unify Your Tech Stack",
      description: "Provide a unified experience hub that seamlessly connects your existing technologies and tools—including ERP, PIM, and more—to drive efficiency and collaboration across your ecosystem.",
      image: "/images/HomePageImg/tech-stack.png", 
      alt: "Mobile app interface showing product categories and cart"
    },
    {
      id: 2,
      title: "Flexible SAP Integrations",
      description: "Integrate disconnected systems, eliminate data silos, and unlock the full potential of your legacy technology with pre-built SAP connectors designed for seamless connectivity and scalability.",
      image: "/images/HomePageImg/flexible-sap.png",
      alt: "Payment options interface with buy now pay later option"
    },
    {
      id: 3,
      title: "Productivity and Accuracy",
      description: "Boost productivity and accuracy with streamlined workflows that accelerate and simplify key business operations—such as lead management, quoting, approvals, and order processing.",
      image: "/images/HomePageImg/productivity.png", 
      alt: "Customer prospects dashboard with verification status"
    }
  ];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  return (
    <div className={styles.sliderMainContainer}>
      
      <div className={styles.sliderHeadingDiv}>
        <h1 className={styles.heading}>Automate and Integrate Your Business</h1>
        <p className={styles.description}>
          Automate business processes to optimize operations across the entire customer lifecycle. 
          Seamlessly integrate legacy systems and orchestrate a unified, consistent experience for your customers.
        </p>
      </div>

      
      <div className={styles.sliderWrapper}>
        <div 
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className={styles.slide}>
              <div className={styles.slideContent}>
                
                <div className={styles.contentSection}>
                  <h2 className={styles.slideTitle}>{slide.title}</h2>
                  <p className={styles.slideDescription}>{slide.description}</p>
                </div>
                
                
                <div className={styles.imageSection}>
                    <Image src = {slide.image} alt={slide.alt} height = {250} width = {400}
                    className={styles.slideImage}
                    onError={(e) => {
                      
                      e.target.style.display = 'none';
                    }} />
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
              className={`${styles.dot} ${currentSlide === index ? styles['dotActive'] : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
))}

      </div>
    </div>
  );
};

export default Slider;