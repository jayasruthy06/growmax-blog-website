import React from 'react'
import SubHero from '../../../components/SalesRepApp/SubHero';
import About from '../../../components/SalesRepApp/About';
import OtherDetails from '../../../components/SalesRepApp/OtherDetails';
import GetStarted from '../../../components/HomePage/GetStarted';

export const metadata = {
    title: "Growmax Headless Commerce - Customize your B2B Online Store",
    description: "Discover Growmax Headless Commerce platform that enables full customization of your B2B online store for flexible, scalable digital selling.",
    openGraph: {
    title: "Growmax Headless Commerce - Customize your B2B Online Store",
    description: "Discover Growmax Headless Commerce platform that enables full customization of your B2B online store for flexible, scalable digital selling.",
    url: "https://www.growmax.io/headless-commerce",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/HeadlessCommImg/hc1.png",
        width: 1200,
        height: 630,
        alt: "Discover Growmax Headless Commerce platform that enables full customization of your B2B online store for flexible, scalable digital selling.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "Growmax Headless Commerce - Customize your B2B Online Store",
    description: "Discover Growmax Headless Commerce platform that enables full customization of your B2B online store for flexible, scalable digital selling.",
    images: ["https://www.growmax.io/images/HeadlessCommImg/hc1.png"],
    site: "@growmax_io",
  },
}

const headlesscomm = () => {
  return (
    <div>
        <SubHero
            title="Accentuate Your Brand Identity with Growmax Headless Commerce"
            subtitle="Build your eStore with the flexibility and agility of Growmax's headless commerce capability. By decoupling the front-end of your online B2B store from the backend business logic, you gain the freedom to design and deliver customer experiences exactly how you envision. This architectural advantage allows you to present your brand uniquely across various channels, ensuring seamless performance while maintaining full creative control over how your products and services are showcased."
            image="/images/HeadlessCommImg/hc1.png"
        />
        <About
            heading="Why Should You Choose Growmax Headless Commerce?"
            subtitle="Get complete control of your online store by separating the front end from the backend eCommerce functionalities. Ensure your brand stands out with a distinct, customized front end while being backed by robust B2B eCommerce capabilities that drive performance and reliability."
            title1="Ensures 99.9% Availability"
            content1="Ensure that your platform operates at maximum speed and capacity without interruptions caused by server downtime. Growmax guarantees high availability so your services remain responsive and accessible to customers and vendors at all times."
            image1="/images/HeadlessCommImg/hc2.png"
            title2="Eliminate Dependency on Third-Party"
            content2="Free yourself from relying on external plug-ins or tools for integrations. With Growmax headless commerce, you gain seamless integration capabilities that eliminate the need for unnecessary third-party dependencies, simplifying your operations."
            image2="/images/HeadlessCommImg/hc3.png"
            title3="Improve and Evolve Customer Experience"
            content3="Deliver a consistent and personalized experience to your customers—even as their needs change. Headless commerce allows you to update and customize your eStore without disrupting performance, helping you stay aligned with evolving customer expectations."
            image3="/images/HeadlessCommImg/hc4.png"
        />
        <OtherDetails
            title="Customization and Flexibility"
            subtitle="Deliver a truly innovative experience to your customers with the power of customization. Growmax headless commerce frees you from rigid templates, giving you full control over the front end so you can reflect your brand&apos;s unique voice and identity across every touchpoint."
            image="/images/HeadlessCommImg/hc2.jpg"
        />
        <OtherDetails
            title="Marketing Effectiveness"
            subtitle="Accelerate your go-to-market strategy with Growmax headless commerce. Launch new front-end experiences swiftly in response to market trends without the need to alter backend systems. Plus, Growmax&apos;s SEO-optimized backend helps boost visibility and drive more traffic to your online store."
            image="/images/HeadlessCommImg/hc6.png"
        />
        <GetStarted/>
    </div>
  )
}

export default headlesscomm