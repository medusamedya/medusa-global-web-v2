"use client";

import React from "react";
import { motion } from "framer-motion";
import Badge from "../ui/Badge"; // Kendi Badge yolunu kontrol etmeyi unutma
import GradientButton from "../ui/GradientButton";
import Link from "next/link";

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
          className="font-heading text-[clamp(2.5rem,8vw,7rem)] font-normal leading-[1.1] sm:leading-[0.9] tracking-tight text-white mb-8"
        >
          <span className="block sm:inline">We build, run and</span>
          <br className="hidden sm:block" />
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
          {/* Butonu Link ile sarmalıyoruz */}
          <Link href="/projects" className="inline-block">
            {/* Yeni Premium Gradient Buton Bileşenimiz */}
            <GradientButton text="İşlerimiz" />
          </Link>
        </motion.div>
        
      </div>

    </section>
  );
}