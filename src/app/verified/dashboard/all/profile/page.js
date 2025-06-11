import React from 'react'
import UserProfile from '../../../../../../components/Blog/UserProfile'

export const metadata = {
  title: "User Profile",
  description: "View and manage your Growmax user profile. Update personal information securely."
}

const page = () => {
  return (
    <div><UserProfile/></div>
  )
}

export default page