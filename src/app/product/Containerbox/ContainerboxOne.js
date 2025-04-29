
import styles from './Containerbox.module.css';  

const ContainerboxOne = () => {  

  const myStyle = {
    paddingTop: '2rem',
  }

  return (  
    <div className={styles.calculationContainer} >  
      <div className={styles.textContainer} style={myStyle}>  
        <h2 className={styles.title}>Integrate seamlessly with e-commerce &amp; ERP platforms</h2>  
        <p className={styles.description}>  
        Prebuilt integrations make it easy to connect Krysta to your commerce platform in no time. All integrations are reliable, thoroughly tested, and certified for seamless performance.
        </p>  
        <button className={styles.learnMoreButton}>More on integrations</button>  
      </div>  
      
      <div className={styles.imageContainer}>  
                <img  
                    src="/images/partners.avif"  
                    alt="Hero Image"  
                    layout="responsive"  
                    width={500}  
                    height={350}  
                />  
            </div>  
    </div>  
  );  
};  

export default ContainerboxOne;  






