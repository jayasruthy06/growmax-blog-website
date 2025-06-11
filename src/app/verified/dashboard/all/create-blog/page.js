import React from 'react'
import BlogForm from '../../../../../../components/Blog/BlogForm';

export const metadata = {
  title: "Create a Blog - Growmax",
  description: "Read expert articles on B2B commerce, manufacturing trends, and digital growth strategies. Stay informed with the latest insights from Growmax."
}

const page = () => {
  return (
    <div>
      <BlogForm/>
    </div>
  )
}

export default page