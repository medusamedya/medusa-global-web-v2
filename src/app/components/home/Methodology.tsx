"use client";

import React from "react";
import { LineChart, Settings, Zap, TrendingUp } from "lucide-react";

// Yolculuk adımlarının veri yapısı
const workflowSteps = [
  {
    id: 1,
    badge: "01 / Analiz",
    title: "Dijital Sağlık Kontrolü",
    description: "Web sitenizi, sosyal medyanızı ve reklamlarınızı bağımsız olarak analiz eder, 14 günde raporlarız. Bir sonraki adıma nereden başlayacağınızı birlikte görürüz.",
    Icon: LineChart,
  },
  {
    id: 2,
    badge: "02 / Strateji",
    title: "Danışmanlık",
    description: "İş süreçlerinizdeki yaygın sorunları operasyonel verimlilik, finansal yönetim ve pazarlama stratejisi başlıklarında çevik çözümlerle ele alırız. Tedarikçi değil, akıl veren bir ortak gibi çalışırız.",
    Icon: Settings,
  },
  {
    id: 3,
    badge: "03 / Uygulama",
    title: "Hızlandırma",
    description: "Stratejiyi içerik, prodüksiyon ve dijital sistemlerle sahaya indiririz. Süreçlerde kazanılan zaman ve ulaşılan ölçek, her adımda raporlanır.",
    Icon: Zap,
  },
  {
    id: 4,
    badge: "04 / Ölçek",
    title: "Yatırım",
    description: "Sermaye vermekle yetinmeyiz; inandığımız ticaretlerde ortak yönetim ve strateji desteğiyle uzun vadeli büyümeyi birlikte kurarız.",
    Icon: TrendingUp,
  },
];

export default function Methodology() {
  return (
    <section className="relative w-full py-24 bg-background transition-colors duration-500 overflow-hidden">
     
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- ÜST BAŞLIK BÖLÜMÜ --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 space-y-6">
          {/* Badge */}
          {/* Animasyonlu Gradient Border Badge */}
<div className="relative inline-flex overflow-hidden rounded-full p-[1px] mb-6 shadow-sm">
  {/* Sürekli dönen arka plan (Mor ağırlıklı, ince Spark geçişi) */}
  <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-purple)_40%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_60%,var(--color-medusa-purple)_100%)] opacity-80" />
  
  {/* İç Zemin ve Metin */}
  <div className="relative z-10 inline-flex items-center justify-center w-full h-full rounded-full bg-medusa-base-dark/95 px-4 py-1.5 backdrop-blur-md">
    <span className="text-sm font-semibold tracking-wide text-white drop-shadow-md">
      Dijital Büyüme Metodolojimiz
    </span>
  </div>
</div>
          
          {/* H2 Başlık */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground dark:text-white tracking-tight">
            Markanızın büyüme yolculuğunu tek çatı altında kuruyoruz
          </h2>
          
          {/* Alt Metin */}
          <p className="text-lg text-foreground/80 dark:text-white/70 leading-relaxed">
            Stratejiyi önce kurar, sonra sahaya indiririz. Her aşama ölçülür, her karar veriye dayanır.
          </p>
        </div>

        {/* --- SOLLU SAĞLI (ZIG-ZAG) BLOKLAR --- */}
        <div className="relative w-full max-w-6xl mx-auto">
          
          {/* Merkezdeki dikey kesik çizgi (Sadece masaüstünde görünür) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-medusa-purple/50 via-medusa-gold/30 to-transparent -translate-x-1/2 border-l border-dashed border-medusa-gold/40"></div>

          <div className="space-y-24 lg:space-y-32">
            {workflowSteps.map((step, index) => {
              const isEven = index % 2 !== 0; // 0 ve 2 sol, 1 ve 3 sağ dizilimi için

              return (
                <div 
                  key={step.id} 
                  className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Daldan Metne giden yatay bağlantı çizgisi (Merkezden kutuya) */}
                  <div className={`hidden lg:block absolute top-1/2 w-[calc(50%-3rem)] h-px border-t border-dashed border-medusa-gold/40 -translate-y-1/2 ${isEven ? 'right-[50%]' : 'left-[50%]'}`}></div>
                  
                  {/* GÖRSEL YER TUTUCU (Placeholder) BÖLÜMÜ */}
                  <div className="w-full lg:w-1/2 group">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-foreground/10 dark:border-white/10 bg-gradient-to-br from-medusa-base-light/80 to-background backdrop-blur-md shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                      
                      {/* Dashboard Mockup İllüzyonu (Gerçek görseller gelene kadar teknolojik hissiyat) */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-medusa-purple)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,var(--color-medusa-spark)_0%,transparent_50%)] opacity-20 dark:opacity-30 transition-opacity duration-500 group-hover:opacity-40"></div>
                      
                      {/* Sahte UI Elementleri */}
                      <div className="absolute inset-4 flex flex-col gap-4">
                        {/* Üst Bar */}
                        <div className="w-full h-8 rounded-lg bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 flex items-center px-4">
                           <div className="w-3 h-3 rounded-full bg-medusa-spark/80 mr-2"></div>
                           <div className="w-3 h-3 rounded-full bg-medusa-gold/80 mr-2"></div>
                           <div className="w-3 h-3 rounded-full bg-medusa-purple/80"></div>
                        </div>
                        {/* Merkez İkon ve Grafik Hissi */}
                        <div className="flex-1 rounded-xl border border-foreground/5 dark:border-white/5 bg-background/50 flex items-center justify-center relative overflow-hidden">
                          <step.Icon className="w-16 h-16 text-medusa-purple dark:text-medusa-cream drop-shadow-lg transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                          {/* İnce teknolojik çizgiler */}
                          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-medusa-purple/10 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* METİN BÖLÜMÜ */}
                  <div className="w-full lg:w-1/2 flex flex-col space-y-5 relative z-10">
                    <span className="text-sm font-bold text-medusa-spark uppercase tracking-widest">
                      {step.badge}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-foreground/80 dark:text-white/70 text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
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