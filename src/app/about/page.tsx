// app/about/page.tsx

import FAQ from "../components/home/Faq";
import InnerHero from "../components/InnerHero";
import AboutManifesto from "./components/AboutManifesto";
import Clients from "./components/Clients";
import FinalCta from "./components/FinalCta";
import ProcessSection from "./components/ProcessSection";

export default function AboutPage() {
  return (
    <>
      <InnerHero 
        title="Ajans değiliz. " 
        accentTitle="Dijital iş ortağınızız." 
        description="2010'dan beri markalar kuruyor, işletiyor ve büyütüyoruz. Dışarıdan rapor sunan bir tedarikçi değil; sizinle aynı masada oturan, aynı sonucun peşinde koşan bir ortağız."
      />
      <AboutManifesto />
      <ProcessSection   />
      <Clients />
      <FAQ initialCount={8}/>
      <FinalCta />
    </>
  );
}