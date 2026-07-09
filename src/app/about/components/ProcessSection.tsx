"use client";

import Badge from "@/app/components/ui/Badge";
import React from "react";

interface ProcessItem {
  id: number;
  number: string;
  tag: string;
  title: string;
  description: string;
}

const processData: ProcessItem[] = [
  {
    id: 1,
    number: "01",
    tag: "ANALİZ",
    title: "Keşif ve Strateji",
    description:
      "İşletmenizin mevcut yapısını analiz ediyor, global pazardaki potansiyelini ve dijital dönüşüm ihtiyaçlarını bilimsel verilerle belirliyoruz.",
  },
  {
    id: 2,
    number: "02",
    tag: "GELİŞTİRME",
    title: "Yatırım ve Model",
    description:
      "Markanıza uygun yatırım modellerini hayata geçiriyor, ölçeklenebilir ve çevik iş geliştirme stratejileriyle operasyonel gücünüzü artırıyoruz.",
  },
  {
    id: 3,
    number: "03",
    tag: "BÜYÜME",
    title: "Global Ölçekleme",
    description:
      "Uluslararası pazarlama kanallarını aktive ederek, markanızı dünya genelinde rekabetçi ve sürdürülebilir bir büyüme yolculuğuna çıkarıyoruz.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative w-full py-24 bg-background transition-colors duration-500 overflow-hidden border-t border-medusa-border/20">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- ÜST BAŞLIK VE DÖNEN BADGE --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 space-y-4">
          <Badge text="İşleyiş Modelimiz" className="mb-8" />

          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Uçtan Uca Büyüme Yolculuğu
          </h2>
        </div>

        {/* --- 3'LÜ STRATEJİ SÜRECİ (GRID) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {processData.map((item) => (
            <div
              key={item.id}
              className="relative h-full overflow-hidden rounded-[2rem] p-[2px] group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(61,10,107,0.3)]"
            >
              {/* Dönen Border Katmanı (Yeni Medusa Renkleri) */}
              <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-secondary)_0%,var(--color-medusa-purple-light)_25%,var(--color-medusa-primary)_50%,var(--color-medusa-secondary)_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Kart İçeriği / Maske */}
              <div className="relative z-10 h-full rounded-[calc(2rem-2px)] bg-medusa-surface-1/95 backdrop-blur-xl p-8 flex flex-col items-start border border-medusa-border/20 transition-colors duration-500">
                {/* Üst Köşe Parlama Efekti (Hover Durumunda Aktif Olur) */}
                <div className="absolute inset-0 rounded-[calc(2rem-2px)] bg-gradient-to-br from-medusa-purple-light/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Tag / Kategori */}
                <span className="font-sans text-xs md:text-sm font-bold tracking-widest text-medusa-purple-light mb-4 transition-colors duration-300">
                  {item.tag}
                </span>

                {/* Numara ve Başlık Alanı */}
                <div className="relative w-full mb-4 flex items-baseline">
                  {/* Dev Arka Plan Numarası */}
                  <span className="absolute -left-2 -top-10 font-heading text-7xl md:text-8xl font-black text-foreground/[0.04] select-none group-hover:text-medusa-purple-light/10 transition-colors duration-500">
                    {item.number}
                  </span>

                  {/* Sütun Başlığı */}
                  <h3 className="relative z-10 font-heading text-xl md:text-2xl font-bold text-foreground transition-colors duration-300 pl-1">
                    {item.title}
                  </h3>
                </div>

                {/* Açıklama Metni */}
                <p className="font-sans text-sm md:text-[15px] text-medusa-text-secondary leading-relaxed font-light transition-colors duration-300 group-hover:text-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}