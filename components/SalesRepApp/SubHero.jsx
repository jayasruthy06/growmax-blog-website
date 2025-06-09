"use client";

import React from 'react'
import styles from "./SubHero.module.css";
import { PhoneCall } from 'lucide-react';
import Image from "next/image"
import Link from "next/link";
import { useRouter } from 'next/navigation';

const SubHero = ({title, subtitle, image}) => {
    const router = useRouter();
return (
    <div className={styles.mainSubheroContainer}>
            <div className={styles.subheroWrap}>
                <div className={styles.subheroTextButton}>
                    <div className={styles.subheroText}>
                        <h3 className={styles.subheroMain}>{title}</h3>
                        <p className={styles.subheroSubtitle}>{subtitle}</p>
                    </div>
                    <div className={styles.subheroButton}>
                        <button className={styles.talkToUs2} onClick={()=>{router.push("/contact")}}>Talk To Us<PhoneCall/></button>
                    </div>
                </div>
                <div className={styles.subheroImg}>
                    <Image src={image} alt={title} width={400} height={200}/>
                </div>
            </div>
        </div>
  )
}

export default SubHero