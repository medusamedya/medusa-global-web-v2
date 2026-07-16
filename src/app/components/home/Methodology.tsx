"use client";

import React from "react";
import Badge from "../ui/Badge";
import Image from "next/image";

const workflowSteps = [
  {
    id: 1,
    badge: "01 / Uygulama",
    title: "Hızlandırma",
    description: (
      <>
        Stratejiyi{" "}
        <span className="text-[#ef6906]">
          içerik, prodüksiyon ve dijital sistemlerle
        </span>{" "}
        sahaya indiririz. Süreçlerde kazanılan zaman ve ulaşılan ölçek, her
        adımda raporlanır.
      </>
    ),
    image: "/methodology/hızlandırma_beyaz.png", // Icon yerine görsel yolu
    video: "/videos/Hızlandırma.webm",
  },

  {
    id: 2,
    badge: "02 / Strateji",
    title: "Danışmanlık",
    description: (
      <>
        İş süreçlerinizdeki yaygın sorunları operasyonel verimlilik, finansal
        yönetim ve pazarlama stratejisi başlıklarında çevik çözümlerle ele
        alırız. Tedarikçi değil,{" "}
        <span className="text-[#ef6906]">bir ortak gibi çalışırız.</span>
      </>
    ),
    image: "/methodology/danışmanlık_siyah.png", // Icon yerine görsel yolu
    video: "/videos/Danışmanlık.webm",
  },

  {
    id: 3,
    badge: "03 / Ölçek",
    title: "Yatırım",
    description: (
      <>
        Sermaye vermekle yetinmeyiz; inandığımız ticaretlerde ortak yönetim ve
        strateji desteğiyle{" "}
        <span className="text-[#ef6906]">uzun vadeli büyümeyi</span> birlikte
        kurarız.
      </>
    ),
    image: "/methodology/yatırım_beyaz.png", // Icon yerine görsel yolu
    video: "/videos/Yatırım.webm",
  },
  {
    id: 4,
    badge: "04 / Analiz",
    title: "Dijital Sağlık Karnesi",
    description: (
    <>
      Web sitenizi, sosyal medyanızı ve reklamlarınızı bağımsız olarak analiz eder, 
      <span className="text-[#ef6906]"> 14 günde </span> 
      raporlarız. Bir sonraki adıma nereden başlayacağınızı birlikte görürüz.
    </>
  ),
    image: "/methodology/dijitalkarne_siyah.png", // Icon yerine görsel yolu
    video: "/videos/Sağlık karnesi.webm",
  },
];

export default function Methodology() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-background transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* --- ÜST BAŞLIK BÖLÜMÜ --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 md:mb-16 space-y-6">
          <Badge text="Dijital Büyüme Metodolojimiz" className="mb-8" />

          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Markanızın büyüme yolculuğunu tek çatı altında kuruyoruz.
          </h2>
          <p className="font-sans  text-normal md:text-lg text-medusa-text-secondary">
            Stratejiyi önce kurar, sonra sahaya indiririz. Her aşama ölçülür,
            her karar veriye dayanır.
          </p>
        </div>

        {/* --- İNTERAKTİF OMURGA VE MADDELER BÖLÜMÜ --- */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* 1. ANA OMURGA (Görünmezlik sorunu çözüldü: Dikey gradient hatası engellendi) */}
          <div className="hidden lg:block absolute left-1/2 -top-[4rem] bottom-0 w-[4px] -translate-x-1/2 z-0 pointer-events-none">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="spineFade"
                  gradientUnits="userSpaceOnUse"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ded8ff" stopOpacity="0" />
                  <stop offset="10%" stopColor="#ded8ff" stopOpacity="1" />
                  <stop offset="90%" stopColor="#ded8ff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ded8ff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line
                x1="2"
                y1="0"
                x2="2.01"
                y2="100%"
                stroke="url(#spineFade)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="space-y-4 lg:space-y-16 relative z-10">
            {workflowSteps.map((step, index) => {
              const isEven = index % 2 !== 0;

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col lg:flex-row items-center gap-4 lg:gap-[8rem] group ${isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* 2. SOLA KIVRILAN KOL (Her adımda renderlanır - Metin veya Görsel fark etmez) */}
                  <div className="hidden lg:block absolute right-[50%] top-[calc(50%-32px)] w-[4rem] h-[32px] z-0 pointer-events-none">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 64 32"
                      fill="none"
                    >
                      <defs>
                        <linearGradient
                          id={`fadeLeft-${step.id}`}
                          x1="100%"
                          y1="0%"
                          x2="0%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#ded8ff"
                            stopOpacity="1"
                          />
                          <stop
                            offset="100%"
                            stopColor="currentColor"
                            stopOpacity="0.1"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 64 0 Q 64 32 32 32 L 0 32"
                        stroke={`url(#fadeLeft-${step.id})`}
                        strokeWidth="1.5"
                        strokeDasharray="4 6"
                        strokeLinecap="round"
                        className="text-foreground dark:text-white"
                      />
                    </svg>
                  </div>

                  {/* 3. SAĞA KIVRILAN KOL (Her adımda renderlanır - Metin veya Görsel fark etmez) */}
                  <div className="hidden lg:block absolute left-[50%] top-[calc(50%-32px)] w-[4rem] h-[32px] z-0 pointer-events-none">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 64 32"
                      fill="none"
                    >
                      <defs>
                        <linearGradient
                          id={`fadeRight-${step.id}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#ded8ff"
                            stopOpacity="1"
                          />
                          <stop
                            offset="100%"
                            stopColor="currentColor"
                            stopOpacity="0.1"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 0 Q 0 32 32 32 L 64 32"
                        stroke={`url(#fadeRight-${step.id})`}
                        strokeWidth="1.5"
                        strokeDasharray="4 6"
                        strokeLinecap="round"
                        className="text-foreground dark:text-white"
                      />
                    </svg>
                  </div>

                 {/* --- GÖRSEL / VİDEO YER TUTUCU BÖLÜMÜ --- */}
                  <div className="w-full lg:w-[calc(50%-4rem)] z-10">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-foreground/10  bg-background/50  backdrop-blur-md shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-medusa-primary)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,var(--color-medusa-purple-light)_0%,transparent_50%)] opacity-20  transition-opacity duration-500 group-hover:opacity-40"></div>
                      <div className="absolute inset-4 flex flex-col gap-4">
                        
                        {/* Sahte Tarayıcı / Pencere Üst Barı */}
                        <div className="w-full h-8 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center px-4">
                          <div className="w-3 h-3 rounded-full bg-medusa-primary/80 mr-2"></div>
                          <div className="w-3 h-3 rounded-full bg-medusa-secondary/80 mr-2"></div>
                          <div className="w-3 h-3 rounded-full bg-medusa-purple-light/80"></div>
                        </div>

                        {/* Video İçerik Alanı */}
                        <div className="flex-1 rounded-xl border border-foreground/5 bg-background/40 flex items-center justify-center relative overflow-hidden">
                          
                          {/* YENİ: Optimize Edilmiş Video Bileşeni */}
                          <video
                            src={step.video} /* Data modelindeki video yolu (örn: '/videolar/adim1.mp4') */
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                          />

                          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-medusa-purple/10 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* --- METİN BÖLÜMÜ (Temiz, Arka Plansız) --- */}
                  <div className="w-full lg:w-[calc(50%-4rem)] z-10 flex flex-col items-start py-4">
                    <div className="relative z-10 flex flex-col items-start transition-all duration-500 group-hover:translate-x-2">
                      <span className="font-sans inline-block  rounded-full bg-medusa-purple/10 text-medusa-purple-light  text-xs font-bold uppercase tracking-widest mb-4">
                        {step.badge}
                      </span>

                      <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground  mb-4 transition-colors duration-300 group-hover:text-medusa-purple-light ">
                        {step.title}
                      </h3>

                      <p className="text-medusa-text-secondary  text-base md:text-lg font-sans leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
