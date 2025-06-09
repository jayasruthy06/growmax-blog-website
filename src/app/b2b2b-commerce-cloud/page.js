import React from 'react'
import SubHero from '../../../components/SalesRepApp/SubHero';
import About from '../../../components/SalesRepApp/About';
import OtherDetails from '../../../components/SalesRepApp/OtherDetails';
import Testimonials from '../../../components/SalesRepApp/Testimonials';
import GetStarted from '../../../components/HomePage/GetStarted';

export const metadata = {
    title: "B2B2B Commerce Cloud - Growmax",
    description: "Growmax B2B2B Commerce Cloud delivers seamless, scalable solutions to connect manufacturers, wholesalers, and retailers for efficient digital trade.",
    openGraph: {
    title: "B2B2B Commerce Cloud - Growmax",
    description: "Growmax B2B2B Commerce Cloud delivers seamless, scalable solutions to connect manufacturers, wholesalers, and retailers for efficient digital trade.",
    url: "https://www.growmax.io/b2b2b-commerce-cloud",
    siteName: "Growmax",
    images: [
      {
        url: "/images/CommerceCloudImg/b2b2b.png",
        width: 1200,
        height: 630,
        alt: "Growmax B2B2B Commerce Cloud delivers seamless, scalable solutions to connect manufacturers, wholesalers, and retailers for efficient digital trade.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B2B Commerce Cloud - Growmax",
    description: "Growmax B2B2B Commerce Cloud delivers seamless, scalable solutions to connect manufacturers, wholesalers, and retailers for efficient digital trade.",
    images: ["/images/CommerceCloudImg/b2b2b.png"],
    site: "@growmax_io",
  },
};


const b2b2bfunc = () => {
  return (
    <div>
        <SubHero
            title = "Unlock Greater B2B2B Opportunities with Growmax"
            subtitle = "Leverage Growmax&apos;s B2B2B Commerce Cloud to gain insights into buyer behavior, streamline your sales processes, and drive higher profitability. Digitally connect with retailers and sell your products efficiently—while continuing to collaborate with your trusted partners."
            image = "/images/CommerceCloudImg/b2b2b.png"
        />
        <About
            heading = "Build the Ideal B2B2B Marketplace for Your Business"
            subtitle = "Maximize your business potential by creating a thriving B2B2B marketplace with Growmax."
            title1 = "Understand Your Customers Better"
            content1 = "Gain deep insights into customer behavior, run targeted digital campaigns, identify upselling opportunities, and adapt your sales strategies to align with customer preferences."
            image1 = "/images/B2B2B/b2b2b1.png"
            title2 = "Avoid Partner Conflicts"
            content2 = "Sell directly to customers without disrupting your partners&apos; business. Allow customers to place orders seamlessly while your partners manage delivery and transactions, ensuring smooth collaboration."
            image2 = "/images/B2B2B/b2b2b2.png"
            title3 = "Retain Customers and Partners"
            content3 = "Create value for everyone in the ecosystem. Understand your customers, implement optimal pricing and sales strategies, boost order volumes, and support your retailers in growing their sales."
            image3 = "/images/B2B2B/b2b2b3.jpg"
        />
        <OtherDetails
            title = "Reduce Supply Chain Costs with Growmax"
            subtitle= "Optimize your logistics by supplying products in bulk to channel partners located near your customer base. Lower shipping expenses, streamline inventory management, and save valuable time—enhancing overall cost-efficiency and operational effectiveness."
            image = "/images/B2B2C/b2b2c4.png"
        />
        <OtherDetails
            title = "Offer Products at Competitive Prices"
            subtitle= "Empower your clients to negotiate and request quotations directly through the platform, eliminating third-party involvement. This enables you to offer the most competitive prices, enhancing customer satisfaction and loyalty."
            image = "/images/B2B2B/b2b2b4.png"
        />
        <Testimonials
            title= "&quot;Over 90% of transactions are done through this platform. It helped achieve 50% more organizational speed & higher visibility.&quot;"
        />
        <GetStarted/>
    </div>
  )
}

export default b2b2bfunc