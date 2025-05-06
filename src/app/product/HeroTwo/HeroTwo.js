

import styles from './HeroTwo.module.css';  
import Link from 'next/link';  

const HeroTwo = () => {  

    return (  
        <div className={styles.heroContainer}>  
            <div className={styles.textContainer}>  
                <h1 className={styles.heroTitle}>  
                    <span className={styles.gradientText}>  
                        Sales Tax  Compliance,  Simplified  
                    </span>  
                </h1>  
                <p className={styles.heroDescription}>  
                    Sales tax is complex. Krysta makes it simple with automated calculations, reporting, and filing.  
                </p>  
                <Link href="/contact" className={styles.signupButton}>  
                    Get started  
                </Link>  
            </div>  
        </div>  
    );  
};  

export default HeroTwo;  