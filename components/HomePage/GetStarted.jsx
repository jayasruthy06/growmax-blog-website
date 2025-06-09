"use client";

import React from 'react'
import styles from "./GetStarted.module.css";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from 'lucide-react';

const GetStarted = () => {
    
  return (
    <div className={styles.mainStartContainer}>
        <div className={styles.startWrap}>
            <div className={styles.startTextButton}>
                <div className={styles.startText}>
                    <h3 className={styles.startMain}>How It Works</h3>
                    <h3 className={styles.startSubtitle}>1. Get Started with Growmax</h3>
                     <p>Sign up effortlessly and connect your Zoho account in just a few clicks.</p>
                     <h3 className={styles.startSubtitle}>2. Download the Mobile App</h3>
                     <p>Access your B2B storefront and tools on the go—available on both the App Store and Google Play.</p>
                     <h3 className={styles.startSubtitle}>3. Start Selling Instantly</h3>
                     <p>Place and manage orders anytime, anywhere. It's that simple.</p>
                     <h3 className={styles.endTitle}>
                        "Thousands of businesses trust Growmax. <br/>Become one of them—get started now."
                     </h3>
                </div>
                <div className={styles.startButton}>
                    <Link href="/contact"><button className={styles.talkToUs2}>Talk To Us<PhoneCall /></button></Link>
                </div>
            </div>
            <div className={styles.startImg}>
                <Image src="/images/HomePageImg/getstarted.png" width={200} height={100} alt="Get Started with Growmax"/>
            </div>
        </div>
    </div>
  )
}

export default GetStarted