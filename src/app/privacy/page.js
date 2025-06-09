import React from 'react'
import styles from "./privacy.module.css";

export const metadata = {
  title: "Growmax Privacy Policy | Your Data, Our Responsibility",
  description: "Read the Growmax Privacy Policy to understand how we collect, use, store, and protect your personal and business information while using our B2B commerce platform.",
  openGraph: {
    title: "Growmax Privacy Policy | Your Data, Our Responsibility",
    description: "Read the Growmax Privacy Policy to understand how we collect, use, store, and protect your personal and business information while using our B2B commerce platform.",
    url: "https://www.growmax.io/privacy",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/HomePageImg/growmax_logo.png",
        width: 1200,
        height: 630,
        alt: "Read the Growmax Privacy Policy to understand how we collect, use, store, and protect your personal and business information while using our B2B commerce platform.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "Growmax Privacy Policy | Your Data, Our Responsibility",
    description: "Read the Growmax Privacy Policy to understand how we collect, use, store, and protect your personal and business information while using our B2B commerce platform.",
    images: ["https://www.growmax.io/images/HomePageImg/growmax_logo.png"],
    site: "@growmax_io",
  },
};


const Privacy = () => {
  return (
    <div className={styles.legalContainer}>
        <h3 className={styles.legalHeading}>Privacy Policy</h3>
        <p className={styles.legalPassage}>This privacy policy applies to the Growmax Sales App app (hereby referred to as &quot;Application&quot;) for mobile devices that was created by Growmax LLC (hereby referred to as &quot;Service Provider&quot;) as a Commercial service. This service is intended for use &quot;AS IS&quot;.</p>
        <h3 className={styles.legalHeading}>Information Collection and Use</h3>
        <p className={styles.legalPassage}>The Application collects information when you download and use it. This information may include information such as
        <br/>
        * Your device&apos;s Internet Protocol address (e.g. IP address)
        <br/>
        * The pages of the Application that you visit, the time and date of your visit, the time spent on those pages
        <br/>
        * The time spent on the Application
        <br/>
        * The operating system you use on your mobile device
        </p>
        <p className={styles.legalPassage}>The Application collects your device&apos;s location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:
          <br/>
        * Geolocation Services: The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.
        <br/>
        * Analytics and Improvements: Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.
        <br/>
        * Third-Party Services: Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.</p>
        <p className={styles.legalPassage}>The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.

        For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to email, name, company name, mobile, phone. The information that the Service Provider request will be retained by them and used as described in this privacy policy.</p>
        <h3 className={styles.legalHeading}>Third Party Access</h3>
        <p className={styles.legalPassage}>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.</p>
        <p className={styles.legalPassage}>Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
          <br/>
        * Google Play Services
        <br/>
        * Facebook
        <br/>
        * Sentry</p>
        <p className={styles.legalPassage}>The Service Provider may disclose User Provided and Automatically Collected Information:
          <br/>
        * as required by law, such as to comply with a subpoena, or similar legal process;
        <br/>
        * when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;
        <br/>
        * with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.
        </p>
        <h3 className={styles.legalHeading}>Opt-Out Rights</h3>
        <p className={styles.legalPassage}>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
        </p>
        <p className={styles.legalPassage}>Data Retention Policy <br/>
        The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you&apos;d like them to delete User Provided Data that you have provided via the Application, please contact them at hello@growmax.io and they will respond in a reasonable time.</p>
        <p className={styles.legalPassage}>Children<br/>
        The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.</p>
        <p className={styles.legalPassage}>The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (hello@growmax.io) so that they will be able to take the necessary actions.
        </p>
        <h3 className={styles.legalHeading}>Security</h3>
        <p className={styles.legalPassage}>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.</p>
        <h3 className={styles.legalHeading}>Changes</h3>
        <p className={styles.legalPassage}>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes. <br/><br/>
        This privacy policy is effective as of 2024-06-14</p>
        <h3 className={styles.legalHeading}>Your Consent</h3>
        <p className={styles.legalPassage}>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.</p>
        <h3 className={styles.legalHeading}>Contact Us</h3>
        <p className={styles.legalPassage}>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at hello@growmax.io.</p>
    </div>

  )
}

export default Privacy