import React from 'react'
import LoginPage from '../../../components/Authentication/LoginPage'

export const metadata = {
  title: "Login - Growmax",
  description: "Access your Growmax account to manage your B2B commerce platform, track orders, and collaborate with partners securely.",
  openGraph: {
    title: "Login - Growmax",
    description: "Access your Growmax account to manage your B2B commerce platform, track orders, and collaborate with partners securely.",
    url: "https://www.growmax.io/login",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/HomePageImg/growmax_logo.png",
        width: 1200,
        height: 630,
        alt: "Access your Growmax account to manage your B2B commerce platform, track orders, and collaborate with partners securely.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "Login - Growmax",
    description: "Access your Growmax account to manage your B2B commerce platform, track orders, and collaborate with partners securely.",
    images: ["https://www.growmax.io/images/HomePageImg/growmax_logo.png"],
    site: "@growmax_io",
  },
}

const page = () => {
  return (
    <div><LoginPage/></div>
  )
}

export default page