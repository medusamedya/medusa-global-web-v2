"use client";

import React from "react";
// Variants tipini import ederek TypeScript hatasını çözüyoruz
import { motion, Variants } from "framer-motion";

// 9 Kişilik Ekip Datası (Geçici Unsplash görselleri ile)
const teamMembers = [
  {
    id: 1,
    name: "Alex Sterling",
    role: "Kurucu & CEO",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Kıdemli Stratejist",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Marcus Cole",
    role: "Teknoloji Direktörü (CTO)",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Kreatif Direktör",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "David Kim",
    role: "Performans Pazarlama",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Maya Patel",
    role: "Dijital Analist",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "James Wilson",
    role: "Müşteri Başarı Yöneticisi",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Olivia Trent",
    role: "UI/UX Baş Tasarımcısı",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Lucas Gray",
    role: "Full-stack Geliştirici",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
  },
];

// Type ataması (Variants) ile TypeScript hatasını kalıcı olarak gideriyoruz
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Team() {
  return (
    <section className="relative w-full bg-background py-24 sm:py-32 bg-[#05010A] overflow-hidden z-10">
      {/* Arkadaki Hafif Medusa Parıltısı */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-medusa-purple/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* =========================================
            1. BAŞLIK VE BADGE BÖLÜMÜ
            ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-24 flex flex-col items-center"
        >
          <div className="relative inline-flex overflow-hidden rounded-full p-[1px] shadow-sm mb-6">
            {/* Sürekli dönen arka plan (Mor ve Spark Işığı) */}
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-purple)_40%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_60%,var(--color-medusa-purple)_100%)] opacity-80" />

            {/* İç Zemin ve Metin */}
            <div className="relative z-10 inline-flex items-center justify-center w-full h-full rounded-full bg-medusa-base-dark/95 px-4 py-1.5 backdrop-blur-md">
              <span className="font-sans text-sm font-semibold tracking-wide text-white drop-shadow-md">
                Ekibimiz
              </span>
            </div>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl text-white font-bold tracking-tight mb-4">
            Büyümenin{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medusa-purple via-medusa-spark to-medusa-purple animate-text-shine inline-block">
              Mimarları
            </span>
          </h2>
          <p className="font-sans text-white/60 text-lg max-w-2xl mx-auto font-light">
            Sadece kod yazan veya tasarım yapan değil; dijital varlıklarınızı
            ticari başarıya dönüştüren vizyoner bir ekiple tanışın.
          </p>
        </motion.div>

        {/* =========================================
            2. EKİP GRID (KADEMELİ ANİMASYON)
            ========================================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.id} variants={itemVariants}>
              <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-b from-medusa-purple/50 to-medusa-spark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 p-[1px] rounded-2xl">
                  <div className="absolute inset-[1px] bg-[#0A0314] rounded-2xl z-0" />
                </div>

                <div className="relative z-10 p-2">
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-white/5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#05010A] via-[#05010A]/20 to-transparent opacity-80" />

                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-heading text-xl font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="font-sans text-sm text-medusa-spark tracking-wide font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
