import React from 'react'
import BlogHeader from '../../../../components/Blog/BlogHeader';
import BlogDisplay from '../../../../components/Blog/BlogDisplay';

export const metadata = {
  title: "All Articles About Sales",
  description: "Discover expert articles on sales strategies, B2B sales techniques, lead generation, and closing deals to boost your business growth with Growmax.",
  openGraph: {
    title: "All Articles About Sales",
    description: "Discover expert articles on sales strategies, B2B sales techniques, lead generation, and closing deals to boost your business growth with Growmax.",
    url: "https://www.growmax.io/category/sales",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/HomePageImg/growmax_logo.png",
        width: 1200,
        height: 630,
        alt: "Discover expert articles on sales strategies, B2B sales techniques, lead generation, and closing deals to boost your business growth with Growmax.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "All Articles About Sales",
    description: "Discover expert articles on sales strategies, B2B sales techniques, lead generation, and closing deals to boost your business growth with Growmax.",
    images: ["https://www.growmax.io/images/HomePageImg/growmax_logo.png"],
    site: "@growmax_io",
  },
}

const sales = () => {
   
  return (
    <div>
        <BlogHeader
            uppertext="Sales"
        />
        <BlogDisplay
            filtered="SALES"
        />
    </div>
  )
}

export default sales