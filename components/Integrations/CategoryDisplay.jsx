"use client";

import { useState } from 'react';
import styles from "./CategoryDisplay.module.css";
import Image from "next/image";

const data = {
  Payment: [
    {
      name: 'Stripe',
      description: 'Streamline your transactions with powerful payment APIs designed to scale with businesses of any size.',
      image: "/images/IntegrationsImg/stripe.png",
    },
    {
      name: 'PayPal',
      description: 'Send and receive payments globally with speed, security, and reliability.',
      image: "/images/IntegrationsImg/paypal.png",
    },
    {
      name: 'Razorpay',
      description: 'Enhance your customer experience with a seamless and efficient payment gateway solution.',
      image: "/images/IntegrationsImg/razorpay.png",
    },
    {
      name: 'PayU Money',
      description: 'Accept online payments through multiple modes including cards, UPI, and more—with ease and security.',
      image: "/images/IntegrationsImg/payu.jpg",
      comingSoon: true,
    },
  ],
  Accounting: [
    {
      name: 'Zoho Books',
      description: 'Efficiently manage your finances, generate professional invoices, and automate accounting workflows directly within Growmax.',
      image: "/images/IntegrationsImg/zoho.png",
    },
    {
      name: 'Xero',
      description: 'Collaborate seamlessly with your accounting team, automate invoicing, and gain full control over your financial management.',
      image: "/images/IntegrationsImg/xero.png",
      comingSoon: true,
    },
    {
      name: 'QuickBooks',
      description: 'Track expenses, organize receipts, send customized quotes and invoices, and manage inventory—all in one place.',
      image: "/images/IntegrationsImg/quickbooks.png",
      comingSoon: true,
    },
  ],
  Communication: [
    {
      name: 'Kaleyra',
      description: 'Engage with customers globally through multiple communication channels, including SMS, WhatsApp, and more.',
      image: "/images/IntegrationsImg/kaleyra.png",
    },
    {
      name: 'Twilio',
      description: 'Integrate powerful messaging capabilities into your online store to seamlessly send and receive SMS.',
      image: "/images/IntegrationsImg/twilio.png",
    },
  ],
  'Marketing Automation': [
    {
      name: 'Google Analytics',
      description: "Track and analyze traffic, conversions, and key performance metrics to optimize your B2B eStore’s performance.",
      image:"/images/IntegrationsImg/googleanaly.png",
    },
    {
      name: 'Klaviyo',
      description: 'Automate personalized SMS and email marketing campaigns to drive engagement and boost eCommerce sales.',
      image:"/images/IntegrationsImg/klaviyo.jpg",
      comingSoon: true,
    },
    {
      name: 'Intercom',
      description: 'Enhance customer relationships with real-time chat support and scalable communication tools.',
      image: "/images/IntegrationsImg/intercom.png",
    },
  ],
  'Chat Support': [
    {
      name: 'Drift',
      description: 'Engage website visitors using conversational tools such as chatbots and live chat to drive meaningful interactions.',
      image: "/images/IntegrationsImg/drift.png",
    },
    {
      name: 'Tawk.to',
      description: 'Connect with your website visitors in real time to provide support, answer questions, and guide them effectively.',
      image: "/images/IntegrationsImg/tawkto.png",
    },
    {
      name: 'Zoho SalesIQ',
      description: 'Utilize live chat capabilities to instantly interact with visitors and convert engagement into opportunities.',
      image: "/images/IntegrationsImg/zohosales.png",
    },
  ],
  ERP: [
    {
      name: 'SAP',
      description: 'Enable seamless operations across core business functions—such as supply chain, finance, and more—for your online store.',
      image: "/images/IntegrationsImg/sap.png",
    },
    {
      name: 'Sage',
      description: 'Optimize business performance with integrated process management, automation, and actionable insights.',
      image: "/images/IntegrationsImg/sage.png",
      comingSoon: true,
    },
    {
      name: 'Dynamics 365',
      description: 'Manage supply chain, manufacturing, commerce, finance, and reporting through a unified, intelligent platform.',
      image: "/images/IntegrationsImg/msdynamics365.jpg",
      comingSoon: true,
    },
    {
      name: 'Acumatica',
      description: 'Leverage a comprehensive cloud ERP solution to efficiently plan, manage, and scale essential business operations.',
      image: "/images/IntegrationsImg/acumatica.png",
    },
  ],
};


export default function CategoryDisplay() {
  const [selectedCategory, setSelectedCategory] = useState('Payment');

  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>Integrations</h3>
            <div className={styles.categoryButtons}>
              {Object.keys(data).map((category) => (
                <button
                  key={category}
                  className={`${styles['categoryButton']} ${category === selectedCategory ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>

          <section className={styles.content}>
            <h2 className={styles.contentTitle}>{selectedCategory}</h2>
            <div className={styles.cardsGrid}>
              {data[selectedCategory].map((item, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.logoContainer}>
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        className={styles.logo}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                  <h3 className={styles.cardTitle}>{item.name}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                  {item.comingSoon && (
                    <span className={styles.comingSoon}>Coming Soon</span>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}