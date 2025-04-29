
import styles from './Containerbox.module.css';  

const ContainerboxFour = () => {  

  const myStyle = {
    paddingTop: '6rem',
  }

  return (  
    <div className={styles.calculationContainer}>  
      <div className={styles.textContainer} style={myStyle}>  
        <h2 className={styles.title}>Automate filing &amp; remittance</h2>  
        <p className={styles.description}>  
        The Krysta AutoFile service automatically files your returns and remittances for each state where you're registered, ensuring you never miss a due date.
        </p>  
        <button className={styles.learnMoreButton}>More on AutoFile</button>  
      </div>  
      
      <div className={styles.imageContainer}>  
                <img  
                    src="/images/box-three.avif"  
                    alt="Hero Image"  
                    layout="responsive"  
                    width={500}  
                    height={500}  
                />  
            </div>  
    </div>  
  );  
};  

export default ContainerboxFour;  



