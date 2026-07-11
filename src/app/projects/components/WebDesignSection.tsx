"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "@/app/components/ui/Badge";

interface Props {
  data: { title: string; description: string; mockup: string };
}

export default function WebDesignSection({ data }: Props) {
  return (
    <section className="w-full relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Badge text="Web Tasarım & Yazılım" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {data.title}
          </h2>
          <p className="font-sans text-medusa-text-secondary text-lg leading-relaxed">
            {data.description}
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-[#0a0f16] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] group"
        >
          <Image 
            src={data.mockup} 
            alt="Web Site Mockup" 
            fill 
            className="object-cover md:object-contain object-top transition-transform duration-1000 group-hover:scale-[1.02]"
          />
          {/* Tarayıcı Barı Efekti */}
          <div className="absolute top-0 left-0 w-full h-8 bg-black/40 backdrop-blur-md flex items-center px-4 gap-2 border-b border-white/10">
             <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
             <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}