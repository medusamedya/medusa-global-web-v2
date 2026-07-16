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
        
        {/* =========================================
            ÜST BÖLÜM: Ortaya Hizalı Badge ve Başlık
            ========================================= */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <Badge text="Strateji & Yaklaşım" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-wide">
            {data.title}
          </h2>
        </div>

        
       {/* =========================================
            ALT BÖLÜM: Ekranı İkiye Bölen İçerik Alanı
            ========================================= */}
        {/* items-start yerine items-center kullanarak dikeyde ortaladık */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* SOL KOLON: Açıklama Metni (Description) */}
          <div className="w-full lg:w-5/12">
            <p className="font-sans text-medusa-text-secondary text-lg leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* SAĞ KOLON: İkonlu Hizmet Grid'i (Items) */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {data.items.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                {/* İkon Çerçevesi */}
                <div className="w-12 h-12 rounded-full bg-medusa-purple/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(index)}
                </div>
                
                {/* Hizmet Metni */}
                <span className="font-sans text-white font-medium text-sm md:text-base leading-snug">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}