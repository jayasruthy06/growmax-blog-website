import React from 'react'
import SubHero from '../../../components/SalesRepApp/SubHero'
import OtherDetails from '../../../components/SalesRepApp/OtherDetails';
import About from '../../../components/SalesRepApp/About';
import Testimonials from '../../../components/SalesRepApp/Testimonials';
import GetStarted from '../../../components/HomePage/GetStarted';

export const metadata = {
  title: "Internal Collaboration for Ecommerce Stores | Growmax",
  description: "Enhance teamwork and streamline internal collaboration for ecommerce stores with Growmax’s integrated tools designed for efficiency and growth.",
  openGraph: {
    title: "Internal Collaboration for Ecommerce Stores | Growmax",
    description: "Enhance teamwork and streamline internal collaboration for ecommerce stores with Growmax’s integrated tools designed for efficiency and growth.",
    url: "https://www.growmax.io/internal-collaboration",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/InternalCollabImg/internal1.png",
        width: 1200,
        height: 630,
        alt: "Enhance teamwork and streamline internal collaboration for ecommerce stores with Growmax’s integrated tools designed for efficiency and growth.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "Internal Collaboration for Ecommerce Stores | Growmax",
    description: "Enhance teamwork and streamline internal collaboration for ecommerce stores with Growmax’s integrated tools designed for efficiency and growth.",
    images: ["https://www.growmax.io/images/InternalCollabImg/internal1.png"],
    site: "@growmax_io",
  },
};

const InternalCollaboration = () => {
  return (
    <div>
        <SubHero
            title="Streamlined Internal Collaboration for a Superior Customer Experience"
            subtitle="Maintain full visibility over your online store operations and ensure a smooth, efficient workflow. Collaborate seamlessly with internal teams using an integrated Kanban board to visualize tasks, track progress, and optimize processes—ultimately enhancing the customer experience."
            image="/images/InternalCollabImg/internal1.png"
        />
        <About
            heading="Synchronize Efforts, Elevate Quality"
            subtitle="Collaborate seamlessly with your internal team to streamline workflows and consistently deliver an exceptional customer experience."
            title1="Manage Tasks with Kanban Boards"
            content1="Simplify task management with intuitive Kanban boards. Quickly configure boards to create, prioritize, assign, and complete tasks without obstacles."
            image1="/images/InternalCollabImg/internal2.png"
            title2="Create Streamlined Workflows"
            content2="Set up targeted workflows for orders or quotes to monitor progress and respond promptly to your B2B customers with ease."
            image2="/images/InternalCollabImg/internal3.png"
            title3="Seamless Team Coordination"
            content3="Enable teams to create dedicated boards for internal collaboration—assigning, managing, and tracking tasks efficiently to boost productivity."
            image3="/images/InternalCollabImg/internal4.png"
        />
        <OtherDetails
            title="Build Custom Templates"
            subtitle="Design and configure templates tailored to your specific tasks and priorities, then easily replicate them for consistent and efficient task management."
            image="/images/InternalCollabImg/internal5.png"
        />
        <Testimonials
            title="&quot;Over 90% of transactions are done through this platform. It helped achieve 50% more organizational speed & higher visibility.&quot;"/>
        <GetStarted />
    </div>
  )
}

export default InternalCollaboration