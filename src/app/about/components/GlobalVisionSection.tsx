"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";
import Badge from "@/app/components/ui/Badge"; // Badge yolunun doğruluğundan emin olun

const contentText =
  "Medusa Global olarak, işletmenizin dijital dönüşümünü hızlandırmak ve sürdürülebilir büyüme sağlamak için yenilikçi çözümler sunarız. Uluslararası Pazarlama tecrübesi olan ekibimizle birlikte, yatırım ve danışmanlık hizmetlerimizi en üst düzeyde sunarak, işletmenizin küresel pazarlarda rekabet gücünü artırırız. Partnerlik yatırımlarından globallik analizine kadar uzanan büyüme yol haritası ve yenilikçi çözüm modellerimizle; markanızın ürün-pazar uyumu, çevik gelişimi ve stratejik pazarlama süreçleri üzerine profesyonel bir titizlikle çalışırız.";

// --- KELİME BAZLI ANİMASYON BİLEŞENİ ---
const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  // Geçişi daha doğal kılmak için başlangıç opasitesini 0.2 yaptık
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <motion.span
      style={{ opacity }}
      // Keskinliği kırmak için transition süresini kaldırdık, çünkü useSpring zaten yumuşatıyor
      className="inline-block mr-[0.3em] mt-[0.2em]"
    >
      {children}
    </motion.span>
  );
};

export default function GlobalVisionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animasyonun başlayacağı ve biteceği görünüm alanı (viewport) ayarları
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Okunabilirliği artırmak için tetiklenme alanını biraz daha genişlettik
    offset: ["start 80%", "end 50%"], 
  });

  // --- MÜKEMMEL YUMUŞAKLIK İÇİN SPRING (YAY) FİZİĞİ ---
  // Scroll değerini doğrudan yansıtmak yerine, esnek bir yaylanma ile iletiyoruz. 
  // Bu, fare tekerleğinin keskin duruşlarında bile yazının pürüzsüzce akmasını sağlar.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const words = contentText.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[80vh] flex items-center justify-center py-32 overflow-hidden bg-background"
    >
      {/* --- SİNEMATİK ARKA PLAN IŞIĞI (Yeni Tema) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-medusa-secondary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-5xl">
        
        {/* Rozet Vurgusu */}
        <Badge text="Misyonumuz" className="mb-8" />

        {/* --- BAŞLIK --- */}
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-wide mb-12">
          Küresel Büyümenin Stratejik Mimarı
        </h2>

        {/* --- SCROLL REVEAL METNİ --- */}
        <p className="text-xl md:text-3xl lg:text-4xl leading-snug md:leading-tight lg:leading-tight font-sans font-medium text-foreground">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              // Artık scrollYProgress yerine smoothProgress prop'unu geçiriyoruz
              <Word key={i} progress={smoothProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>

      </div>
    </section>
  );
}