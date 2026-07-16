"use client";

import React from "react";
import Badge from "../ui/Badge";
import GradientButton from "../ui/GradientButton";
import Link from "next/link";
import Services from "./Services";

export default function Hero() {
  return (
    // justify-center eklendi, paddingler ekranın ortalanmasını bozmamak için dengelendi
    <section className="relative w-full min-h-[100dvh] pt-24 sm:pt-24 sm:pb-8 md:pt-32 md:pb-0 lg:pb-8 bg-background flex flex-col justify-center overflow-hidden z-0">
     {/* =========================================
          1. SİNEMATİK IŞIK EFEKTLERİ
          ========================================= */}
      
      {/* Sol Orta Işık */}
      <div className="absolute top-[20%] sm:top-[30%] md:top-[40%] -translate-y-1/2 -left-[15%] md:-left-[10%] w-[75vw] h-[75vw] md:w-[70vw] md:h-[70vw] max-w-[700px] max-h-[700px] bg-gradient-to-b from-[#3D0A6B] via-[#3D0A6B]/60 to-transparent blur-[80px] md:blur-[120px] rounded-full pointer-events-none opacity-40 md:opacity-50 mix-blend-screen" />
      
      {/* Sağ Orta Işık */}
      <div className="absolute top-[20%] sm:top-[30%] md:top-[40%] -translate-y-1/2 -right-[15%] md:-right-[10%] w-[75vw] h-[75vw] md:w-[70vw] md:h-[70vw] max-w-[700px] max-h-[700px] bg-gradient-to-b from-[#3D0A6B] via-[#3D0A6B]/60 to-transparent blur-[80px] md:blur-[120px] rounded-full pointer-events-none opacity-40 md:opacity-50 mix-blend-screen" />
      
      {/* İÇERİK BÖLÜMÜ - (flex-grow SİLİNDİ) */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-center text-center max-w-6xl">
        
        <Badge text="Dijital Hızlandırma ve Danışmanlık" className="mb-12" />

        {/* Ana Başlık */}
        <h1 className="font-heading  text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-wide mb-8">
          <span className="block ">Ajans mı arıyorsunuz,</span>
          <span className="block md:text-7xl lg:text-8xl italic">dijital iş ortağı mı?</span>
        </h1>

        {/* Alt Açıklama */}
        <p className="font-sans text-base md:text-lg text-medusa-text-secondary max-w-4xl mb-8 md:mb-12">
          Strateji, içerik, prodüksiyon ve dijital sistemleri tek çatı altında kurar, yönetir ve büyütürüz.
          <br className="hidden md:block" />
          Kendi ürünlerimizden yola çıkarak aynı disiplini ve sahiplenmeyi sizin markanıza taşırız.
        </p>

        {/* Buton */}
        <div>
          <Link href="/projects" className="inline-block">
            <GradientButton text="İşlerimiz" />
          </Link>
        </div>
      </div>

      {/* SERVICES BÖLÜMÜ - mt-8 yerine mt-16 md:mt-24 ile butonla arasına sabit estetik bir boşluk verdik */}
      <div className="relative z-20 w-full sm:mt-4 md:mt-10">
        <Services />
      </div>

    </section>
  );
}