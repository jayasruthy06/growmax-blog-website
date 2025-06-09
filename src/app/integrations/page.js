import React from 'react'
import SubHero from '../../../components/SalesRepApp/SubHero'
import CategoryDisplay from '../../../components/Integrations/CategoryDisplay';
import GetStarted from '../../../components/HomePage/GetStarted';

export const metadata = {
  title: "Growmax Commerce Integrations",
  description: "Explore Growmax's powerful commerce integrations to connect your B2B platform with ERP, CRM, payment gateways, and more for streamlined operations.",
  openGraph: {
    title: "Growmax Commerce Integrations",
    description: "Explore Growmax's powerful commerce integrations to connect your B2B platform with ERP, CRM, payment gateways, and more for streamlined operations.",
    url: "https://www.growmax.io/integrations",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/IntegrationsImg/int1.png",
        width: 1200,
        height: 630,
        alt: "Explore Growmax's powerful commerce integrations to connect your B2B platform with ERP, CRM, payment gateways, and more for streamlined operations.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "Growmax Commerce Integrations",
    description: "Explore Growmax's powerful commerce integrations to connect your B2B platform with ERP, CRM, payment gateways, and more for streamlined operations.",
    images: ["https://www.growmax.io/images/IntegrationsImg/int1.png"],
    site: "@growmax_io",
  },
};

const Integrations = () => {
  return (
    <div>
        <SubHero 
            title="Powerful Integrations for Your B2B eStore"
            subtitle="Growmax enables seamless integration with a wide range of trusted business applications—ERP, CRM, payment gateways, and more—ensuring your B2B eStore runs efficiently and scales effortlessly as your business grows."
            image="/images/IntegrationsImg/int1.png"
        />
        <CategoryDisplay/>
        <GetStarted/>

    </div>
  )
}

export default Integrations