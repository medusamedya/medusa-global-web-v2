"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Badge from "../ui/Badge";
import Image from "next/image";
// Veriyi import ediyoruz! (Yolu kendi proje yapına göre düzenle)
import { caseStudiesData } from "@/data/caseStudies";

// ==========================================
// YENİ: BASİTLEŞTİRİLMİŞ AKILLI METİN BİLEŞENİ
// ==========================================
const ExpandableDescription = ({ description }: { description: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // ÇOK BASİT MANTIK: Metin 150 karakterden uzunsa butonu göster.
  const isLongText = description.length > 250;

  return (
    <div className="flex flex-col items-start w-full">
      {/* 
        Açıldığında: max-h-[160px] ve overflow-y-auto ile kendi içinde scroll olur. 
        Kart yüksekliğini ASLA bozmaz. hide-scrollbar ile kaydırma çubuğu gizlenir.
      */}
      <div 
        className={`w-full transition-all duration-300 ${
          isExpanded ? "max-h-[150px] md:max-h-[180px] overflow-y-auto hide-scrollbar pr-2" : ""
        }`}
      >
        <p 
          className={`font-sans text-sm md:text-[15px] lg:text-base text-medusa-text-muted leading-relaxed font-light md:font-normal
            ${!isExpanded ? "line-clamp-5" : ""} 
          `}
        >
          {description}
        </p>
      </div>
      
      {/* Buton hem masaüstü hem mobilde çıkar */}
      {isLongText && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 text-medusa-purple-light text-sm font-semibold hover:text-white transition-colors focus:outline-none"
        >
          {isExpanded ? "Daha Az Göster" : "Devamını Oku..."}
        </button>
      )}
    </div>
  );
};

// ==========================================
// ANA BİLEŞEN (CaseStudies)
// ==========================================
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
    <section className="relative w-full mt-12 bg-background transition-colors duration-500 overflow-hidden">
      {/* --- YUKARIDAN VURAN SPOT IŞIĞI --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[60vw] max-w-[1000px] max-h-[600px] bg-medusa-purple/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- BAŞLIK VE BADGE BÖLÜMÜ --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 space-y-1">
          <Badge text="Yeniliklerimiz" className="mb-6 tracking-widest" />
          
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-wider text-white">
            Markaların Dönüşüm Hikayeleri
          </h2>
          
          <p className="font-sans text-normal md:text-lg text-medusa-text-secondary tracking-wide">
            Farklı sektörlerden markaların dijital yolculuğunu, kurduğumuz
            sistemleri ve elde ettiğimiz sonuçları inceleyin.
          </p>
        </div>

        {/* --- CAROUSEL (KAYDIRICI) BÖLÜMÜ --- */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="overflow-hidden w-full pb-1 md:pb-8">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] items-stretch"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {caseStudiesData.map((study) => (
                <div key={study.id} className="w-full flex-shrink-0 px-2 h-auto lg:h-[480px]">
                  
                  {/* --- YENİ VAKA KARTI YAPISI --- */}
                  <div className="relative overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-br from-white via-white/30 to-[#853ec7] shadow-2xl h-full">
                    <div className="relative z-10 flex flex-col lg:flex-row gap-2 md:gap-8 rounded-[31px] bg-[#0A0510] p-3 md:p-4 h-full">
                      
                      {/* SOL: Görsel ve İstatistik Kutuları */}
                      <div className="relative w-full lg:w-1/2 rounded-2xl overflow-hidden min-h-[220px] md:min-h-[350px] h-full">
                        <img
                          src={
                            study.image?.trim()
                              ? study.image
                              : "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop"
                          }
                          alt={study.companyName}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                        <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 grid grid-cols-3 gap-2 md:gap-3">
                          {study.stats.map((stat, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center justify-center p-2 md:p-3 rounded-lg md:rounded-xl bg-[#0A0510]/80 backdrop-blur-md border border-white/10 text-center"
                            >
                              <span className="font-heading text-[13px] md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#ded8ff] font-bold mb-0.5 md:mb-1">
                                {stat.value}
                              </span>
                              <span className="font-sans text-[10px] md:text-[14px] lg:text-[16px] text-medusa-text-muted leading-tight">
                                {stat.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* SAĞ: Metin ve Detaylar Bölümü */}
                      <div className="w-full lg:w-1/2 flex flex-col justify-center px-2 py-2 lg:py-8 lg:pr-8 h-full">
                        <div className="flex items-center space-x-2 mb-4 md:mb-10 lg:mb-12">
                          <Image
                            src="/Beyaz_Medusa_Bullet.webp"
                            alt="Medusa Global Bullet"
                            width={28}
                            height={28}
                            className="shrink-0 object-contain -mt-[4px] md:w-[32px] md:h-[32px]"
                          />
                          <span className="font-heading text-base md:text-xl font-normal text-white tracking-wide">
                            {study.companyName}
                          </span>
                        </div>

                        <h3 className="font-heading text-xl md:text-2xl font-semibold text-white tracking-wide mb-2 md:mb-6 line-clamp-2">
                          {study.title}
                        </h3>

                        {/* YENİ: BASİT VE KESİN ÇÖZÜM */}
                        <ExpandableDescription 
                          description={study.description} 
                        />
                        
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- CAROUSEL BUTONLARI --- */}
          <div className="flex items-center justify-center space-x-4">
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