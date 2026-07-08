"use client";

import React from "react";
import {
  BrainCircuit,
  Lightbulb,
  Rocket,
  Activity,
  LucideIcon,
  Mouse,
} from "lucide-react";

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  Icon: LucideIcon;
}

const servicesData: ServiceCard[] = [
  {
    id: 1,
    title: "Danışmanlık",
    description:
      "İş süreçlerinizdeki yaygın sorunları çevik çözümlerle çözeriz.",
    Icon: BrainCircuit,
  },
  {
    id: 2,
    title: "Yatırım",
    description:
      "İnandığımız ticaretlere yatırım yapar, aktif olarak yönetiriz.",
    Icon: Lightbulb,
  },
  {
    id: 3,
    title: "Hızlandırma",
    description:
      "Dijital varlıklarınızı analiz eder, eksiklerinizi tamamlar, hızla büyütürüz.",
    Icon: Rocket,
  },
  {
    id: 4,
    title: "Sağlık Kontrolü",
    description:
      "Web, sosyal medya ve reklamlarınızın kapsamlı, bağımsız analizini yaparız.",
    Icon: Activity,
  },
];

export default function Services() {
  return (
    <section className="relative w-full pb-24 z-20 -mt-24 md:-mt-32 transition-colors duration-500 pointer-events-none">
      <div className="container mx-auto px-6 relative z-10 pointer-events-auto">
        {/* --- BAŞLANGIÇ MERKEZİ (MOUSE ICON) --- */}
        <div className="flex flex-col items-center justify-center w-full relative z-20">
          <div className="flex flex-col items-center gap-2 mb-4">
            <Mouse
              className="w-8 h-8 text-medusa-purple-light"
              strokeWidth={1.5}
            />
            
          </div>
        </div>

        {/* --- İNTERAKTİF VERİ KOLLARI (MERKEZ KAVİSLİ & KÜÇÜK KESİK ÇİZGİLER) --- */}
        <div className="hidden lg:block relative w-full max-w-[1200px] mx-auto h-[120px] z-0 pointer-events-none text-medusa-purple-light">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 1000 150"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              {/* İkonlara yaklaştıkça solgunlaşan fade maskesi */}
              <linearGradient id="lineFade" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
                <stop offset="60%" stopColor="currentColor" stopOpacity="0.5" />
                <stop
                  offset="100%"
                  stopColor="currentColor"
                  stopOpacity="0.05"
                />
              </linearGradient>
            </defs>

            {/* 4 Maddeye Dağılan Kusursuz Kavisli Kollar (Y-Junction) */}
            {servicesData.map((_, index) => {
              const targetX = [125, 375, 625, 875][index];
              const isLeft = targetX < 500;

              // Merkez kavis başlangıcı ve yön hesaplaması
              const centerCurveControl = isLeft ? 480 : 520;
              const dir = isLeft ? 1 : -1;
              const dropCurveStart = targetX + dir * 20;

              return (
                <path
                  key={`line-${index}`}
                  // M 500 0: Tam noktadan başlar
                  // L 500 20: Düz iner
                  // Q 500 40 [centerCurve] 40: Merkezden sağa/sola kavisli ayrılır
                  // L [dropCurve] 40: Yatay düz ilerler
                  // Q targetX 40 targetX 60: İkona doğru kavisli döner
                  // L targetX 140: Aşağı solgunlaşarak iner
                  d={`M 500 0 L 500 20 Q 500 40 ${centerCurveControl} 40 L ${dropCurveStart} 40 Q ${targetX} 40 ${targetX} 60 L ${targetX} 140`}
                  stroke="url(#lineFade)"
                  strokeWidth="1.2"
                  strokeDasharray="3 5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>
        </div>

        {/* --- HİZMET KARTLARI (GRID) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 relative w-full max-w-[1200px] mx-auto z-10 lg:-mt-2">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col items-center text-center px-2 cursor-default"
            >
              {/* DIŞ KATMAN: 3 Renkli Gradient Border (Üst ince ışık, Alt Sol Spark, Alt Sağ Mor) */}
              <div className="relative rounded-[1.3rem] p-[1px] mb-6 transition-transform duration-500 group-hover:-translate-y-1 shadow-[0_8px_30px_rgba(92,6,140,0.25)] bg-gradient-to-br from-white/5 via-medusa-spark/60 to-medusa-purple">
                {/* İÇ KATMAN: Üstü kurumsal siyah, altı çift renkli Mesh Gradient zemin */}
                <div className="relative flex items-center justify-center w-14 h-14 md:w-18 md:h-18 rounded-[calc(1.3rem-1px)] bg-[#08020F] overflow-hidden">
                  {/* Alt sol köşeden yayılan sıcak Medusa Spark (Gold/Krem Işık) */}
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 md:w-18 md:h-18 bg-medusa-purple-light/10 blur-[12px] rounded-full pointer-events-none" />

                  {/* Alt sağ köşeden yayılan derin Medusa Moru */}
                  <div className="absolute -bottom-4 -right-4 w-14 h-14 md:w-16 md:h-16 bg-medusa-secondary/40 blur-[18px] rounded-full pointer-events-none" />

                  {/* Üst Kısım Cam Yansıması (Glossy Effect - 3D Hissiyatı için üstte keskinleşir) */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* İkon */}
                  <service.Icon
                    className="w-6 h-6 md:w-7 md:h-7 text-white drop-shadow-md z-10 transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Başlık */}
              <h3 className="text-lg md:text-xl font-bold font-heading text-foreground dark:text-white tracking-wide mb-3 transition-colors duration-300 group-hover:text-medusa-purple dark:group-hover:text-medusa-spark">
                {service.title}
              </h3>

              {/* Açıklama */}
              <p className="text-foreground/70 dark:text-white/60 text-sm md:text-[15px] font-sans leading-relaxed max-w-[260px] mx-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
