import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Methodology from "./components/home/Methodology";
import CaseStudies from "./components/home/CaseStudies";
import StackedServices from "./components/home/StackedServices";
import Testimonials from "./components/home/Testimonials";
import HighImpactSolutions from "./components/home/HighImpactSolutions";
import FAQ from "./components/home/Faq";
import FinalCta from "./components/home/FinalCta";

export default function Home() {
  
  return (
    <>
      {/* Cinematic Bottom-Aligned Hero */}
      <Hero />
      
      {/* Medusa Global İçerik Blokları */}
      <Services />
      <Methodology  />
      <CaseStudies />
      <StackedServices />
      <Testimonials />
      <HighImpactSolutions />
      <FAQ />
      <FinalCta />
    </>
  );
}