"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [hasMounted, setHasMounted] = useState(false);

  // 1. SADECE HYDRATION İÇİN (Linter hatasını önlemek adına asenkron yapıldı)
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasMounted(true);
    }, 0);

    // Component unmount olursa timer'ı temizle
    return () => clearTimeout(timer);
  }, []);

  // 2. VİDEO VE ANİMASYON KONTROLLERİ İÇİN
  useEffect(() => {
    const controls = animate(count, 25, {
      duration: 2,
      ease: "easeOut",
      delay: 0.5,
    });

    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.playbackRate = 0.6;
    }

    return () => controls.stop();
  }, [count]); // Animasyon için gereken count bağımlılığı burada kaldı.
  return (
    // min-h-screen yerine min-h-[100dvh] ile mobil tarayıcı zıplamaları engellendi
    <section className="relative w-full min-h-[100dvh] bg-[#05010A] pt-32 sm:pt-40 flex flex-col items-center justify-center overflow-hidden z-0">
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
          // object-cover korundu ama mobilde kadrajı merkeze/üste sabitlemek için object-[center_top] eklenebilir
          className="absolute top-0 left-0 w-full h-full object-cover object-center sm:object-center opacity-80 mix-blend-screen"
        >
          {/* STRATEJİK TAVSİYE: Mobilde dikey video (Örn: 1080x1920) yükletmek SEO ve UX için mükemmeldir. Elimizde varsa şu satırı açabiliriz: */}
          {/* <source media="(max-width: 768px)" src="/video-mobile.mp4" type="video/mp4" /> */}

          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-medusa-purple/50 mix-blend-color" />
        <div className="absolute inset-0 bg-medusa-glow-primary/30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* =========================================
          2. GENİŞLETİLMİŞ HUD ÇERÇEVESİ
          ========================================= */}
      {/* Mobilde w-[130vw] yapılarak çember dışa itildi, içteki metne nefes aldırıldı. Masaüstünde w-[95vw] korundu. */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130vw] h-[130vw] sm:w-[95vw] sm:h-[95vw] max-w-[1100px] max-h-[1100px] pointer-events-none z-0 opacity-60 sm:opacity-80">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full overflow-visible"
          fill="none"
          style={{ transform: "rotate(-90deg)" }}
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="currentColor"
            className="text-white/10"
            strokeWidth="0.5"
            pathLength="100"
            strokeDasharray="0.2 1.8"
            strokeLinecap="round"
          />
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="currentColor"
            className="text-white/20"
            strokeWidth="1"
            pathLength="100"
            strokeDasharray="15 85"
            strokeDashoffset="-60"
            strokeLinecap="round"
          />
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="currentColor"
            className="text-medusa-spark/50"
            strokeWidth="1.5"
            pathLength="100"
            strokeDasharray="0.5 99.5"
            strokeDashoffset="0"
            strokeLinecap="round"
          />

          <motion.circle
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
            cx="50"
            cy="50"
            r="48"
            stroke="currentColor"
            className="text-medusa-purple drop-shadow-[0_0_10px_rgba(92,6,140,0.8)]"
            strokeWidth="1.5"
            pathLength="100"
            strokeDasharray="100"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* =========================================
          3. İÇERİK BÖLÜMÜ
          ========================================= */}
      {/* Mobilde margin-top kısıldı (mt-0) ekranın ortasına daha iyi oturması için */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-center text-center max-w-4xl mt-0 sm:mt-[-5vh]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // Satır aralığını (leading) daraltarak metinlerin görseldeki gibi birbirine kenetlenmesini sağladım
          className="text-[clamp(2.5rem,8vw,6rem)] font-medium leading-[0.9] tracking-tighter text-white mb-6"
        >
          We build, run and
          <br />
          grow digital
          <br />
          businesses.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          // Mobilde okunabilirliği artırmak için metin boyutu text-base yapıldı
          className="font-sans text-base sm:text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mb-8 sm:mb-10 px-2"
        >
          Stratejiden içeriğe, üretimden dijital sistemlere kadar tüm
          yolculuğunuzu tek çatı altında yönetiyoruz. Önerdiğimizi biz de
          yaşıyoruz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-full sm:w-auto px-4 sm:px-0"
        >
          <div className="relative inline-flex overflow-hidden rounded-full p-[2px] shadow-lg group cursor-pointer w-full sm:w-auto">
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_100%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Buton mobilde tam genişlik (w-full) oldu, tıklama alanı büyüdü */}
            <button className="font-sans relative z-10 inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-background text-white px-6 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-[14px] sm:text-[15px] tracking-wide transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
              <span className="transition-colors duration-300">
                Birlikte Değerlendirelim
              </span>
              <div className="w-8 h-8 rounded-full bg-medusa-purple/10 dark:bg-medusa-spark/20 flex items-center justify-center group-hover:bg-medusa-spark group-hover:rotate-45 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 text-medusa-purple dark:text-medusa-spark group-hover:text-medusa-base-dark transition-colors" />
              </div>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          // Mobilde sayaç ile buton arasındaki mesafe optimize edildi (mt-16)
          className="mt-16 sm:mt-24 md:mt-32 flex flex-col items-center justify-center relative"
        >
          <div className="absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2 w-[1px] h-8 sm:h-12 bg-gradient-to-b from-transparent to-white/20" />

          <div className="relative z-10 flex items-center justify-center w-10 sm:w-12 h-14 sm:h-16 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm mb-2 sm:mb-3 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            {/* Rakam div'ine font-heading eklendi */}
            <div className="font-heading flex items-baseline gap-0.5 text-xl sm:text-2xl font-semibold text-white tracking-tighter">
              {hasMounted ? (
                <motion.span>{rounded}</motion.span>
              ) : (
                <span>0</span>
              )}
            </div>
          </div>
          <span className="font-sans relative z-10 text-[9px] sm:text-[11px] font-medium tracking-widest uppercase text-white/40">
            Yönetilen Marka
          </span>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[15vh] sm:h-[20vh] bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  );
}
