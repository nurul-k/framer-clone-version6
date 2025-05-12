import React from 'react';
import styles from './TaxFeatures.module.css';

const TaxFeaturestwo = () => {
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.featureCard} style={{height: '617.188px', width: '590px'}}>
        <img
          src="/images/map.avif"
          alt="Instant Tax Calculations"
          className={styles.featureImage}
          style={{height: '391.388px', width: '410.85px',  objectFit: 'cover'}}
        />
        <h3 className={styles.featureTitle}>Instant Tax Calculations</h3>
        <p className={styles.featureDescription}>
        Automatically track tax rules and rates across all states, keeping your business compliant everywhere you sell.
        </p>
      </div>
      <div className={styles.featureCard} style={{height: '617.188px', width: '590px'}}>
        <img
          src="/images/taxReport.avif"
          alt="Auto Filing & Payments"
          className={styles.featureImage}
          style={{height: '391.388px', width: '410.825px',  objectFit: 'contain'}}
        />
        <h3 className={styles.featureTitle}>Auto Filing & Payments</h3>
        <p className={styles.featureDescription}>
        Access clear, detailed tax reports that keep your records organized, making audits and compliance checks stress-free.
        </p>
      </div>
     
    </div>
  );
};

export default TaxFeaturestwo;



