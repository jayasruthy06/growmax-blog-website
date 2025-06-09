import React from 'react'
import styles from "./Companies.module.css";
import Image from "next/image";

const Companies = () => {
  return (
    <div className={styles.companiesContainer}>
        <div className={styles.companiesTitle}>
            <h3>Trusted By Enterprise Companies</h3>
        </div>
        <div className={styles.companiesWrap}>
            <Image src="/images/CommerceCloudImg/lt.png" className={styles.companiesImgLt} width={90} height={90} alt="Larsen & Tourbo"/>
            <Image src="/images/CommerceCloudImg/obo.svg" className={styles.companiesImgObo} width = {110} height={50} alt="OBO Bettermann"/>
            <Image src="/images/CommerceCloudImg/schwing.png" className={styles.companiesImg} width = {200} height = {70} alt="Schwing"/>
            <Image src="/images/CommerceCloudImg/phileo.png" className={styles.companiesImg} width = {200} height = {70} alt="Phileo"/>
            <Image src="/images/CommerceCloudImg/wallart.png" className={styles.companiesImgWallart} width = {150} height={70} alt="Wallart"/>
        </div>
    </div>
  )
}

export default Companies