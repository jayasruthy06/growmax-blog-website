import React from 'react'
import styles from "./OtherFeatures.module.css";

const OtherFeatures = () => {
  const features = [
    {
      heading: "Shop by Brand and Category",
      subtitle: "Automatically classify products by brand and category to help customers easily discover items from their preferred brands or specific product types."
    },
    {
      heading: "Inventory Management",
      subtitle: "Efficiently track product location, availability, and status with a streamlined inventory management system."
    },
    {
      heading: "Comprehensive Product Management",
      subtitle: "Easily manage all aspects of your product catalog, including brands, series, specifications, and more."
    },
    {
      heading: "Advanced Category Management",
      subtitle: "Create, filter, and organize products into tailored categories for seamless browsing and quick identification."
    }
  ];

  return (
    <div className={styles.featContainer}>
      <div className={styles.featTextContainer}>
        <div className={styles.featTextUpper}>Other Standard Features To Explore</div>
        <div className={styles.featGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featBox}>
              <h3 className={styles.featHeading}>{feature.heading}</h3>
              <p className={styles.featSubtitle}>{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OtherFeatures