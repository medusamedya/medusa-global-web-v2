"use client";

import React from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import InnerHero from "../components/InnerHero";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col overflow-hidden">
      
      {/* --- ÜST BÖLÜM: INNER HERO --- */}
      <InnerHero
        title="İletişim"
        accentTitle="Kurumsal İletişim"
        description="Birlikte büyümeye hazır mısınız? Ofislerimizde sizi ağırlamaktan veya dijital ortamda bir araya gelmekten memnuniyet duyarız."
      />

      {/* --- ALT BÖLÜM: İLETİŞİM BİLGİLERİ VE HARİTA --- */}
      <section className="relative w-full py-20 lg:py-32 px-6 z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            
            {/* =========================================
                SOL KOLON: İLETİŞİM BİLGİLERİ
                ========================================= */}
            {/* Mobilde text-center, büyük ekranda text-left */}
            <div className="flex flex-col justify-center space-y-12 text-center lg:text-left">
              
              {/* Başlık */}
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-foreground">
                  Ofislerimiz
                </h2>
                {/* Mobilde ortalı, büyük ekranda sola dayalı çizgi */}
                <div className="w-16 h-1 bg-medusa-purple-light rounded-full mx-auto lg:mx-0" />
              </div>

              {/* Lokasyonlar (Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* İzmir Ofis */}
                <div className="flex flex-col space-y-3">
                  {/* Flex öğelerini mobilde ortalıyoruz */}
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-medusa-purple-light">
                    <MapPin className="w-5 h-5" />
                    <h3 className="font-heading text-lg font-bold text-foreground">İzmir (Merkez)</h3>
                  </div>
                  <p className="font-sans text-medusa-text-secondary text-sm leading-relaxed">
                    Çınarlı Mh. 1587/1. Sk. <br />
                    NO:4/1E Kat.1, Konak / İzmir
                  </p>
                </div>

                {/* İstanbul Ofis */}
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-medusa-purple-light">
                    <MapPin className="w-5 h-5" />
                    <h3 className="font-heading text-lg font-bold text-foreground">İstanbul</h3>
                  </div>
                  <p className="font-sans text-medusa-text-secondary text-sm leading-relaxed">
                    Kardeşler Caddesi, No:57, <br />
                    Kat:6, Daire: 35, Şişli / İstanbul
                  </p>
                </div>
              </div>

              {/* İnce Ayırıcı Çizgi */}
              <div className="w-full h-px bg-medusa-border/20" />

              {/* Çalışma Saatleri & İletişim Bilgileri */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                {/* Çalışma Saatleri */}
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-medusa-purple-light">
                    <Clock className="w-5 h-5" />
                    <h3 className="font-heading text-lg font-bold text-foreground">Çalışma Saatlerimiz</h3>
                  </div>
                  <ul className="font-sans text-medusa-text-secondary text-sm space-y-2">
                    <li>Hafta içi: 09:00 – 19:00</li>
                    <li>Cumartesi: 09:00 – 19:00</li>
                  </ul>
                </div>

                {/* İletişim Kanalları */}
                <div className="flex flex-col space-y-4">
                  <h3 className="font-heading text-lg font-bold text-foreground">Bize Ulaşın</h3>
                  <ul className="font-sans text-medusa-text-secondary text-sm space-y-3">
                    <li className="flex items-center justify-center lg:justify-start gap-3">
                      <Phone className="w-4 h-4 text-medusa-purple-light" />
                      <a href="tel:+905537343500" className="hover:text-medusa-purple-light transition-colors">0 553 734 35 00</a>
                    </li>
                    <li className="flex items-center justify-center lg:justify-start gap-3">
                      <Phone className="w-4 h-4 text-medusa-purple-light" />
                      <a href="tel:+908503026353" className="hover:text-medusa-purple-light transition-colors">0 850 302 63 53</a>
                    </li>
                    <li className="flex items-center justify-center lg:justify-start gap-3">
                      <Mail className="w-4 h-4 text-medusa-purple-light" />
                      <a href="mailto:hello@medusaglobal.com.tr" className="hover:text-medusa-purple-light transition-colors">hello@medusaglobal.com.tr</a>
                    </li>
                  </ul>
                </div>

              </div>

            </div>

            {/* =========================================
                SAĞ KOLON: GOOGLE MAPS EMBED
                ========================================= */}
            <div className="w-full h-[400px] lg:h-auto min-h-[400px] rounded-[2rem] overflow-hidden border border-medusa-border/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative group p-1 bg-medusa-surface-1/50 backdrop-blur-sm">
              <div className="w-full h-full rounded-[calc(2rem-4px)] overflow-hidden relative">
                <iframe
                  title="Medusa Global İzmir Merkez Ofis"
                  src="https://maps.google.com/maps?q=Çınarlı%20Mh.%201587%2F1.%20Sk.%20NO%3A4%2F1E%20Konak%2Fİzmir&t=m&z=15&output=embed&iwloc=near"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full filter contrast-[1.1] grayscale-[0.2]"
                />
                
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-medusa-purple-light/30 transition-all duration-500 pointer-events-none rounded-[calc(2rem-4px)]" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}