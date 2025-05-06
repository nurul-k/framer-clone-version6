import styles from './LogoMarquee.module.css';

const logoSvgs = {
  Quantum: '/images/quantum.svg',
  'Echo Valley': '/images/echo.svg',
  PULSE: '/images/white.svg',
  APEX: '/images/apex.svg',
  Celestial: '/images/celestial.svg',
  'Acme Corp': '/images/download.svg',
};

// Fallback SVG if logo image not found
const fallbackSvg = '/images/fallback.svg';

const logos = [
  'Quantum',
  'Echo Valley',
  'PULSE',
  'APEX',
  'Celestial',
  'Acme Corp',
  'Quantum',
  'Echo Valley',
];

const LogoMarquee = () => {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marquee}>
        {[...logos, ...logos].map((logo, index) => {
          const svgSrc = logoSvgs[logo] || fallbackSvg;

          return (
            <div key={index} className={styles.logo}>
              <img src={svgSrc} alt={`${logo} logo`} className={styles.logoImage} />
              <span>{logo}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoMarquee;





