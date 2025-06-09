import React from 'react'
import DisplayBlogDash from '../../../../../components/Authentication/DisplayBlogDash'

export const metadata = {
  title:"View All Blogs",
  description:"Browse and manage all blog posts from Growmax covering B2B commerce, digital transformation, manufacturing insights, and growth strategies."
}

const page = () => {
  return (
    <div>
       <DisplayBlogDash/>
    </div>
    
  )
}

export default page