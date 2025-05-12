
import styles from './ContainerboxThree.module.css';  

const ContainerboxThree = () => {  
  return (  
    <div className={styles.calculationContainer}>  
      <div className={styles.textContainer}>  
        <h2 className={styles.title}>Track economic nexus across states</h2>  
        <p className={styles.description}>  
        Our Nexus Insights Dashboard, combined with notifications, allows you to track your nexus exposure. When you&apos;re approaching nexus in a new state, we offer actionable recommendations for the next steps.
        </p>  
        <button className={styles.learnMoreButton}>More on nexus dashboard</button>  
      </div>  
      
      <div className={styles.imageContainer}>  
                <img  
                    src="/images/box-two.avif"  
                    alt="Hero Image"  
                    layout="responsive"  
                    width={500}  
                    height={350}  
                />  
            </div>  
    </div>  
  );  
};  

export default ContainerboxThree;  




