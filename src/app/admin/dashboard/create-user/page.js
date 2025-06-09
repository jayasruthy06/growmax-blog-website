import React from 'react'
import AddUser from '../../../../../components/Blog/AddUser'

export const metadata = {
  title:"Add an User",
  description: "Add new users to your Growmax platform. Manage access, assign roles, and control user permissions from the admin dashboard."
}

const page = () => {
  return (
    <div><AddUser/></div>
  )
}

export default page