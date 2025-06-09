import React from 'react'
import SubHero from '../../../components/SalesRepApp/SubHero'
import OtherDetails from '../../../components/SalesRepApp/OtherDetails';
import About from '../../../components/SalesRepApp/About';
import Testimonials from '../../../components/SalesRepApp/Testimonials';
import GetStarted from '../../../components/HomePage/GetStarted';

export const metadata = {
  title: "Storefront Management System | Growmax",
  description: "Manage and customize your online storefront effortlessly with Growmax’s comprehensive storefront management system for B2B ecommerce.",
  openGraph: {
    title: "Storefront Management System | Growmax",
    description: "Manage and customize your online storefront effortlessly with Growmax’s comprehensive storefront management system for B2B ecommerce.",
    url: "https://www.growmax.io/storefront-management",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/StoreFront/storefront1.png",
        width: 1200,
        height: 630,
        alt: "Manage and customize your online storefront effortlessly with Growmax’s comprehensive storefront management system for B2B ecommerce.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "Storefront Management System | Growmax",
    description: "Manage and customize your online storefront effortlessly with Growmax’s comprehensive storefront management system for B2B ecommerce.",
    images: ["https://www.growmax.io/images/StoreFront/storefront1.png"],
    site: "@growmax_io",
  },
};

const StoreFrontManagement = () => {
  return (
    <div>
        <SubHero
            title="Efficient Storefront Management for Marketers"
            subtitle="Easily configure and manage your online store to align with your marketing goals. Growmax empowers you with advanced optimization tools to boost conversion rates and scale your business with efficiency."
            image="/images/StoreFront/storefront1.png"
        />
        <About
            heading="Upgrade the Way You Sell"
            subtitle="Boost sales productivity with strategic storefront management and streamlined operations that drive better performance and customer engagement."
            title1="Get More Done—No Coding Required"
            content1="Easily build and customize your online store without writing a single line of code. With intuitive drag-and-drop tools, you can design your homepage, set up product listings, organize categories, and more—all on a powerful no-code platform."
            image1="/images/StoreFront/storefront2.png"
            title2="One Account, Multiple Storefronts"
            content2="Effortlessly manage multiple storefronts, including both B2B and B2C, from a single admin account. Simplify operations while maintaining dedicated experiences for each customer segment."
            image2="/images/StoreFront/storefront3.png"
            title3="Harness the Power of Progressive Web Apps (PWA)"
            content3="Deliver app-like experiences directly from your website. PWAs can be installed on desktop or mobile devices without app store approval, offering faster performance, offline access, and seamless engagement for your customers."
            image3="/images/StoreFront/storefront4.png"
        />
        <OtherDetails
            title="Enjoy Complete Customization Freedom"
            subtitle="Gain full control over your store’s look and feel. Customize everything—from colors and logos to domains and customer-specific catalogs—to effectively reflect your brand identity and enhance user experience."
            image="/images/StoreFront/storefront5.png"
        />
        <OtherDetails
            title="Effortless SEO Optimization"
            subtitle="Eliminate the hassle of manual SEO tasks. Benefit from SEO-optimized pages with lightning-fast load speeds, helping your store rank higher and enabling customers to find exactly what they’re looking for—without extra effort on your part."
            image="/images/StoreFront/storefront6.png"
        />
        <Testimonials
            title="&quot;Over 90% of transactions are done through this platform. It helped achieve 50% more organizational speed & higher visibility.&quot;"/>
        <GetStarted />
    </div>
  )
}

export default StoreFrontManagement