"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const contentText =
  "Medusa Global olarak, işletmenizin dijital dönüşümünü hızlandırmak ve sürdürülebilir büyüme sağlamak için yenilikçi çözümler sunarız. Uluslararası Pazarlama tecrübesi olan ekibimizle birlikte, yatırım ve danışmanlık hizmetlerimizi en üst düzeyde sunarak, işletmenizin küresel pazarlarda rekabet gücünü artırırız. Partnerlik yatırımlarından globallik analizine kadar uzanan büyüme yol haritası ve yenilikçi çözüm modellerimizle; markanızın ürün-pazar uyumu, çevik gelişimi ve stratejik pazarlama süreçleri üzerine profesyonel bir titizlikle çalışırız.";

// Kelime bazlı animasyon için alt bileşen
const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  // Kaydırma yüzdesine göre opasiteyi (0.15'den 1'e) ayarlar
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block mr-[0.3em] mt-[0.2em] transition-opacity duration-100"
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
    offset: ["start 75%", "end 60%"],
  });

  const words = contentText.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[80vh] flex items-center justify-center py-32 overflow-hidden bg-background transition-colors duration-500"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-medusa-purple/5 dark:bg-medusa-glow-primary/20 blur-[100px] rounded-full pointer-events-none transition-colors duration-700" />
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-5xl">
        <div className="relative inline-flex overflow-hidden rounded-full p-[1px] shadow-sm mb-6">
          {/* Sürekli dönen arka plan (Mor ve Spark Işığı) */}
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-purple)_40%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_60%,var(--color-medusa-purple)_100%)] opacity-80" />

          {/* İç Zemin ve Metin */}
          <div className="relative z-10 inline-flex items-center justify-center w-full h-full rounded-full bg-medusa-base-dark/95 px-4 py-1.5 backdrop-blur-md">
            <span className="font-sans text-sm font-semibold tracking-wide text-white drop-shadow-md">
              Misyonumuz
            </span>
          </div>
        </div>

        {/* --- BAŞLIK --- */}
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground dark:text-white tracking-tight transition-colors duration-300 mb-10">
          Küresel Büyümenin Stratejik Mimarı
        </h2>

        {/* --- SCROLL REVEAL METNİ --- */}
        <p className="text-xl md:text-3xl lg:text-4xl leading-snug md:leading-tight lg:leading-tight font-sans font-medium text-foreground dark:text-white">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}
