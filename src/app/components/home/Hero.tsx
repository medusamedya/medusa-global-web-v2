"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressCircleRef = useRef<SVGCircleElement>(null);
  
  // Sayaç animasyonu
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const controls = animate(count, 25, { duration: 2, ease: "easeOut", delay: 0.5 });
    
    // 1. VİDEO UZATMA TAKTİĞİ: Hızı %60'a düşürerek süreyi uzatıyoruz ve sessiz başlatıyoruz
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.playbackRate = 0.6; 
    }

    // 2. GSAP SCROLL-JACKING (KAYDIRMA KİLİDİ VE İNDİKATÖR)
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Çemberi 100 birim boşluktan (tamamen gizli) 0 birim boşluğa (tamamen dolu) çizer
      gsap.to(progressCircleRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=120%", // Kullanıcı section boyunun %120'si kadar scroll yapana kadar ekran donar
          pin: true,
          scrub: 1, // Scroll hızıyla animasyon hızını eşitler
          pinSpacing: true, // Kilitleme bitince alt section'ın (Services) yumuşakça gelmesini sağlar
        }
      });
    }, heroRef);

    return () => {
      controls.stop();
      ctx.revert();
    };
  }, [count]);

  return (
    // ref={heroRef} ile tüm section'ı GSAP'in kontrolüne (Pin) veriyoruz.
    <section ref={heroRef} className="relative w-full min-h-screen bg-[#05010A] flex flex-col items-center justify-center overflow-hidden z-0">
      
      {/* =========================================
          1. SİNEMATİK VİDEO ARKA PLANI
          ========================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80 mix-blend-screen"
        >
          <source 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Medusa Global Renk Filtreleri */}
        <div className="absolute inset-0 bg-medusa-purple/50 mix-blend-color" />
        <div className="absolute inset-0 bg-medusa-glow-primary/30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-background/50" />
        
        {/* Teknolojik Izgara (Grid) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_40px]" />
      </div>

      {/* =========================================
          2. GENİŞLETİLMİŞ HUD ÇERÇEVESİ VE SCROLL İNDİKATÖRÜ
          ========================================= */}
      {/* Çapı max-w-[1100px] yapılarak daha geniş bir sarmalayıcı etki yaratıldı */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] h-[95vw] max-w-[1100px] max-h-[1100px] pointer-events-none z-0 opacity-80">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none" style={{ transform: "rotate(-90deg)" }}>
          
          {/* Arka Plan Pasif Çizgiler (HUD Detayları) */}
          <circle cx="50" cy="50" r="48" stroke="currentColor" className="text-white/10" strokeWidth="0.5" pathLength="100" strokeDasharray="0.2 1.8" strokeLinecap="round" />
          
          <circle cx="50" cy="50" r="48" stroke="currentColor" className="text-white/20" strokeWidth="1" pathLength="100" strokeDasharray="15 85" strokeDashoffset="-60" strokeLinecap="round" />
          
          <circle cx="50" cy="50" r="48" stroke="currentColor" className="text-medusa-spark/50" strokeWidth="1.5" pathLength="100" strokeDasharray="0.5 99.5" strokeDashoffset="0" strokeLinecap="round" />

          {/* YENİ: KAYDIRMA (SCROLL) İLE DOLAN İNDİKATÖR HALKASI */}
          <circle 
            ref={progressCircleRef}
            cx="50" cy="50" r="48" 
            stroke="currentColor" 
            className="text-medusa-purple drop-shadow-[0_0_10px_rgba(92,6,140,0.8)]"
            strokeWidth="1.5" 
            pathLength="100"
            strokeDasharray="100" 
            strokeDashoffset="100" // Başlangıçta tamamen görünmez
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* =========================================
          3. İÇERİK BÖLÜMÜ
          ========================================= */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center max-w-4xl mt-[-5vh]">
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(2.8rem,5vw,5.5rem)] font-bold leading-[1.1] tracking-tight text-white mb-6"
        >
          <span className="font-serif">We build, run and grow</span><br />
          digital businesses.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl mb-10"
        >
          Stratejiden içeriğe, üretimden dijital sistemlere kadar tüm yolculuğunuzu tek çatı altında yönetiyoruz. Önerdiğimizi biz de yaşıyoruz.
        </motion.p>

       {/* Görsele Sadık Kalınmış, Animasyonlu Çerçeveli CTA Butonu */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative group inline-flex"
        >
          {/* Dış Kapsayıcı (Border Maskesi ve Hover Efektleri) */}
          <div className="relative inline-flex overflow-hidden rounded-full p-[2px] shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_35px_rgba(223,210,166,0.3)] group-hover:scale-105 transition-all duration-300 cursor-pointer">
            
            {/* Animasyonlu Dönen Kenarlık (Medusa Purple & Spark) */}
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-purple)_40%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_60%,var(--color-medusa-purple)_100%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Butonun Kendisi (İç Zemin Maskesi) */}
            <button className="relative z-10 bg-white text-[#08020F] px-8 py-3.5 rounded-full font-semibold text-[15px] tracking-wide w-full h-full transition-colors duration-300">
              Birlikte Değerlendirelim
            </button>
            
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 md:mt-32 flex flex-col items-center justify-center relative"
        >
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-transparent to-white/20" />
          
          <div className="relative z-10 flex items-center justify-center w-12 h-16 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm mb-3 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
             <div className="flex items-baseline gap-0.5 text-2xl font-semibold text-white tracking-tighter">
              {hasMounted ? <motion.span>{rounded}</motion.span> : <span>0</span>}
            </div>
          </div>
          <span className="relative z-10 text-[11px] font-medium tracking-widest uppercase text-white/40">
            Yönetilen Marka
          </span>
        </motion.div>
        
      </div>

      {/* =========================================
          4. ALT GEÇİŞ KATMANI (SERVICES SECTION İÇİN)
          ========================================= */}
      {/* 
        Scroll kilidi açıldığında Services bölümünün kusursuzca altından akması için 
        çok hafif ve transparan bir zemin gradienti bıraktık.
      */}
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />

    </section>
  );
}