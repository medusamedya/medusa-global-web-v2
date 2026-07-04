"use client";

import React from "react";
import { LineChart, Settings, Zap, TrendingUp } from "lucide-react";

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
          <div className="relative inline-flex overflow-hidden rounded-full p-[1px] mb-6 shadow-sm">
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-purple)_40%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_60%,var(--color-medusa-purple)_100%)] opacity-80" />
            <div className="relative z-10 inline-flex items-center justify-center w-full h-full rounded-full bg-medusa-base-dark/95 px-4 py-1.5 backdrop-blur-md">
              <span className="text-sm font-semibold tracking-wide text-white drop-shadow-md">
                Dijital Büyüme Metodolojimiz
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground dark:text-white tracking-tight">
            Markanızın büyüme yolculuğunu tek çatı altında kuruyoruz
          </h2>
          <p className="text-lg text-foreground/80 dark:text-white/70 leading-relaxed">
            Stratejiyi önce kurar, sonra sahaya indiririz. Her aşama ölçülür, her karar veriye dayanır.
          </p>
        </div>

        {/* --- SOLLU SAĞLI (ZIG-ZAG) BLOKLAR --- */}
        <div className="relative w-full max-w-6xl mx-auto">
          
          {/* NET VE KESKİN DİKEY KESİK ÇİZGİ (CSS border-dashed kalitesiyle) */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0 h-[calc(100%-2rem)] border-l-2 border-dashed border-medusa-purple/30 dark:border-white/10 -translate-x-1/2 z-0"></div>

          <div className="space-y-24 lg:space-y-32">
            {workflowSteps.map((step, index) => {
              const isEven = index % 2 !== 0; 

              return (
                <div 
                  key={step.id} 
                  className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 group ${isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  
                  {/* YATAY BAĞLANTI KESİK ÇİZGİSİ */}
                  <div className={`hidden lg:block absolute top-1/2 w-[calc(50%-4rem)] h-0 border-t-2 border-dashed border-medusa-purple/30 dark:border-white/10 -translate-y-1/2 z-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300 ${isEven ? 'right-[50%]' : 'left-[50%]'}`} />
                  
                  {/* Omurga üzerindeki aktif düğüm noktası */}
                  <div className={`hidden lg:block absolute top-1/2 w-3 h-3 rounded-full bg-medusa-purple dark:bg-medusa-spark shadow-[0_0_10px_var(--color-medusa-purple)] -translate-y-1/2 z-10 transition-all duration-300 group-hover:scale-125 ${isEven ? 'right-[50%] translate-x-1/2' : 'left-[50%] -translate-x-1/2'}`} />

                  {/* --- GÖRSEL YER TUTUCU BÖLÜMÜ --- */}
                  <div className="w-full lg:w-1/2 z-10">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-foreground/10 dark:border-white/10 bg-background/50 dark:bg-medusa-base-light/40 backdrop-blur-md shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-medusa-purple)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,var(--color-medusa-spark)_0%,transparent_50%)] opacity-20 dark:opacity-30 transition-opacity duration-500 group-hover:opacity-40"></div>
                      <div className="absolute inset-4 flex flex-col gap-4">
                        <div className="w-full h-8 rounded-lg bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 flex items-center px-4">
                           <div className="w-3 h-3 rounded-full bg-medusa-spark/80 mr-2"></div>
                           <div className="w-3 h-3 rounded-full bg-medusa-gold/80 mr-2"></div>
                           <div className="w-3 h-3 rounded-full bg-medusa-purple/80"></div>
                        </div>
                        <div className="flex-1 rounded-xl border border-foreground/5 dark:border-white/5 bg-background/40 dark:bg-background/20 flex items-center justify-center relative overflow-hidden">
                          <step.Icon className="w-16 h-16 text-medusa-purple dark:text-medusa-cream drop-shadow-lg transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-medusa-purple/10 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* --- ARKA PLAN RENK PLANLAMALI METİN BÖLÜMÜ (KART VE BORDER YOK) --- */}
                  <div className="w-full lg:w-1/2 z-10">
                    
                    {/* border ve padding-box sınıfları tamamen kaldırıldı. 
                      Sadece Case Studies'deki gibi yumuşak bir zemin ve radial-gradient geçişi eklendi.
                    */}
                    <div className="relative p-6 md:p-8 rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-[1.01]">
                      
                      {/* Arka Plan Glow Yansıması (Masaüstü ve hover durumunda canlanır) */}
                      <div className="absolute inset-0 bg-gradient-to-br from-medusa-purple/5 to-transparent dark:from-medusa-glow-primary/30 dark:to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      {/* İçerik Katmanı */}
                      <div className="relative z-10 flex flex-col items-start">
                        
                        {/* Badge Vurgusu */}
                        <span className="inline-block px-3 py-1 rounded-full bg-medusa-purple/10 text-medusa-purple dark:text-medusa-spark text-xs font-bold uppercase tracking-widest mb-4">
                          {step.badge}
                        </span>
                        
                        {/* Başlık (Font-Heading) */}
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground dark:text-white mb-4 transition-colors duration-300 group-hover:text-medusa-purple dark:group-hover:text-medusa-spark">
                          {step.title}
                        </h3>
                        
                        {/* Açıklama (Font-Sans) */}
                        <p className="text-foreground/80 dark:text-white/70 text-base md:text-lg font-sans leading-relaxed">
                          {step.description}
                        </p>
                        
                      </div>
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