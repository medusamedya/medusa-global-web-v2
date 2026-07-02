"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Building, TreePine } from "lucide-react";

// Vaka Çalışmaları Veri Yapısı
const caseStudiesData = [
  {
    id: 1,
    companyName: "Maximum Kabakum",
    title: "Maximum Kabakum: Sessiz Bir Villa Projesini 6 Ayda Dolduran Konumlandırma",
    description: "Maximum Kabakum bize geldiğinde isimsiz, sessiz ama yüksek prestijli bir villa gelişimiydi. Müşteri kitlesi belliydi, nasıl konuşulacağı belli değildi. İsimlendirme, prestij sakini profil haritası ve seçilmiş erişim stratejisiyle üç adımda kurduk.",
    Icon: Building,
    stats: [
      { value: "%100", label: "Doluluk Oranı" },
      { value: "3 Adım", label: "İsimlendirme & Erişim Stratejisi" },
      { value: "2x", label: "Daha Hızlı Kapanış (Satış Süresi)" },
    ],
  },
  {
    id: 2,
    companyName: "Latanwood",
    title: "Latanwood: Geleneksel Ahşap İşçiliğinin Global Omnichannel Büyümesi",
    description: "Kaliteli üretimi dijital vitrinle buluşturduk. B2B ve B2C kitleleri için ayrı huniler (funnels) kurgulayarak, veri odaklı reklam yapılandırması ve marka konumlandırmasıyla globaldeki dijital ayak izini baştan inşa ettik.",
    Icon: TreePine,
    stats: [
      { value: "5+", label: "Yeni Hedef Pazar" },
      { value: "%150", label: "E-ticaret Dönüşüm Artışı" },
      { value: "3x", label: "Daha Yüksek ROAS" },
    ],
  },
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel Kontrolleri
  const handleNext = () => {
    if (currentIndex < caseStudiesData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative w-full py-24 bg-background transition-colors duration-500 overflow-hidden">
      {/* Derinlik Izgarası */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- BAŞLIK VE BADGE BÖLÜMÜ --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-6">
          
          {/* Animasyonlu Gradient Border Badge (İstediğin Standart) */}
          <div className="relative inline-flex overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_100%)] opacity-80" />
            <div className="relative z-10 inline-flex items-center justify-center w-full h-full rounded-full bg-medusa-base-dark/95 px-4 py-1.5 backdrop-blur-md">
              <span className="text-sm font-semibold tracking-wide text-white drop-shadow-md">
                Case Studies
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground dark:text-white tracking-tight">
            Sahada Kanıtlanmış Büyüme Hikayeleri
          </h2>
          <p className="text-lg text-foreground/80 dark:text-white/70">
            Farklı sektörlerdeki markaların dijital varlıklarını nasıl yeniden konumlandırdığımızı inceleyin.
          </p>
        </div>

        {/* --- CAROUSEL (KAYDIRICI) BÖLÜMÜ --- */}
        <div className="relative w-full max-w-6xl mx-auto">
          
          {/* Maske (Taşan kartları gizler) */}
          <div className="overflow-hidden w-full rounded-3xl pb-10">
            {/* Animasyonlu İç Şerit (Track) */}
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {caseStudiesData.map((study) => (
                <div key={study.id} className="w-full flex-shrink-0 px-2 lg:px-4">
                  
                  {/* --- VAKA KARTI (ANIMASYONLU BORDER) --- */}
                  <div className="relative overflow-hidden rounded-3xl p-[2px] group shadow-[0_10px_40px_rgba(92,6,140,0.1)]">
                    
                    {/* Dönen Kurumsal Çerçeve Animasyonu */}
                    <span className="absolute inset-[-200%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-spark)_20%,var(--color-medusa-base-dark)_50%,var(--color-medusa-purple)_100%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Kart İçeriği (İki Kolonlu Yapı) */}
                    <div className="relative z-10 flex flex-col lg:flex-row rounded-[22px] bg-gradient-to-br from-[#1F0838] to-[#08020F] overflow-hidden backdrop-blur-xl border border-white/5">
                      
                      {/* SOL: Görsel ve İstatistikler Bölümü */}
                      <div className="w-full lg:w-[45%] relative bg-medusa-base-light/40 flex flex-col min-h-[300px] lg:min-h-[450px]">
                        
                        {/* 3D Obje / Görsel Yer Tutucu (Görsel Gelene Kadar Teknolojik Arka Plan) */}
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-medusa-purple)_0%,transparent_70%)] opacity-20"></div>
                           {/* Sembolik Numara veya Logo Silüeti */}
                           <span className="text-[10rem] md:text-[15rem] font-black text-white/5 select-none transform -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                             0{study.id}
                           </span>
                        </div>

                        {/* Alt Kısım: İstatistik Kutuları */}
                        <div className="mt-auto relative z-20 grid grid-cols-3 gap-px bg-white/10 backdrop-blur-md border-t border-white/10">
                          {study.stats.map((stat, index) => (
                            <div key={index} className="bg-[#08020F]/60 p-4 md:p-6 flex flex-col items-center justify-center text-center hover:bg-medusa-purple/20 transition-colors">
                              <span className="text-xl md:text-2xl font-bold text-medusa-spark mb-1">{stat.value}</span>
                              <span className="text-xs md:text-sm text-white/70 font-medium leading-snug">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* SAĞ: Metin ve Detaylar Bölümü */}
                      <div className="w-full lg:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-8">
                        
                        {/* Şirket Logosu / İsmi */}
                        <div className="flex items-center space-x-3">
                          <div className="p-2.5 rounded-xl bg-gradient-to-br from-medusa-purple to-medusa-glow-primary shadow-lg border border-white/10">
                            <study.Icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-xl font-bold text-white tracking-wide">{study.companyName}</span>
                        </div>

                        {/* Hikaye Başlığı */}
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                          {study.title}
                        </h3>

                        {/* Hikaye Özeti */}
                        <p className="text-base md:text-lg text-white/70 leading-relaxed font-light">
                          {study.description}
                        </p>
                      </div>

                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>

          {/* --- CAROUSEL BUTONLARI --- */}
          <div className="flex items-center justify-center space-x-4 mt-6">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-3 rounded-xl border backdrop-blur-sm transition-all duration-300 flex items-center justify-center
                ${currentIndex === 0 
                  ? 'border-foreground/10 text-foreground/30 dark:border-white/10 dark:text-white/30 cursor-not-allowed' 
                  : 'border-medusa-purple/50 text-medusa-purple dark:text-medusa-cream hover:bg-medusa-purple/10 hover:scale-105'}`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex === caseStudiesData.length - 1}
              className={`p-3 rounded-xl border backdrop-blur-sm transition-all duration-300 flex items-center justify-center
                ${currentIndex === caseStudiesData.length - 1 
                  ? 'border-foreground/10 text-foreground/30 dark:border-white/10 dark:text-white/30 cursor-not-allowed' 
                  : 'border-medusa-purple/50 text-medusa-purple dark:text-medusa-cream hover:bg-medusa-purple/10 hover:scale-105'}`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}