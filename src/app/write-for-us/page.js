import React from 'react'
import OtherDetails from '../../../components/SalesRepApp/OtherDetails'
import styles from "./Write.module.css";

export const metadata = {
  title: "Write For Us - Growmax",
  description: "Contribute your insights to Growmax’s blog. Share your expertise on B2B eCommerce, manufacturing, and wholesale trends with our growing community.",
  openGraph: {
    title: "Write For Us - Growmax",
    description: "Contribute your insights to Growmax’s blog. Share your expertise on B2B eCommerce, manufacturing, and wholesale trends with our growing community.",
    url: "https://www.growmax.io/write-for-us",
    siteName: "Growmax",
    images: [
      {
        url: "https://www.growmax.io/images/WriteBlogImg/intro.png",
        width: 1200,
        height: 630,
        alt: "Contribute your insights to Growmax’s blog. Share your expertise on B2B eCommerce, manufacturing, and wholesale trends with our growing community.",
      },
    ],
    type: "website", // or "article" for blog posts
  },
  twitter: {
    card: "summary_large_image",
    title: "Write For Us - Growmax",
    description: "Contribute your insights to Growmax’s blog. Share your expertise on B2B eCommerce, manufacturing, and wholesale trends with our growing community.",
    images: ["https://www.growmax.io/images/WriteBlogImg/intro.png"],
    site: "@growmax_io",
  },
};


const Write = () => {
  return (
    <div>
        <OtherDetails
            title = "Write for Growmax Blog"
            subtitle = "At Growmax, we&apos;re committed to providing our readers with high-quality, insightful content that adds real value. If you&apos;re passionate about eCommerce and B2B trends and would like to share your expertise, we&apos;d love to hear from you. Below are the guidelines to ensure your submission aligns with our standards and editorial voice."
            image = "/images/WriteBlogImg/intro.png"
        />
    <div className={styles.writeForUsWrap}>
        <div className = {styles.writeForUsContainer}>
            <div className={styles.passage}>
                <div className={styles.passageHeading}><h3>Content Guidelines</h3></div>
                <div className={styles.passageContent}>
                    <h3 className={styles.passageSubtitle}>Topics We Cover</h3>
                    <p className={styles.passageText}>We focus on content related to eCommerce, B2B commerce, digital transformation in manufacturing and distribution, and customer experience. Please ensure your article is relevant to these areas.</p>
                    <h3 className={styles.passageSubtitle}>Article Length</h3>
                    <p className={styles.passageText}>Your article should be a minimum of 1,000 words. We appreciate depth, clarity, and structure.
                    </p>
                    <h3 className={styles.passageSubtitle}>Structure & Format</h3>
                    <p className={styles.passageText}>Please format your article as follows:
                        <ul>
                            <li>Headline</li>
                            <li>Short Introduction</li>
                            <li>Subheadings to break up key points</li>
                            <li>Conclusion with a summary or key takeaways</li>
                        </ul>
                    </p>
                    <h3 className={styles.passageSubtitle}>Language Preference</h3>
                    <p className={styles.passageText}>We accept articles written in UK or US English. Please ensure the usage is consistent throughout the article.</p>
                    <h3 className={styles.passageSubtitle}>Author Bio</h3>
                    <p className={styles.passageText}>Include a short author bio (maximum 50 words). You may also include a professional link or social media handle.</p>
                </div>
            </div>
            <div className={styles.passage}>
                <div className={styles.passageHeading}><h3>Linking and Sources</h3></div>
                <div className={styles.passageContent}>
                    <p className={styles.passageText}>
                        <ul>
                            <li>Include links to credible sources for any data, research, or claims mentioned.</li>
                            <li>You may add relevant links that enhance the article&apos;s value.</li>
                            <li>We reserve the right to remove or edit links that are promotional, irrelevant, or linked to suspicious domains.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className={styles.passage}>
                <div className={styles.passageHeading}><h3>Content Quality</h3></div>
                <div className={styles.passageContent}>
                    <p className={styles.passageText}>To maintain editorial standards:
                        <ul>
                            <li>Content must be original and not previously published.</li>
                            <li>Plagiarism or AI-generated content without human review will be rejected.</li>
                            <li>Avoid overtly promotional language.</li>
                            <li>Check for grammatical, factual, and typographical errors before submission.</li>
                            <li>Ensure the article is well-structured, readable, and accessible to a general audience.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className={styles.passage}>
                <div className={styles.passageHeading}><h3>Images</h3></div>
                <div className={styles.passageContent}>
                    <p className={styles.passageText}>
                        <ul>
                            <li>You are welcome to include relevant, copyright-free images.</li>
                            <li>Please ensure all visuals support the content and are appropriately credited if required.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className={styles.passage}>
                <div className={styles.passageHeading}><h3>Submission Process</h3></div>
                <div className={styles.passageContent}>
                    <p className={styles.passageText}>
                        <ul className={styles.processList}>
                            <li>Pitch your topic and keywords by emailing us at reachus@growmax.io.</li>
                            <li>Our editorial team will review and approve your topic.</li>
                            <li>Once approved, you may proceed to submit your full article for review.
                            </li>
                        </ul>
                        We may request minor revisions before publication, and we appreciate your cooperation.
                    </p>
                </div>
            </div>
        </div>
        <div className = {styles.faq}>
            <div className = {styles.passageHeading}><h3>FAQ</h3></div>
            <div className = {styles.faqText}>
                <h3 className={styles.passageSubtitle}>How long will it take for my article to get published?</h3>
                <p className={styles.passageText}>After receiving the article from your end, it&apos;ll be reviewed by the content marketing team of Growmax. Once it is approved, we&apos;ll publish it and let you know via email. This process usually takes 7 business days.</p>
            </div>
            <div className = {styles.faqText}>
                <h3 className={styles.passageSubtitle}>How many images can I submit with my article?</h3>
                <p className={styles.passageText}>You can submit 4-6 relevant images for the article.</p>
            </div>
            <div className = {styles.faqText}>
                <h3 className={styles.passageSubtitle}>Can I add a promotional link to my article?</h3>
                <p className={styles.passageText}>Yes, you can. However, it should pertain to the subject of the article.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Write