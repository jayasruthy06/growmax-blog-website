import React from 'react'
import SubHero from '../../../components/SalesRepApp/SubHero'
import About from '../../../components/SalesRepApp/About';
import OtherDetails from '../../../components/SalesRepApp/OtherDetails';
import Testimonials from '../../../components/SalesRepApp/Testimonials';
import GetStarted from '../../../components/HomePage/GetStarted';

export const metadata = {
    title: "B2B2C Commerce Cloud - Growmax",
    description: "Growmax B2B2C Commerce Cloud empowers businesses to connect with end customers through a scalable, secure platform for seamless digital commerce.",
    openGraph: {
    title: "B2B2C Commerce Cloud - Growmax",
    description: "Growmax B2B2C Commerce Cloud empowers businesses to connect with end customers through a scalable, secure platform for seamless digital commerce.",
    url: "https://www.growmax.io/b2b2c-commerce-cloud",
    siteName: "Growmax",
    images: [
      {
        url: "/images/CommerceCloudImg/b2b2c.png",
        width: 1200,
        height: 630,
        alt: "Growmax B2B2C Commerce Cloud empowers businesses to connect with end customers through a scalable, secure platform for seamless digital commerce.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B2C Commerce Cloud - Growmax",
    description: "Growmax B2B2C Commerce Cloud empowers businesses to connect with end customers through a scalable, secure platform for seamless digital commerce.",
    images: ["/images/CommerceCloudImg/b2b2c.png"],
    site: "@growmax_io",
  },
};

const b2b2cfunc = () => {
  return (
    <div>
        <SubHero
            title = "Leverage the Power of B2B2C Commerce with Growmax"
            subtitle = "Drive scalable growth by unlocking new business opportunities through Growmax&apos;s B2B2C Commerce Cloud. Expand your digital presence, sell directly to end customers, and strengthen partner collaboration—all within a single unified platform."
            image = "/images/CommerceCloudImg/b2b2c.png"
        />
        <About
            heading = "Build a Thriving B2B2C Marketplace with Growmax"
            subtitle = "Gain deeper client insights and uncover high-value opportunities by creating a flexible, scalable, and reliable B2B2C marketplace powered by Growmax."
            title1 = "Know Your Customers Better with Growmax&apos;s B2B2C Commerce Cloud"
            content1 = "Launch a powerful online store with Growmax&apos;s B2B2C Commerce Cloud. Gain valuable insights into customer behavior, identify upselling opportunities, and run targeted digital campaigns to drive sales and engagement."
            image1 = "/images/B2B2C/b2b2c1.png"
            title2 = "Add Value Across the Ecosystem with Growmax&apos;s B2B2C Commerce Cloud"
            content2 = "Foster a win-win environment by leveraging Growmax&apos;s B2B2C Commerce Cloud. Gain deeper customer insights, offer competitive pricing, boost order volumes, and empower your channel partners to grow their sales alongside you."
            image2 = "/images/B2B2C/b2b2c2.png"
            title3 = "Avoid Channel Conflicts with Growmax&apos;s B2B2C Commerce Cloud"
            content3 = "Maintain transparency with your partners while boosting their sales. Enable customers to place orders directly with your brand, while your channel partners manage fulfillment and transactions—ensuring collaboration without conflict."
            image3 = "/images/B2B2C/b2b2c3.png"
        />
        <OtherDetails
            title = "Reduce Supply Chain Costs with Growmax"
            subtitle= "Optimize your logistics by supplying products in bulk to channel partners located near your customer base. Lower shipping expenses, streamline inventory management, and save valuable time—enhancing overall cost-efficiency and operational effectiveness."
            image = "/images/B2B2C/b2b2c4.png"
        />
        <Testimonials
            title= "&quot;Over 90% of transactions are done through this platform. It helped achieve 50% more organizational speed & higher visibility.&quot;"
        />
        <GetStarted/>
    </div>
  )
}

export default b2b2cfunc