import React from 'react'
import styles from "./JustText.module.css";

const JustText = ({heading, content}) => {
  return (
    <div className={styles.justTextContainer}>
        <div className={styles.justTextHeading}>
            {heading}
        </div>
        <div className={styles.justTextContent}>
            {content}
        </div>
    </div>
  )
}

export default JustText