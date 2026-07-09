"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Badge from "../ui/Badge";

// Medusa Global Portföyüne Uygun Stratejik Yorumlar
const testimonialsData = [
  {
    id: 1,
    name: "Latanwood Yönetimi",
    role: "Kurucu Ortak",
    quote:
      "Medusa Global sayesinde geleneksel satış kanallarımızı tamamen dijitalleştirdik. B2B ve B2C için kurdukları Omnichannel stratejiyle e-ticaret dönüşüm oranlarımız (ROAS) 3 katına çıktı. Sadece bir ajans değil, gerçek bir büyüme ortağılar.",
    initials: "LW",
  },
  {
    id: 2,
    name: "Health and Wonders",
    role: "Pazarlama Direktörü",
    quote:
      "Dijital Sağlık Kontrolü raporları bize kör noktalarımızı gösterdi. Sağlık turizminde global pazarlara açılırken kurguladıkları veri odaklı reklam mimarisi, operasyonel süreçlerimizi inanılmaz hızlandırdı.",
    initials: "HW",
  },
  {
    id: 3,
    name: "Naser Group",
    role: "Yönetim Kurulu Üyesi",
    quote:
      "B2B tarafında ulaştığımız potansiyel müşteri kalitesi (Lead Generation) tamamen değişti. Marka konumlandırma ve hızlandırma destekleriyle, yatırım getirimizi aylar içinde maksimize ettik.",
    initials: "NG",
  },
  {
    id: 4,
    name: "Cool Sandalye",
    role: "E-ticaret Müdürü",
    quote:
      "Ürünlerimizin kalitesini dijital vitrine yansıtmakta zorlanıyorduk. Yeniden konumlandırma ve kurumsal kimlik DNA'mızın dijitale aktarılmasıyla online satışlarımızda rekor kırmaya başladık.",
    initials: "CS",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Ekran boyutuna göre gösterilecek kart sayısını hesaplama
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalCards = testimonialsData.length;
  const maxIndex = totalCards - visibleCards;

  const handleNext = () => {
    if (currentIndex < maxIndex) setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <section className="relative w-full py-12 md:py-16 bg-background transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- ÜST BAŞLIK VE İMZA BADGE --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 md:mb-16 space-y-6">
          <Badge text="Testimonials" className="mb-4" />

          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            25+ Markanın Güvendiği İş Ortağı
          </h2>
          <p className="font-sans  text-normal md:text-lg text-medusa-text-secondary">
            Danışmanlık, hızlandırma ve yatırım hizmetlerimizle markaların yaşam
            döngüsünün her aşamasında yanındayız.
          </p>
        </div>

        {/* --- CAROUSEL BÖLÜMÜ --- */}
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Slider Kapsayıcısı */}
          <div className="overflow-hidden w-full px-2 py-6">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  {/* --- YENİ KART TASARIMI (Görseldeki Çift Katmanlı Yapı) --- */}
                  <div className="flex flex-col bg-[#1b1a21] border border-white/5 rounded-[2rem] p-3 shadow-2xl h-full">
                    
                    {/* Üst Kısım: İç Kart (Gradient Border + İç Arka Plan) */}
                    <div className="relative flex-grow overflow-hidden rounded-[1.5rem] p-[1px] bg-[#853ec7]/60">
                      <div className="relative z-10 h-full rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-[#1a1726] to-[#241c33] p-8 flex flex-col gap-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">
                        
                        {/* Profil Bilgileri */}
                        <div className="flex items-center space-x-4 mb-4 md:mb-16">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#853ec7] to-[#3D0A6B] flex items-center justify-center border border-white/20 shrink-0 shadow-lg">
                            <span className="font-heading text-xl text-white font-bold tracking-wider">
                              {testimonial.initials}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <h4 className="font-heading text-lg font-semibold text-white leading-tight">
                              {testimonial.name}
                            </h4>
                            <p className="font-sans text-sm font-light text-white/60 mt-1">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>

                        {/* Yorum Metni */}
                        <p className="font-sans text-white/95 text-base md:text-[17px] font-medium leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </div>

                    {/* Alt Kısım: Şirket Logosu Yer Tutucu */}
                    <div className="flex items-center space-x-3 px-5 py-5 shrink-0 opacity-90">
                      {/* Görseldeki gibi Dalgalı Örnek Logo İkonu */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2.5"/>
                        <path d="M2 12H22" stroke="white" strokeWidth="2.5"/>
                        <path d="M12 2C14.5 2 17 6.5 17 12C17 17.5 14.5 22 12 22" stroke="white" strokeWidth="2.5"/>
                        <path d="M12 2C9.5 2 7 6.5 7 12C7 17.5 9.5 22 12 22" stroke="white" strokeWidth="2.5"/>
                      </svg>
                      <span className="font-sans font-bold text-white tracking-wide">
                        {testimonial.name.split(' ')[0]} {/* İsimden sadece ilk kelimeyi logo gibi alır */}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- CAROUSEL KONTROLLERİ --- */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300
                ${
                  currentIndex === 0
                    ? "border-white/10 text-white/30 cursor-not-allowed"
                    : "border-white/20 text-white hover:bg-white/5 hover:border-white/40 hover:-translate-x-1"
                }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300
                ${
                  currentIndex >= maxIndex
                    ? "border-white/10 text-white/30 cursor-not-allowed"
                    : "border-white/20 text-white hover:bg-white/5 hover:border-white/40 hover:translate-x-1"
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