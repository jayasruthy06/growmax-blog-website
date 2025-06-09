import React from 'react';
import Image from 'next/image';
import Hero from "../../../components/HomePage/Hero";
import styles from "./AboutPg.module.css";
import GetStarted from '../../../components/HomePage/GetStarted';
import PrivacyPolicy from '../../../components/About/PrivacyPolicy';

export const metadata = {
  title: "Growmax | Empowering Manufacturers & Distributors to Grow Their Business",
  description:
    "Learn how Growmax helps manufacturers and distributors streamline operations, boost sales, and enable B2B commerce through an all-in-one digital platform.",
    openGraph: {
    title: "Growmax | Empowering Manufacturers & Distributors to Grow Their Business",
    description: "Learn how Growmax helps manufacturers and distributors streamline operations, boost sales, and enable B2B commerce through an all-in-one digital platform.",
    url: "https://www.growmax.io/about",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/HomePageImg/growmax_logo.png",
        width: 1200,
        height: 630,
        alt: "Learn how Growmax helps manufacturers and distributors streamline operations, boost sales, and enable B2B commerce through an all-in-one digital platform.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "Growmax | Empowering Manufacturers & Distributors to Grow Their Business",
    description: "Learn how Growmax helps manufacturers and distributors streamline operations, boost sales, and enable B2B commerce through an all-in-one digital platform.",
    images: ["https://www.growmax.io/images/HomePageImg/growmax_logo.png"],
    site: "@growmax_io",
  },
};


const About = () => {
  const cardData = [
    { id: 1, title: 'Aravindan', image: "/images/Admin/aravindan.jpg" },
    { id: 2, title: 'Gnanavel', image: "/images/Admin/Gnanavel.png" },
    { id: 3, title: 'Folk Nallathambi', image: "/images/Admin/dummyman.jpeg" },
    { id: 4, title: 'Jayabharathi', image: "/images/Admin/Jayabharathi.png" },
    { id: 5, title: 'Madhan', image: "/images/Admin/madhan.jpg" },
    { id: 6, title: 'Ajitha Jeeva', image: "/images/Admin/dummygirl.jpeg" },
    { id: 7, title: 'Narmadha', image: "/images/Admin/narmatha.jpg" },
    { id: 8, title: 'Prakash', image: "/images/Admin/prakash.jpg" },
    { id: 9, title: 'Sudhakar', image: "/images/Admin/sudhakar.jpg" }
  ];

  return (
    <div>
      <Hero
        uppertext="Empowering Wholesalers,"
        lowertext="Distributors, and Manufacturers"
        desctext="Growmax is a comprehensive and collaborative B2B commerce platform designed to help businesses streamline operations, enhance efficiency, and drive growth."
        buttontext="Request a Demo"
        hreflink="/contact"
      />

      <div className={styles.motto}>
        <h3 className={styles.mottoText}>&quot;Create Freely. Lead with Knowledge. Respect All. Thrive Together.&quot;</h3>
      </div>

      <div className={styles.aboutVisionMission}>
        <div className={styles.aboutText}>
          <h3 className={styles.textTitle}>About Us</h3>
          <p className={styles.textPassage}>
            At Growmax, we are a team of passionate professionals dedicated to helping B2B companies deliver exceptional digital experiences to their customers through our robust commerce platform.
            <br />
            In today&apos;s rapidly evolving business landscape, companies must continuously adapt to stay competitive. However, not every business—especially small and medium enterprises—has the resources to build and maintain their own digital infrastructure.
            <br />
            We understand this challenge. That&apos;s why Growmax is designed to bridge the technology gap, providing an affordable and scalable B2B commerce platform tailored to the needs of growing businesses. Our solution empowers manufacturers and distributors across industries—including consumer products, industrial goods, medical supplies, and building materials—to stay relevant, compete effectively, and thrive in the digital age.
          </p>
        </div>

        <div className={styles.visionText}>
          <h3 className={styles.textTitle}>Our Vision</h3>
          <p className={styles.textPassage}>
            To build a truly connected B2B commerce platform that delivers actionable insights, enabling our customers to operate with greater efficiency and agility.
          </p>
        </div>

        <div className={styles.missionText}>
          <h3 className={styles.textTitle}>Our Mission</h3>
          <p className={styles.textPassage}>
            To democratize digital transformation for small and medium enterprises by streamlining B2B processes. We are committed to delivering lasting value to our customers, employees, and partners—guided by integrity and respect for people.
          </p>
        </div>
      </div>

      <div className={styles.teamContainer}>
        <h3 className={styles.meetTheTeam}>Meet The Team</h3>
        <div className={styles.teamGrid}>
          {cardData.map((card) => (
            <div key={card.id} className={styles.teamCard}>
              <Image
                src={card.image}
                alt={card.title}
                className={styles.teamCardImage}
                width={300}
                height={300}
                objectFit="cover"
              />
              <div className={styles.textContainer}>
                <h3 className={styles.teamCardTitle}>{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrivacyPolicy/>
      <GetStarted />
    </div>
  );
};

export default About;
