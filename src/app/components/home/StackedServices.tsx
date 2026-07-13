"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";
import Badge from "../ui/Badge";

const stackData = [
  {
    step: "HAT 01",
    category: "BRANDING",
    title: "Kimlik İnşası",
    subtitle: "Bir marka; hatırlanan sesi, tanınan yüzü ve sarsılmaz duruşuyla vardır. Biz bu üçünü kurarız.",
    items: [
      "Kurumsal kimlik inşaası",
      "Marka konumlandırma",
      "Marka yönetimi ve süreklilik",
      "Dijital sistem kurulumu (Web Site)",
      "Grafik & katalog çalışmaları",
    ],
  },
  {
    step: "HAT 02",
    category: "DİJİTAL PAZARLAMA",
    title: "Talep Yaratımı",
    subtitle: "Doğru mesajı, doğru kişiye, doğru anda ulaştırmak tesadüf değil; kurulan bir sistemdir.",
    items: [
      "Sosyal medya pazarlaması",
      "Google Ads & Meta reklam kampanyaları",
      "SEO & içerik pazarlaması",
      "Dönüşüm odaklı e-ticaret siteleri",
      "Veriye dayalı pazarlama stratejisi",
    ],
  },
  {
    step: "HAT 03",
    category: "PRODÜKSİYON",
    title: "Görsel Anlatı",
    subtitle: "Bir markayı akılda kalıcı yapan, anlattığı hikâyedir. Biz o hikâyeyi görüntüye çeviririz.",
    items: [
      "Reklam & tanıtım filmleri",
      "Sosyal Medya içerik çekimleri",
      "Kurumsal & ekip çekimleri",
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
          `step${index}`,
        );

        tl.to(
          card,
          {
            yPercent: 0,
            ease: "none",
          },
          `step${index}`,
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
    <div>
    <section
      ref={sectionRef}
      className="relative w-full py-12 md:py-16 h-screen bg-background transition-colors duration-500 flex flex-col justify-center"
    >
      <div className="max-w-[1200px] w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* --- ÜST KISIM (MERKEZE HİZALI HİYERARŞİ) --- */}
        {/* DİKKAT: Glow efektinin bu alana merkezlenmesi için kapsayıcıya 'relative' eklendi */}
        <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto mb-8 md:mb-16 space-y-6">
          {/* YENİ: Arka Plan Ortam Işığı (Medusa Glow) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-medusa-primary/5  blur-[100px] rounded-full pointer-events-none transition-colors duration-700 -z-10" />

          <Badge text="Hızlandırma" className="mb-4" />

          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Hızlandırma, üç hatta birden çalışır.
          </h2>

          {/* Açıklama Metni */}
          <p className="font-sans  text-normal md:text-lg text-medusa-text-secondary">
            Bir markayı büyütmek için üç şeyin doğru olması gerekir: kim
            olduğunuzu doğru söylemek, doğru kişiye söylemek, doğru içerikle
            söylemek. Üçü ayrı ekiplerde değil, aynı çatı altında beraber
            çalışan ekiplerimizle sağlanıyor.
          </p>
        </div>

        {/* GSAP STACKING CARDS KAPSAYICISI */}
        <div className="relative w-full h-[55vh] md:h-[50vh] max-w-[1000px] mx-auto perspective-[2000px]">
          {/* Sadece kartların kendi alanında taşmaları gizliyoruz */}
          <div
            className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none"
            style={{ zIndex: 0 }}
          />

          {stackData.map((data, index) => (
            <div
              key={index}
              className="stacked-card absolute top-0 left-0 w-full h-full transform-origin-top will-change-transform group"
              style={{ zIndex: index + 10 }}
            >
              {/* YENİ: Görseldeki gibi Animasyonsuz, Premium Gradient Border (Dış Çerçeve) */}
              <div className="relative w-full h-full rounded-[32px] p-[1px] bg-gradient-to-br from-white via-white/30 to-[#853ec7] shadow-2xl">
                {/* YENİ: Kart İç Zemini (Mat Koyu Mor/Gri Gradyan) ve İç Border (Glassmorphism hissiyatı) */}
                <div className="relative z-10 w-full h-full bg-gradient-to-br from-[#1a1726] to-[#2a233c] border border-white/10 rounded-[calc(2rem-1.5px)] p-8 sm:p-12 flex flex-col justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">
                  {/* Kart Üst (Header) - İÇERİĞE DOKUNULMADI */}
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-foreground/10 dark:border-white/10 pb-6 mb-6 gap-4">
                    <div>
                      <p className="font-sans text-[13px] font-mono tracking-widest text-medusa-purple-light font-bold mb-3">
                        {data.step} / {data.category}
                      </p>
                      <h3 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground dark:text-white mb-2 tracking-tight transition-colors duration-300">
                        {data.title}
                      </h3>
                      <p className="font-sans text-medusa-text-secondary   italic text-lg font-light transition-colors duration-300">
                        {data.subtitle}
                      </p>
                    </div>
                  
                  </div>

                  {/* Kart Listesi */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {data.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 group/item cursor-default"
                      >
                        <div className="w-6 h-6 flex items-center justify-center  ">
                          <img
                            src="/Sarı_Medusa_Bullet.png"
                            alt="Medusa Bullet"
                            className="w-full h-full p-0.5 object-contain "
                          />
                        </div>
                        <span className="font-sans text-[15px] font-medium text-medusa-text-secondary group-hover/item:text-white transition-colors duration-300">
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

      {/* SAĞ TARAFTAKİ SCROLL İNDİKATÖRÜ (VISUAL TRACKER) - Mobilde Gizli */}
      <div className="absolute right-3 md:right-40 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4 z-50">
        <span className="font-sans text-[16px] text-medusa-text-secondary tracking-widest rotate-90 mb-6 opacity-60 transition-colors duration-300">
          KAYDIR
        </span>
        <div className="relative w-1 h-[25vh] bg-medusa-border/20 rounded-full overflow-hidden transition-colors duration-300">
          <div
            ref={progressRef}
            className="absolute top-0 left-0 w-full h-0 bg-medusa-purple-light shadow-[0_0_15px_var(--color-medusa-secondary)] rounded-full"
          />
        </div>
      </div>
    </section>
    </div>
  );
}
