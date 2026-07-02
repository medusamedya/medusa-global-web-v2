"use client";

// 1. useRef ve useEffect hook'larını dahil ediyoruz
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export default function Footer() {
 

  return (
    <footer className="relative w-full pt-32 pb-12 bg-background transition-colors duration-500 overflow-hidden border-t border-foreground/10 dark:border-white/10">
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- ÜST BÖLÜM: BÜYÜK VİZYON MESAJI --- */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground dark:text-white tracking-tight leading-tight transition-colors duration-300">
              Ticaretinizi büyütmek için <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medusa-purple to-medusa-gold">
                doğru iş ortağını
              </span> buldunuz.
            </h2>
          </div>
          
          {/* Animasyonlu İletişim Butonu (İmza Border Efekti) */}
          <div className="relative inline-flex overflow-hidden rounded-full p-[2px] shadow-lg group flex-shrink-0">
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_100%)] opacity-80" />
            <Link 
              href="mailto:hello@medusaglobal.com"
              className="relative z-10 inline-flex items-center gap-3 w-full h-full rounded-[calc(9999px-2px)] bg-background dark:bg-medusa-base-dark px-8 py-4 backdrop-blur-md hover:bg-transparent dark:hover:bg-transparent transition-colors duration-300"
            >
              <span className="text-base font-bold text-foreground dark:text-white group-hover:text-medusa-base-dark dark:group-hover:text-white transition-colors">
                Bize Ulaşın
              </span>
              <div className="w-8 h-8 rounded-full bg-medusa-purple/10 dark:bg-medusa-spark/20 flex items-center justify-center group-hover:bg-medusa-spark group-hover:rotate-45 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 text-medusa-purple dark:text-medusa-spark group-hover:text-medusa-base-dark transition-colors" />
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full h-px bg-foreground/10 dark:bg-white/10 mb-16 transition-colors duration-500"></div>

        {/* --- ORTA BÖLÜM: LİNKLER VE BİLGİLER (GRID) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Marka ve Vizyon (Col Span 4) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-medusa-purple to-medusa-spark flex items-center justify-center">
                <span className="text-white font-black text-sm">M</span>
              </div>
              <span className="text-2xl font-black tracking-widest text-foreground dark:text-white uppercase transition-colors duration-300">Medusa</span>
            </div>
            <p className="text-foreground/70 dark:text-white/60 text-sm leading-relaxed max-w-sm transition-colors duration-300">
              Dünyaya yenilik katarak ticaretini büyütmek isteyen işverenlerin destekçisiyiz. Stratejiyi kurar, sahaya indirir ve verilerle yönetiriz.
            </p>
            
            {/* Sosyal Medya İkonları (Özel SVG - Bağımsız ve Hızlı) */}
            <div className="flex items-center gap-4 pt-2">
              
              {/* Instagram */}
              <Link href="#" className="w-10 h-10 rounded-full border border-foreground/10 dark:border-white/10 flex items-center justify-center text-foreground/60 dark:text-white/60 hover:border-medusa-purple hover:text-medusa-purple dark:hover:border-medusa-spark dark:hover:text-medusa-spark transition-all duration-300 hover:-translate-y-1">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link href="#" className="w-10 h-10 rounded-full border border-foreground/10 dark:border-white/10 flex items-center justify-center text-foreground/60 dark:text-white/60 hover:border-medusa-purple hover:text-medusa-purple dark:hover:border-medusa-spark dark:hover:text-medusa-spark transition-all duration-300 hover:-translate-y-1">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>

              {/* X (Eski Twitter) */}
              <Link href="#" className="w-10 h-10 rounded-full border border-foreground/10 dark:border-white/10 flex items-center justify-center text-foreground/60 dark:text-white/60 hover:border-medusa-purple hover:text-medusa-purple dark:hover:border-medusa-spark dark:hover:text-medusa-spark transition-all duration-300 hover:-translate-y-1">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                </svg>
              </Link>

            </div>
          </div>

          {/* Hizmetler (Col Span 3) */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <h4 className="text-sm font-bold text-foreground dark:text-white uppercase tracking-widest transition-colors duration-300">
              Çözümlerimiz
            </h4>
            <ul className="space-y-4">
              {['Dijital Sağlık Kontrolü', 'Danışmanlık', 'Hızlandırma', 'Yatırım'].map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-foreground/70 dark:text-white/60 text-sm hover:text-medusa-purple dark:hover:text-medusa-spark transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-medusa-purple/50 dark:bg-medusa-spark/50 scale-0 group-hover:scale-100 transition-transform"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal (Col Span 2) */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <h4 className="text-sm font-bold text-foreground dark:text-white uppercase tracking-widest transition-colors duration-300">
              Kurumsal
            </h4>
            <ul className="space-y-4">
              {['Hakkımızda', 'Vaka Çalışmaları', 'Manifesto', 'Kariyer'].map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-foreground/70 dark:text-white/60 text-sm hover:text-medusa-purple dark:hover:text-medusa-spark transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-medusa-purple/50 dark:bg-medusa-spark/50 scale-0 group-hover:scale-100 transition-transform"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim (Col Span 3) */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <h4 className="text-sm font-bold text-foreground dark:text-white uppercase tracking-widest transition-colors duration-300">
              Merkez Ofis
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-foreground/70 dark:text-white/60 text-sm transition-colors duration-300">
                <MapPin className="w-5 h-5 text-medusa-purple dark:text-medusa-spark flex-shrink-0" />
                <span>İzmir, Türkiye <br/> <span className="text-xs opacity-70">Global Operasyon Merkezi</span></span>
              </li>
              <li className="flex items-center gap-3 text-foreground/70 dark:text-white/60 text-sm transition-colors duration-300">
                <Mail className="w-5 h-5 text-medusa-purple dark:text-medusa-spark flex-shrink-0" />
                <Link href="mailto:hello@medusaglobal.com" className="hover:text-medusa-purple dark:hover:text-medusa-spark transition-colors">
                  hello@medusaglobal.com
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* --- ALT BÖLÜM: TELİF HAKLARI --- */}
        <div className="w-full pt-8 border-t border-foreground/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-500">
          <p className="text-foreground/50 dark:text-white/50 text-xs transition-colors duration-300">
            &copy; 2026 Medusa Global. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-foreground/50 dark:text-white/50 hover:text-foreground dark:hover:text-white text-xs transition-colors duration-300">Gizlilik Politikası</Link>
            <Link href="#" className="text-foreground/50 dark:text-white/50 hover:text-foreground dark:hover:text-white text-xs transition-colors duration-300">Kullanım Koşulları</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}