"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
// Swiper React bileşenleri ve modülleri
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";


// Swiper temel ve modül stilleri
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Kendi UI bileşenlerimiz (Yollarını kendi yapına göre güncelle)
import Badge from "@/app/components/ui/Badge";
import InnerHero from "../components/InnerHero";

// =========================================
// 1. DİNAMİK VERİ MODELİ (Merkezi Yönetim İçin)
// =========================================
const portfolioProjects = [
  {
    id: "hukukchat-ai",
    title: "HukukChat AI",
    category: "Yapay Zeka & Web Sistemleri",
    // Görsel boyutları 16:9 oranına yakın (örn: 1280x720) olmalıdır
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1280&auto=format&fit=crop", 
  },
  {
    id: "latanwood",
    title: "Latanwood",
    category: "E-Ticaret & Dijital Dönüşüm",
    image: "https://images.unsplash.com/photo-1611080649779-e58f0c3f5999?q=80&w=1280&auto=format&fit=crop",
  },
  {
    id: "health-and-wonders",
    title: "Health and Wonders",
    category: "Sağlık Turizmi & Büyüme Stratejisi",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1280&auto=format&fit=crop",
  },
  {
    id: "cool-sandalye",
    title: "Cool Sandalye",
    category: "B2B Performans Pazarlaması",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1280&auto=format&fit=crop",
  },
  {
    id: "naser-group",
    title: "Naser Group",
    category: "Kurumsal Kimlik & Omnichannel",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1280&auto=format&fit=crop",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col w-full overflow-hidden">
      
      {/* =========================================
          ÜST BÖLÜM: INNER HERO
          ========================================= */}
      <InnerHero
        title="Çalışmalarımız"
        accentTitle="Başarı Hikayelerimiz"
        description="Sektör liderlerinin dijital dönüşüm süreçlerine nasıl liderlik ettiğimizi ve veriye dayalı stratejilerle yarattığımız başarı hikayelerini keşfedin."
      />

      {/* =========================================
          ALT BÖLÜM: 3D COVERFLOW SLIDER
          ========================================= */}
      <section className="relative w-full py-20 lg:py-32 z-10 border-t border-medusa-border/20">
        
        {/* Arka Plan Hafif Medusa Işıltısı */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[50vh] bg-medusa-primary/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          
          <div className="flex flex-col items-center text-center mb-16">
            <Badge text="Gurur Tablomuz" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Dijital Varlıkları Ticari Başarıya Dönüştürüyoruz
            </h2>
          </div>

          {/* 
            SWIPER SLIDER ALANI 
            Not: Tailwind tarafında genişlik (width) sorunları yaşamamak için
            slidesPerView={'auto'} kullanıyor ve slide'ların genişliğini CSS/Tailwind 
            ile belirliyoruz (!w-[...] kullanımı bu yüzden).
          */}
          <div className="w-full relative px-0 sm:px-4">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false, // Kullanıcı tıklasa bile otomatik dönmeye devam eder
              }}
              coverflowEffect={{
                rotate: 15,       // Yandaki kartların dönüş açısı (Daha sinematik olması için düşük tutuldu)
                stretch: 0,       // Kartlar arası boşluk
                depth: 250,       // Z eksenindeki derinlik (Arkaya doğru ne kadar itilecekleri)
                modifier: 1,      // Efekt çarpanı
                slideShadows: true, // Kartların kendi gölgeleri
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="w-full py-12 [&_.swiper-pagination-bullet-active]:!bg-medusa-purple-light [&_.swiper-pagination-bullet]:!bg-white/40"
            >
              {portfolioProjects.map((project) => (
                <SwiperSlide 
                  key={project.id} 
                  // Slider genişliklerini farklı ekranlarda dinamik olarak ayarlıyoruz
                  className="!w-[85vw] sm:!w-[70vw] md:!w-[60vw] lg:!w-[50vw] xl:!w-[800px] relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
                >
                  {/* Proje Detay Sayfasına Yönlendiren Link */}
                  <Link href={`/projects/${project.id}`} className="block relative w-full aspect-video border border-white/10 rounded-3xl overflow-hidden bg-medusa-surface-1">
                    
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 60vw, 800px"
                      priority={project.id === "hukukchat-ai"} // İlk sıradaki görseli LCP optimizasyonu için önceliklendiriyoruz
                    />

                    {/* Gradient Karartma (Overlay) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Proje Bilgileri (Üzerine gelince hafif yukarı kayar) */}
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="font-sans text-xs md:text-sm font-bold tracking-widest text-medusa-purple-light uppercase mb-3">
                        {project.category}
                      </p>
                      <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-4 text-medusa-purple-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <span className="font-medium text-sm">Projeyi İncele</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>
    </main>
  );
}