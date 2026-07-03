"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- YARDIMCI BİLEŞEN: Manyetik Buton ---
const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

// --- YARDIMCI BİLEŞEN: Fosforlu Kalem Efekti (Highlight) ---
const HighlightText = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <span className="relative inline-block whitespace-nowrap">
    <span className="relative z-10 text-foreground dark:text-white font-semibold transition-colors duration-300">{text}</span>
    <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
      <motion.path
        d="M -2 80 Q 50 65 102 85"
        className="stroke-medusa-gold"
        strokeWidth="18"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      />
    </svg>
  </span>
);

// --- YARDIMCI BİLEŞEN: Üstünü Çizme Efekti (Strikethrough) ---
const StrikeText = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <span className="relative inline-block whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity duration-300">
    <span className="relative z-0 text-foreground/80 dark:text-white/80 italic transition-colors duration-300">{text}</span>
    <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
      <motion.path
        d="M -5 55 Q 30 35 60 60 T 105 45"
        className="stroke-medusa-purple"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      />
    </svg>
  </span>
);

export default function FinalCta() {
  return (
    <section className="relative w-full min-h-screen py-32 md:py-48 bg-background transition-colors duration-500 overflow-hidden flex flex-col justify-center">
      
      {/* Arka Plan Ortam Işığı (Medusa Glow - Bu mantık diğer sectionlara da taşınacak) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-medusa-purple/5 dark:bg-medusa-glow-primary/20 blur-[100px] rounded-full pointer-events-none transition-colors duration-700" />

      {/* TÜM İÇERİK MERKEZE HİZALANDI (flex-col, items-center, text-center) */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 w-full flex flex-col items-center text-center">
        
        {/* --- İMZA ANİMASYONLU BADGE (Premium Standart) --- */}
        <div className="relative inline-flex overflow-hidden rounded-full p-[1px] mb-12 shadow-sm">
          {/* Genişletilmiş Mor, İnce Spark Işığı */}
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-purple)_40%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_60%,var(--color-medusa-purple)_100%)] opacity-80" />
          <div className="relative z-10 inline-flex items-center justify-center w-full h-full rounded-full bg-medusa-base-dark/95 px-5 py-1.5 backdrop-blur-md">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.15em] text-white uppercase drop-shadow-md">
              Manifesto
            </span>
          </div>
        </div>

        {/* === KİNETİK MANİFESTO === */}
        <div className="flex flex-col items-center gap-10 md:gap-14 text-[clamp(2rem,5vw,4.5rem)] font-medium tracking-tight leading-[1.1] mb-24 w-full text-foreground dark:text-white">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HighlightText text="Başarı hikayesi" delay={0.4} /> anlatmıyoruz.
            <span className="text-2xl md:text-4xl mt-6 block">
              <StrikeText text="Çoğu yalandır." delay={1.2} />
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HighlightText text="Veriyi okuruz," delay={0.6} /> <StrikeText text="sezgiyi değil." delay={1.4} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HighlightText text="Markayı kurarız," delay={0.8} /> <StrikeText text="hayal değil." delay={1.6} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <HighlightText text="İş ortağı oluruz," delay={1.0} /> <StrikeText text="satıcı değil." delay={1.8} />
          </motion.div>

        </div>

        {/* === ALT AÇIKLAMA VE BUTON (Final Vuruş - Merkeze Hizalı) === */}
        <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-10 border-t border-foreground/10 dark:border-white/10 pt-12 transition-colors duration-500">
          
          {/* Manifesto Alt Metni */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2.0 }}
            className="text-foreground/70 dark:text-white/70 text-[16px] md:text-[20px] font-light leading-relaxed italic transition-colors duration-300"
          >
            Kendi dört dijital ürünümüzü kurarken öğrendiklerimiz var. <br className="hidden sm:block" />
            <strong className="text-foreground dark:text-white font-medium transition-colors duration-300">O dersleri sizin markanıza taşıyoruz.</strong>
          </motion.div>

<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 2.2, type: "spring" }}
>
  <MagneticButton>
    {/* Dış Çerçeve (Dönen Işık Bandı) */}
    <div className="relative inline-flex overflow-hidden rounded-full p-[2px] shadow-lg group cursor-pointer">
      
      {/* Animasyonlu Dönen Kenarlık (İmza Efektimiz) */}
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_100%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Buton Zemin ve İçerik */}
      <button className="relative z-10 flex items-center justify-center gap-4 bg-background dark:bg-medusa-base-dark text-foreground dark:text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
        
        <span className="relative z-10 tracking-wide">Birlikte Değerlendirelim</span>
        
        {/* İkon Kutusu (Hover ile rotate-45) */}
        <div className="w-10 h-10 rounded-full bg-medusa-purple/10 dark:bg-medusa-spark/20 flex items-center justify-center group-hover:bg-medusa-spark group-hover:rotate-45 transition-all duration-300">
          <ArrowRight className="w-5 h-5 text-medusa-purple dark:text-medusa-spark group-hover:text-medusa-base-dark transition-colors" />
        </div>
        
      </button>
    </div>
  </MagneticButton>
</motion.div>
          
        </div>
      </div>

      {/* Shimmer (Parlama) Animasyonu İçin Global CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />

    </section>
  );
}