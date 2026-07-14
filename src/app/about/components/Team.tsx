"use client";

import React from "react";
// Variants tipini import ederek TypeScript hatasını çözüyoruz
import { motion, Variants } from "framer-motion";
import Badge from "@/app/components/ui/Badge";

// 9 Kişilik Ekip Datası (Geçici Unsplash görselleri ile)
const teamMembers = [
  {
    id: 1,
    name: "Muammer Sarıkaya",
    role: "Founder",
    image:
      "/team/MuammerSarıkaya.webp",
  },
  {
    id: 2,
    name: "Müjde Kaynar",
    role: "Head Of Agency",
    image:
      "/team/MüjdeKaynar.webp",
  },
  {
    id: 3,
    name: "Faruk Özdemir",
    role: "Managıng Dırector | Strategy & Growth",
    image:
      "/team/FarukÖzdemir.webp",
  },
  {
    id: 4,
    name: "Safa Bertan",
    role: "Dıgıtal Marketıng & operatıons manager",
    image:
      "/team/SafaBertan.webp",
  },
  {
    id: 5,
    name: "Ahmet Üstel",
    role: "Technology lead",
    image:
      "/team/AhmetÜstel.webp",
  },
  {
    id: 6,
    name: "Kadir Devran",
    role: "sales & ınternatıonal busıness development specıalıst",
    image:
      "/team/KadirDevran.webp",
  },
  {
    id: 7,
    name: "Güray Bahçe",
    role: "publıc relatıons & pr consultant",
    image:
      "/team/GürayBahçe.webp",
  },
  {
    id: 8,
    name: "Cağrı Cerit",
    role: "art dırector",
    image:
      "/team/CağrıCerit.webp",
  },
  {
    id: 9,
    name: "Cağlar Erel",
    role: "dırector of photography",
    image:
      "/team/ÇağlarErel.webp",
  },
  {
    id: 10,
    name: "Sena Türkyaman",
    role: "junıor customer growth specıalıst",
    image:
      "/team/SenaTürkyaman.webp",
  },
  {
    id: 11,
    name: "Enes Gürsoy Nergiz",
    role: "studıo manager",
    image:
      "/team/EnesGürsoyNergiz.webp",
  },
  {
    id: 12,
    name: "Elif Su Aslan",
    role: "jr. software developer",
    image:
      "/team/ElifSuAslan.webp",
  },
  {
    id: 13,
    name: "Rüzgar Alibaşoğlu",
    role: "jr. photographer",
    image:
      "/team/Rüzgar.webp",
  },
    {
    id: 14,
    name: "Duygu Can",
    role: "Brand operatıons manager",
    image:
      "/team/Anonim.webp",
  },
    {
    id: 15,
    name: "Alp Şeker",
    role: "Art dırector",
    image:
      "/team/Anonim.webp",
  },
    {
    id: 16,
    name: "Nergiz Gökmen",
    role: "Graphıc desıgner",
    image:
      "/team/Anonim.webp",
  },
    {
    id: 17,
    name: "Berkay Kaptan",
    role: "Software developer",
    image:
      "/team/Anonim.webp",
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
          <Badge text="Ekibimiz" className="mb-8" />

          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Büyümenin{" "}
           
              Mimarları
          </h2>
          <p className="font-sans  text-normal md:text-lg text-medusa-text-secondary">
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
                {/* Dış Çerçeve Parlaması (Yeni Renkler: Secondary'den Purple Light'a) */}
                <div className="absolute inset-0 bg-gradient-to-b from-medusa-secondary/50 to-medusa-purple-light/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 p-[1px] rounded-2xl">
                  {/* İç Zemin (Yeni Renk: Surface-1) */}
                  <div className="absolute inset-[1px] bg-medusa-surface-1 rounded-2xl z-0" />
                </div>

                <div className="relative z-10 p-2">
                  <div className="relative w-full  rounded-xl overflow-hidden bg-white/5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    />

                    {/* Resim Üzeri Karartma (Yeni Renk: Surface-1 ile uyumlu geçiş) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-medusa-surface-1 via-medusa-surface-1/20 to-transparent opacity-80" />

                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-heading text-xl font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      {/* Unvan (Yeni Renk: Purple Light) */}
                      <p className="font-sans uppercase text-sm text-medusa-purple-light tracking-wide font-medium">
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
