"use client";

import React from "react";
import { motion } from "framer-motion";
import Badge from "@/app/components/ui/Badge";

// Adım verilerimizi temiz bir diziye (array) alıyoruz
const processSteps = [
  {
    num: "01",
    title: "Başlangıçta beklentileri netleştiririz.",
    desc: "Kimin neyden sorumlu olduğunu, hedefleri ve teslim edilecek çıktıları en baştan yazılı hale getiririz. Yanlış anlaşılmalara yer bırakmayız.",
  },
  {
    num: "02",
    title: "Süreci canlı takip edersiniz.",
    desc: "İşin hangi aşamada olduğunu görmek için rapor beklemezsiniz; ilerlemeyi anlık paylaşırız.",
  },
  {
    num: "03",
    title: "Veriye dayalı raporları düzenli alırsınız.",
    desc: " Haftalık ve aylık raporlarımız sadece ne yaptığımızı değil, bunun işinize ne kattığını ve bir sonraki adımı gösterir.",
  },
];

export default function WorkProcess() {
  return (
    <section className="relative w-full py-24 bg-background transition-colors duration-500 overflow-hidden border-t border-medusa-border/20">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* =========================================
            ÜST BAŞLIK VE AÇIKLAMA (MERKEZE HİZALANMIŞ)
            ========================================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <Badge text="Bizden Neler Bekleyebilirsiniz?" className="mb-8" />
            
            {/* Başlık */}
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-wide">
              Şirketinize En Uygun Şekilde <br className="hidden md:block" />
                Birlikte Çalışalım.
            </h2>

            {/* Açıklama */}
          <p className="font-sans  text-normal md:text-lg text-medusa-text-secondary">
              Her markanın ihtiyacı farklı; çalışma biçimimiz de öyle. Değişmeyen tek şey şeffaflık: ne yaptığımızı, neden yaptığımızı ve sizi nereye götürdüğünü her adımda açıkça görürsünüz.

            </p>
          </motion.div>
        </div>

        {/* =========================================
            İÇERİK VE ZAMAN ÇİZELGESİ (TIMELINE)
            ========================================= */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative space-y-16 sm:space-y-24">
            {/* Arkadaki sürekli dikey parlayan çizgi (Yeni Renkler) */}
            <div className="absolute top-4 bottom-4 left-[23px] sm:left-[31px] w-[2px] bg-medusa-purple-light/80 " />

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-20 sm:pl-28 group"
              >
                {/* Adım Numarası (Timeline Noktası) */}
                <div className="absolute left-0 top-0 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-medusa-surface-1 border border-medusa-border/30 group-hover:border-medusa-purple-light flex items-center justify-center transition-all duration-500 z-10 shadow-sm group-hover:shadow-[0_0_20px_rgba(222,216,255,0.2)]">
                  <span className="relative top-[2px] font-heading text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 group-hover:from-medusa-purple-light group-hover:to-foreground transition-all duration-500">
                    {step.num}
                  </span>
                </div>

                {/* Adım İçeriği */}
                <div className="pt-1 sm:pt-2">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-medusa-purple-light transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="font-sans text-medusa-text-secondary text-base sm:text-lg leading-relaxed font-light transition-colors duration-300 group-hover:text-foreground">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}