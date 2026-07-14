"use client";

import React from "react";
import { motion } from "framer-motion";
import Badge from "../ui/Badge"; // Kendi Badge yolunu kontrol etmeyi unutma
import GradientButton from "../ui/GradientButton";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh]  md:min-h-[100dvh] bg-background flex flex-col items-center justify-center overflow-hidden z-0">
      
    {/* =========================================
          1. SİNEMATİK IŞIK EFEKTLERİ
          ========================================= */}
      
    {/* =========================================
          1. SİNEMATİK IŞIK EFEKTLERİ
          ========================================= */}
      
      {/* Sol Orta Işık */}
      <div className="absolute top-[40%] md:top-1/2 -translate-y-1/2 -left-[10%] w-[90vw] h-[90vw] md:w-[70vw] md:h-[70vw] max-w-[700px] max-h-[700px] bg-gradient-to-b from-[#3D0A6B] via-[#3D0A6B]/60 to-transparent blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />
      
      {/* Sağ Orta Işık */}
      <div className="absolute top-[40%] md:top-1/2 -translate-y-1/2 -right-[10%] w-[90vw] h-[90vw] md:w-[70vw] md:h-[70vw] max-w-[700px] max-h-[700px] bg-gradient-to-b from-[#3D0A6B] via-[#3D0A6B]/60 to-transparent blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />
      {/* =========================================
          2. İÇERİK BÖLÜMÜ
          ========================================= */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-center text-center max-w-6xl">
        
        <Badge text="Dijital Hızlandırma ve Danışmanlık" className="mb-12" />

      {/* Ana Başlık */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          // clamp değerinin minimumunu 1.75rem yaptık ki mobilde tek satıra sığsın
          className="font-heading text-[clamp(2rem,6vw,7rem)] font-normal leading-[1.2]  tracking-tight text-white mb-8"
        >
          {/* Her satırı kendi bloğuna (block) alarak 2 satırı garantiye alıyoruz */}
          <span className="block">Ajans mı arıyorsunuz,</span>
          <span className="block italic">dijital iş ortağı mı?</span>
        </motion.h1>

        {/* Alt Açıklama (Subheadline) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          // max-w-2xl değerini max-w-4xl yaparak metnin yanlara doğru daha rahat yayılmasını sağladık
          className="font-sans text-base sm:text-md md:text-xl text-white font-light leading-relaxed max-w-4xl mb-12 "
        >
          Strateji, içerik, prodüksiyon ve dijital sistemleri tek çatı altında kurar, yönetir ve büyütürüz.
          {/* sm:block yerine md:block yaptık, böylece genişleyen alanda kırılma noktası daha estetik duracak */}
          <br className="hidden md:block" />
          Kendi ürünlerimizden yola çıkarak aynı disiplini ve sahiplenmeyi sizin markanıza taşırız.
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