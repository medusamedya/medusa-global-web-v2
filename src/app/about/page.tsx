// app/about/page.tsx

import InnerHero from "../components/InnerHero";
import GlobalVisionSection from "./components/GlobalVisionSection";
import ProcessSection from "./components/ProcessSection";

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
    </>
  );
}