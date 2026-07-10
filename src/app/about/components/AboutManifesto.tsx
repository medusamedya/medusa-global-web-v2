"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Badge from "@/app/components/ui/Badge";

// =========================================
// 1. TİP GÜVENLİ ANİMASYON VARYANTLARI
// =========================================
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  },
};

export default function AboutManifesto() {
  return (
    <section className="relative w-full bg-background py-24 overflow-hidden z-10">
      
      {/* --- ARKA PLAN MEDUSA IŞILTISI --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-4xl bg-medusa-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* =========================================
            MERKEZİ BADGE VE GİRİŞ
            ========================================= */}
        

        <div className="flex flex-col gap-24 lg:gap-32">
          
          {/* =========================================
              BÖLÜM 1: NEYİ SAVUNUYORUZ? (Görsel Solda, Metin Sağda)
              ========================================= */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Görsel Alanı (Sol) */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                alt="Neyi Savunuyoruz"
                fill
                className="object-cover filter opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
            </motion.div>

            {/* Metin Alanı (Sağ) */}
            <motion.div 
              variants={staggerContainer} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.1 }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-8">
                Neyi savunuyoruz:
              </motion.h2>
              
              <motion.ul className="space-y-6">
                {[
                  "Süreci en ince ayrıntısına kadar planlar, sonuçlara ulaşana kadar takip ederiz.",
                  <React.Fragment key="item-2">
                    Kampanya, tasarım, içerik, rapor... Bunların hepsi bir araç. Bizim için amaç, markanızın bir sonraki eşiğe geçmesi. Çoğu ajans teslim ettiği dosyayla işini bitmiş sayar. Biz işi, <span className="text-[#ef6906] font-medium">işiniz büyüdüğünde bitmiş sayarız.</span>
                  </React.Fragment>,
                  "Bir işi kurmadan önce sistemini çıkarır, sistemi çıkarmadan önce hedefini netleştiririz.",
                  "Yaratıcılığın veriye dayanmasını isteriz; alkış toplayan değil, değer katabilecek işler olmalı.",
                  "Güvenilen, hissedilen ve akılda kalan markalar kurmak bizim için takıntı seviyesinde bir mesele.",
                  "Ve bunu kürsüden anlatmıyoruz: Bunu size önermeden önce kendi işlerimizde denedik. Odimax, Maximum Kabakum, Celebim, Altın Kelime ve daha niceleri. Sıfırdan kurduğumuz, işlettiğimiz ve büyüttüğümüz işler. Riski tanıyoruz, çünkü kendi markalarımızla aldık."
                ].map((item, idx) => (
                  <motion.li key={idx} variants={fadeUp} className="flex items-start gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-medusa-purple-light mt-2.5 shrink-0 group-hover:scale-150 group-hover:bg-[#ef6906] transition-all duration-300" />
                    <p className="font-sans text-medusa-text-secondary text-base md:text-lg leading-relaxed">
                      {item}
                    </p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          {/* =========================================
              BÖLÜM 2: NEDEN MEDUSA? (Metin Solda, Görsel Sağda)
              ========================================= */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Metin Alanı (Sol) */}
            <motion.div 
              variants={staggerContainer} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.1 }}
              className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1"
            >
            

              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-8">
                Neden Medusa?
              </motion.h2>

              <div className="space-y-6">
                <motion.p variants={fadeUp} className="font-sans text-medusa-text-secondary text-base md:text-lg leading-relaxed">
                  Medusa&apos;nın gücü bakışındaydı. <strong className="text-white font-medium">Bizimki de öyle.</strong> Bir işe dışarıdan; net, korkusuz ve doğru açıdan bakabilmek ve içeriden göremediğiniz şeyi görürüz.
                </motion.p>
                
                <motion.p variants={fadeUp} className="font-sans text-medusa-text-secondary text-base md:text-lg leading-relaxed">
                  Önce bütünü görürüz, sonra parçalara ayırırız; her parçanın birbiriyle çalışıp bütünü büyütmesini sağlarız. Bir markayı büyütmek, reklama daha çok para gömmek ya da son trendi kopyalamak değildir. 
                </motion.p>

                <motion.div variants={fadeUp} className="p-6 rounded-2xl bg-white/5 border border-white/10 mt-4 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-r from-medusa-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <p className="font-sans text-white/90 text-base md:text-lg leading-relaxed relative z-10">
                     Mesajın, teklifin ve kanalların birbirine kenetlendiği bir <span className="text-[#ef6906] font-semibold">sistem kurmaktır</span>, böylece harcanan her lira daha çok çalışır, söylenen her söz daha net iner.
                   </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Görsel Alanı (Sağ) */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-1/2 relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden group order-1 lg:order-2"
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                alt="Neden Medusa"
                fill
                className="object-cover filter opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}