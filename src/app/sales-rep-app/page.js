import React from 'react';
import SubHero from "../../../components/SalesRepApp/SubHero";
import About from "../../../components/SalesRepApp/About";
import OtherDetails from "../../../components/SalesRepApp/OtherDetails";
import Testimonials from "../../../components/SalesRepApp/Testimonials";
import GetStarted from "../../../components/HomePage/GetStarted";

export const metadata = {
  title: "B2B apps for sales people | Growmax",
  description: "Discover Growmax’s powerful B2B apps designed to help salespeople manage leads, track performance, and close deals efficiently.",
  openGraph: {
    title: "B2B apps for sales people | Growmax",
    description: "Discover Growmax’s powerful B2B apps designed to help salespeople manage leads, track performance, and close deals efficiently.",
    url: "https://www.growmax.io/sales-rep-app",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/SalesRepImg/salesrep.jpeg",
        width: 1200,
        height: 630,
        alt: "Discover Growmax’s powerful B2B apps designed to help salespeople manage leads, track performance, and close deals efficiently.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B apps for sales people | Growmax",
    description: "Discover Growmax’s powerful B2B apps designed to help salespeople manage leads, track performance, and close deals efficiently.",
    images: ["https://www.growmax.io/images/SalesRepImg/salesrep.jpeg"],
    site: "@growmax_io",
  },
};

const SalesRepApp = () => {
  return (
    <div>
        <SubHero 
          title = "Empower Your Sales Team to Sell Smarter and Faster"
          subtitle = "Equip your salespeople with everything they need — from product details to customer insights — right at their fingertips. With Growmax, your team can effortlessly showcase products, capture orders, and manage sales activities on the go, all through a powerful and intuitive mobile experience."
          image = "/images/SalesRepImg/salesrep.jpeg"
        />
        <About 
          title1 = "Streamline Ordering with Ease and Speed"
          content1 = "Empower your sales reps to focus on meaningful customer interactions. With Growmax, they can place orders instantly, check real-time product availability, and manage the entire ordering process seamlessly from their mobile devices — even while on the move."
          image1 = "/images/SalesRepImg/salesrep1.png"
          title2 = "Stay in Control of Your Retail Execution"
          content2 = "Gain full visibility into your field operations. The Growmax Sales-Rep App enables you to monitor and manage every aspect of retail execution, ensuring consistency, compliance, and performance — all from a centralized platform."
          image2 = "/images/SalesRepImg/salesrep2.png"
          title3 = "A Lightweight Mobile App, Ready to Use Anywhere"
          content3 = "Growmax is built as a Progressive Web App (PWA), offering the speed and convenience of a native app without the hassle of app store installations. Easily install it on any mobile or desktop device directly from the web for immediate access and enhanced user experience."
          image3 = "/images/SalesRepImg/salesrep3.png"/>
        <OtherDetails 
          title = "Deliver a Personalized Customer Experience"
          subtitle = "Empower your sales team to tailor product catalogs based on each customer’s eligibility and interests. Showcase only the most relevant products and apply customer-specific pricing to ensure a customized and compelling sales approach."
          image = "/images/SalesRepImg/other1.jpg"
        />
        <OtherDetails 
          title = "Stay Updated with Real-Time Inventory Availability"
          subtitle = "Provide your sales team with real-time access to inventory data. With accurate stock visibility, they can make informed recommendations, manage customer expectations, and enhance service quality."
          image = "/images/SalesRepImg/other2.jpg"
        />
        <OtherDetails 
          title = "Seamlessly Sync Orders with Your ERP System"
          subtitle = "Automate order synchronization between your sales platform and ERP system to eliminate manual data entry. This ensures faster order confirmations, streamlined processing, and quicker product shipping — all with minimal human intervention."
          image = "/images/SalesRepImg/other3.jpg"
        />
        <OtherDetails 
          title = "Enhance Cross-Selling and Upselling with a Digital Catalog"
          subtitle = "Replace traditional catalogs with a dynamic digital solution. Enable your sales reps to recommend related and frequently purchased products with ease. By leveraging past purchase data, they can effectively cross-sell and upsell, driving higher order values and customer satisfaction."
          image = "/images/SalesRepImg/other4.jpg"
        />
        <Testimonials 
          title = "&quot;Over 90% of transactions are done through this platform. It helped achieve 50% more organizational speed & higher visibility.&quot;"/>
        <GetStarted />
    </div>
  )
}

export default SalesRepApp