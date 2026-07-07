"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Medusa Global Referans Markaları 
const clients = [
  { id: 1, name: "Cool Sandalye", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { id: 2, name: "Latanwood", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { id: 3, name: "Health and Wonders", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { id: 4, name: "Purity Healthcare", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { id: 5, name: "Naser Group", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { id: 6, name: "MDS Agro Data", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" },
];

const duplicatedClients = [...clients, ...clients];

export default function Clients() {
  return (
    // Dışarıdaki eski statik border-y kaldırıldı, arka plan sadeleştirildi
    <section className="relative bg-background w-full py-16 sm:py-24 bg-[#05010A] z-10 overflow-hidden">
      
      {/* Özel Marquee (Akış) Animasyonu CSS'i */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
          width: max-content;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* =========================================
            ANİMASYONLU BORDER KAPSAYICISI
            ========================================= */}
        {/* Dış kutuya HighImpactSolutions'daki group ve padding mimarisi eklendi */}
        <div className="relative group rounded-[2rem] p-[2px] overflow-hidden shadow-2xl">
          
          {/* Dönen Conic Gradient (Fare üzerine gelince belirginleşir) */}
          <span className="absolute inset-[-100%] sm:inset-[-50%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-spark)_25%,var(--color-medusa-base-dark)_50%,var(--color-medusa-purple)_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* İç Zemin (Karanlık/Saydam Kapsül) */}
          <div className="relative z-10 w-full rounded-[calc(2rem-2px)] bg-[#0A0314]/90 backdrop-blur-xl py-12 sm:py-16 flex flex-col items-center border border-white/5">
            
            {/* =========================================
                1. BADGE & BAŞLIK
                ========================================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 flex flex-col items-center"
            >
              {/* Referans Koddan Alınan Klasik Medusa Badge'i */}
              <div className="relative inline-flex overflow-hidden rounded-full p-[1px] shadow-sm mb-6">
                <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-purple)_40%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_60%,var(--color-medusa-purple)_100%)] opacity-80" />
                
                <div className="relative z-10 inline-flex items-center justify-center w-full h-full rounded-full bg-medusa-base-dark/95 px-5 py-1.5 backdrop-blur-md">
                  <span className="font-sans text-xs font-semibold tracking-widest text-white drop-shadow-md uppercase">
                    Referanslarımız
                  </span>
                </div>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Büyüme Yolculuğunda <span className="text-transparent bg-clip-text bg-gradient-to-r from-medusa-purple via-medusa-spark to-medusa-purple animate-text-shine inline-block">Bize Güvenen</span> Markalar
              </h2>
            </motion.div>

            {/* =========================================
                2. AKAN LOGO ALANI (Marquee)
                ========================================= */}
            <div className="relative flex overflow-hidden w-full max-w-[90%] mx-auto [mask-image:_linear-gradient(to_right,transparent_0,_black_15%,_black_85%,transparent_100%)] -webkit-[mask-image:_linear-gradient(to_right,transparent_0,_black_15%,_black_85%,transparent_100%)]">
              
              <div className="flex items-center gap-16 sm:gap-24 animate-marquee group-hover:[animation-play-state:paused] pr-16 sm:pr-24">
                
                {duplicatedClients.map((client, index) => (
                  <div 
                    key={`${client.id}-${index}`} 
                    className="relative flex items-center justify-center w-32 sm:w-40 h-16 sm:h-20 flex-shrink-0 cursor-pointer"
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-110"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                ))}
                
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}