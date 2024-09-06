import React from "react";
import Link from "next/link";
import styles from "./page.module.scss";

function ThankYouPage() {
  return (
    <div className={styles.thankyou}>
      <h2>Thank you for submitting your details.</h2>
      <p>We will be in contact with you shortly.</p>
      <div className={styles.home}>
        <p>
          <Link className={styles.nav__link} href="/">
            Return to Home.
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ThankYouPage;
