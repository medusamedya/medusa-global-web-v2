"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; 

interface InnerHeroProps {
  title: string;
  accentTitle: string;
  description?: string;
}

export default function InnerHero({ title, accentTitle, description }: InnerHeroProps) {
  return (
    // Hero.tsx ile aynı sarmalayıcı yapı (pt-32 kaldırıldı, flex-center ile ortalandı)
    <section className="relative w-full min-h-[100dvh] bg-[#05010A] flex flex-col items-center justify-center overflow-hidden z-0">
      
      {/* =========================================
         1. SİNEMATİK ARKA PLAN (Hero.tsx ile %100 Aynı Katmanlar)
         ========================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          // Opacity 60'tan 80'e çıkarıldı (Hero ile aynı)
          className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-80 mix-blend-screen"
        >
          <source src="https://framerusercontent.com/assets/shkethPArotkZlMS0MbrQ6WEC78.mp4" type="video/mp4" />
        </video>
        
        {/* Siyah boğucu gradientler KALDIRILDI. Sadece Hero'daki 3'lü mor filtre bırakıldı. */}
        <div className="absolute inset-0 bg-medusa-purple/50 mix-blend-color" />
        <div className="absolute inset-0 bg-medusa-glow-primary/30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-background/50" />
      </div>

    {/* =========================================
         2. TABANA GÖMÜLÜ BULUT (SVG)
         ========================================= */}
      <motion.div 
        animate={{ y: [0, -15, 0] }} 
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -bottom-[15%] sm:bottom-[5%] left-1/2 -translate-x-1/2 w-[160vw] sm:w-[90vw] max-w-[1400px] aspect-video z-10 pointer-events-none mix-blend-screen opacity-90"
      >
        <div className="relative w-full h-full [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] -webkit-[mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]">
          <Image 
            src="/static-cloud.svg" 
            alt="Medusa Global Aura" 
            fill
            className="object-contain object-bottom scale-110" 
            priority
          /> 
          {/* GÖRSELE YAPIŞIK HAREKET EDEN EKSTRA MORLUK BURADAN SİLİNDİ */}
        </div>
      </motion.div>
      {/* =========================================
         3. DİNAMİK İÇERİK (Metin Alanı - Tipografi %100 Eşitlendi)
         ========================================= */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 flex flex-col items-center text-center max-w-4xl mt-0 sm:mt-[-5vh]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // Hero'daki font-heading, tracking ve leading değerleri birebir uygulandı
          className="font-heading text-[clamp(2.5rem,8vw,6rem)] font-medium leading-[0.9] tracking-tighter text-white mb-6"
        >
          {title}
          <br />
          {accentTitle}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            // Hero'daki metin stili birebir uygulandı
            className="font-sans text-base sm:text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl px-2"
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* =========================================
         4. YUMUŞAK ALT GEÇİŞ 
         ========================================= */}
      <div className="absolute bottom-0 left-0 w-full h-[15vh] sm:h-[20vh] bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
      
    </section>
  );
}