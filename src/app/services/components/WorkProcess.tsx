"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Adım verilerimizi temiz bir diziye (array) alıyoruz
const processSteps = [
  {
    num: "01",
    title: "Başlangıçtan itibaren beklentilerinizi netleştirin.",
    desc: "Herkesin hedefleri, programı ve üzerinde anlaşılan çıktıları anlamasını sağlayarak projeleri yolunda tutuyor ve yanlış anlamaları önlüyoruz.",
  },
  {
    num: "02",
    title: "İşinizle ilgili güncellemelerimizi takip edin.",
    desc: "Üstün şeffaflık seviyemiz, şirket yöneticilerine yatırımlarının gerçek getiri sağladığına dair güvence verir.",
  },
  {
    num: "03",
    title: "Haftalık ve aylık olarak veriye dayalı raporlarımızı alın.",
    desc: "Hedeflerinize ulaşmanıza yardımcı olacak ve gelecekteki gelişim alanlarını daha kolay belirleyecek tavsiyeler sunabilmemiz için, bir projenin performansına ve ilerlemesine ilişkin analize dayalı içgörüler gereklidir.",
  },
];

export default function WorkProcess() {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-background overflow-hidden z-10 ">
      {/* =========================================
          SİNEMATİK ARKA PLAN GÖRSELİ (AĞ YAPISI)
          ========================================= */}
   
      {/* Görsel ekranın üst kısmından yumuşakça belirmeye başlar ve aşağı doğru karanlıkta erir (mask-image) */}
      <div className="absolute top-0 left-0 w-full h-[70vh] z-0 [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_60%,transparent_100%)] -webkit-[mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_60%,transparent_100%)] pointer-events-none">
        <Image
          src="https://framerusercontent.com/images/lqo8ZRIavdu917iJA3Qe51RLPg.png?scale-down-to=1024&width=1380&height=1380"
          alt="Medusa Global Veri Ağı"
          fill
          className="object-cover opacity-40 mix-blend-luminosity filter grayscale"
          priority
        />
        {/* Görselin üzerine kurumsal mor filtremiz */}
        <div className="absolute inset-0 bg-medusa-purple/20 mix-blend-color" />
        {/* Üstten ve alttan sayfa zeminine (background) pürüzsüzce kaynaşması için çift yönlü gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* =========================================
            ÜST BAŞLIK VE AÇIKLAMA (MERKEZE HİZALANMIŞ)
            ========================================= */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="relative inline-flex overflow-hidden rounded-full p-[1px] shadow-sm mb-6">
              {/* Sürekli dönen arka plan (Mor ve Spark Işığı) */}
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-purple)_40%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_60%,var(--color-medusa-purple)_100%)] opacity-80" />

              {/* İç Zemin ve Metin */}
              <div className="relative z-10 inline-flex items-center justify-center w-full h-full rounded-full bg-medusa-base-dark/95 px-4 py-1.5 backdrop-blur-md">
                <span className="font-sans text-sm font-semibold tracking-wide text-white drop-shadow-md">
                  Bizden Neler Bekleyebilirsiniz?
                </span>
              </div>
            </div>
            {/* Başlık */}
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              Şirketinize En Uygun Şekilde <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medusa-purple via-medusa-spark to-medusa-purple animate-text-shine inline-block mt-2">
                Birlikte Çalışalım.
              </span>
            </h2>

            {/* Açıklama */}
            <p className="font-sans text-white/70 text-lg sm:text-xl leading-relaxed font-light max-w-3xl mt-4">
              Medusa Global Acceleration & Consultancy mükemmel sonuçlar sunmaya
              ve tüm müşterilerimize değer sağlamaya kendini adamıştır. Düzenli
              güncellemeler ve raporlarla desteklenen, açıkça tanımlanmış
              beklentilere sahip yüksek bir şeffaflık standardı aracılığıyla
              kendimizi sorumlu tutuyoruz.
            </p>
          </motion.div>
        </div>

        {/* =========================================
            İÇERİK VE ZAMAN ÇİZELGESİ (TIMELINE)
            ========================================= */}
        {/* Zaman çizelgesi okunabilirliği maksimize etmek için max-w-3xl ile ortalandı */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative space-y-16 sm:space-y-24">
            {/* Arkadaki sürekli dikey parlayan çizgi */}
            <div className="absolute top-4 bottom-4 left-[23px] sm:left-[31px] w-[2px] bg-gradient-to-b from-medusa-purple/60 via-medusa-spark/40 to-transparent" />

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
                <div className="absolute left-0 top-0 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-[#05010A] border-2 border-medusa-purple/30 group-hover:border-medusa-spark flex items-center justify-center transition-colors duration-500 z-10 shadow-[0_0_15px_rgba(92,6,140,0.3)] group-hover:shadow-[0_0_20px_rgba(207,181,59,0.5)]">
                  {/* 
                    DÜZELTME: leading-none kaldırıldı. Metin kutusunun daralması engellendi.
                    Optik ortalama için relative top-[1px] veya top-[2px] kullanıldı. 
                  */}
                  <span className="relative top-[6px] font-heading text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 group-hover:from-medusa-spark group-hover:to-medusa-purple transition-all duration-500">
                    {step.num}
                  </span>
                </div>

                {/* Adım İçeriği (Kart gibi hafif vurgulu) */}
                <div className="pt-1 sm:pt-2">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-medusa-purple group-hover:to-medusa-spark transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="font-sans text-white/60 text-base sm:text-lg leading-relaxed font-light">
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
