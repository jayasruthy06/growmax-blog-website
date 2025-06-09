import React from 'react'
import styles from './OtherDetails.module.css';
import Image from "next/image";

const OtherDetails = ({title, subtitle, image}) => {
  return (
    <div className={styles.mainOtherdetContainer}>
            <div className={styles.otherdetWrap}>
                <div className={styles.otherdetText}>
                    <h3 className={styles.mainOtherdet}>{title}</h3>
                    <p className={styles.subtitleOtherdet}>{subtitle}</p>
                </div>
                <div className={styles.otherdetImg}>
                    <Image src={image} alt={title} height = {150} width ={300}/>
                </div>
            </div>
        </div>
  )
}

export default OtherDetails