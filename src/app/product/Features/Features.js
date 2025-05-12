// src/app/components/Features/Features.jsx  

import React from 'react';  
import styles from './Features.module.css';  

const Features = () => {  
  return (  
    <section className={styles.featuresContainer}>  
      <div className={styles.featuresGrid}>  
        <div className={styles.feature}>        
           <img className={styles.image} src='/images/firstCircle.avif'/>
          <p className={styles.featureTitle}>Connect your e-commerce or ERP platform</p>  
          <p className={styles.featureDescription} style={{ height: '72px', width: ' 250px'}}>  
            Prebuilt integrations with popular platforms quickly connect Krysta to your existing systems.  
          </p>  
        </div>  

        <div className={styles.feature}>  
        <img className={styles.image} src='/images/secondCircle.avif'/> 
          <p className={styles.featureTitle}>Determine economic nexus</p>  
          <p className={styles.featureDescription}  style={{ height: '96px', width: ' 250px'}}>  
            Our Nexus Insights Dashboard and notifications help you stay ahead of your sales tax responsibilities by state.  
          </p>  
        </div>  

        <div className={styles.feature}>  
        <img className={styles.image} src='/images/thirdCircle.avif'/>
          <p className={styles.featureTitle}>Collect accurate sales tax at checkout</p>  
          <p className={styles.featureDescription}  style={{ height: '72px', width: ' 250px'}}>  
            Our real-time calculation engine and sales tax API provides rooftop-level, product-specific sales tax.  
          </p>  
        </div>  

        <div className={styles.feature}>  
        <img className={styles.image} src='/images/fourthCircle.avif'/> 
          <p className={styles.featureTitle}>Access sales tax reports</p>  
          <p className={styles.featureDescription}  style={{ height: '96px', width: ' 250px'}}>  
            Our reporting dashboard compiles data from all your channels to give you the most up-to-date view of your transactions and tax liability.  
          </p>  
        </div>  
      </div>  
    </section>  
  );  
};  

export default Features;  