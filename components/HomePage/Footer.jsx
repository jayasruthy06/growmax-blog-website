import React from 'react'
import "../../styles/Footer.css";
import Image from "next/image";
import Instagram from "../../public/images/IconsImg/Instagram.png";
import Facebook from "../../public/images/IconsImg/Facebook.png";
import Twitter from "../../public/images/IconsImg/Twitter.png";
import LinkedIn from "../../public/images/IconsImg/LinkedIn.png";
import Youtube from "../../public/images/IconsImg/Youtube.png";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="main-footer-container">
        <div className="email-subscription">
            <p>Stay updated on our sales and marketing guides.</p>
            <div className="email-input-container">
                <input 
                    id="email-input"
                    placeholder="Enter your email address"
                    className="email-input-container-field"
                />
                <button type="submit" className="submit-button">Submit</button>
            </div>
        </div>
        <div className="brand-details">
            <div className="logo-div">
                <Image src = "/images/HomePageImg/footerlogo.png" className="footer-logo" width={170} height = {100} alt = "Growmax Logo in Footer"/>
            </div>
            <div className="socials">
                <p>&copy; {currentYear} Growmax LLC</p>
                <div className="socials-logo">
                    <Link href="https://www.facebook.com/growmax.io"><Image src={Facebook} alt="Facebook Link" width={30} height={30}/></Link>
                    <Link href="https://www.instagram.com/growmax_io/"><Image src={Instagram} alt="Instagram Link" width={30} height={30}/></Link>
                    <Link href="https://x.com/growmax_io"><Image src={Twitter} alt="Twitter Link" width={30} height={30}/></Link>
                    <Link href="https://www.youtube.com/channel/UCg3D8jWRA5OeCCJw00BJQ1w"><Image src={Youtube} alt="Youtube Link" width={30} height={30}/></Link>
                    <Link href="https://www.linkedin.com/company/growmax-io/"><Image src={LinkedIn} alt="LinkedIn Link" width={30} height={30}/></Link>
                </div>
            </div>
        </div>
        <div className="footer-lists">
        <div className="batch-1">
        <div className="products-footer">
            <p className="footer-heading">PRODUCTS</p>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">How It Works</Link></li>
            </ul>
        </div>
        <div className="resources-footer">
            <p className="footer-heading">RESOURCES</p>
            <ul>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/write-for-us">Write For Us</Link></li>
            </ul>
        </div>
        <div className="company-footer">
            <p className="footer-heading">COMPANY</p>
            <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service">Terms of Service</Link></li>
                <li><Link href="/msa">MSA</Link></li>
            </ul>
        </div>
        <div className="features-footer">
            <p className="footer-heading">TOP FEATURES</p>
            <ul>
                <li><Link href="/quote-management">Quote Management</Link></li>
                <li><Link href="/order-management">Order Management</Link></li>
                <li><Link href="/sales-rep-app">Sales Representative Application</Link></li>
                <li><Link href="/product-catalog-management">Product Catalog Management</Link></li>
                <li><Link href="/storefront-management">Storefront Management</Link></li>
                <li><Link href="/internal-collaboration">Internal Collaboration</Link></li>
                <li><Link href="/customer-support">E-Commerce Customer Support</Link></li>
            </ul>
        </div>
        </div>
        <div className="batch-2">
        <div className="solutions-footer">
            <p className="footer-heading">SOLUTIONS</p>
            <ul>
                <li><Link href="/b2b-commerce-cloud">B2B E-Commerce</Link></li>
                <li><Link href="/enterprise-ecommerce-platform">Enterprise E-Commerce</Link></li>
                <li><Link href="/b2b-marketplace">Enterprise Marketplace for B2B</Link></li>
                <li><Link href="/commerce-cloud">Enterprise Marketplace for D2C</Link></li>
                <li><Link href="/headless-commerce">Headless E-Commerce</Link></li>
                <li><Link href="/wholesale-ecommerce">Wholesale E-Commerce</Link></li>
                <li><Link href="/spare-parts-ecommerce">Spare Parts Portal</Link></li>
                <li><Link href="/sales-rep-app">Sales Representative Application</Link></li>
            </ul>
        </div>
        <div className="guides-footer">
            <p className="footer-heading">GUIDES</p>
            <ul>
                <li><Link href="/blog/everything-you-need-to-know-about-b2b-ecommerce">What is B2B E-Commerce?</Link></li>
                <li><Link href="/blog/increase-b2b-sales">How to Increase B2B Sales?</Link></li>
                <li><Link href="/blog/what-is-d2c">What Is D2C?</Link></li>
                <li><Link href="/blog/what-is-order-to-cash-o2c">What is O2C?</Link></li>
                <li><Link href="/blog/set-up-b2b-ecommerce-website">How To Setup B2B E-Commerce?</Link></li>
                <li><Link href="/blog/empower-sales-rep-with-digital-commerce">Empower Your Sales Representatives</Link></li>
            </ul>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer