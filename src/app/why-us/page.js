import React from 'react'
import SubHero from '../../../components/SalesRepApp/SubHero'
import About from '../../../components/SalesRepApp/About';
import OtherDetails from '../../../components/SalesRepApp/OtherDetails';
import Testimonials from '../../../components/SalesRepApp/Testimonials';
import GetStarted from '../../../components/HomePage/GetStarted';
import styles from "./Cards.module.css";
import Link from "next/link";

export const metadata = {
  title: "Why Us - Growmax",
  description: "Discover why Growmax is the preferred B2B eCommerce platform for manufacturers and distributors, offering scalable, customizable, and efficient solutions.",
  openGraph: {
    title: "Why Us - Growmax",
    description: "Discover why Growmax is the preferred B2B eCommerce platform for manufacturers and distributors, offering scalable, customizable, and efficient solutions.",
    url: "https://www.growmax.io/why-us",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/WhyUsImg/whyus1.jpg",
        width: 1200,
        height: 630,
        alt: "Discover why Growmax is the preferred B2B eCommerce platform for manufacturers and distributors, offering scalable, customizable, and efficient solutions.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Us - Growmax",
    description: "Discover why Growmax is the preferred B2B eCommerce platform for manufacturers and distributors, offering scalable, customizable, and efficient solutions.",
    images: ["https://www.growmax.io/images/WhyUsImg/whyus1.jpg"],
    site: "@growmax_io",
  },
};

const WhyUs = () => {
    const cardData = [
    {
      id: 1,
      title: "Growmax Enterprise eCommerce Platform",
      description: "Unlock your potential with Growmax — the eCommerce platform built to elevate your enterprise.",
      slug: "/enterprise-ecommerce-platform"
    },
    {
      id: 2,
      title: "Growmax B2B Marketplace",
      description: "Grow your business effortlessly with Growmax — the B2B marketplace for meaningful connections.",
      slug: "/b2b-marketplace"
    },
    {
      id: 3,
      title: "Growmax Commerce Cloud",
      description: "Effortlessly manage and scale your multi-branch B2B business with Growmax Commerce Cloud.",
      slug: "/commerce-cloud"
    },
    {
      id: 4,
      title: "Growmax Headless Commerce",
      description: "Elevate your brand with Growmax — the flexible headless commerce platform that puts you in control.",
      slug: "/headless-commerce"
    },
    {
      id: 5,
      title: "Growmax Wholesale E-Commerce",
      description: "Empower your wholesale business with Growmax — seamless bulk ordering anytime, anywhere.",
      slug: "/wholesale-ecommerce"
    },
    {
      id: 6,
      title: "Growmax Spare Parts E-Commerce",
      description: "Maximize your spare parts sales with Growmax — the smart eCommerce platform built for your success.",
      slug: "/spare-parts-ecommerce"
    }
  ];
  
  return (
    <div>
        <SubHero
            title = "A Holistic B2B eCommerce Platform for Manufacturers and Wholesalers"
            subtitle = "Growmax enables you to build a powerful B2B e-store that delivers both value and revenue. Create a responsive marketplace, enhance customer satisfaction, and strengthen your brand identity—all through our simple, efficient, and scalable eCommerce platform."
            image = "/images/WhyUsImg/whyus1.jpg"
        />
        <About
            heading = "Why Growmax"
            subtitle = "Why settle for a B2C eCommerce platform that only partially meets your B2B needs? Growmax is purpose-built to support the unique demands of B2B commerce—offering a complete, end-to-end solution tailored for manufacturers, wholesalers, and distributors."
            title1 = "Intuitive Commerce Platform with Minimal Coding"
            content1 = "Launch a fully functional B2B online store with ease—no coding required. Manage multiple storefronts, organize product catalogs, and create SEO-optimized pages, all through a user-friendly interface that accelerates your go-to-market strategy."
            image1 = "/images/WhyUsImg/whyus2.png"
            title2 = "Unified Online & Offline Order Management"
            content2 = "Whether it's customer self-ordering or sales reps placing orders on behalf of clients, Growmax lets you manage it all seamlessly from one centralized platform—eliminating the need for separate systems."
            image2 = "/images/WhyUsImg/whyus3.png"
            title3 = "99.9% Uptime and Reliability"
            content3 = "Growmax offers enterprise-grade reliability with 99.9% uptime. Your eCommerce store remains fully operational, ensuring uninterrupted business continuity without concerns about server downtime."
            image3 = "/images/WhyUsImg/whyus4.png"
        />
        <OtherDetails
            title = "Progressive Web App (PWA) for Seamless Access"
            subtitle = "Growmax offers a Progressive Web App that delivers a native app-like experience across both desktop and mobile devices. Customers can install the app directly from your website—no app store downloads or approvals required—making access faster, easier, and more convenient."
            image = "/images/WhyUsImg/whyus5.jpeg"
        />
        <OtherDetails
            title = "Powerful Sales Rep App"
            subtitle = "Equip your sales team with a dynamic mobile app designed for efficiency on the move. With Growmax, sales reps can place orders, access real-time inventory, manage quotes, and perform essential tasks anytime, anywhere—ensuring smarter selling and faster service."
            image = "/images/WhyUsImg/whyus6.png"
        />
        <OtherDetails
            title = "Transparent Quotation Management"
            subtitle = "Take full control of your B2B sales quotations with complete transparency. Create and manage quotes effortlessly, accelerate approvals through automation, retain version history, and track all customer communications. Enhance decision-making with built-in analytics and insights."
            image = "/images/WhyUsImg/whyus7.png"
        />
        <OtherDetails
            title = "Stay Informed, Keep Everyone Aligned"
            subtitle = "Ensure your team and customers are always up-to-date. Seamlessly manage customer orders, monitor outstanding payments, and provide real-time order status updates—enhancing transparency and trust at every stage of the buying journey."
            image = "/images/WhyUsImg/whyus8.png"
        />
        <OtherDetails
            title = "Deliver a Personalized B2B Experience"
            subtitle = "Tailor digital catalogs based on each customer's eligibility and preferences, including custom pricing and currency options. Enhance engagement by enabling quote negotiation and seamless conversion to orders—creating a truly personalized and efficient buying experience."
            image = "/images/WhyUsImg/whyus9.png"
        />
        <OtherDetails
            title = "Proactive Customer Support, Built In"
            subtitle = "Deliver fast, efficient service with Growmax's integrated customer support solution. Assign field service tasks, address customer issues promptly, and resolve queries without relying on third-party tools—ensuring a seamless support experience from start to finish."
            image = "/images/WhyUsImg/whyus10.png"
        />
        <OtherDetails
            title = "Seamless Internal Collaboration"
            subtitle = "Ensure smooth operations and deliver exceptional customer service by streamlining internal workflows. With Growmax, you can visualize tasks using Kanban boards, optimize team performance, and collaborate efficiently across departments—all from a single platform."
            image = "/images/WhyUsImg/whyus11.png"
        />
        <div className={styles.cardsContainer}>
            <h1 className={styles.mainHeading}>Explore More On Growmax</h1>
            <div className={styles.cardsGrid}>
                {cardData.map((card) => (
                    <div key={card.id} className={styles.card}>
                        <div className={styles.cardContent}>
                            <div className={styles.cardText}>
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <p className={styles.cardDescription}>{card.description}</p>
                            </div>
                            <div className={styles.cardButton}>
                              <Link href={card.slug}>
                              <button className={styles.viewPage}>View More</button>
                              </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Testimonials
            title = "&quot;Over 90% of transactions are done through this platform. It helped achieve 50% more organizational speed & higher visibility.&quot;"
        />
        <GetStarted/>
    </div>
  )
}

export default WhyUs