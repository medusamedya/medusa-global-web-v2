"use client";

import React from "react";
import Image from "next/image";
import Badge from "@/app/components/ui/Badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Swiper React bileşenleri ve modülleri
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";

// Swiper temel ve modül stilleri
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Props {
  data: { title: string; description: string; mockups: string[] };
}

export default function WebDesignSection({ data }: Props) {
  return (
    <section className="w-full relative z-10">
      
      {/* Arka plan ışık efekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[50vh] bg-medusa-primary/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Üst Metin Alanı */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Badge text="Web Tasarım & Yazılım" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            {data.title}
          </h2>
          <p className="font-sans  text-normal md:text-lg text-medusa-text-secondary">
            {data.description}
          </p>
        </div>

        {/* 3D COVERFLOW SLIDER ALANI */}
        {/* DİKKAT: 'group' sınıfı buradan kaldırıldı */}
        <div className="w-full relative px-0 sm:px-4">
          
          {/* Özel Sol Navigasyon Butonu */}
          <button className="web-prev absolute -left-2 sm:-left-4 md:-left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-medusa-purple hover:scale-105 hidden md:flex cursor-pointer">
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Özel Sağ Navigasyon Butonu */}
          <button className="web-next absolute -right-2 sm:-right-4 md:-right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-medusa-purple hover:scale-105 hidden md:flex cursor-pointer">
            <ChevronRight className="w-6 h-6" />
          </button>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            initialSlide={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.web-prev',
              nextEl: '.web-next',
            }}
            coverflowEffect={{
              rotate: 15,       
              stretch: 0,       
              depth: 250,       
              modifier: 1,      
              slideShadows: true, 
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="w-full py-12 [&_.swiper-pagination-bullet-active]:!bg-medusa-purple-light [&_.swiper-pagination-bullet]:!bg-white/40"
          >
            {data.mockups.map((img, index) => (
              <SwiperSlide 
                key={index}
                // 'group' sınıfını buraya ekleyerek efekti her slayt için bağımsız hale getirdik
                className="!w-[85vw] sm:!w-[70vw] md:!w-[60vw] lg:!w-[50vw] xl:!w-[800px] relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
              >
                <div className="block relative w-full aspect-video border border-white/10 rounded-3xl overflow-hidden bg-medusa-surface-1">
                  <Image 
                    src={img} 
                    alt={`Web Design Mockup ${index + 1}`} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Sadece hafif bir gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}