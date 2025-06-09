import React from 'react'
import BlogPageText from '../../../../components/Blog/BlogPageText';
import { ConnectDB } from '../../../../lib/config/db';
import BlogModel from '../../../../lib/models/BlogModel';

export async function generateMetadata({ params }) {
  const slug = params.slug;
  
  try {
    await ConnectDB();
    const blog = await BlogModel.findOne({ slug: slug });
    
    if (!blog) {
      return {
        title: "Blog not found",
        description: "Unable to find the requested blog post.",
      };
    }

    return {
      title: `${blog.title} | Blogs | Growmax`,
      description: `Read the full article by ${blog.authorname} on "${blog.title}".`,
      openGraph: {
      title: blog.title,
      description: `Read the full article by ${blog.authorname} on "${blog.title}".`,
      url: `https://www.growmax.io/blog/${params.slug}`,
      siteName: "Growmax",
      images: [
        {
          url: blog.coverimg,
          width: 1200,
          height: 630,
          alt: `Read the full article by ${blog.authorname} on "${blog.title}".`,
        },
      ],
      type: "article", // or "article" for blog posts
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | Blogs | Growmax`,
      description:  `Read the full article by ${blog.authorname} on "${blog.title}".`,
      images: [blog.coverimg],
      site: "@growmax_io",
      },
    };
    
  } catch (error) {
    console.error('Error in generateMetadata:', error);
    return {
      title: "Blog not found",
      description: "Unable to find the requested blog post.",
    };
  }
}
//CHECKKKKKKKK

const page = ({params}) => {
  return (
    <div>
        <BlogPageText
            reqslug = {params.slug}
        />
    </div>
  )
}

export default page