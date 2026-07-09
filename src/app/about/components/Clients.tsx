"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "@/app/components/ui/Badge";

// Medusa Global Referans Markaları
const clients = [
  {
    id: 1,
    name: "Cool Sandalye",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 2,
    name: "Latanwood",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 3,
    name: "Health and Wonders",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    id: 4,
    name: "Purity Healthcare",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    id: 5,
    name: "Naser Group",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    id: 6,
    name: "MDS Agro Data",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
  },
];

const duplicatedClients = [...clients, ...clients];

export default function Clients() {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-background z-10 overflow-hidden">
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

      {/* =========================================
          1. BADGE & BAŞLIK (Merkezlenmiş İçerik)
          ========================================= */}
      <div className="container mx-auto px-4 sm:px-6 mb-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <Badge text="Referanslarımız" className="mb-8" />

          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
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
    </section>
  );
}