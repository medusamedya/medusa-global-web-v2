// app/about/page.tsx

import InnerHero from "../components/InnerHero";
import Clients from "./components/Clients";
import FinalCta from "./components/FinalCta";
import GlobalVisionSection from "./components/GlobalVisionSection";
import ProcessSection from "./components/ProcessSection";
import Team from "./components/Team";

export default function AboutPage() {
  return (
    <>
      <InnerHero 
        title="Biz Kimiz" 
        accentTitle="Medusa Global" 
        description="Dijital varlıklarınızı büyütmek için stratejiyi kodla, tasarımı veriyle birleştiriyoruz."
      />
      <GlobalVisionSection />
      <ProcessSection   />
      <Team />
      <Clients />
      <FinalCta />
    </>
  );
}