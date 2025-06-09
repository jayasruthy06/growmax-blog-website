import React from 'react'
import SubHero from "../../../components/SalesRepApp/SubHero";
import About from "../../../components/SalesRepApp/About";
import OtherDetails from '../../../components/SalesRepApp/OtherDetails';
import Testimonials from '../../../components/SalesRepApp/Testimonials';
import GetStarted from "../../../components/HomePage/GetStarted";
import Products from "../../../components/HomePage/Products";

export const metadata = {
  title: "Quote Management Software for B2B Ecommerce | Growmax",
  description: "Streamline your B2B ecommerce quoting process with Growmax’s powerful quote management software designed to boost sales and improve customer experience.",
  openGraph: {
    title: "Quote Management Software for B2B Ecommerce | Growmax",
    description: "Streamline your B2B ecommerce quoting process with Growmax’s powerful quote management software designed to boost sales and improve customer experience.",
    url: "https://www.growmax.io/quote-management",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/QuoteManagementImg/quote1.png",
        width: 1200,
        height: 630,
        alt: "Streamline your B2B ecommerce quoting process with Growmax’s powerful quote management software designed to boost sales and improve customer experience.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "Quote Management Software for B2B Ecommerce | Growmax",
    description: "Streamline your B2B ecommerce quoting process with Growmax’s powerful quote management software designed to boost sales and improve customer experience.",
    images: ["https://www.growmax.io/images/QuoteManagementImg/quote1.png"],
    site: "@growmax_io",
  },
};

const QuoteManagement = () => {
  return (
    <div>
            <SubHero 
                title = "Accelerate Quoting with Digital Speed"
                subtitle = "Today’s customers don’t wait—and neither should you. Empower your customers to initiate Requests for Quotes (RFQs) or enable your sales representatives to generate quotes anytime, from anywhere. Deliver fast, seamless quote experiences and stay one step ahead of the competition."
                image = "/images/QuoteManagementImg/quote1.png"
            />
            <About 
                heading = "What Can Quotes Do?"
                subtitle = "In B2B selling, strong relationships and personalized experiences are key—because every customer is unique. Whether you’re dealing with multi-currency requirements or complex approval workflows, your quoting process should be agile. With the right tools, you can create and submit accurate, customized quotes in minutes—not days."
                title1 = "Empower Your Sales Teams With Intelligence"
                content1 = "Equip your sales teams with customer-specific pricing, terms, and full visibility into past quotes—enabling them to make informed, accurate pricing decisions with confidence."
                image1 = "/images/QuoteManagementImg/quote2.jpeg"
                title2 = "Accelerate Approvals, Accelerate Sales"
                content2 = "Accelerate your sales cycle with streamlined quote approvals. Managers can review and approve quotes from anywhere, at any time—ensuring deals move forward without delays."
                image2 = "/images/QuoteManagementImg/quote3.jpeg"
                title3 = "Seamless Quote-to-Order Conversion"
                content3 = "Make it easy for customers to convert approved quotes into orders. Facilitate smooth transactions by allowing document sharing and order confirmations—all within the same platform."
                image3 = "/images/QuoteManagementImg/quote4.jpg"
            />
            <OtherDetails 
                title = "Quote Versions & Approval Flow"
                subtitle = "Comprehensively retain all iterations of quotes to establish a detailed audit trail that facilitates robust analytics and informed decision-making. All modifications—including adjustments to currency, product selections, pricing, and client communications—are meticulously documented to ensure complete transparency and accountability. Furthermore, the approval workflow is fully automated to streamline the submission process, reduce turnaround times, and enhance operational efficiency."
                image = "/images/QuoteManagementImg/quote5.png"
            />
            <Testimonials 
                title = "&quot;100% of our dealers special price request process is done through our order management portal. Our response to our dealers is now 5 times faster than before.&quot;"    
            />
            <Products />
            <GetStarted />
    </div>
  )
}

export default QuoteManagement