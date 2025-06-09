import React from 'react'
import Link from "next/link";
import styles from "./PrivacyPolicy.module.css"

const PrivacyPolicy = () => {
    const CardData =  [
        {
            id: 1,
            title: "Privacy Policy",
            slug: "/privacy"
        },
        {
            id: 2,
            title: "Terms and Conditions",
            slug: "/terms-of-service"
        },
        {
            id: 3,
            title: "Master SAAS Subscription Agreement (MSA)",
            slug: "/msa"
        }
    ];
    
  return (
    <div>
        <div className={styles.cardsContainer}>
            <h1 className={styles.mainHeading}>Legal Agreements</h1>
            <div className={styles.cardsGrid}>
                {CardData.map((cards) => (
                    <div key={cards.id} className={styles.cards}>
                        <div className={styles.cardsContent}>
                            <div className={styles.cardsText}>
                                <h3 className={styles.cardsTitle}>{cards.title}</h3>
                            </div>
                            <div className={styles.cardsButton}>
                              <Link href={cards.slug}>
                              <button className={styles.viewPage}>View</button>
                              </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PrivacyPolicy