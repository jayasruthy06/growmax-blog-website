import React from 'react'
import Contact from '../../../components/Contact/Contact';
import Testimonials from '../../../components/SalesRepApp/Testimonials';
import GetStarted from '../../../components/HomePage/GetStarted';

export const metadata = {
  title: "Growmax | Contact us | B2B eCommerce, Salesman App, Retailer App",
  description: "Get in touch with Growmax for support and inquiries about our B2B eCommerce platform, Salesman App, and Retailer App solutions.",
  openGraph: {
    title: "Growmax | Contact us | B2B eCommerce, Salesman App, Retailer App",
    description: "Get in touch with Growmax for support and inquiries about our B2B eCommerce platform, Salesman App, and Retailer App solutions.",
    url: "https://www.growmax.io/contact",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/HomePageImg/growmax_logo.png",
        width: 1200,
        height: 630,
        alt: "Get in touch with Growmax for support and inquiries about our B2B eCommerce platform, Salesman App, and Retailer App solutions.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "Growmax | Contact us | B2B eCommerce, Salesman App, Retailer App",
    description: "Get in touch with Growmax for support and inquiries about our B2B eCommerce platform, Salesman App, and Retailer App solutions.",
    images: ["https://www.growmax.io/images/HomePageImg/growmax_logo.png"],
    site: "@growmax_io",
  },
};

const ContactPg = () => {
    return(
    <div>
        <Contact/>
        <Testimonials
            title="&quot;Over 90% of transactions are done through this platform. By automating the customer quotation &  approval process, Quote to order process helped us achieve 50% more organizational speed & higher visibility.&quot;"
        />
        <GetStarted/>
    </div>
    )
}

export default ContactPg