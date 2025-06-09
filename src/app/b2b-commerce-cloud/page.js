import React from 'react'
import Companies from "../../../components/CommerceCloud/Companies";
import SubHero from "../../../components/SalesRepApp/SubHero";
import Products from "../../../components/HomePage/Products";
import Testimonials from "../../../components/SalesRepApp/Testimonials";
import GetStarted from "../../../components/HomePage/GetStarted";
import OtherDetails from "../../../components/SalesRepApp/OtherDetails";
import OtherDetailsB from '../../../components/CommerceCloud/OtherDetailsB';

export const metadata = {
  title: "B2B Commerce Cloud | B2B Commerce Platform | Growmax",
  description: "Growmax B2B Commerce Cloud offers scalable, secure, and customizable solutions for manufacturers and wholesalers to streamline their digital sales and collaboration.",
  openGraph: {
    title: "B2B Commerce Cloud | B2B Commerce Platform | Growmax",
    description: "Growmax B2B Commerce Cloud offers scalable, secure, and customizable solutions for manufacturers and wholesalers to streamline their digital sales and collaboration.",
    url: "https://www.growmax.io/b2b-commerce-cloud",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/CommerceCloudImg/ecommerce1.png",
        width: 1200,
        height: 630,
        alt: "Growmax B2B Commerce Cloud offers scalable, secure, and customizable solutions for manufacturers and wholesalers to streamline their digital sales and collaboration.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Commerce Cloud | B2B Commerce Platform | Growmax",
    description: "Growmax B2B Commerce Cloud offers scalable, secure, and customizable solutions for manufacturers and wholesalers to streamline their digital sales and collaboration.",
    images: ["https://www.growmax.io/images/CommerceCloudImg/ecommerce1.png"],
    site: "@growmax_io",
  },
};

const CommerceCloud = () => {
  return (
    <div>
      <SubHero 
        title = "Customer Experience Cloud for Industrial Clients"
        subtitle = "Enhance your customer engagement with a dedicated Customer Experience Portal seamlessly integrated with SAP. Empower your customers with real-time, 100% visibility into their interactions—eliminating delays in quotation submissions, order status updates, and support ticket tracking. Deliver transparency, efficiency, and satisfaction at every step."
        image = "/images/CommerceCloudImg/ecommerce1.png"/>
      <Companies />
        <OtherDetailsB
          title = "Unlock Scalable Growth with Growmax&apos;s B2B2C Commerce Cloud"
          subtitle = "Empower your business to scale efficiently by leveraging Growmax&apos;s B2B2C Commerce Cloud. Expand your digital reach, engage directly with end customers, and drive sales—while maintaining strong partnerships and collaboration with your channel partners."
          image = "/images/CommerceCloudImg/b2b2c.png"
          hreflink = "/b2b2c-commerce-cloud"
        />
        <OtherDetailsB
          title = "Tap into Greater Opportunities with Growmax&apos;s B2B2B Commerce Cloud"
          subtitle = "Gain deeper insights into buyer behavior, streamline your sales processes, and boost profitability with Growmax&apos;s B2B2B Commerce Cloud. Digitally connect with retailers and deliver your products efficiently—while continuing to collaborate seamlessly with your distribution partners."
          image ="/images/CommerceCloudImg/b2b2b.png"
          hreflink = "/b2b2b-commerce-cloud"
        />
        <OtherDetails 
        title = "Unified and Flexible Collaborative Commerce for B2B Selling"
        subtitle = "Growmax&apos;s robust commerce platform enables seamless management of both existing and new customers through a single, unified system. Whether orders are placed by your sales team or through customer self-service, the platform ensures a single source of truth—enhancing accuracy, collaboration, and customer satisfaction."
        image = "/images/CommerceCloudImg/ecommerce2.png"/>
        <OtherDetails 
        title = "Comprehensive Quotation & Order Management"
        subtitle = "Streamline the buying experience with a flexible quotation and order management solution. Effortlessly capture all quotations and orders—including version history—and ensure seamless connectivity between your sales representatives and customers for greater transparency and responsiveness."
        image = "/images/CommerceCloudImg/ecommerce3.png"/>
        <OtherDetails 
        title = "Approval Workflows & Project Collaboration"
        subtitle = "Simplify the sales quote approval process with customizable workflows that eliminate internal email chains. Enable real-time collaboration through task management, ensuring faster turnaround and a more cohesive customer experience."
        image = "/images/CommerceCloudImg/ecommerce4.png"/>
        <OtherDetails 
        title = "Integrated Customer Support & Field Service"
        subtitle = "No need for separate tools—support your customers from a unified platform. Empower internal teams with a 360-degree view of customer interactions, enabling faster issue resolution and stronger relationships."
        image = "/images/CommerceCloudImg/ecommerce.png"/>
        <OtherDetails 
        title = "Dynamic Product Catalog & Filter Management"
        subtitle = "Deliver a smooth browsing experience with an intuitive, faceted search. Help customers quickly find the right products using filters such as size, color, brand, or even custom attributes—ensuring better discoverability and higher conversion rates."
        image = "/images/CommerceCloudImg/ecommerce6.png"/>
      <Products />
      <Testimonials 
        title = "&quot;Over 90% of transactions are done through this platform. By automating the customer quotation &  approval process, Quote to order process helped us achieve 50% more organizational speed & higher visibility.&quot;"
      />
      <GetStarted />
    </div>
  )
}

export default CommerceCloud