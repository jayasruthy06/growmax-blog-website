"use client";
import React from 'react'
import styles from "./Contact.module.css";
import { Mail, Phone, MapPinned } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = React.useState("");
      
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
      
        formData.append("access_key", "ce21d5c5-dca5-4e00-8471-db9ce04d5e2f");
      
        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
     });
      
    const data = await response.json();
      
    if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
    } else {
        setResult(data.message);
     }
};

  return (
        <div className={styles.contact}>
        <div className={styles.contactCol}>
            <h3>Send us a Message</h3>
            <p>Do not hesitate to contact us directly. We will respond to you as soon as possible. You will be amazed by our solutions!</p>
            <ul>
                <li><Mail className={styles.listIcon}/>hello@growmax.io</li>
                
                <li><Phone className={styles.listIcon}/>+91 89390 00993</li>
                
                <li><MapPinned className={styles.listIcon}/>Workafella, 7th floor, IIFL Towers,<br/>#143, MGR Salai, Perungudi, Chennai - 600096, TN, India</li>

                <li><Phone className={styles.listIcon}/>+1 404 406 6664</li>
                
                <li><MapPinned className={styles.listIcon}/>Growmax LLC<br/>30 North Gould Street,<br/>Sheridan, WY 82801</li>
            </ul>
        </div>
        <div className={styles.contactCol}>
            <form className={styles.form} onSubmit={onSubmit}>
                <label className={styles.contactLabel}>Your Name</label>
                <br/>
                <input type="text" className={styles.contactInput} name='name' placeholder="Enter your name" />
                <br/>
                <label className={styles.contactLabel}>Company Name</label>
                <br/>
                <input type="text" className={styles.contactInput} name='company' placeholder="Enter your company name" />
                <br/>
                <label className={styles.contactLabel}>Email</label>
                <br/>
                <input type="text" className={styles.contactInput} name='email' placeholder="Enter your email ID" />
                <br/>
                <label className={styles.contactLabel}>Phone Number</label>
                <br/>
                <input type="tel" className={styles.contactInput} name='phone' placeholder="Enter your mobile number" />
                <br/>
                <label className={styles.contactLabel}>Message</label>
                <br/>
                <textarea name="message" className={styles.contactTextArea} rows="6" placeholder="Enter your message" />
                <br/>
                <button type="submit" className={styles.btnForm}>Submit Now</button>
                <span>{result}</span>
                <br/>
            </form>
        </div>
    </div>
  )
}

export default Contact