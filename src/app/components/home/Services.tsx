"use client";

import React, { useState } from "react";
import { BrainCircuit, Lightbulb, Rocket, Activity, LucideIcon, Mouse } from "lucide-react";

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
    description: "İş süreçlerinizdeki yaygın sorunları çevik çözümlerle çözeriz.",
    Icon: BrainCircuit,
  },
  {
    id: 2,
    title: "Yatırım",
    description: "İnandığımız ticaretlere yatırım yapar, aktif olarak yönetiriz.",
    Icon: Lightbulb,
  },
  {
    id: 3,
    title: "Hızlandırma",
    description: "Dijital varlıklarınızı analiz eder, eksiklerinizi tamamlar, hızla büyütürüz.",
    Icon: Rocket,
  },
  {
    id: 4,
    title: "Sağlık Kontrolü",
    description: "Web, sosyal medya ve reklamlarınızın kapsamlı, bağımsız analizini yaparız.",
    Icon: Activity,
  },
];

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    // 1. STRATEJİK DEĞİŞİKLİK: bg-background ve overflow-hidden kaldırıldı.
    // Negatif margin (-mt-24 md:-mt-40) ile Hero'nun altına değil, "içine" çekildi.
    <section className="relative w-full pb-24 z-20 -mt-24 md:-mt-32 transition-colors duration-500 pointer-events-none">
      
      {/* 
        pointer-events-none ile negatif margin yüzünden üstte kalan görünmez alanın 
        Hero'daki tıklamaları engellemesini önledik.
        İçeriklere pointer-events-auto vererek sadece onların tıklanabilir olmasını sağlayacağız.
      */}

      {/* Veri Akışı (Data Flow) Animasyonu */}
      <style>{`
        @keyframes flow-data {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        .animate-data-flow {
          animation: flow-data 1.2s linear infinite;
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10 pointer-events-auto">
        
        {/* --- BAŞLANGIÇ MERKEZİ (MOUSE ICON) --- */}
        {/* İkonu Hero'daki sayacın tam altına hizalamak için tasarlandı */}
        <div className="flex flex-col items-center justify-center w-full relative z-20">
          <div className="bg-background p-2 rounded-full border border-white/20 shadow-sm relative overflow-hidden group">
             <span className="absolute inset-[-500%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_100%)] opacity-20 group-hover:opacity-60 transition-opacity"></span>
             <div className="relative z-10 bg-background rounded-full p-1">
                <Mouse className="w-5 h-5 text-foreground/60 dark:text-medusa-cream/80 animate-bounce" />
             </div>
          </div>
        </div>

        {/* --- İNTERAKTİF VERİ KOLLARI (KUSURSUZ SVG MİMARİSİ) --- */}
        <div className="hidden lg:block relative w-full h-32 mb-6 opacity-80 -mt-2 z-0 pointer-events-none">
          <svg className="w-full h-full drop-shadow-md overflow-visible" viewBox="0 0 1000 100" preserveAspectRatio="none" fill="none">
            {/* Ortadan aşağı inen ana omurga */}
            <path 
              d="M 500 0 L 500 40" 
              stroke="var(--color-medusa-gold)" 
              strokeWidth="2" 
              strokeDasharray="4 4" 
              opacity="0.4" 
              vectorEffect="non-scaling-stroke" 
            />

            {/* Dinamik Kart Bağlantıları */}
            {servicesData.map((service, index) => {
              const targetX = [125, 375, 625, 875][index];
              const isHovered = hoveredId === service.id;

              return (
                <g key={`path-${service.id}`}>
                  <path 
                    d={`M 500 40 C 500 80, ${targetX} 40, ${targetX} 100`} 
                    stroke="var(--color-medusa-gold)" 
                    strokeWidth="1.5" 
                    strokeDasharray="6 6" 
                    opacity={isHovered ? "0.6" : "0.3"} 
                    className="transition-opacity duration-300"
                    vectorEffect="non-scaling-stroke"
                  />
                  
                  {isHovered && (
                    <path 
                      d={`M 500 0 L 500 40 C 500 80, ${targetX} 40, ${targetX} 100`} 
                      stroke="var(--color-medusa-spark)" 
                      strokeWidth="2.5" 
                      strokeDasharray="15 15" 
                      pathLength="100"
                      className="animate-data-flow drop-shadow-[0_0_8px_var(--color-medusa-spark)]"
                      vectorEffect="non-scaling-stroke"
                    />
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* --- HİZMET KARTLARI (GRID) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 lg:-mt-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col items-center text-center space-y-6 cursor-default"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative inline-flex overflow-hidden rounded-2xl p-[2px] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-105 shadow-[0_4px_20px_rgba(92,6,140,0.15)] group-hover:shadow-[0_8px_30px_rgba(201,169,126,0.4)]">
                <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_100%)] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-[14px] bg-gradient-to-br from-[#1F0838] via-[#5C068C] to-[#C9A97E] backdrop-blur-md">
                  <service.Icon
                    className="w-9 h-9 text-white transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                    strokeWidth={1.75}
                  />
                </div>
              </div>

              <div className="space-y-3 px-2">
                <h3 className="text-xl font-bold font-heading text-foreground dark:text-white tracking-wide transition-colors duration-300 group-hover:text-medusa-gold">
                  {service.title}
                </h3>
                <p className="text-foreground/80 dark:text-white/80 text-sm font-sans leading-relaxed max-w-[250px] mx-auto transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}