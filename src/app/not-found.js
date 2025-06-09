import React from 'react'
import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Growmax",
  description: "Oops! The page you are looking for doesn’t exist. Return to Growmax homepage or explore our B2B eCommerce solutions.",
};

const notfound = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <h3 style={{fontSize:"25px", color: "red"}}>Hmm...the page appears to be missing.</h3>
        <Link href="/" style={{textDecoration:"underline", fontSize: "18px"}}>Go back to Home</Link>
    </div>
  )
}

export default notfound