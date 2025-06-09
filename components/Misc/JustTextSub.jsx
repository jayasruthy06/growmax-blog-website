import React from 'react'
import styles from "./JustTextSub.module.css";

const JustText = ({heading, content}) => {
  return (
    <div className={styles.justTextContainerSub}>
        <div className={styles.justTextHeadingSub}>
            {heading}
        </div>
        <div className={styles.justTextContentSub}>
            {content}
        </div>
    </div>
  )
}

export default JustText