"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Badge from "@/app/components/ui/Badge";
import GradientButton from "@/app/components/ui/GradientButton";

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
              <Badge text="Geleceği Birlikte İnşa Edelim" className="mb-8" />

          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-8">
              Değişimi Gerçekleştirme Konusunda <span className="text-transparent bg-clip-text bg-gradient-to-r from-medusa-purple via-medusa-spark to-medusa-purple animate-text-shine inline-block">Tutkuluyuz.</span>
            </h2>

            {/* Vizyon Metni */}
          <p className="font-sans  text-normal md:text-lg text-medusa-text-secondary mb-12">
              Bugün, tüm paydaşlara fayda sağlamayı, kuruluşların büyümesine, sürdürülebilir rekabet avantajı oluşturmasına ve pozitif toplumsal etki yaratmasına olanak sağlamayı amaçlayan dönüşümsel bir yaklaşımı benimsemek için müşterilerimizle yakın işbirliği içinde çalışırız. 
              <br /><br />
              İleri düzey yönetim danışmanlığı, teknoloji ve tasarım ile kurumsal ve dijital girişimler yoluyla entegre çözümler sunarak potansiyeli açığa çıkarma ve değişimi gerçekleştirme konusunda tutkuluyuz.
            </p>

            {/* Aksiyon Butonu */}
            <GradientButton 
              text="Hemen İletişime Geçin" 
              className="w-full sm:w-max" 
              paddingClass="px-8 py-4 w-full sm:w-auto"
            />

          </motion.div>

        </div>
      </div>
      
    </section>
  );
}