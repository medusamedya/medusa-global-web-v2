"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "@/app/components/ui/Badge";

const excludedIds = [2, 12, 17,47,48,31,56,25,32,52,54,55,51,41,40,33,37,36,22,20,62,57,59,39,34,61,13,14];

// 1'den 62'ye kadar olan logoları dinamik olarak oluşturuyoruz.
// NOT: Eğer görsellerinin uzantısı .png değilse (.svg, .jpg, .webp vb.),
// aşağıdaki ".png" kısmını kendi uzantına göre değiştirmelisin.
const clients = Array.from({ length: 62 }, (_, index) => ({
  id: index + 1,
  name: `Referans ${index + 1}`,
  logo: `/logos/${index + 1}.png`, 
})).filter(client => !excludedIds.includes(client.id));

const duplicatedClients = [...clients, ...clients];

export default function Clients() {
  return (
    <section className="relative w-full my-12 bg-background z-10 overflow-hidden">
      {/* Özel Marquee (Akış) Animasyonu CSS'i */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          /* Logo sayısı arttığı için animasyon süresini 35s'den biraz daha uzun tutmak isteyebilirsin. 
             Eğer çok hızlı akıyorsa 60s veya 80s yapabilirsin. */
          animation: marquee 120s linear infinite;
          width: max-content;
        }
      `}</style>

      {/* =========================================
          1. BADGE & BAŞLIK (Merkezlenmiş İçerik)
          ========================================= */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <Badge text="Referanslarımız" className="mb-8" />

          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground tracking-wide">
            Büyüme Yolculuğunda Bize Güvenen <br className="hidden sm:block" />
            Markalar
          </h2>
        </motion.div>
      </div>

      {/* =========================================
          2. AKAN LOGO ALANI (Tam Genişlik, Maskeli)
          ========================================= */}
      <div className="relative flex overflow-hidden w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_15%,_black_85%,transparent_100%)] -webkit-[mask-image:_linear-gradient(to_right,transparent_0,_black_15%,_black_85%,transparent_100%)]">
        <div className="flex items-center gap-16 sm:gap-24 animate-marquee hover:[animation-play-state:paused] pr-16 sm:pr-24">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              // Kutu boyutları (w-32 h-16) her logonun kaplayacağı maksimum alanı belirler.
              // Tüm görsellerin aynı standart boyutta görünmesinin sırrı bu kapsayıcı div'dir.
              className="relative flex items-center justify-center w-32 sm:w-40 h-16 sm:h-20 flex-shrink-0 cursor-pointer"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                // object-contain: Görselin kırpılmasını engeller, oranını koruyarak kutuya sığdırır.
                className="object-contain filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-110"
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}