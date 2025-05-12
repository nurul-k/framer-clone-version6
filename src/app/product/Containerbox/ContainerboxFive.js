
import styles from './ContainerboxFive.module.css';  

const ContainerboxFive = () => {  

  const myStyle = {
    paddingTop: '5rem',
  }


  return (  
    <div className={styles.calculationContainer}>  
      <div className={styles.textContainer} style={myStyle}>  
        <h2 className={styles.title}>Access comprehensive sales tax reports</h2>  
        <p className={styles.description}>  
        Our platform seamlessly consolidates orders from all your e-commerce channels into a single dashboard, providing you with a comprehensive view of your multichannel transactions and detailed state-by-state reports, including city, county, and special district breakdowns.
        </p>  
        <button className={styles.learnMoreButton}>More on sales tax reports</button>  
      </div>  
      
      <div className={styles.imageContainer}>  
                <img  
                    src="/images/box-four.avif"  
                    alt="Hero Image"  
                    layout="responsive"  
                    width={500}  
                    height={500}  
                />  
            </div>  
    </div>  
  );  
};  

export default ContainerboxFive;  



