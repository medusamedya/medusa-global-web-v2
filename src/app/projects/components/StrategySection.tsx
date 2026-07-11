"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Target, PenTool, MonitorSmartphone, TrendingUp } from "lucide-react";
import Badge from "@/app/components/ui/Badge";

interface Props {
  data: { title: string; description: string; items: string[] };
}

export default function StrategySection({ data }: Props) {
  // Sadece görsel zenginlik için ikon atayıcı
  const getIcon = (index: number) => {
    const icons = [Target, PenTool, MonitorSmartphone, TrendingUp, CheckCircle2];
    const Icon = icons[index % icons.length];
    return <Icon className="w-6 h-6 text-medusa-purple-light" />;
  };

  return (
    <section className="w-full relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Ortaya Hizalı Başlık */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Badge text="Strateji & Yaklaşım" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {data.title}
          </h2>
          <p className="font-sans text-medusa-text-secondary text-lg leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* İkonlu Hizmet Grid'i */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-medusa-purple/20 flex items-center justify-center shrink-0">
                {getIcon(index)}
              </div>
              <span className="font-sans text-white font-medium text-sm md:text-base leading-snug">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}