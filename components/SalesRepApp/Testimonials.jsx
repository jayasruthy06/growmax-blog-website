import React from 'react';
import styles from "./Testimonials.module.css";
import Testimonial from "../../public/images/SalesRepImg/testimonial.png";
import logoobo from "../../public/images/SalesRepImg/obo.svg";
import Image from "next/image";

const Testimonials = ({title}) => {
  return (
    <div className={styles.mainTestContainer}>
            <div className={styles.testWrap}>
                <div className={styles.testImg}>
                    <Image src = "/images/SalesRepImg/testimonial.png" width = {200} height={200} alt="Testimonial Image"/>
                </div>
                <div className={styles.testText}>
                    <h3 className={styles.mainTest}>{title}</h3>
                    <div className={styles.testNameLogo}>
                        <Image src = "/images/SalesRepImg/obo.svg" className={styles.logoObo} width = {40} height = {40} alt="OBO Bettermann"/>
                        <p className={styles.subtitleTest}>Arul Prakash</p>
                        <p className={styles.subtitleTest}>Managing Director</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Testimonials