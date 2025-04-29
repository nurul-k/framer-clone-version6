
import styles from './Containerbox.module.css';  

const ContainerboxSix = () => {  

  const myStyle = {
    paddingTop: '5rem',
  }


  return (  
    <div className={styles.calculationContainer}>  
      <div className={styles.textContainer} style={myStyle}>  
        <h2 className={styles.title}>Get world-class support from our team</h2>  
        <p className={styles.description}>  
        When you need assistance, our comprehensive knowledge base, detailed technical documentation, and dedicated customer support team are here to help you find answers quickly.
        </p>  
        <button className={styles.learnMoreButton}>Krysta support center</button>  
      </div>  
      
      <div className={styles.imageContainer}>  
                <img  
                    src="/images/img-box.avif"  
                    alt="Hero Image"  
                    layout="responsive"  
                    width={500}  
                    height={450}  
                />  
            </div>  
    </div>  
  );  
};  

export default ContainerboxSix;  



