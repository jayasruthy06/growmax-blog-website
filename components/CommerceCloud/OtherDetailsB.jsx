import React from 'react'
import styles from "./OtherDetailsB.module.css";
import Image from "next/image";
import Link from "next/link";
const OtherDetailsB = ({title, subtitle, image, hreflink}) => {
  return (
    <div className={styles.mainOtherdetContainer}>
                <div className={styles.otherdetWrap}>
                    <div className={styles.otherdetText}>
                        <h3 className={styles.mainOtherdetb}>{title}</h3>
                        <p className={styles.subtitleOtherdet}>{subtitle}</p>
                        <div className={styles.otherdetButton}>
                            <Link href={hreflink}><button>View More</button></Link>
                        </div>
                    </div>
                    <div className={styles.otherdetImg}>
                        <Image src={image} alt= {title} height = {150} width ={300}/>
                    </div>
                </div>
            </div>
  )
}

export default OtherDetailsB