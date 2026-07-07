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
    // min-h-[100dvh] ile tam ekran yüksekliği sağlandı. Üstten boşluk (pt-32) ile header ezilmedi.
    <section className="relative w-full min-h-[100dvh] pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden bg-[#05010A]">
      
      {/* =========================================
          1. HAREKETLİ ARKA PLAN (Noktalı Yeni Video)
          ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="https://framerusercontent.com/assets/shkethPArotkZlMS0MbrQ6WEC78.mp4" type="video/mp4" />
        </video>
        
        {/* Videonun kenarlarını karartarak derinlik katar */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#05010A_80%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05010A] via-transparent to-[#05010A] opacity-90" />
      </div>

      {/* =========================================
          2. KUSURSUZ TABANA ORTALANMIŞ BULUT (YUKARI/AŞAĞI ANİMASYONLU)
          ========================================= */}
      {/* div -> motion.div olarak değiştirildi ve y ekseninde animasyon eklendi */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} // 0'dan başla, -20px yukarı çık, 0'a dön
        transition={{ 
          duration: 6, // Animasyonun toplam süresi (daha yavaş ve pürüzsüz olması için 6 saniye idealdir)
          repeat: Infinity, // Sonsuz döngü
          ease: "easeInOut" // Yumuşak geçiş
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160vw] sm:w-[90vw] max-w-[1400px] aspect-video z-10 pointer-events-none mix-blend-screen opacity-90"
      >
        
        {/* MASKING: Görselin sınırlarını yumuşak bir degrade ile videoya yedirir */}
        <div className="relative w-full h-full [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_65%)] -webkit-[mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_65%)]">
          
          <Image 
            src="/static-cloud.svg" 
            alt="Medusa Global Aura" 
            fill
            className="object-contain object-bottom scale-110" 
            priority
          /> 

          {/* RENK EŞİTLEYİCİ */}
          <div className="absolute inset-0 bg-medusa-purple/50 mix-blend-color" />
          <div className="absolute inset-0 bg-medusa-glow-primary/30 mix-blend-overlay" />
        </div>

        {/* DOKUNULMAYAN KURUMSAL IŞIMA KATMANI */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-medusa-purple/20 blur-[120px] rounded-full" />
      </motion.div>

      {/* =========================================
          3. DİNAMİK İÇERİK (Metin Alanı)
          ========================================= */}
      {/* z-20 verilerek metinlerin hem videonun hem de SVG bulutunun üstünde kalması garantilendi */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-4xl -mt-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] tracking-tight text-white mb-6"
        >
          <span className="font-sans font-bold">{title}</span>
          <span className="font-serif italic font-light text-white/90 mt-2 sm:mt-4">
            {accentTitle}
          </span>
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>
        )}
      </div>

    </section>
  );
}