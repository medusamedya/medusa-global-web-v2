"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "@/app/components/ui/Badge";

// 1'den 62'ye kadar olan logoları dinamik olarak oluşturuyoruz
const clients = Array.from({ length: 62 }, (_, index) => ({
  id: index + 1,
  name: `Referans ${index + 1}`,
  logo: `/logos/${index + 1}.png`,
}));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Y ekseninden kaymak yerine hafifçe büyüyerek gelmeleri,
// dağınık düzende daha şık duracaktır.
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function ClientsGrid() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* =========================================
            1. BADGE & BAŞLIK
            ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <Badge text="Referanslarımız" className="mb-6" />

          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Değerli İş Ortaklarımız
          </h2>
        </motion.div>

        {/* =========================================
            2. ASİMETRİK LOGO BULUTU (FLEX-WRAP)
            ========================================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          // Grid yerine flex, flex-wrap ve justify-center kullanarak satırların
          // serbestçe dolmasını ve kırılmasını sağlıyoruz.
          className="flex flex-wrap justify-center items-center gap-x-10 sm:gap-x-16 gap-y-12 sm:gap-y-16"
        >
          {clients.map((client, index) => {
            // Asimetrik ve nizami olmayan bir görünüm için logoların
            // genişliklerini döngü sırasına göre kasıtlı olarak bozuyoruz.
            let widthClass = "w-24 sm:w-32"; // Standart boyut

            if (index % 5 === 0) {
              widthClass = "w-32 sm:w-44"; // Bazıları daha geniş
            } else if (index % 3 === 0) {
              widthClass = "w-20 sm:w-28"; // Bazıları daha dar
            } else if (index % 7 === 0) {
              widthClass = "w-28 sm:w-40"; // Ara boyut
            }

            return (
              <motion.div
                key={client.id}
                variants={itemVariants}
                className={`relative flex items-center justify-center h-10 sm:h-14 ${widthClass}`}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  // brightness-0 invert kaldırıldı, yerine grayscale eklendi
                  className="object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300"
                  sizes="(max-width: 768px) 176px, 176px"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
