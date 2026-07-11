"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "@/app/components/ui/Badge";

interface Props {
  data: { title: string; description: string; metrics: string[] }; // metrics array'i görsel URL'leri olarak kullanılacak
}

export default function DigitalAdsSection({ data }: Props) {
  return (
    <section className="w-full relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Badge text="Dijital Reklamlar" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {data.title}
          </h2>
          <p className="font-sans text-medusa-text-secondary text-lg leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {data.metrics.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-medusa-surface-1 border border-white/10 group"
            >
              <Image 
                src={img} 
                alt={`Ad Creative ${index + 1}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}