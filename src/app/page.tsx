import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Methodology from "./components/home/Methodology";
import CaseStudies from "./components/home/CaseStudies";
import StackedServices from "./components/home/StackedServices";
import Testimonials from "./components/home/Testimonials";
import HighImpactSolutions from "./components/home/HighImpactSolutions";
import FAQ from "./components/home/Faq";
import FinalCta from "./components/home/FinalCta";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    // bg-medusa-base-dark statik sınıfını kaldırdık. 
    // Yerine dinamik olan bg-background ve text-foreground ekledik.
    // transition-colors ile tema geçişinin pürüzsüz olmasını sağladık.
    <main className="bg-background text-foreground relative flex flex-col overflow-hidden transition-colors duration-500">
      
      {/* A note on Shaders: The spec mentioned Swirl, ChromaFlow, etc. 
        Those require specific WebGL React libraries (like Three.js or a paid Framer template). 
        For now, our CSS gradient map acts as the perfect lightweight fallback. 
        If you have those shader files, they would go right here as an absolute background!
      */}

      {/* Floating Smart Header */}
      <Header />

      {/* Cinematic Bottom-Aligned Hero */}
      <Hero />
      
      {/* Medusa Global 4'lü Hizmet Ağı */}
      <Services />
      <Methodology  />
      <CaseStudies />
      <StackedServices />
      <Testimonials />
      <HighImpactSolutions />
      <FAQ />
      <FinalCta />
      <Footer />

    </main>
  );
}