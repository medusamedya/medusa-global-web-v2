"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import Badge from "@/app/components/ui/Badge";

interface Props {
  data: { 
    title: string; 
    description: string; 
    images: string[]; 
    reels?: string[]; // Reels videolarının kapak fotoğrafları veya GIF'leri
  };
}

export default function SocialMediaSection({ data }: Props) {
  // Post ve Reels slider'ları için iki ayrı referans
  const carouselRef = useRef<HTMLDivElement>(null);
  const reelsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full relative z-10 py-12 md:py-16">
      {/* max-w-7xl kaldırıldı, tam genişlikte (w-full) daha ferah bir container yapısına geçildi */}
      <div className="w-full px-4 md:px-8 xl:px-12 mx-auto">
        
        {/* Üst Metin Alanı */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Badge text="Sosyal Medya" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-wide mb-6">
            {data.title}
          </h2>
          <p className="font-sans text-normal md:text-lg text-medusa-text-secondary leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* ==============================================
            1. BÖLÜM: INSTAGRAM POSTLARI (4:5 Format)
            ============================================== */}
        <div className="relative group mt-12">
          
          {/* Post - Sol Navigasyon Butonu */}
          <button 
            onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
              }
            }}
            className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-medusa-purple hover:scale-105 hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Post - Sağ Navigasyon Butonu */}
          <button 
            onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
              }
            }}
            className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-medusa-purple hover:scale-105 hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Post - Kaydırılabilir İçerik */}
          <div 
            ref={carouselRef}
            className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {data.images.map((img, index) => (
              <motion.div 
                key={`post-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                /*
                  Masaüstünde 6 görsel göstermek için genişlik hesaplaması:
                  xl:w-[calc(16.666%-1.25rem)] -> 100/6 = 16.666% eksi boşluklar.
                  aspect-[4/5] = Instagram standart post oranı.
                */
                className="relative shrink-0 snap-start w-[75vw] sm:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1rem)] xl:w-[calc(16.666%-1.25rem)] aspect-[4/5] rounded-[2rem] overflow-hidden group bg-medusa-surface-1 cursor-pointer"
              >
                <Image 
                  src={img} 
                  alt={`Instagram Post ${index + 1}`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ==============================================
            2. BÖLÜM: INSTAGRAM REELS (9:16 Format)
            Eğer veride "reels" dizisi varsa bu bölüm render edilir
            ============================================== */}
        {data.reels && data.reels.length > 0 && (
          <div className="mt-12 ">
            
            {/* Reels Başlık */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-6 ">
              <h3 className="font-heading text-2xl md:text-4xl font-bold text-white tracking-wide">
                Reels & TikTok
              </h3>
            </div>

            <div className="relative group">
              
              {/* Reels - Sol Navigasyon Butonu */}
              <button 
                onClick={() => {
                  if (reelsRef.current) {
                    reelsRef.current.scrollBy({ left: -300, behavior: "smooth" });
                  }
                }}
                className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300  hover:scale-105 hidden md:flex"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Reels - Sağ Navigasyon Butonu */}
              <button 
                onClick={() => {
                  if (reelsRef.current) {
                    reelsRef.current.scrollBy({ left: 300, behavior: "smooth" });
                  }
                }}
                className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300  hover:scale-105 hidden md:flex"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Reels - Kaydırılabilir İçerik */}
              <div 
                ref={reelsRef}
                className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {data.reels.map((img, index) => (
                  <motion.div 
                    key={`reel-${index}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    /*
                      Reels için 9:16 oranı kullanıldı (aspect-[9/16]). 
                      Genişlikler yine desktop'ta 6 video sığacak şekilde hesaplandı.
                    */
                    className="relative shrink-0 snap-start w-[65vw] sm:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1rem)] xl:w-[calc(16.666%-1.25rem)] aspect-[9/16] rounded-3xl overflow-hidden group bg-medusa-surface-1 cursor-pointer"
                  >
                    <Image 
                      src={img} 
                      alt={`Reel Thumbnail ${index + 1}`} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Üzerine gelince koyulaşma ve Play İkonu */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                        <Play className="w-6 h-6 text-white ml-1 pl-0.5 fill-white" />
                      </div>
                    </div>
                    
                    {/* İç Çerçeve */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </div>
            
          </div>
        )}

      </div>
    </section>
  );
}