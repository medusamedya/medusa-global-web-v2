"use client";

import React from "react";
import Badge from "@/app/components/ui/Badge";
import ProcessCard from "@/app/components/ui/ProcessCard"; // Dosya yolunu kendi klasör yapına göre düzelt

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

          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Uçtan Uca Büyüme Yolculuğu
          </h2>
        </div>

        {/* --- 3'LÜ STRATEJİ SÜRECİ (GRID) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {processData.map((item) => (
            <ProcessCard 
              key={item.id}
              number={item.number}
              title={item.title}
              description={item.description}
              tag={item.tag}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}