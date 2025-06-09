import React from 'react'
import styles from "./About.module.css";
import Image from "next/image";

const About = ({heading, subtitle, title1, content1, image1, title2, content2, image2, title3, content3, image3}) => {
  return (
    <div className={styles.containerStyle}>
      <div className={styles.aboutText}>
        <h3 className ={styles.aboutHeading}>{heading}</h3>
        <p className={styles.aboutSubtitle}>{subtitle}</p>
      </div>
        <div className={styles.gridStyle}>
          <div className={styles.cardStyle}>
            <div className={styles.cardText}>
                <h2 className={styles.cardTitle}>{title1}</h2>
                <p>{content1}</p>
            </div>
            <Image src = {image1} width = {220} height ={140} alt={title1}/>
          </div>
          
         <div className={styles.cardStyle}>
            <div className={styles.cardText}>
                <h2 className={styles.cardTitle}>{title2}</h2>
                <p>{content2}</p>
            </div>
            <Image src = {image2} width = {220} height ={140} alt={title2}/>
          </div>
          
          <div className={styles.cardStyle}>
            <div className={styles.cardText}>
                <h2 className={styles.cardTitle}>{title3}</h2>
                <p>{content3}</p>
            </div>
            <Image src = {image3} width = {220} height ={140} alt={title3}/>
          </div>
        </div>
      </div>
  )
}

export default About