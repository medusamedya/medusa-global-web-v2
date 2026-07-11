import React from "react";
import Image from "next/image";
import Badge from "@/app/components/ui/Badge";

interface ProjectHeroProps {
  category: string;
  title: string;
  tags: string[];
  description: string;
  heroMockup: string;
}

export default function ProjectHero({ category, title, tags, description, heroMockup }: ProjectHeroProps) {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-background overflow-hidden border-b border-medusa-border/20 pt-24 pb-16">
      
      {/* Medusa Global Karakteristik Arka Plan Işıltıları */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(92,6,140,0.15)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vh] bg-medusa-primary/5 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Sol Kolon: Proje Bilgileri */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <Badge text={category} className="mb-6 w-max" />
          
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            {title}
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-medusa-purple-light text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>

          <p className="font-sans text-medusa-text-secondary text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Sağ Kolon: Proje Mockup Görseli */}
        <div className="w-full lg:w-7/12 relative aspect-[4/3] lg:aspect-video flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={heroMockup}
              alt={`${title} Mockup`}
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-[1.02]"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}