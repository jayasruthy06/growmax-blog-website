import React from 'react'
import BlogHeader from '../../../../components/Blog/BlogHeader';
import BlogDisplay from '../../../../components/Blog/BlogDisplay';

export const metadata = {
  title: "All Articles About AI & Insights",
  description: "Explore in-depth articles and expert insights on Artificial Intelligence, machine learning, and emerging technologies on Growmax.",
  openGraph: {
    title: "All Articles About AI & Insights",
    description: "Explore in-depth articles and expert insights on Artificial Intelligence, machine learning, and emerging technologies on Growmax.",
    url: "https://www.growmax.io/category/ai-insights",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/HomePageImg/growmax_logo.png",
        width: 1200,
        height: 630,
        alt: "Explore in-depth articles and expert insights on Artificial Intelligence, machine learning, and emerging technologies on Growmax.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "All Articles About AI & Insights",
    description: "Explore in-depth articles and expert insights on Artificial Intelligence, machine learning, and emerging technologies on Growmax.",
    images: ["https://www.growmax.io/images/HomePageImg/growmax_logo.png"],
    site: "@growmax_io",
  },
}

const AIInsights = () => {
    
  return (
    <div>
        <BlogHeader
            uppertext="AI & Insights"
        />
        <BlogDisplay
          filtered="AI & INSIGHTS"
        />
    </div>
  )
}

export default AIInsights