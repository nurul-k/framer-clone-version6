
import styles from './ContainerboxTwo.module.css';  

const ContainerboxTwo = () => {  

  const myStyle = {
    paddingTop: '5rem',
  }

  return (  
    <div className={styles.calculationContainer}>  
      <div className={styles.textContainer} style={myStyle}>  
        <h2 className={styles.title}>Calculate accurate sales tax in real time</h2>  
        <p className={styles.description}>  
        Our high-performance sales tax calculation engine delivers over 99% accuracy, ensuring precise tax calculations. Smart product classification automatically recommends the correct tax code for your products.
        </p>  
        <button className={styles.learnMoreButton}>More on real-time calculation</button>  
      </div>  
      
      <div className={styles.imageContainer}>  
                <img  
                    src="/images/box-one.avif"  
                    alt="Hero Image"  
                    layout="responsive"  
                    width={500}  
                    height={500}   
                />  
            </div>  
    </div>  
  );  
};  

export default ContainerboxTwo;  




