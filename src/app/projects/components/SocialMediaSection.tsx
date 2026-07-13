"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Badge from "@/app/components/ui/Badge";

interface Props {
  data: { title: string; description: string; images: string[] };
}

export default function SocialMediaSection({ data }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);
  return (
    <section className="w-full relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Badge text="Sosyal Medya" className="mb-6" />
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
            {data.images.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                // Responsive Genişlik Ayarları: Mobilde tam ekran (küçük bir çıkıntı ile), tablette 2'li, masaüstünde 4'lü
                className="relative shrink-0 snap-start w-[85vw] sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-1.125rem)] aspect-square rounded-3xl overflow-hidden border border-white/10 group bg-medusa-surface-1"
              >
                <Image 
                  src={img} 
                  alt={`Social Media ${index + 1}`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}