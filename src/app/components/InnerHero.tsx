"use client";

import React from "react";
import { motion } from "framer-motion";
import Badge from "./ui/Badge"; // Badge bileşeninin yolu

interface InnerHeroProps {
  title: string;
  accentTitle: string;
  description?: string;
}

export default function InnerHero({ title, accentTitle, description }: InnerHeroProps) {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] bg-background flex flex-col items-center justify-center overflow-hidden z-0 pt-24 pb-12">
      
      {/* =========================================
          1. SİNEMATİK IŞIK EFEKTLERİ (CONIC GLOW)
          ========================================= */}
      
      {/* İstenilen Alt Orta Işık Hüzmesi (Kurumsal Renklerimizle Conic Gradient) */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[120vw] sm:w-[80vw] h-[50vh] md:h-[60vh] opacity-50 blur-[100px] pointer-events-none mix-blend-screen"
        style={{
          background: `conic-gradient(from 270deg at 50% 50%, 
            var(--color-medusa-primary) 0%, 
            var(--color-medusa-secondary) 50%, 
            var(--color-medusa-primary) 100%)`
        }}
      />

      {/* Ekstra Derinlik İçin Hafif Arka Plan Parıltısı */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-medusa-primary blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen" />

      {/* =========================================
          2. İÇERİK BÖLÜMÜ (Ana Hero ile Birebir Hiyerarşi)
          ========================================= */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-center text-center max-w-4xl">
        
        {/* Badge (Ana sayfadaki gibi mb-12 boşluğu ile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge text={title} className="mb-12" />
        </motion.div>

        {/* Ana Başlık (Ana sayfadaki gibi mb-8 boşluğu ile) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-heading text-[clamp(2.5rem,6vw,5.5rem)] font-normal leading-[1.1] sm:leading-[0.95] tracking-tight text-white mb-8"
        >
          <span className="block sm:inline text-transparent bg-clip-text text-white">
            {accentTitle}
          </span>
        </motion.h1>

        {/* Alt Açıklama (Ana sayfadaki gibi mb-12 ve px-2 boşluğu ile) */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-base sm:text-lg md:text-xl text-medusa-text-secondary font-light leading-relaxed max-w-2xl px-2 mb-12"
          >
            {description}
          </motion.p>
        )}
        
      </div>

      {/* =========================================
          3. YUMUŞAK GEÇİŞ (SMOOTH FADE) KATMANI
          ========================================= */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  );
}