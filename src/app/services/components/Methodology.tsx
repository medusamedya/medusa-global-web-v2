"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Badge from "@/app/components/ui/Badge"; // Badge yolunu kendi projenize göre düzeltin

const workflowSteps = [
  {
    id: 1,
    badge: "01 / TEŞHİS",
    title: "Sağlık Kontrolü",
    description:
      "Dijital varlıklarınızı dışarıdan, bağımsız bir gözle inceler; 14 günde net bir karne çıkarırız. Nerede durduğunuzu görmeden nereye gideceğinize karar veremezsiniz, bu yüzden her iş buradan başlar.",
    image: "/methodology/dijitalkarne_siyah.png",
    items: [
      "Web sitesi teknik performans denetimi (Audit)",
      "Sosyal medya ve içerik stratejisi analizi",
      "Reklam kampanyalarında ROAS ve bütçe verimliliği analizi",
      "Öncelik sırasına dizilmiş 14 günlük eylem planı",
    ],
  },
  {
    id: 2,
    badge: "02 / STRATEJİ",
    title: "Danışmanlık",
    description:
      "İş süreçlerinizdeki tıkanıklıkları çevik çözümlerle açarız. Fatura kesen bir tedarikçi değil; aynı masada oturup kararı sizinle birlikte veren bir ortak gibi çalışırız.",
    image: "/methodology/danışmanlık_siyah.png",
    items: [
      "Pazar, rakip ve hedef kitle araştırması",
      "Kullanıcı yolculuğu (user journey) haritalandırması",
      "Operasyonel verimlilik ve finansal yönetim analizi",
      "Konumlandırma ve pazarlama stratejisi kurulumu",
    ],
  },
  {
    id: 3,
    badge: "03 / UYGULAMA",
    title: "Hızlandırma",
    description:
      "Kâğıt üstündeki stratejiyi sahada çalışan bir sisteme çeviririz. Markanızı dağınık ekiplere bölmeden; strateji, içerik ve prodüksiyonu tek çatı altında yürütürüz.",
    image: "/methodology/hızlandırma_beyaz.png",
    items: [
      "Stratejiyi içerik, prodüksiyon ve dijital sistemlerle sahaya indirme",
      "Branding, dijital pazarlama ve prodüksiyonun tek elden yürütülmesi",
      "Süreçlerde zaman ve kaynak optimizasyonu",
      "Her adımda şeffaf ve ölçülebilir performans raporlaması",
    ],
  },
  {
    id: 4,
    badge: "04 / ÖLÇEK",
    title: "Yatırım",
    description:
      "İnandığımız işe yalnızca sermaye değil; ortak yönetim ve strateji de koyarız. Riski paylaşmadan büyümeye ortak olunmaz, aynı gemiye biniyoruz.",
    image: "/methodology/yatırım_beyaz.png",
    items: [
      "Markaya uygun, ölçeklenebilir yatırım modelleri",
      "Akıllı sermaye yönetimi ve kaynak tahsisi",
      "Yeni pazarlara giriş ve genişleme stratejisi",
      "Uzun vadeli ortaklık ve operasyonel destek",
    ],
  },
];

export default function Methodology() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".stacked-panel");
      const intro = document.querySelector(".intro-panel");

      // 1. Kart başlangıç ayarları (filter: none ile blur'u kesin olarak eziyoruz)
      gsap.set(panels[0], { yPercent: 60, opacity: 0.6, filter: "none" }); 
      
      // DİKKAT: Buradaki yPercent: 10 olmuştu, tekrar 100 yaptık.
      gsap.set(panels.slice(1), { yPercent: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${panels.length * 100}%`,
          pin: true,
          scrub: 1,
        },
      });

      panels.forEach((panel, index) => {
        const prevElement = index === 0 ? intro : panels[index - 1];

        // Önceki eleman (Intro veya alt kart) kaybolup geri çekiliyor
        tl.to(
          prevElement,
          {
            scale: 0.9,
            opacity: 0,
            yPercent: -15,
            ease: "none",
          },
          `step${index}`,
        );

        // Yeni panel yukarı çıkıyor (Yine filter: none ile sağlama alıyoruz)
        tl.to(
          panel,
          {
            yPercent: 0,
            opacity: 1,
            filter: "none", 
            ease: "none",
          },
          `step${index}`,
        );
      });

      gsap.to(progressRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${panels.length * 100}%`,
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100dvh] bg-background text-foreground overflow-hidden"
    >
      {/* =========================================
          1. GİRİŞ EKRANI (INTRO LAYER)
          ========================================= */}
      {/* h-full yerine ekranın sadece üst kısmında yer kaplaması için pt-32 verdik */}
      <div className="intro-panel absolute top-0 left-0 w-full pt-24 sm:pt-32 flex flex-col items-center text-center px-6 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] bg-medusa-primary/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <Badge text="Dijital Büyüme Metodolojimiz" className="mb-6" />
        <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-wide">
          Markanızın büyüme yolculuğunu <br className="hidden md:block" />
          tek çatı altında kuruyoruz
        </h2>
        <p className="font-sans  text-normal md:text-lg text-medusa-text-secondary">
          Stratejiyi önce kurar, sonra sahaya indiririz. Her aşama ölçülür, her
          karar veriye dayanır.
        </p>
      </div>

      {/* =========================================
          2. TAM EKRAN KARTLAR (STACKED PANELS)
          ========================================= */}
      {workflowSteps.map((step, index) => (
        <div
          key={step.id}
          style={{ zIndex: (index + 1) * 10 }}
          className="stacked-panel absolute inset-0 w-full h-full bg-medusa-surface-1 rounded-t-[3rem] sm:rounded-t-[4rem] border-t border-medusa-border/20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center pt-24 pb-12 px-4 sm:px-8"
        >
          {/* İçerik Konteyneri */}
          <div className="w-full max-w-6xl flex flex-col items-center h-full">
            {/* Üst Kısım: Rozet ve Başlık (Merkeze Hizalı) */}
            <div className="flex flex-col items-center text-center mb-8">
              <Badge text={step.badge} className="mb-4 " />
              <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                {step.title}
              </h2>
            </div>

            {/* Alt Kısım: 2 Kolonlu Yapı (Görsel+Metin ve Liste) */}
            <div className="w-full flex flex-col md:flex-row gap-8 lg:gap-16 items-center md:items-start text-left">
              {/* Sol Kolon: Görsel ve Açıklaması */}
              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-[1.5rem] overflow-hidden border border-medusa-border/20 shadow-2xl p-1 bg-medusa-surface-1/50 backdrop-blur-sm group">
                  <div className="relative w-full h-full rounded-[calc(1.5rem-4px)] overflow-hidden bg-[#0A0314]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover filter transition-transform duration-1000 group-hover:scale-105"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
                {/* Görsel Altı Açıklama */}
                <p className="font-sans text-medusa-text-secondary text-sm sm:text-base leading-relaxed font-light pl-1">
                  {step.description}
                </p>
              </div>

              {/* Sağ Kolon: Maddeler (Bullet List) */}
              <div className="w-full md:w-1/2 flex flex-col justify-center h-full md:pt-4">
                <ul className="flex flex-col gap-5 sm:gap-6">
                  {step.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 group/item cursor-default"
                    >
                      {/* Custom Bullet İkonu */}
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center mt-0.5">
                        <Image
                          src="/Sarı_Medusa_Bullet.webp"
                          alt="Bullet"
                          width={24}
                          height={24}
                          className="object-contain filter opacity-80 group-hover/item:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <span className="font-sans text-base md:text-[17px] font-medium text-medusa-text-secondary group-hover/item:text-foreground transition-colors duration-300 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* =========================================
          3. SAĞ TARAFTAKİ SCROLL İNDİKATÖRÜ
          ========================================= */}
      <div className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-[999]">
        <span className="font-sans text-[12px] font-mono text-medusa-text-secondary tracking-widest rotate-90 mb-8 opacity-60">
          KAYDIR
        </span>
        <div className="relative w-[3px] h-[25vh] bg-medusa-border/30 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="absolute top-0 left-0 w-full h-0 bg-medusa-purple-light shadow-[0_0_10px_var(--color-medusa-purple-light)] rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
