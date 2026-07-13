"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "@/app/components/ui/Badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  data: { title: string; description: string; metrics: string[] }; // metrics array'i görsel URL'leri olarak kullanılacak
}

export default function DigitalAdsSection({ data }: Props) {
  // Carousel'i kontrol etmek için referans
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Başlık ve Açıklama Alanı */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Badge text="Dijital Reklamlar" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            {data.title}
          </h2>
          <p className="font-sans  text-normal md:text-lg text-medusa-text-secondary">
            {data.description}
          </p>
        </div>

        {/* CAROUSEL ALANI */}
        <div className="relative group mt-12">
          
          {/* Sol Navigasyon Butonu (Her Zaman Görünür) */}
          <button 
            onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
              }
            }}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-medusa-purple hover:scale-105 hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Sağ Navigasyon Butonu (Her Zaman Görünür) */}
          <button 
            onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
              }
            }}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-medusa-purple hover:scale-105 hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Kaydırılabilir İçerik (Track) */}
          <div 
            ref={carouselRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {data.metrics.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                // Kare (aspect-square) formatında mobilde tam, tablette yarım, masaüstünde 3'lü kolon mantığı
                className="relative shrink-0 snap-start w-[85vw] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] aspect-square overflow-hidden bg-medusa-surface-1 border border-white/10 group"
              >
                <Image 
                  src={img} 
                  alt={`Ad Creative ${index + 1}`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Alt Gradient ve İç Çerçeve (Ring) */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10  pointer-events-none" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}