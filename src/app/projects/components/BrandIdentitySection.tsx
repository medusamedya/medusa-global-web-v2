"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "@/app/components/ui/Badge";

interface Props {
  data: { title: string; description: string; assets: string[] };
}

export default function BrandIdentitySection({ data }: Props) {
  return (
    <section className="w-full relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Badge text="Marka Kimliği" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {data.title}
          </h2>
          <p className="font-sans text-medusa-text-secondary text-lg leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Kurumsal Kimlik Masonry Grid (Büyük Görsel + 2 Küçük Görsel) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {data.assets[0] && (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="md:col-span-8 relative aspect-[4/3] md:aspect-auto md:h-[500px] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10"
            >
               <Image src={data.assets[0]} alt="Brand Asset 1" fill className="object-cover" />
            </motion.div>
          )}
          
          <div className="md:col-span-4 flex flex-col gap-6">
            {data.assets.slice(1, 3).map((img, index) => (
              <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="relative flex-1 aspect-square md:aspect-auto min-h-[238px] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10"
              >
                <Image src={img} alt={`Brand Asset ${index + 2}`} fill className="object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}