import React from 'react'
import BlogHeader from '../../../../components/Blog/BlogHeader';
import BlogItem from '../../../../components/Blog/BlogItem';
import BlogDisplay from '../../../../components/Blog/BlogDisplay';

export const metadata = {
  title: "All Articles About B2B E-Commerce",
  description: "Discover expert articles and insights on B2B e-commerce strategies, trends, and best practices to help your business grow with Growmax.",
  openGraph: {
    title: "All Articles About B2B E-Commerce",
    description: "Discover expert articles and insights on B2B e-commerce strategies, trends, and best practices to help your business grow with Growmax.",
    url: "https://www.growmax.io/category/b2b-ecommerce",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/HomePageImg/growmax_logo.png",
        width: 1200,
        height: 630,
        alt: "Discover expert articles and insights on B2B e-commerce strategies, trends, and best practices to help your business grow with Growmax.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "All Articles About B2B E-Commerce",
    description: "Discover expert articles and insights on B2B e-commerce strategies, trends, and best practices to help your business grow with Growmax.",
    images: ["https://www.growmax.io/images/HomePageImg/growmax_logo.png"],
    site: "@growmax_io",
  },
}


const b2b = () => {
  return (
    <div>
        <BlogHeader
            uppertext="B2B E-COMMERCE"
        />
        <BlogDisplay
            filtered="B2B COMMERCE"
        />
    </div>
  )
}

export default b2b