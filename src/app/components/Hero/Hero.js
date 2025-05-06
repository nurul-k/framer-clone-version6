import styles from "./Hero.module.css";
//import Image from 'next/image';
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.heroTitle}>
          <span className={styles.gradientText}>
            Sales Tax Compliance, Simplified
          </span>
        </h1>

        <div
          className={styles.container}
          data-framer-appear-id="1dqfp2f"
          data-framer-component-type="RichTextContainer"
        >
          <p
            className={styles.text}
            data-styles-preset="dGJYq65Lz"
            style={{ "--framer-text-alignment": "left" }}
          >
            Sales tax is complex. Krysta makes it simple with automated
            calculations, reporting, and filing.
          </p>
        </div>

        <Link href="/contact" className={styles.signupButton}>
          Get started
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="/images/woman.avif"
          alt="Hero Image"
          layout="responsive"
          width={400}
          height={600}
        />
      </div>
    </div>
  );
};

export default Hero;
