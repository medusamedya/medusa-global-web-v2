"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

const stackData = [
  {
    step: "HAT 01",
    category: "BRANDING",
    title: "Branding",
    subtitle: "Markanızın sesi, görüntüsü, duruşu.",
    items: [
      "Kurumsal kimlik & logo tasarımı",
      "Marka konumlandırma",
      "Marka yönetimi",
      "Grafik & katalog çalışmaları",
      "Web sitesi tasarımı",
    ],
  },
  {
    step: "HAT 02",
    category: "DİJİTAL PAZARLAMA",
    title: "Dijital Pazarlama",
    subtitle: "Doğru kişiye ulaşmanın yolu.",
    items: [
      "Sosyal medya pazarlaması",
      "Google Ads & Meta reklam kampanyaları",
      "SEO & İçerik pazarlaması",
      "Dijital pazarlama stratejileri",
      "E-ticaret tabanlı web siteleri",
    ],
  },
  {
    step: "HAT 03",
    category: "PRODÜKSİYON",
    title: "Prodüksiyon",
    subtitle: "Markanızın görüntüsü, hikayesi.",
    items: [
      "Reklam & tanıtım filmleri",
      "Kurumsal & ekip çekimleri",
      "Belgesel & film prodüksiyonu",
      "Ürün çekimleri",
      "Influencer & etkinlik çekimleri",
    ],
  },
];

export default function StackedServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".stacked-card");

      // 1. kart dışındakileri %120 aşağıya (tamamen görünmez alana) itiyoruz.
      gsap.set(cards.slice(1), { yPercent: 120 });

      // Tüm section'ı ekrana kilitliyoruz (PIN)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", 
          // GARANTİLİ KİLİT SÜRESİ: Section yüksekliğinin %250'si kadar scroll edilene kadar ekran donar!
          end: "+=250%", 
          pin: true, 
          scrub: 1, 
          pinSpacing: true, // Altındaki sectionların üstüne binmesini engeller
        },
      });

      // Kartların üst üste binme animasyonu
      cards.forEach((card: HTMLElement, index: number) => {
        if (index === 0) return;

        tl.to(
          cards[index - 1],
          {
            scale: 0.92,
            opacity: 0.25, 
            yPercent: -10,
            ease: "none",
          },
          `step${index}`
        );

        tl.to(
          card,
          {
            yPercent: 0,
            ease: "none",
          },
          `step${index}`
        );
      });

      // Sağdaki Scroll Progress Bar Animasyonu
      gsap.to(progressRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%", // Timeline ile aynı süre
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    // transition-colors ile çift temaya uyum sağlayan kapsayıcı
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen bg-background transition-colors duration-500 flex flex-col justify-center"
    >
      <div className="max-w-[1200px] w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* --- ÜST KISIM (MERKEZE HİZALI HİYERARŞİ) --- */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 space-y-6">
          
          {/* YENİ STANDART: Mor Ağırlıklı Animasyonlu Badge */}
          <div className="relative inline-flex overflow-hidden rounded-full p-[1px] shadow-sm">
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-purple)_40%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_60%,var(--color-medusa-purple)_100%)] opacity-80" />
            
            <div className="relative z-10 inline-flex items-center justify-center w-full h-full rounded-full bg-medusa-base-dark/95 px-5 py-1.5 backdrop-blur-md">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.15em] text-white uppercase drop-shadow-md">
                Hızlandırma
              </span>
            </div>
          </div>

          {/* Başlık */}
          <h2 className="text-[clamp(2.2rem,4vw,4rem)] font-medium leading-[1.1] tracking-tight text-foreground dark:text-white transition-colors duration-300">
            <span className="text-medusa-purple font-extrabold drop-shadow-sm">Hızlandırma,</span> üç hatta birden çalışır.
          </h2>

          {/* Açıklama Metni */}
          <p className="text-foreground/80 dark:text-white/80 text-[16px] sm:text-[18px] leading-relaxed font-light transition-colors duration-300 max-w-2xl">
            Bir markayı büyütmek için üç şeyin doğru olması gerekir:{" "}
            <strong className="font-semibold text-medusa-purple dark:text-medusa-spark">
              kim olduğunuzu doğru söylemek, doğru kişiye söylemek, doğru içerikle söylemek.
            </strong>{" "}
            Üçü ayrı ekiplerde değil, aynı çatı altında beraber çalışan ekiplerimizle sağlanıyor.
          </p>
          
        </div>

        {/* GSAP STACKING CARDS KAPSAYICISI */}
        <div className="relative w-full h-[55vh] md:h-[50vh] max-w-[1000px] mx-auto perspective-[2000px]">
          {/* Sadece kartların kendi alanında taşmaları gizliyoruz */}
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none" style={{ zIndex: 0 }} />
          
          {stackData.map((data, index) => (
            <div
              key={index}
              className="stacked-card absolute top-0 left-0 w-full h-full transform-origin-top will-change-transform group"
              style={{ zIndex: index + 10 }}
            >
              {/* Kartlar İçin Animasyonlu Kurumsal Border */}
              <div className="relative w-full h-full rounded-[2rem] p-[2px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(92,6,140,0.15)] transition-shadow duration-500">
                
                {/* Dönen Border Katmanı */}
                <span className="absolute inset-[-200%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-spark)_25%,var(--color-medusa-base-dark)_50%,var(--color-medusa-purple)_100%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Kart İçeriği (Maske Görevi Görür) */}
                <div className="relative z-10 w-full h-full bg-background/95 dark:bg-[#08020F]/95 backdrop-blur-3xl rounded-[calc(2rem-2px)] p-8 sm:p-12 transition-colors duration-500 flex flex-col justify-center">
                  
                  {/* Kart Üst (Header) */}
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-foreground/10 dark:border-white/10 pb-6 mb-6 gap-4">
                    <div>
                      <p className="text-[13px] font-mono tracking-widest text-medusa-gold font-bold mb-3">
                        {data.step} / {data.category}
                      </p>
                      <h3 className="text-3xl sm:text-4xl font-semibold text-foreground dark:text-white mb-2 tracking-tight transition-colors duration-300">
                        {data.title}
                      </h3>
                      <p className="text-foreground/70 dark:text-white/70 italic text-lg font-light transition-colors duration-300">
                        {data.subtitle}
                      </p>
                    </div>
                    {/* Arka Plan Numarası (Filigran) */}
                    <div className="hidden sm:block text-7xl font-bold text-foreground/5 dark:text-white/5 leading-none select-none transition-colors duration-300">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Kart Listesi */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {data.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-4 group/item cursor-default">
                        {/* Check Icon Çerçevesi */}
                        <div className="w-6 h-6 rounded-full bg-background dark:bg-transparent border border-foreground/20 dark:border-white/20 flex items-center justify-center group-hover/item:border-medusa-spark group-hover/item:bg-medusa-spark transition-all duration-300 shadow-sm">
                          <CheckCircle2 className="w-3.5 h-3.5 text-foreground/50 dark:text-white/50 group-hover/item:text-medusa-base-dark group-hover/item:opacity-100 transition-all" />
                        </div>
                        <span className="text-[15px] font-medium text-foreground/80 dark:text-white/80 group-hover/item:opacity-100 group-hover/item:text-medusa-purple dark:group-hover/item:text-medusa-spark transition-all duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* SAĞ TARAFTAKİ SCROLL İNDİKATÖRÜ (VISUAL TRACKER) */}
      <div className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-50">
        <span className="text-[10px] font-mono text-foreground dark:text-white tracking-widest rotate-90 mb-6 opacity-60 transition-colors duration-300">KAYDIR</span>
        <div className="relative w-1 h-[25vh] bg-foreground/10 dark:bg-white/10 rounded-full overflow-hidden transition-colors duration-300">
          <div ref={progressRef} className="absolute top-0 left-0 w-full h-0 bg-medusa-spark shadow-[0_0_15px_var(--color-medusa-spark)] rounded-full" />
        </div>
      </div>
    </section>
  );
}