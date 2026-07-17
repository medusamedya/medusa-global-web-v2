"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { XCircle } from "lucide-react";
import Badge from "@/app/components/ui/Badge";
import GradientButton from "@/app/components/ui/GradientButton";
import Link from "next/link";


export default function FinalCta() {
  return (
    // bg-background kuralı korundu, flex mimarisi ile ekran tam ortadan ikiye bölündü.
    // border-t ile üstteki section'dan çok şık ve ince bir çizgi ile ayrıldı.
    <section className="relative w-full bg-background transition-colors duration-500 overflow-hidden z-10 flex flex-col lg:flex-row border-t border-white/5 mt-8">
      
      {/* =========================================
          SOL TARAF: SINIRSIZ SİNEMATİK GÖRSEL
          ========================================= */}
      {/* lg:h-auto ile sağ tarafın yüksekliği ne kadarsa sol taraf o kadar uzar. */}
      <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto min-h-[400px] overflow-hidden group">
        <Image 
          // Görsel Unsplash'ten, ileride kendi kurumsal çekimimiz eklenebilir.
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
          alt="Medusa Global Vizyon" 
          fill
          className="object-cover filter opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
        />
        
        {/* Görselin metne (sağa) ve mobilde alta doğru keskin bir çizgiyle değil, pürüzsüzce erimesini sağlayan gradientler */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:hidden" />
        {/* Kurumsal Medusa Işıltısı */}
        <div className="absolute inset-0 bg-medusa-purple/20 mix-blend-overlay" />
      </div>

      {/* =========================================
          SAĞ TARAF: MANİFESTO & CTA (TAM GENİŞLİK)
          ========================================= */}
      {/* Sağ taraf doğrudan background rengini alır, içine şık bir derinlik ekledim. */}
      <div className="relative w-full lg:w-1/2 flex items-center bg-background z-20">
        
        {/* Sadece sağ bölüme vuran çok hafif bir Medusa Parıltısı */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(92,6,140,0.08)_0%,transparent_80%)] pointer-events-none" />

        {/* Metnin ekranın tam köşesine yapışmasını engellemek için iç boşluklar (padding) ve max-width kullanıldı */}
        <div className="relative z-10 w-full max-w-3xl px-6 py-16 sm:py-24 sm:px-12 lg:px-16 xl:px-24">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge text="Size Göre Miyiz?" className="mb-6" />

            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-8">
              Şunları arıyorsanız, aradığınız yer burası:
            </h2>

            {/* Olumlu Maddeler Listesi */}
            <ul className="space-y-5 mb-10">
              {[
                "Markanızı kurup işletecek ve büyütecek; strateji, içerik, prodüksiyon ve reklamı dağınık ekiplere bölmeden tek çatı altında yürütecek bir yapı.",
                "Sadece hizmet faturası kesmekle yetinmeyip, doğru işte yatırımıyla riski sizinle paylaşabilecek bir ortak.",
                "Çabuk tükenen taktiklerden çok, markanızın uzun soluklu büyümesini önemseyen bir ekip."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  {/* ÖZEL MEDUSA BULLET EKLENDİ */}
                  <div className="relative w-6 h-6 shrink-0 mt-0.5">
                    <Image 
                      src="/Sarı_Medusa_Bullet.webp" 
                      alt="Medusa Bullet" 
                      fill 
                      className="object-contain" 
                    />
                  </div>
                  <span className="font-sans text-medusa-text-muted text-sm md:text-lg font-light mt-auto leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Uyarı / Kontrast Bloğu */}
              <div className="flex items-start gap-4 mb-8">
                <XCircle className="w-6 h-6 shrink-0 text-red-400/80 mt-0.5" />
                <p className="font-sans text-medusa-text-muted text-sm md:text-lg font-light mt-auto leading-relaxed">
                  Kısa vadede rakam şişirmek isteyen bir markaysanız, muhtemelen doğru adres biz değiliz. <strong className="text-white font-medium">Ama kalıcı bir şey kurmak istiyorsanız, tam da bunun için varız.</strong>
                </p>
            </div>

            {/* Kapanış Metni (H3 Olarak Güncellendi) */}
            <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-8 leading-relaxed">
              Doğru ortak biz miyiz? Bunu konuşarak öğrenelim. <br className="hidden md:block" />
              <span className="font-sans text-medusa-text-muted text-sm md:text-lg font-light mt-auto leading-relaxed">
                Kısa bir görüşme, işinizin bugün nerede durduğunu ve nereye gidebileceğini netleştirmeye yeter. Dijital iş ortağınız burada.
              </span>
            </h3>

            {/* Aksiyon Butonu */}
            <Link href="/contact" className="inline-block">
              <GradientButton 
                text="Birlikte Değerlendirelim" 
                className="w-full sm:w-max" 
                paddingClass="px-8 py-4 w-full sm:w-auto"
              />
            </Link>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}