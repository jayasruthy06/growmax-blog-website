import React from 'react'
import styles from "./Hero.module.css";
import Link from "next/link";

const Hero = ({uppertext, lowertext, desctext, buttontext, hreflink}) => {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.heroTextContainer}>
            <div className={styles.textUpper}>{uppertext}</div>
            <div className={styles.textLower}>{lowertext}</div>
            <div className={styles.textDescription}>{desctext}</div>
            <Link href={hreflink}><button className={styles.requestDemo}>{buttontext}</button></Link>
        </div>
    </div>
  )
}

export default Hero