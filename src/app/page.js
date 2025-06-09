import "./globals.css"
import Hero from "../../components/HomePage/Hero";
import Slider from "../../components/HomePage/Slider";
import Products from "../../components/HomePage/Products";
import GetStarted from "../../components/HomePage/GetStarted";

export const metadata = {
  title: "Field & sales rep mobile app for taking orders & B2B Wholesale website",
  description: "Growmax offers a powerful mobile app for field and sales reps to take orders efficiently and manage B2B wholesale websites on the go.",
  openGraph: {
    title: "Field & sales rep mobile app for taking orders & B2B Wholesale website",
    description: "Growmax offers a powerful mobile app for field and sales reps to take orders efficiently and manage B2B wholesale websites on the go.",
    url: "https://www.growmax.io",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/HomePageImg/growmax_logo.png",
        width: 1200,
        height: 630,
        alt: "Growmax offers a powerful mobile app for field and sales reps to take orders efficiently and manage B2B wholesale websites on the go.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "Field & sales rep mobile app for taking orders & B2B Wholesale website",
    description: "Growmax offers a powerful mobile app for field and sales reps to take orders efficiently and manage B2B wholesale websites on the go.",
    images: ["https://www.growmax.io/images/HomePageImg/growmax_logo.png"],
    site: "@growmax_io",
  },
};

export default function Home() {
  return (
    <div>
      <Hero 
        uppertext = "Drive Revenue and Customer Loyalty"
        lowertext = "With Digital Experience Solutions"
        desctext = "Empower your customers with a dynamic self-service portal that delivers personalized experiences, automates critical business processes, and simplifies complex B2B ordering—keeping them engaged, informed, and connected."
        buttontext="Request a Demo"
        hreflink="/contact"
      />
      <Slider />
      <Products />
      <GetStarted />
    </div>
  );
}
