"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "@/app/components/ui/Badge";

interface Props {
  data: { title: string; description: string; images: string[] };
}

export default function SocialMediaSection({ data }: Props) {
  return (
    <section className="w-full relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Badge text="Sosyal Medya" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {data.title}
          </h2>
          <p className="font-sans text-medusa-text-secondary text-lg leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {data.images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group bg-medusa-surface-1"
            >
              <Image 
                src={img} 
                alt={`Social Media ${index + 1}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}