import HeroTwo from './HeroTwo/HeroTwo.js';
import LogoMarquee from './LogoMarquee/LogoMarquee.js';
import SmartTaxCompliance from './SmartTaxCompliance/SmartTaxCompliance.js';
import Features from './Features/Features.js';
import ContainerboxOne from './Containerbox/ContainerboxOne.js';
import ContainerboxTwo from './Containerbox/ContainerboxTwo.js';
import ContainerboxThree from './Containerbox/ContainerboxThree.js';
import ContainerboxFour from './Containerbox/ContainerboxFour.js';
import ContainerboxFive from './Containerbox/ContainerboxFive.js';
import ContainerboxSix from './Containerbox/ContainerboxSix.js';
import { HeroSection } from './HeroSection/HeroSection.js';
import Footer from './Footer/Footer.js';

export default function Product() {
  return (
    <main>
       
      <section id="product">
        <HeroSection/>
      <HeroTwo/>
      <LogoMarquee/>
      <SmartTaxCompliance/>
      <Features/>
      <ContainerboxOne/>
      <ContainerboxTwo/>
      <ContainerboxThree/>
      <ContainerboxFour/>
      <ContainerboxFive/>
      <ContainerboxSix/>
      <Footer/>
      </section>
    </main>
  )
} 
 