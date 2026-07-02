"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Medusa Global Portföyüne Uygun Stratejik Yorumlar
const testimonialsData = [
  {
    id: 1,
    name: "Latanwood Yönetimi",
    role: "Kurucu Ortak",
    quote: "Medusa Global sayesinde geleneksel satış kanallarımızı tamamen dijitalleştirdik. B2B ve B2C için kurdukları Omnichannel stratejiyle e-ticaret dönüşüm oranlarımız (ROAS) 3 katına çıktı. Sadece bir ajans değil, gerçek bir büyüme ortağılar.",
    initials: "LW",
  },
  {
    id: 2,
    name: "Health and Wonders",
    role: "Pazarlama Direktörü",
    quote: "Dijital Sağlık Kontrolü raporları bize kör noktalarımızı gösterdi. Sağlık turizminde global pazarlara açılırken kurguladıkları veri odaklı reklam mimarisi, operasyonel süreçlerimizi inanılmaz hızlandırdı.",
    initials: "HW",
  },
  {
    id: 3,
    name: "Naser Group",
    role: "Yönetim Kurulu Üyesi",
    quote: "B2B tarafında ulaştığımız potansiyel müşteri kalitesi (Lead Generation) tamamen değişti. Marka konumlandırma ve hızlandırma destekleriyle, yatırım getirimizi aylar içinde maksimize ettik.",
    initials: "NG",
  },
  {
    id: 4,
    name: "Cool Sandalye",
    role: "E-ticaret Müdürü",
    quote: "Ürünlerimizin kalitesini dijital vitrine yansıtmakta zorlanıyorduk. Yeniden konumlandırma ve kurumsal kimlik DNA'mızın dijitale aktarılmasıyla online satışlarımızda rekor kırmaya başladık.",
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
    <section className="relative w-full py-24 bg-background transition-colors duration-500 overflow-hidden">
      {/* Derinlik Izgarası */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- ÜST BAŞLIK VE İMZA BADGE --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-6">
          
          <div className="relative inline-flex overflow-hidden rounded-full p-[1px] shadow-sm">
            {/* Animasyonlu Dönen Border Katmanı */}
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_100%)] opacity-80" />
            
            <div className="relative z-10 inline-flex items-center justify-center w-full h-full rounded-full bg-medusa-base-dark/95 px-5 py-1.5 backdrop-blur-md">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.15em] text-white uppercase drop-shadow-md">
                Testimonial
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground dark:text-white tracking-tight transition-colors duration-300">
            25+ Markanın Güvendiği İş Ortağı
          </h2>
          <p className="text-lg text-foreground/80 dark:text-white/70 leading-relaxed transition-colors duration-300">
            Danışmanlık, hızlandırma ve yatırım hizmetlerimizle markaların yaşam döngüsünün her aşamasında yanındayız.
          </p>
        </div>

        {/* --- CAROUSEL BÖLÜMÜ --- */}
        <div className="relative w-full max-w-7xl mx-auto">
          
          {/* Slider Kapsayıcısı */}
          <div className="overflow-hidden w-full px-2 py-6">
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {testimonialsData.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  
                  {/* --- KART TASARIMI (İMZA ANİMASYONLU BORDER) --- */}
                  <div className="relative h-full overflow-hidden rounded-[2rem] p-[2px] group shadow-lg hover:shadow-2xl transition-all duration-500">
                    
                    {/* Dönen Border Katmanı */}
                    <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-spark)_25%,var(--color-medusa-base-dark)_50%,var(--color-medusa-purple)_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Kart İçeriği / Maske */}
                    <div className="relative z-10 h-full rounded-[calc(2rem-2px)] bg-background/95 dark:bg-[#08020F]/95 backdrop-blur-xl p-8 md:p-10 flex flex-col transition-colors duration-500 border border-foreground/5 dark:border-white/5">
                      
                      {/* Üst Kısım: Kullanıcı Bilgisi */}
                      <div className="flex items-center space-x-4 mb-8">
                        {/* Profil Avatarı Yer Tutucu */}
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-medusa-purple to-medusa-glow-primary flex items-center justify-center shadow-inner border border-white/20 flex-shrink-0">
                          <span className="text-white font-bold tracking-wider">{testimonial.initials}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-foreground dark:text-white transition-colors duration-300">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm font-medium text-medusa-purple dark:text-medusa-gold transition-colors duration-300">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      {/* Alıntı İşareti */}
                      <Quote className="w-10 h-10 text-medusa-spark/30 mb-4" />

                      {/* Yorum Metni */}
                      <p className="text-foreground/80 dark:text-white/80 text-base md:text-[17px] leading-relaxed font-light flex-grow transition-colors duration-300">
                        "{testimonial.quote}"
                      </p>

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
              className={`p-3.5 rounded-2xl border backdrop-blur-sm transition-all duration-300 flex items-center justify-center shadow-sm
                ${currentIndex === 0 
                  ? 'border-foreground/10 text-foreground/30 dark:border-white/10 dark:text-white/30 cursor-not-allowed' 
                  : 'border-medusa-purple/30 text-medusa-purple dark:border-medusa-gold/30 dark:text-medusa-gold hover:bg-medusa-purple/10 dark:hover:bg-medusa-gold/10 hover:-translate-x-1'}`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`p-3.5 rounded-2xl border backdrop-blur-sm transition-all duration-300 flex items-center justify-center shadow-sm
                ${currentIndex >= maxIndex 
                  ? 'border-foreground/10 text-foreground/30 dark:border-white/10 dark:text-white/30 cursor-not-allowed' 
                  : 'border-medusa-purple/30 text-medusa-purple dark:border-medusa-gold/30 dark:text-medusa-gold hover:bg-medusa-purple/10 dark:hover:bg-medusa-gold/10 hover:translate-x-1'}`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}