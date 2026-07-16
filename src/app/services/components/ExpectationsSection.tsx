"use client";

import React from "react";
import { motion } from "framer-motion";
import Badge from "@/app/components/ui/Badge"; 
import ProcessCard from "@/app/components/ui/ProcessCard"; // Dosya yolunu kendi projenize göre teyit edin

const expectationsData = [
  {
    id: "01",
    title: "Tahmin değil, veri konuşur.",
    description:
      "Kararlarımızı hislere değil rakamlara dayandırırız. Her öneri, arkasındaki veriyle birlikte masaya gelir; böylece neye neden yatırım yaptığınızı tam olarak bilirsiniz.",
  },
  {
    id: "02",
    title: "Kötü haberi de zamanında verir.",
    description:
      "Şeffaflık yalnızca iyi giden işleri paylaşmak değildir. İşe yaramayan bir hamleyi ilk biz söyler, yönü vakit kaybetmeden düzeltiriz. Gerçek güven buradan doğar.",
  },
  {
    id: "03",
    title: "İlerlemeyi birlikte okuruz.",
    description:
      "Rapor, dosyada kalan bir formalite değil, ortak kararların zeminidir. Haftalık ve aylık verileri birlikte yorumlar, bir sonraki adımı bu tabloya bakarak seçeriz.",
  },
];

export default function ExpectationsSection() {
  return (
    <section className="relative w-full py-24 bg-background border-t border-medusa-border/20 overflow-hidden z-10">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* =========================================
            ÜST BAŞLIK VE AÇIKLAMA ALANI
            ========================================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <Badge text="Nasıl Çalışırız?" className="mb-8" />
            
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-wide">
              Rakamla Konuşuruz,  <br className="hidden sm:block" />
              Sözle Değil
            </h2>
            
          <p className="font-sans  text-normal md:text-lg text-medusa-text-secondary">
              Büyüme, tahminle değil kanıtla olur. Attığımız her adımı ölçer, ölçtüğümüz her şeyi sizinle paylaşırız.
               Neyin işe yaradığını da, yaramadığını da açıkça görürsünüz — 
               çünkü bir markayı ancak gerçek veriyle doğru yöne çevirebilirsiniz.
            </p>
          </motion.div>
        </div>

        {/* =========================================
            DİNAMİK KAPSÜL KARTLAR (GRID)
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {expectationsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="h-full" // İçerideki ProcessCard'ın h-full özelliğini desteklemek için
            >
              <ProcessCard
                title={item.title}
                description={item.description}
                // Tag prop'u burada opsiyonel olarak kullanılmadı (İçerik yapımıza uygun şekilde)
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}