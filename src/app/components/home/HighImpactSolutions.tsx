"use client";

import React from "react";
import { ArrowUpRight, TrendingUp, Activity, Users } from "lucide-react";
import Badge from "../ui/Badge";
import GradientButton from "../ui/GradientButton";
import Link from "next/link";


export default function HighImpactSolutions() {
  return (
    <section className="relative w-full mt-12 bg-background overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- ÜST BAŞLIK BÖLÜMÜ --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8   space-y-1">
          <Badge text="Kendi Girişimlerimiz" className="mb-4" />
          
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-wide">
            Kürsüden Anlatmıyor, Sahada İnşa Ediyoruz.
          </h2>
          <p className="font-sans  text-normal md:text-lg text-medusa-text-secondary">
            Riski tanıyoruz, çünkü kendi markalarımızla aldık. Sıfırdan kurduğumuz, 
            işlettiğimiz ve teknolojik altyapısını kurguladığımız dijital ürün ekosistemimiz.
          </p>
        </div>

        {/* --- BENTO BOX GRID BÖLÜMÜ (Global.css Renkleriyle Glassmorphism) --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          
          {/* 1. KUTU: ODIMAX CRM (Top Left) */}
          <div className="md:col-span-6 lg:col-span-4 relative group flex overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-br from-white via-white/30 to-[#853ec7] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(133,62,199,0.5)]">
            <div className="relative z-10 w-full h-full flex flex-col justify-between rounded-[calc(32px-1px)] bg-gradient-to-br from-medusa-surface-1 to-medusa-primary border border-medusa-border/20 p-8 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] transition-colors duration-500 group-hover:from-medusa-primary group-hover:to-medusa-surface-1">
              <div className="mb-6">
                <p className="font-sans text-xs font-semibold md:font-bold tracking-widest text-medusa-purple-light uppercase mb-2">
                  SaaS · CRM
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  Odimax CRM
                </h3>
              </div>
              <p className="font-sans text-medusa-text-muted text-sm md:text-lg font-light mt-auto leading-relaxed">
                İşitme cihazı merkezleri için geliştirilmiş çok şubeli satış ve lead takip sistemi. Randevudan satışa tüm süreci tek ekranda yönetir.
              </p>
            </div>
          </div>

          {/* 2. KUTU: ALTIN KELİME (Top Middle) */}
          <div className="md:col-span-6 lg:col-span-4 relative group flex overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-br from-white via-white/30 to-[#853ec7] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(133,62,199,0.5)]">
            <div className="relative z-10 w-full h-full flex flex-col justify-between rounded-[calc(32px-1px)] bg-gradient-to-br from-medusa-surface-1 to-medusa-primary border border-medusa-border/20 p-8 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] transition-colors duration-500 group-hover:from-medusa-primary group-hover:to-medusa-surface-1">
              <div className="mb-6">
                <p className="font-sans text-xs font-semibold md:font-bold tracking-widest text-medusa-purple-light uppercase mb-2">
                  Mobil Oyun
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  Altın Kelime
                </h3>
              </div>
              <p className="font-sans text-medusa-text-muted text-sm md:text-lg font-light mt-auto leading-relaxed">
                TDK sözlüğüne dayalı rekabetçi bir Türkçe kelime oyunu. Sıralama sistemi, çoklu oyun modu ve sosyal katmanıyla oyuncuyu her gün geri getirir.
              </p>
            </div>
          </div>

          {/* 3. KUTU: TURIO (Sağ Kolon Dikey İmaj Kartı ve Buton - Spans 2 Rows) */}
          <div className="md:col-span-12 lg:col-span-4 lg:row-span-2 relative group flex overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-br from-white via-white/30 to-[#853ec7] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(133,62,199,0.5)] min-h-[400px] lg:min-h-[550px]">
            <div className="relative z-10 w-full h-full rounded-[calc(32px-1px)] overflow-hidden bg-gradient-to-br from-medusa-surface-1 to-medusa-primary border border-medusa-border/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">
              
              {/* İçerik ve Gradient Katmanı */}
              {/* Mobilde justify-center (veya end) ile içeriği toplu tutuyor, md'de justify-between'e dönüyoruz */}
              <div className="absolute inset-0 bg-gradient-to-t from-medusa-surface-1 via-medusa-surface-1/80 to-transparent flex flex-col justify-center md:justify-between p-8">
                
                {/* Üst Kısım: Metinler */}
                <div>
                  <p className="font-sans text-xs font-semibold md:font-bold tracking-widest text-medusa-purple-light uppercase mb-2">
                    SaaS · Turizm Teknolojisi
                  </p>
                  <h3 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
                    Turio
                  </h3>
                  <p className="font-sans text-medusa-text-muted text-sm md:text-lg font-light mt-auto leading-relaxed">
                    Turizm işletmeleri için dinamik fiyatlandırma motoru, tüketiciler için akıllı tur platformu. Talebe göre fiyatı gerçek zamanlı optimize ederek hem işletmenin gelirini hem gezginin fırsatını büyütür.
                  </p>
                </div>
                
                {/* Alt Kısım: Aksiyon Butonu (CTA) */}
                {/* mt-auto sadece md (masaüstü) ekranlarda çalışacak şekilde sınırlandırıldı */}
                <div className="mt-6 md:mt-auto md:pt-6">
                  <Link href="/projects" className="inline-block w-full sm:w-max">
                    <GradientButton text="Tüm Ürünlerimiz" className="w-full sm:w-max" />
                  </Link>
                </div>
                 
              </div>
            </div>
          </div>

          {/* 4. KUTU: CELEBİM (Bottom Left - Geniş Kutu) */}
          <div className="md:col-span-7 lg:col-span-5 relative group flex overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-br from-white via-white/30 to-[#853ec7] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(133,62,199,0.5)]">
            <div className="relative z-10 w-full h-full flex flex-col justify-between rounded-[calc(32px-1px)] bg-gradient-to-br from-medusa-surface-1 to-medusa-primary border border-medusa-border/20 p-8 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] transition-colors duration-500 group-hover:from-medusa-primary group-hover:to-medusa-surface-1">
              <div className="mb-6">
                <p className="font-sans text-xs font-semibold md:font-bold tracking-widest text-medusa-purple-light uppercase mb-2">
                  Pazar Yeri
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  Celebim
                </h3>
              </div>
              <p className="font-sans text-medusa-text-muted text-sm md:text-lg font-light mt-auto max-w-[90%] leading-relaxed">
                Büyükbaş hayvan alım-satımını çiftçi, besici ve tüccar arasında tek platformda buluşturur. İlan, güven altyapısı ve canlı piyasa verisini bir arada sunar.
              </p>
            </div>
          </div>

          {/* 5. KUTU: SAFHA (Bottom Middle - Dar Kutu) */}
          <div className="md:col-span-5 lg:col-span-3 relative group flex overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-br from-white via-white/30 to-[#853ec7] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(133,62,199,0.5)]">
            <div className="relative z-10 w-full h-full flex flex-col justify-between rounded-[calc(32px-1px)] bg-gradient-to-br from-medusa-surface-1 to-medusa-primary border border-medusa-border/20 p-8 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] transition-colors duration-500 group-hover:from-medusa-primary group-hover:to-medusa-surface-1">
              <div className="mb-6">
                <p className="font-sans text-xs font-semibold md:font-bold tracking-widest text-medusa-purple-light uppercase mb-2">
                  SaaS · Üretim
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  Safha
                </h3>
              </div>
              <p className="font-sans text-medusa-text-muted text-sm md:text-lg font-light mt-auto leading-relaxed">
                Hammaddeden sevkiyata kadar her üretim aşamasını tek panelde izleyen takip sistemi. Hangi ürün hangi aşamada, anlık görürsünüz; darboğazı oluşmadan yakalarsınız.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}