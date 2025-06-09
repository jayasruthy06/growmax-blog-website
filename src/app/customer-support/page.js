import React from 'react'
import SubHero from '../../../components/SalesRepApp/SubHero'
import OtherDetails from '../../../components/SalesRepApp/OtherDetails';
import About from '../../../components/SalesRepApp/About';
import Testimonials from '../../../components/SalesRepApp/Testimonials';
import GetStarted from '../../../components/HomePage/GetStarted';

export const metadata = {
  title: "In-built customer support system | Growmax",
  description: "Discover Growmax's in-built customer support system designed to streamline communication, enhance service, and improve customer satisfaction.",
  openGraph: {
    title: "In-built customer support system | Growmax",
    description: "Discover Growmax's in-built customer support system designed to streamline communication, enhance service, and improve customer satisfaction.",
    url: "https://www.growmax.io/customer-support",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/CustomerSupportImg/customer1.png",
        width: 1200,
        height: 630,
        alt: "Discover Growmax's in-built customer support system designed to streamline communication, enhance service, and improve customer satisfaction.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "In-built customer support system | Growmax",
    description: "Discover Growmax's in-built customer support system designed to streamline communication, enhance service, and improve customer satisfaction.",
    images: ["https://www.growmax.io/images/CustomerSupportImg/customer1.png"],
    site: "@growmax_io",
  },
};

const InternalCollaboration = () => {
  return (
    <div>
        <SubHero
            title="Build Trusted Relationships with an Integrated Support System"
            subtitle="Deliver seamless customer support without relying on third-party tools. Growmax&apos;s built-in support solution lets you assist customers and manage field service assignments—all within a single, unified platform for happier, more satisfied customers."
            image="/images/CustomerSupportImg/customer1.png"
        />
        <About
            heading="Resolve Customer Issues Swiftly, Enhance Satisfaction"
            subtitle="Proactively support your customers and address their concerns promptly to foster loyalty and build lasting satisfaction."
            title1="No Third-Party Integration Needed"
            content1="Enable customers to purchase products and raise support tickets seamlessly within the same platform—no external integrations required."
            image1="/images/CustomerSupportImg/customer2.png"
            title2="Efficient Field Service Management"
            content2="Minimize downtime, accelerate response times, and schedule appointments effortlessly to deliver outstanding field service experiences."
            image2="/images/CustomerSupportImg/customer3.png"
            title3="Conversational Ticket Management"
            content3="Engage with customers in real-time, create tickets on the go, and resolve issues promptly to boost the reliability and responsiveness of your support system."
            image3="/images/CustomerSupportImg/customer4.png"
        />
        <OtherDetails
            title="Coordinate Tasks Internally"
            subtitle="Enhance team collaboration by managing ticket resolutions together. Add internal notes, assign tasks within the team, and monitor progress to ensure timely and effective issue resolution."
            image="/images/CustomerSupportImg/customer5.png"
        />
        <Testimonials
            title="&quot;Over 90% of transactions are done through this platform. It helped achieve 50% more organizational speed & higher visibility.&quot;"/>
        <GetStarted />
    </div>
  )
}

export default InternalCollaboration