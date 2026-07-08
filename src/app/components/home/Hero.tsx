"use client";

import React from "react";
import { motion } from "framer-motion";
import Badge from "../ui/Badge"; // Kendi Badge yolunu kontrol etmeyi unutma

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] bg-background flex flex-col items-center justify-center overflow-hidden z-0">
      
     {/* =========================================
          1. SİNEMATİK IŞIK EFEKTLERİ
          ========================================= */}
      
    {/* =========================================
          1. SİNEMATİK IŞIK EFEKTLERİ
          ========================================= */}
      
      {/* Sol Orta Işık */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-[10%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] bg-[#3D0A6B] blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />
      
      {/* Sağ Orta Işık */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-[10%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] bg-[#3D0A6B] blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />
      {/* =========================================
          2. İÇERİK BÖLÜMÜ
          ========================================= */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-center text-center max-w-4xl">
        
        <Badge text="Dijital Hızlandırma ve Danışmanlık" className="mb-12" />

       {/* Ana Başlık */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-heading text-[clamp(3.5rem,9vw,7rem)] font-normal leading-[0.9] tracking-tight text-white mb-8"
        >
          <span className="whitespace-nowrap">We build, run and</span>
          <br />
          grow digital
          <br />
          businesses.
        </motion.h1>

        {/* Alt Açıklama (Subheadline) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-sans text-base sm:text-lg md:text-xl text-white font-light leading-relaxed max-w-2xl mb-12 px-2"
        >
          Strateji çizer, üretim yapar, sahaya iner, sonucu ölçeriz.
          <br className="hidden sm:block" />
          Kendi deneyimlerimizden yola çıkarak aynı disiplini sizin markanıza taşırız.
        </motion.p>

        {/* Harekete Geçirici Buton (İşlerimiz) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <button className="font-sans relative inline-flex items-center border border-gray-600 justify-center bg-[#F5F5F7] px-10  py-3.5 sm:py-3 rounded-full font-bold text-[16px] tracking-wide shadow-[0_0_30px_rgba(61,10,107,0.25)] hover:bg-black hover:shadow-[0_0_45px_rgba(61,10,107,0.4)] hover:scale-105 transition-all duration-300">
            
          {/* 3 Renkli Kesintisiz Gradient (HEX ile garantilendi) */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F0838] via-[#3D0A6B] to-[#D3D3D3]">
              İşlerimiz
            </span>
            
          </button>
        </motion.div>
        
      </div>

    </section>
  );
}