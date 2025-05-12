import Hero from "./components/Hero/Hero.js";
import Footer from "./components/Footer/Footer.js";
import LogoMarquee from "./components/LogoMarquee/LogoMarquee.js";
import AutoFile from "./components/AutoFile/AutoFile.js";
import RealTimeCalculation from "./components/AutoFile/RealTimeCalculation.js";
import RealTimeCalculationtwo from "./components/AutoFile/RealTimeCalculationtwo.js";
import TrustedByBusinesses from "./components/TrustedByBusinesses/TrustedByBusinesses.js";
import SmartTaxCompliance from "./components/SmartTaxCompliance/SmartTaxCompliance.js";
import TaxFeatures from "./components/TaxFeatures/TaxFeatures.js";
import TaxFeaturestwo from "./components/TaxFeatures/TaxFeaturestwo.js";
import UserFeedback from "./components/UserFeedback/UserFeedback.js";
import { HeroSection } from "./components/HeroSection/HeroSection.js";
import AutoFiletwo from "./components/AutoFile/AutoFiletwo.js";
import RootLayout from "./layout.js";

export default function Home() {
  return (
    <main>
      <RootLayout>
        <HeroSection />
        <section id="/">
          <Hero />
          <LogoMarquee />
          <AutoFile />
          <RealTimeCalculation />
          <AutoFiletwo />
          <RealTimeCalculationtwo />
          <TrustedByBusinesses />
          <SmartTaxCompliance />
          <TaxFeatures />
          <TaxFeaturestwo />
          <UserFeedback />
        </section>

        <Footer />
      </RootLayout>
    </main>
  );
}

/*

import Hero from './components/Hero/Hero.js';
import Footer from './components/Footer/Footer.js';
import LogoMarquee from './components/LogoMarquee/LogoMarquee.js';
import AutoFile from './components/AutoFile/AutoFile.js';
import RealTimeCalculation from './components/RealTimeCalculation/RealTimeCalculation.js';
import RealTimeCalculationtwo from './components/RealTimeCalculation/RealTimeCalculationtwo.js';
import TrustedByBusinesses from './components/TrustedByBusinesses/TrustedByBusinesses.js';
import SmartTaxCompliance from './components/SmartTaxCompliance/SmartTaxCompliance.js';
import TaxFeatures from './components/TaxFeatures/TaxFeatures.js';
import TaxFeaturestwo from './components/TaxFeatures/TaxFeaturestwo.js';
import UserFeedback from './components/UserFeedback/UserFeedback.js';
import { HeroSection } from './components/HeroSection/HeroSection.js';
import AutoFiletwo from './components/AutoFile/AutoFiletwo.js';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section id="/">
        <Hero />
        <LogoMarquee />
        <AutoFile />
        <RealTimeCalculation />
        <AutoFiletwo />
        <RealTimeCalculationtwo />
        <TrustedByBusinesses />
        <SmartTaxCompliance />
        <TaxFeatures />
        <TaxFeaturestwo />
        <UserFeedback />
      </section>
      <Footer />
    </main>
  );
}
*/
