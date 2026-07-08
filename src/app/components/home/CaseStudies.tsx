"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Building, TreePine } from "lucide-react";
import Badge from "../ui/Badge";

// Vaka Çalışmaları Veri Yapısı
const caseStudiesData = [
  {
    id: 1,
    companyName: "Maximum Kabakum",
    title:
      "Maximum Kabakum: Sessiz Bir Villa Projesini 6 Ayda Dolduran Konumlandırma",
    description:
      "Maximum Kabakum bize geldiğinde isimsiz, sessiz ama yüksek prestijli bir villa gelişimiydi. Müşteri kitlesi belliydi, nasıl konuşulacağı belli değildi. İsimlendirme, prestij sakini profil haritası ve seçilmiş erişim stratejisiyle üç adımda kurduk.",
    Icon: Building,
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", // Rastgele placeholder görsel
    stats: [
      { value: "%100", label: "Doluluk Oranı" },
      { value: "3 Adım", label: "Erişim Stratejisi" },
      { value: "2x", label: "Hızlı Kapanış" },
    ],
  },
  {
    id: 2,
    companyName: "Latanwood",
    title:
      "Latanwood: Geleneksel Ahşap İşçiliğinin Global Omnichannel Büyümesi",
    description:
      "Kaliteli üretimi dijital vitrinle buluşturduk. B2B ve B2C kitleleri için ayrı huniler (funnels) kurgulayarak, veri odaklı reklam yapılandırması ve marka konumlandırmasıyla globaldeki dijital ayak izini baştan inşa ettik.",
    Icon: TreePine,
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop", // Rastgele placeholder görsel
    stats: [
      { value: "5+", label: "Yeni Pazar" },
      { value: "%150", label: "Dönüşüm Artışı" },
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
      {/* --- YUKARIDAN VURAN SPOT IŞIĞI --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[60vw] max-w-[1000px] max-h-[600px] bg-medusa-purple/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        {/* --- BAŞLIK VE BADGE BÖLÜMÜ --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-6">
          <Badge text="Case Studies" className="mb-4" />
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Real-World Growth
            <br />
            Case Studies
          </h2>
          <p className="font-sans text-lg text-medusa-text-secondary">
            See how companies are revolutionizing their workflows and growth
            using our strategies.
          </p>
        </div>

        {/* --- CAROUSEL (KAYDIRICI) BÖLÜMÜ --- */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="overflow-hidden w-full pb-10">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {caseStudiesData.map((study) => (
                <div key={study.id} className="w-full flex-shrink-0 px-2">
                  {/* --- YENİ VAKA KARTI YAPISI --- */}
                  {/* Dış Çerçeve (Gradient Border: Beyazdan -> #853ec7 mora) */}
                  <div className="relative overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-br from-white via-white/30 to-[#853ec7] shadow-2xl">
                    {/* İç Kart Zemini ve Padding (Görsel ve metin ile çerçeve arasındaki boşluk) */}
                    <div className="relative z-10 flex flex-col lg:flex-row gap-8 rounded-[31px] bg-[#0A0510] p-4 ">
                      {/* SOL: Görsel ve İstatistik Kutuları */}
                      <div className="relative w-full lg:w-1/2 rounded-2xl overflow-hidden min-h-[350px] lg:min-h-[450px]">
                        {/* Arka Plan Görseli */}
                        <img
                          src={study.image}
                          alt={study.companyName}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        {/* Metinlerin okunabilirliği için görselin altına binen hafif siyah gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                        {/* Görselin Üzerindeki 3'lü İstatistik Kutuları */}
                        <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
                          {study.stats.map((stat, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0A0510] backdrop-blur-md border border-white/10 text-center"
                            >
                              <span className="font-heading text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#ded8ff]">
                                {stat.value}
                              </span>
                              <span className="font-sans text-[18px]  text-medusa-text-muted leading-tight">
                                {stat.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* SAĞ: Metin ve Detaylar Bölümü */}
                      <div className="w-full lg:w-1/2 flex flex-col justify-center py-4 lg:py-8 lg:pr-8">
                        {/* Logo ve Marka İsmi */}
                        <div className="flex items-center space-x-3 mb-18">
                          {/* shrink-0: İkonun metin uzasa bile ezilmesini engeller */}
                          <study.Icon className="w-8 h-8 text-white shrink-0" />
                          
                          {/* leading-none: Fontun ekstra satır boşluğunu kaldırıp hizalamayı keskinleştirir. 
                              Eğer fonttan kaynaklı yukarıda kalma hissi devam ederse "mt-1" veya "pt-1" ekleyebilirsin. */}
                          <span className="font-heading text-xl font-semibold text-white tracking-wide leading-none">
                            {study.companyName}
                          </span>
                        </div>

                        {/* Hikaye Başlığı */}
                        <h3 className="font-heading text-2xl  font-bold text-white leading-tight mb-6">
                          {study.title}
                        </h3>

                        {/* Hikaye Özeti */}
                        <p className="font-sans text-base md:text-lg text-medusa-text-secondary leading-relaxed font-light">
                          {study.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- CAROUSEL BUTONLARI (Görseldeki gibi sade, karemsi ve minimalist) --- */}
          <div className="flex items-center justify-center space-x-4 mt-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300
                ${
                  currentIndex === 0
                    ? "border-white/10 text-white/30 cursor-not-allowed"
                    : "border-white/20 text-white hover:bg-white/5 hover:border-white/40"
                }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === caseStudiesData.length - 1}
              className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300
                ${
                  currentIndex === caseStudiesData.length - 1
                    ? "border-white/10 text-white/30 cursor-not-allowed"
                    : "border-white/20 text-white hover:bg-white/5 hover:border-white/40"
                }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
