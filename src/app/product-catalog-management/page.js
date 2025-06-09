import React from 'react'
import SubHero from '../../../components/SalesRepApp/SubHero'
import OtherDetails from '../../../components/SalesRepApp/OtherDetails';
import About from '../../../components/SalesRepApp/About';
import OtherFeatures from '../../../components/ProductCatalog/OtherFeatures';
import Testimonials from '../../../components/SalesRepApp/Testimonials';
import GetStarted from '../../../components/HomePage/GetStarted';

export const metadata = {
  title: "Product Catalog Management | Growmax",
  description: "Efficiently manage and organize your product catalog with Growmax's comprehensive tools designed for B2B ecommerce success.",
  openGraph: {
    title: "Product Catalog Management | Growmax",
    description: "Efficiently manage and organize your product catalog with Growmax's comprehensive tools designed for B2B ecommerce success.",
    url: "https://www.growmax.io/product-catalog-management",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/ProductCatalog/productcatalog.png",
        width: 1200,
        height: 630,
        alt: "Efficiently manage and organize your product catalog with Growmax's comprehensive tools designed for B2B ecommerce success.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Catalog Management | Growmax",
    description: "Efficiently manage and organize your product catalog with Growmax's comprehensive tools designed for B2B ecommerce success.",
    images: ["https://www.growmax.io/images/ProductCatalog/productcatalog.png"],
    site: "@growmax_io",
  },
};

const ProductCatalogManagement = () => {
  return (
    <div>
        <SubHero
            title="Customer-Centric Catalog Management"
            subtitle="Design and manage your product catalog with the customer experience in mind. Ensure products are clearly organized, easily searchable, and visually accessible—helping customers find exactly what they need with minimal effort."
            image="/images/ProductCatalog/productcatalog.png"
        />
        <About
            heading="Enhance Catalog Management with Powerful Features"
            subtitle="Leverage a robust set of responsive tools to make your product catalog intuitive, flexible, and fully customizable—ensuring a seamless experience for both administrators and customers."
            title1="Customer-Specific Catalogs & Pricing"
            content1="Tailor your product catalog to meet the unique needs of different customer groups. With Growmax, you can easily configure catalogs and set customized pricing for each group, enhancing personalization and boosting sales efficiency."
            image1="/images/ProductCatalog/productcatalog1.png"
            title2="Enhanced Product Search with Keyword Mapping"
            content2="Boost customer satisfaction by making product discovery effortless. Enable flexible search options through keyword mapping, allowing customers to find products using synonyms, variants, or alternative terms."
            image2="/images/ProductCatalog/productcatalog2.png"
            title3="Seamless Cross-Selling and Upselling"
            content3="Increase average order value by showcasing frequently bought together items, related accessories, and similar products. Make your store smarter and more intuitive with strategic product recommendations."
            image3="/images/ProductCatalog/productcatalog3.png"
        />
        <OtherDetails
            title="Contextual Product Search"
            subtitle="Empower your customers to find products faster and more accurately with contextual search capabilities. With Growmax&apos;s Elastic Search integration, users can search by product descriptions, IDs, features, and more—delivering relevant results in real time."
            image="/images/ProductCatalog/productcatalog4.png"
        />
        <OtherDetails
            title="Flexible Product Variant Filters"
            subtitle="Enhance the shopping experience by enabling product filtering based on key attributes such as color, size, and other variants. Easily configure these filters to help customers quickly find the exact product version they need."
            image="/images/ProductCatalog/productcatalog5.png"
        />
        <OtherDetails
            title="Effortless Product Management via Excel/CSV Upload"
            subtitle="Eliminate manual data entry with bulk product uploads. Simply import your product details using Excel or CSV files and streamline catalog updates in just a few clicks with Growmax."
            image="/images/ProductCatalog/productcatalog6.png"
        />
        <OtherFeatures />
        <Testimonials 
            title="&quot;Over 90% of transactions are done through this platform. It helped achieve 50% more organizational speed & higher visibility.&quot;"
        />
        <GetStarted />
    </div>
  )
}

export default ProductCatalogManagement