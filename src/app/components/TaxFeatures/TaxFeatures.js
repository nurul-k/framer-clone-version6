import React from 'react';
import styles from './TaxFeatures.module.css';

const TaxFeatures = () => {
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.featureCard}>
        <img
          src="https://framerusercontent.com/images/WmQa79eBVy1Rd4ab06sKQzcvrYw.png"
          alt="Instant Tax Calculations"
          className={styles.featureImage}
        />
        <h3 className={styles.featureTitle}>Instant Tax Calculations</h3>
        <p className={styles.featureDescription}>
          Get precise, real-time tax rates at checkout based on location, product type, and tax laws, ensuring compliance and a seamless customer experience.
        </p>
      </div>
      <div className={styles.featureCard}>
        <img
          src="https://framerusercontent.com/images/7atnPJ1ZzJzHqLT3GqOllRD9mA0.png"
          alt="Auto Filing & Payments"
          className={styles.featureImage}
        />
        <h3 className={styles.featureTitle}>Auto Filing & Payments</h3>
        <p className={styles.featureDescription}>
          We automatically file your tax returns and submit payments on time, ensuring compliance without the hassle.
        </p>
      </div>
     
    </div>
  );
};

export default TaxFeatures;





