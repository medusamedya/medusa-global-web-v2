"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function FinalCta() {
  return (
    // bg-background kuralı korundu, flex mimarisi ile ekran tam ortadan ikiye bölündü.
    // border-t ile üstteki section'dan çok şık ve ince bir çizgi ile ayrıldı.
    <section className="relative w-full bg-background transition-colors duration-500 overflow-hidden z-10 flex flex-col lg:flex-row ">
      
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
          className="object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
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
            {/* Klasik Animasyonlu Rozet */}
            <div className="relative inline-flex overflow-hidden rounded-full p-[1px] shadow-sm mb-8">
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-purple)_40%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_60%,var(--color-medusa-purple)_100%)] opacity-80" />
              <div className="relative z-10 inline-flex items-center justify-center w-full h-full rounded-full bg-medusa-base-dark/95 px-4 py-1.5 backdrop-blur-md">
                <span className="font-sans text-xs font-semibold tracking-widest text-white drop-shadow-md uppercase">
                  Geleceği Birlikte İnşa Edelim
                </span>
              </div>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
              Değişimi Gerçekleştirme Konusunda <span className="text-transparent bg-clip-text bg-gradient-to-r from-medusa-purple via-medusa-spark to-medusa-purple animate-text-shine inline-block">Tutkuluyuz.</span>
            </h2>

            {/* Vizyon Metni */}
            <p className="font-sans text-white/70 text-base sm:text-lg leading-relaxed font-light mb-12">
              Bugün, tüm paydaşlara fayda sağlamayı, kuruluşların büyümesine, sürdürülebilir rekabet avantajı oluşturmasına ve pozitif toplumsal etki yaratmasına olanak sağlamayı amaçlayan dönüşümsel bir yaklaşımı benimsemek için müşterilerimizle yakın işbirliği içinde çalışırız. 
              <br /><br />
              İleri düzey yönetim danışmanlığı, teknoloji ve tasarım ile kurumsal ve dijital girişimler yoluyla entegre çözümler sunarak potansiyeli açığa çıkarma ve değişimi gerçekleştirme konusunda tutkuluyuz.
            </p>

            {/* Aksiyon Butonu (Gradient Animasyonlu) */}
            <div className="relative inline-flex overflow-hidden rounded-full p-[2px] shadow-lg group/btn cursor-pointer w-full sm:w-max">
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_100%)] opacity-80 group-hover/btn:opacity-100 transition-opacity duration-300" />
              
              {/* Buton arka planı tamamen sitenin background'u ile aynı yapıldı */}
              <button className="font-sans relative z-10 inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#05010A] text-white px-8 py-4 rounded-full font-bold text-[15px] tracking-wide transition-all duration-300 hover:bg-transparent hover:text-white">
                <span>Hemen İletişime Geçin</span>
                <div className="w-8 h-8 rounded-full bg-medusa-purple/20 flex items-center justify-center group-hover/btn:bg-medusa-spark group-hover/btn:rotate-45 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-medusa-spark group-hover/btn:text-[#05010A] transition-colors" />
                </div>
              </button>
            </div>

          </motion.div>

        </div>
      </div>
      
    </section>
  );
}