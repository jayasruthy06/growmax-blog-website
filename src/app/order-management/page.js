import React from 'react'
import SubHero from "../../../components/SalesRepApp/SubHero";
import About from "../../../components/SalesRepApp/About";
import OtherDetails from '../../../components/SalesRepApp/OtherDetails';
import Testimonials from '../../../components/SalesRepApp/Testimonials';
import GetStarted from '../../../components/HomePage/GetStarted';

export const metadata = {
  title: "Ecommerce Order Management | Growmax",
  description: "Manage your ecommerce orders efficiently with Growmax's comprehensive order management system designed for B2B businesses.",
  openGraph: {
    title: "Ecommerce Order Management | Growmax",
    description: "Manage your ecommerce orders efficiently with Growmax's comprehensive order management system designed for B2B businesses.",
    url: "https://www.growmax.io/order-management",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/OrderManagement/order1.png",
        width: 1200,
        height: 630,
        alt: "Manage your ecommerce orders efficiently with Growmax's comprehensive order management system designed for B2B businesses.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Order Management | Growmax",
    description: "Manage your ecommerce orders efficiently with Growmax's comprehensive order management system designed for B2B businesses.",
    images: ["https://www.growmax.io/images/OrderManagement/order1.png"],
    site: "@growmax_io",
  },
};


const OrderManagement = () => {
  return (
    <div>
        <SubHero 
            title = "A Comprehensive Solution for Efficient Order Management"
            subtitle = "Growmax offers an intuitive and powerful order management system designed specifically for B2B operations. Seamlessly configure, capture, and process all order transactions while ensuring a smooth and streamlined buying experience. Manage quotations efficiently, accelerate the sales cycle, and empower your customers with timely support from dedicated sales representatives. Experience end-to-end control and visibility over your order processes with Growmax."  
            image = "/images/OrderManagement/order1.png"  
        />
        <About 
            heading = "Improve Order Management and Enhance Customer Experience"
            subtitle = "Deliver a smooth, hassle-free ordering experience by streamlining your order management process. Empower your customers and sales teams with tools that reduce friction and accelerate the purchase journey."
            title1 = "Empower Customers with Self-Service Ordering"
            content1 = "Enable your customers to browse, select, and place orders independently—without the need for external assistance. By offering a seamless self-service experience, you enhance customer satisfaction and drive business growth, aligning with the growing preference for convenience and autonomy."
            image1 = "/images/OrderManagement/order2.png"
            title2 = "Facilitate Orders Through Sales Representatives"
            content2 = "Equip your sales team with the tools to place and manage orders on behalf of customers, especially for bulk or complex purchases. This functionality ensures a smooth ordering process and can be made available to customers as needed."
            image2 = "/images/OrderManagement/order3.png"
            title3 = "Support B2B-Specific Payment Terms and Conditions"
            content3 = "Accommodate customer-specific payment terms and conditions directly within the ordering process. Simplify account receivables with clear tracking of outstanding payments, helping you maintain cash flow and ensure timely collections."
            image3 = "/images/OrderManagement/order4.png"
        />
        <OtherDetails
            title = "Keep Customers Informed with Real-Time Order Progress"
            subtitle = "Enhance the customer experience by providing timely and transparent updates on every stage of their order journey. From invoice generation to shipment tracking, ensure customers have access to all relevant order details, fostering trust and satisfaction."
            image = "/images/OrderManagement/order5.png"
        />
        <OtherDetails
            title = "Enable One-Click Reordering"
            subtitle = "Simplify the purchasing process by allowing customers to quickly reorder previously purchased items directly from their order history. With just a single click, repeat orders become faster and more convenient—enhancing customer satisfaction and encouraging repeat business."
            image = "/images/OrderManagement/order6.png"
        />
        <OtherDetails
            title = "Simplify Bulk Ordering with CSV Upload"
            subtitle = "Streamline large-volume purchases by allowing customers to upload order details directly via Excel or CSV files. This convenient feature enables efficient bulk ordering by automatically populating the cart, saving time and reducing manual entry errors."
            image = "/images/OrderManagement/order7.png"
        />
        <Testimonials
            title = "&quot;Over 90% of transactions are done through this platform. It helped achieve 50% more organizational speed & higher visibility.&quot;"
        />
        <GetStarted />
    </div>
  )
}

export default OrderManagement