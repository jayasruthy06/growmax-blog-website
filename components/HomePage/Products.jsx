import React from 'react'
import styles from "./Products.module.css";
import Image from "next/image";

const Products = () => {
  return (
    <div className={styles.productsContainer}>
        <p className={styles.productHeading}>One Product, All You Need</p>
        <div className={styles.productsWrap}>
            <div className={styles.item}>
                <Image src="/images/HomePageImg/image1.svg" width ={24} height ={24} alt="E-Commerce Store Front"/>
                <h3>E-Commerce Store Front</h3>
                <p>Launch your online store effortlessly—just add your content and go live. Designed for easy customization to align with your brand and business needs.</p>
            </div>
            <div className={styles.item}>
                <Image src="/images/HomePageImg/image2.svg" width ={24} height ={24} alt="Order Management"/>
                <h3>Order Management</h3>
                <p>Optimized for B2B transactions, including support for customer-specific pricing and streamlined bulk order processing.</p>
            </div>
            <div className={styles.item}>
                <Image src="/images/HomePageImg/image3.svg" width ={24} height ={24} alt="Pricelist & Discounts"/>
                <h3>Pricelist & Discounts</h3>
                <p>Create and manage tailored price lists for each customer. Set up volume-based pricing effortlessly to support bulk sales and promotions.</p>
            </div>
            <div className={styles.item}>
                <Image src="/images/HomePageImg/image4.svg" width ={24} height ={24} alt="Sales-Representative App"/>
                <h3>Sales-Representative App</h3>
                <p>Equip your sales team with a ready-to-use application that integrates seamlessly with your preferred accounting or ERP systems.</p>
            </div>
            <div className={styles.item}>
                <Image src="/images/HomePageImg/image5.svg" width ={24} height ={24} alt="Product Catalog Management"/>
                <h3>Product Catalog Management</h3>
                <p>Comprehensive catalog tools featuring fuzzy search, related product suggestions, and support for multiple price lists—everything you need in one place.</p>
            </div>
            <div className={styles.item}>
                <Image src="/images/HomePageImg/image6.svg" width ={24} height ={24} alt="Personalization"/>
                <h3>Personalization</h3>
                <p>Empower your sales strategy with AI-driven recommendations. Easily implement up-selling and cross-selling to maximize revenue.</p>
            </div>
        </div>
    </div>
  )
}

export default Products