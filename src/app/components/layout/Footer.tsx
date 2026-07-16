"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import GradientButton from "../ui/GradientButton";

export default function Footer() {
  return (
    <footer className="relative w-full pt-16 pb-12 bg-background transition-colors duration-500 overflow-hidden border-t border-medusa-border/20">
      <div className="container mx-auto px-6 relative z-10">
        {/* --- ÜST BÖLÜM: BÜYÜK VİZYON MESAJI --- */}
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-8 md:mb-16">
          {/* Sol Alt Işık Hüzmesi */}
          <div className="absolute -bottom-10 -left-10 w-[40vw] max-w-[400px] h-[300px] bg-medusa-primary blur-[100px] rounded-full pointer-events-none -z-10" />

          {/* Sağ Alt Işık Hüzmesi */}
          <div className="absolute -bottom-10 -right-10 w-[40vw] max-w-[400px] h-[300px] bg-medusa-purple-light/20 blur-[120px] rounded-full pointer-events-none -z-10" />

          <div className="max-w-2xl relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight transition-colors duration-300">
              Eksiksiz danışmanlık veren <br className="hidden sm:block" />
              dijital iş ortağınız.
            </h2>
          </div>

          {/* Gradient Buton Entegrasyonu */}
          <div className="flex-shrink-0 relative z-10">
            <Link href="mailto:hello@medusaglobal.com.tr">
              <GradientButton text="Bize Ulaşın" showIcon={false} />
            </Link>
          </div>
        </div>

        {/* İnce Ayırıcı Çizgi */}
        <div className="w-full h-px bg-medusa-border/20 mb-16 transition-colors duration-500"></div>

        {/* --- ORTA BÖLÜM: LİNKLER VE BİLGİLER (GRID) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Marka ve Vizyon (Col Span 4) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="flex items-start gap-4 group">
              <Link href="/" aria-label="Medusa Global Anasayfa">
                <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-105 cursor-pointer">
                  <img
                    src="/logo_beyaz.png"
                    alt="Medusa Global Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
            </div>

            <p className="font-sans text-medusa-text-secondary text-sm leading-relaxed max-w-sm transition-colors duration-300">
              Medusa Global, markaların dijital büyüme yolculuğunu strateji,
              içerik, prodüksiyon ve dijital sistemlerle uçtan uca yöneten bir
              hızlandırma ve danışmanlık ortağıdır.
            </p>

            {/* Sosyal Medya İkonları */}
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="https://www.instagram.com/medusaglobaltr/"
                className="w-10 h-10 rounded-full border border-medusa-border/30 flex items-center justify-center text-medusa-text-muted hover:border-medusa-purple-light hover:text-medusa-purple-light transition-all duration-300 hover:-translate-y-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/people/Medusa-Global-Acceleration-Consultancy/61560020665944/?locale=es_LA#"
                className="w-10 h-10 rounded-full border border-medusa-border/30 flex items-center justify-center text-medusa-text-muted hover:border-medusa-purple-light hover:text-medusa-purple-light transition-all duration-300 hover:-translate-y-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/medusaglobaltr/?originalSubdomain=tr"
                className="w-10 h-10 rounded-full border border-medusa-border/30 flex items-center justify-center text-medusa-text-muted hover:border-medusa-purple-light hover:text-medusa-purple-light transition-all duration-300 hover:-translate-y-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-medusa-border/30 flex items-center justify-center text-medusa-text-muted hover:border-medusa-purple-light hover:text-medusa-purple-light transition-all duration-300 hover:-translate-y-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* --- MOBİL/TABLET İÇİN YAN YANA MENÜLER WRAPPER'I --- */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            {/* Hizmetler */}
            <div className="flex flex-col space-y-6">
              <h4 className="font-heading text-sm font-bold text-foreground uppercase tracking-widest transition-colors duration-300">
                Çözümlerimiz
              </h4>
              <ul className="space-y-4">
                {[
                  "Dijital Sağlık Kontrolü",
                  "Danışmanlık",
                  "Hızlandırma",
                  "Yatırım",
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href="#"
                      className="font-sans text-medusa-text-secondary text-sm hover:text-medusa-purple-light transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-medusa-purple-light/50 scale-0 group-hover:scale-100 transition-transform flex-shrink-0"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kurumsal (Hızlı Bağlantılar) */}
            <div className="flex flex-col space-y-6">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-widest transition-colors duration-300">
                Kurumsal
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "Hakkımızda", path: "/about" },
                  { name: "Ekibimiz", path: "/team" },
                  { name: "Hizmetler", path: "/services" },
                  { name: "Çalışmalarımız", path: "/projects" },
                  { name: "Blog", path: "/blog" },
                  { name: "İletişim", path: "/contact" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.path}
                      className="text-medusa-text-secondary text-sm hover:text-medusa-purple-light transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-medusa-purple-light/50 scale-0 group-hover:scale-100 transition-transform flex-shrink-0"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* ---------------------------------------------------- */}

          {/* İletişim (Col Span 3) */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest transition-colors duration-300">
              İletişim
            </h4>
            <ul className="space-y-5">
              {/* Email */}
              <li className="flex items-center gap-3 text-medusa-text-secondary text-sm transition-colors duration-300">
                <Mail className="w-5 h-5 text-medusa-purple-light flex-shrink-0" />
                <Link
                  href="mailto:hello@medusaglobal.com.tr"
                  className="hover:text-medusa-purple-light transition-colors break-all"
                >
                  hello@medusaglobal.com.tr
                </Link>
              </li>

              {/* Telefon Numaraları */}
              <li className="flex items-start gap-3 text-medusa-text-secondary text-sm transition-colors duration-300">
                <Phone className="w-5 h-5 text-medusa-purple-light flex-shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <Link
                    href="tel:08503026353"
                    className="hover:text-medusa-purple-light transition-colors"
                  >
                    0 850 302 63 53
                  </Link>
                  <Link
                    href="tel:05537343500"
                    className="hover:text-medusa-purple-light transition-colors"
                  >
                    0 553 734 35 00
                  </Link>
                </div>
              </li>

              {/* İzmir Ofis */}
              <li className="flex items-start gap-3 text-medusa-text-secondary text-sm transition-colors duration-300">
                <MapPin className="w-5 h-5 text-medusa-purple-light flex-shrink-0 mt-1" />
                <span>
                  <strong className="block text-foreground font-semibold  mb-0.5">
                    İzmir Ofis
                  </strong>
                  Çınarlı Mh. 1587/1. Sk. NO:4/1E <br />
                  Kat.1, Konak/İzmir
                </span>
              </li>

              {/* İstanbul Ofis */}
              <li className="flex items-start gap-3 text-medusa-text-secondary text-sm transition-colors duration-300">
                <MapPin className="w-5 h-5 text-medusa-purple-light flex-shrink-0 mt-1" />
                <span>
                  <strong className="block text-foreground font-semibold mb-0.5">
                    İstanbul Ofis
                  </strong>
                  Kardeşler Caddesi No: 57 Kat: 6 <br />
                  Daire: 35, Şişli/İstanbul
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- ALT BÖLÜM: TELİF HAKLARI --- */}
        <div className="w-full pt-8 border-t border-medusa-border/20 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-500">
          <p className="font-sans text-medusa-text-muted text-xs transition-colors duration-300">
            &copy; 2026 Medusa Global. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-medusa-text-muted hover:text-foreground text-xs transition-colors duration-300"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/terms"
              className="text-medusa-text-muted hover:text-foreground text-xs transition-colors duration-300"
            >
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
