import React from 'react'
import Hero from '../../../components/HomePage/Hero';
import FourSlider from '../../../components/Blog/FourSlider';
import BlogList from '../../../components/Blog/BlogList';
import BlogNav from '../../../components/Blog/BlogNav';

export const metadata = {
  title: "Growmax | B2B collaborative commerce platform for manufacturers & wholesalers",
  description: "Explore expert articles and insights on B2B commerce, manufacturing trends, and wholesale strategies on the Growmax blog.",
  openGraph: {
    title: "Blogs | Growmax | B2B collaborative commerce platform for manufacturers & wholesalers",
    description: "Explore expert articles and insights on B2B commerce, manufacturing trends, and wholesale strategies on the Growmax blog.",
    url: "https://www.growmax.io/blog",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/HomePageImg/growmax_logo.png",
        width: 1200,
        height: 630,
        alt: "Explore expert articles and insights on B2B commerce, manufacturing trends, and wholesale strategies on the Growmax blog.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Growmax | B2B collaborative commerce platform for manufacturers & wholesalers",
    description: "Explore expert articles and insights on B2B commerce, manufacturing trends, and wholesale strategies on the Growmax blog.",
    images: ["https://www.growmax.io/images/HomePageImg/growmax_logo.png"],
    site: "@growmax_io",
  },
};


const Blog = () => {
  return (
    <div>
        <Hero
            uppertext="Welcome To Our Blog"
            desctext="Explore insights and resources tailored for manufacturers and distributors. From blogs and case studies to guides and white papers—everything you need to grow smarter, sell better, and scale faster."
            buttontext="Write For Us"
            hreflink = "/write-for-us"
        />
        <FourSlider/>
        <BlogNav/>
        <BlogList/>
    </div>
  )
}

export default Blog