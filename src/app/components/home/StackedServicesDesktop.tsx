"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Badge from "../ui/Badge";

// Props tipini belirliyoruz
interface StackData {
  step: string;
  category: string;
  title: string;
  subtitle: string;
  items: string[];
}

export default function StackedServicesDesktop({ data }: { data: StackData[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".stacked-card");
      gsap.set(cards.slice(1), { yPercent: 120 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 1,
          pinSpacing: true, 
        },
      });

      cards.forEach((card: HTMLElement, index: number) => {
        if (index === 0) return;
        tl.to(
          cards[index - 1],
          { scale: 0.92, opacity: 0.25, yPercent: -10, ease: "none" },
          `step${index}`
        );
        tl.to(card, { yPercent: 0, ease: "none" }, `step${index}`);
      });

      gsap.to(progressRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen flex flex-col justify-center">
      {/* İÇERİK: Senin kodunun aynısı (Sadece stackData yerine data kullan) */}
      <div className="max-w-[1200px] w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto mb-10 space-y-1">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-medusa-primary/5 blur-[100px] rounded-full pointer-events-none transition-colors duration-700 -z-10" />
          <Badge text="Hızlandırma" className="mb-4" />
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-wide">
            Hızlandırma, üç hatta birden çalışır.
          </h2>
          <p className="font-sans text-normal md:text-lg text-medusa-text-secondary">
            Bir markayı büyütmek için üç şeyin doğru olması gerekir: kim
            olduğunuzu doğru söylemek, doğru kişiye söylemek, doğru içerikle
            söylemek. Üçü ayrı ekiplerde değil, aynı çatı altında beraber
            çalışan ekiplerimizle sağlanıyor.
          </p>
        </div>

        <div className="relative w-full h-[55vh] md:h-[50vh] max-w-[1000px] mx-auto perspective-[2000px]">
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none" style={{ zIndex: 0 }} />
          {data.map((item, index) => (
            <div key={index} className="stacked-card absolute top-0 left-0 w-full h-full transform-origin-top will-change-transform group" style={{ zIndex: index + 10 }}>
              <div className="relative w-full h-full rounded-[32px] p-[1px] bg-gradient-to-br from-white via-white/30 to-[#853ec7] shadow-2xl">
                <div className="relative z-10 w-full h-full bg-gradient-to-br from-[#1a1726] to-[#2a233c] border border-white/10 rounded-[calc(2rem-1.5px)] p-8 sm:p-12 flex flex-col justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">
                  
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-foreground/10 dark:border-white/10 pb-6 mb-6 gap-4">
                    <div>
                      <p className="font-sans text-[13px] font-mono tracking-widest text-medusa-purple-light font-bold mb-3">
                        {item.step} / {item.category}
                      </p>
                      <h3 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground dark:text-white mb-2 tracking-tight transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="font-sans text-medusa-text-secondary italic text-lg font-light transition-colors duration-300">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex items-center gap-4 group/item cursor-default">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <img src="/Sarı_Medusa_Bullet.png" alt="Medusa Bullet" className="w-full h-full p-0.5 object-contain" />
                        </div>
                        <span className="font-sans text-lg font-medium text-medusa-text-muted group-hover/item:text-white transition-colors duration-300">
                          {listItem}
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

      <div className="absolute right-3 md:right-40 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-50">
        <span className="font-sans text-[16px] text-medusa-text-secondary tracking-widest rotate-90 mb-6 opacity-60 transition-colors duration-300">KAYDIR</span>
        <div className="relative w-1 h-[25vh] bg-medusa-border/20 rounded-full overflow-hidden transition-colors duration-300">
          <div ref={progressRef} className="absolute top-0 left-0 w-full h-0 bg-medusa-purple-light shadow-[0_0_15px_var(--color-medusa-secondary)] rounded-full" />
        </div>
      </div>
    </section>
  );
}