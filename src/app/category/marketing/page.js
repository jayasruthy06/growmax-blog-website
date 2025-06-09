import React from 'react'
import BlogHeader from '../../../../components/Blog/BlogHeader';
import BlogDisplay from '../../../../components/Blog/BlogDisplay';

export const metadata = {
  title: "All Articles About Marketing",
  description: "Explore expert marketing articles and strategies, including digital marketing, B2B campaigns, branding, and growth tips on Growmax.",
  openGraph: {
    title: "All Articles About Marketing",
    description: "Explore expert marketing articles and strategies, including digital marketing, B2B campaigns, branding, and growth tips on Growmax.",
    url: "https://www.growmax.io/category/marketing",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/HomePageImg/growmax_logo.png",
        width: 1200,
        height: 630,
        alt: "Explore expert marketing articles and strategies, including digital marketing, B2B campaigns, branding, and growth tips on Growmax.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "All Articles About Marketing",
    description: "Explore expert marketing articles and strategies, including digital marketing, B2B campaigns, branding, and growth tips on Growmax.",
    images: ["https://www.growmax.io/images/HomePageImg/growmax_logo.png"],
    site: "@growmax_io",
  },
}

const marketing = () => {
   
  return (
    <div>
        <BlogHeader
            uppertext="Marketing"
        />
        <BlogDisplay
            filtered="MARKETING"
        />
    </div>
  )
}

export default marketing