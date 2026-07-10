"use client";

import React from "react";
import { motion } from "framer-motion";
import Badge from "@/app/components/ui/Badge"; 
import ProcessCard from "@/app/components/ui/ProcessCard"; // Dosya yolunu kendi projenize göre teyit edin

const expectationsData = [
  {
    id: "01",
    title: "Başlangıçtan itibaren beklentilerinizi netleştirin.",
    description:
      "Herkesin hedefleri, programı ve üzerinde anlaşılan çıktıları anlamasını sağlayarak projeleri yolunda tutuyor ve yanlış anlamaları önlüyoruz.",
  },
  {
    id: "02",
    title: "İşinizle ilgili güncellemelerimizi takip edin.",
    description:
      "Üstün şeffaflık seviyemiz, şirket yöneticilerine yatırımlarının gerçek getiri sağladığına dair güvence verir.",
  },
  {
    id: "03",
    title: "Haftalık ve aylık olarak veriye dayalı raporlarımızı alın.",
    description:
      "Hedeflerinize ulaşmanıza yardımcı olacak ve gelecekteki gelişim alanlarını daha kolay belirleyecek tavsiyeler sunabilmemiz için, bir projenin performansına ve ilerlemesine ilişkin analize dayalı içgörüler gereklidir.",
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
            <Badge text="Bizden Neler Bekleyebilirsiniz?" className="mb-8" />
            
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Şeffaflık ve Veriyle <br className="hidden sm:block" />
              Desteklenen Büyüme
            </h2>
            
          <p className="font-sans  text-normal md:text-lg text-medusa-text-secondary">
              Medusa Global Acceleration & Consultancy mükemmel sonuçlar sunmaya ve tüm 
              müşterilerimize değer sağlamaya kendini adamıştır. Düzenli güncellemeler ve raporlarla 
              desteklenen, açıkça tanımlanmış beklentilere sahip yüksek bir şeffaflık standardı 
              aracılığıyla kendimizi sorumlu tutuyoruz.
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
                number={item.id}
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