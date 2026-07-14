"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Badge from "../ui/Badge";
import Image from "next/image";
// Veriyi import ediyoruz! (Yolu kendi proje yapına göre düzenle)
import { caseStudiesData } from "@/data/caseStudies";

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
    <section className="relative w-full py-12 md:py-16 bg-background transition-colors duration-500 overflow-hidden">
      {/* --- YUKARIDAN VURAN SPOT IŞIĞI --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[60vw] max-w-[1000px] max-h-[600px] bg-medusa-purple/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        {/* --- BAŞLIK VE BADGE BÖLÜMÜ --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 md:mb-16 space-y-6">
          <Badge text="Yeniliklerimiz" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Markaların Dönüşüm Hikayeleri
          </h2>
          <p className="font-sans text-normal md:text-lg text-medusa-text-secondary">
            Farklı sektörlerden markaların dijital yolculuğunu, kurduğumuz
            sistemleri ve elde ettiğimiz sonuçları inceleyin.
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
                  <div className="relative overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-br from-white via-white/30 to-[#853ec7] shadow-2xl">
                    <div className="relative z-10 flex flex-col lg:flex-row gap-8 rounded-[31px] bg-[#0A0510] p-4 ">
                      {/* SOL: Görsel ve İstatistik Kutuları */}
                      <div className="relative w-full lg:w-1/2 rounded-2xl overflow-hidden min-h-[350px] lg:min-h-[450px]">
                        <img
                          src={
                            study.image?.trim()
                              ? study.image
                              : "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop"
                          }
                          alt={study.companyName}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          onError={(e) => {
                            // Eğer yüklenen bir görsel ileride hata verirse yine güvenli limana (placeholder) döneriz.
                            e.currentTarget.src =
                              "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                        <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
                          {study.stats.map((stat, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0A0510] backdrop-blur-md border border-white/10 text-center"
                            >
                              <span className="font-heading text-normal md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#ded8ff]">
                                {stat.value}
                              </span>
                              <span className="font-sans text-[14px] md:text-[18px] text-medusa-text-muted leading-tight">
                                {stat.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* SAĞ: Metin ve Detaylar Bölümü */}
                      <div className="w-full lg:w-1/2 flex flex-col justify-center py-0 lg:py-8 lg:pr-8">
                        <div className="flex items-center space-x-3 mb-8 md:mb-16">
                          {/* İkonun optik olarak metinle hizalanması için mt-[-2px] gibi ince ayarlar eklendi */}
                          <Image
                            src="/Beyaz_Medusa_Bullet.webp"
                            alt="Medusa Global Bullet"
                            width={32}
                            height={32}
                            className="shrink-0 object-contain -mt-[4px]"
                          />
                          {/* leading-none yerine leading-snug veya tight kullanmak fontun dikey merkezini düzeltir */}
                          <span className="font-heading text-small md:text-xl font-semibold text-white tracking-wide leading-tight">
                            {study.companyName}
                          </span>
                        </div>

                        <h3 className="font-heading text-lg md:text-2xl font-bold text-white leading-tight mb-2 md:mb-6">
                          {study.title}
                        </h3>

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

          {/* --- CAROUSEL BUTONLARI --- */}
          <div className="flex items-center justify-center space-x-4 mt-0 md:mt-4">
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
