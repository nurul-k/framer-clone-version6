import styles from './Footer.module.css';
import { FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';
import { 
  FaInstagram, FaPinterest, FaLinkedin, FaTiktok, FaYoutube, 
  FaFacebook, FaTwitter
} from 'react-icons/fa';

// Import Koulen font
import { Koulen } from 'next/font/google';
const koulen = Koulen({ subsets: ['latin'], weight: '400' });

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
      <h1 className={`${styles.logo} ${koulen.className}`}>KRYSTA</h1>
        <div className={styles.contactInfo}>
        <div className={styles.address}> 
        <FaMapMarkerAlt className={styles.icon1} />
          <p className={styles.info1}>
           10019 NE 141st Street Kirkland WA 98034
            <br />
            United States
          </p>
          </div>

          <div className={styles.phone}> 
          <p className={styles.info2}>
            <FaMobileAlt className={styles.icon2} /> Call us: +919818187261
          </p>
          </div>
        </div>

        <div className={styles.socialIcons}>
          <FaTwitter className={styles.socialIcon} />
          <FaInstagram className={styles.socialIcon} />
          <FaPinterest className={styles.socialIcon} />
          <FaLinkedin className={styles.socialIcon} />
          <FaTiktok className={styles.socialIcon} />
          <FaYoutube className={styles.socialIcon} />
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.column}>
          <h4>Product</h4>
          <ul className={styles.list}>
            <li>Sales Tax Platform</li>
            <li>Real Time Calculation</li>
            <li>Sales Tax Reports</li>
            <li>Nexus Insights</li>
            <li>Filing</li>
            <li>Integrations</li>
            <li>State Tax Registrations</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Solutions</h4>
          <ul className={styles.list}>
            <li>Retail</li>
            <li>Food and Beverage</li>
            <li>Medical</li>
            <li>SaaS</li>
            <li>Services</li>
            <li>Mid-Market Business</li>
            <li>Small Business</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Company</h4>
          <ul className={styles.list}>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

