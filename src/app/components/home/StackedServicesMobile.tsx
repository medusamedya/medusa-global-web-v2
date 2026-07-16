"use client";

import React from "react";
import Badge from "../ui/Badge";

// Aynı Props Tipi
interface StackData {
  step: string;
  category: string;
  title: string;
  subtitle: string;
  items: string[];
}

export default function StackedServicesMobile({ data }: { data: StackData[] }) {
  return (
    <section className="relative w-full py-16 flex flex-col justify-center overflow-hidden">
      
      {/* Arka Plan Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vw] bg-medusa-primary/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* MOBİL BAŞLIK */}
      <div className="px-5 mb-10 flex flex-col items-center text-center">
        <Badge text="Hızlandırma" className="mb-4" />
        <h2 className="font-heading text-3xl font-extrabold text-white tracking-wide mb-3">
          Hızlandırma, üç hatta birden çalışır.
        </h2>
        <p className="font-sans text-base text-medusa-text-secondary">
          Kim olduğunuzu doğru söylemek, doğru kişiye söylemek ve doğru içerikle söylemek. Üçü ayrı ekiplerde değil, aynı çatı altında yönetilir.
        </p>
      </div>

      {/* YATAY SLIDER (CSS SNAP SCROLL) */}
      <div className="w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-5 pb-8 space-x-4">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="snap-center shrink-0 w-[90vw] max-w-[320px] h-full flex flex-col"
          >
            {/* MOBİL KART TASARIMI */}
            <div className="relative w-full flex-grow rounded-[24px] p-[1px] bg-gradient-to-br from-white via-white/30 to-[#853ec7] shadow-lg">
              <div className="relative z-10 w-full h-full bg-gradient-to-br from-[#1a1726] to-[#2a233c] border border-white/10 rounded-[calc(24px-1.5px)] p-6 flex flex-col shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">
                
                {/* Kart Header */}
                <div className="border-b border-white/10 pb-4 mb-4">
                  <p className="font-sans text-[11px] font-mono tracking-widest text-medusa-purple-light font-bold mb-2">
                    {item.step} / {item.category}
                  </p>
                  <h3 className="font-heading text-normal font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-medusa-text-secondary italic text-sm font-light leading-snug line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>

                {/* Kart Listesi */}
                <ul className="flex flex-col gap-3 mt-auto">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                        <img src="/Sarı_Medusa_Bullet.png" alt="Medusa Bullet" className="w-full h-full object-contain" />
                      </div>
                      <span className="font-sans text-medusa-text-muted text-sm font-light mt-auto leading-relaxed">
                        {listItem}
                      </span>
                    </li>
                  ))}
                </ul>
                
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Kaydırma İpucu */}
      <div className="w-full flex justify-center items-center gap-2 mt-2 opacity-50">
        <div className="w-8 h-1 rounded-full bg-medusa-border/30" />
        <span className="text-[10px] font-mono tracking-widest text-white">YATAY KAYDIR</span>
        <div className="w-8 h-1 rounded-full bg-medusa-border/30" />
      </div>

    </section>
  );
}