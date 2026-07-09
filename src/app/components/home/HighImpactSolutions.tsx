"use client";

import React from "react";
import { ArrowUpRight, TrendingUp, Activity, Users } from "lucide-react";
import Badge from "../ui/Badge";
import GradientButton from "../ui/GradientButton";

export default function HighImpactSolutions() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- ÜST BAŞLIK BÖLÜMÜ --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 md:mb-16  space-y-6">
          <Badge text="Performans & Ölçeklenme" className="mb-4" />
          
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            İşletmenizi Büyütecek Yüksek Etkili Çözümler
          </h2>
          <p className="font-sans  text-normal md:text-lg text-medusa-text-secondary">
            Ekibinizi operasyonel iş akışlarını hızlandıran, satışları
            ölçekleyen ve müşteri bağını güçlendiren veriye dayalı stratejilerle
            donatın.
          </p>
        </div>

        {/* --- BENTO BOX GRID BÖLÜMÜ (Global.css Renkleriyle Glassmorphism) --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          
          {/* 1. KUTU: Sektör Liderlerinin Tercihi (Top Left) */}
          <div className="md:col-span-6 lg:col-span-4 relative group flex overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-br from-white via-white/30 to-[#853ec7] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(133,62,199,0.5)]">
            <div className="relative z-10 w-full h-full flex flex-col justify-between rounded-[calc(32px-1px)] bg-gradient-to-br from-medusa-surface-1 to-medusa-primary border border-medusa-border/20 p-8 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] transition-colors duration-500 group-hover:from-medusa-primary group-hover:to-medusa-surface-1">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-heading text-2xl font-bold text-foreground leading-tight">
                  Lider Markaların
                  <br />
                  Tercihi
                </h3>
                {/* Avatarlar Yertutucu */}
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-medusa-surface-1 bg-medusa-secondary flex items-center justify-center shadow-md">
                    <Users className="w-4 h-4 text-foreground" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-medusa-surface-1 bg-medusa-purple-light flex items-center justify-center shadow-md">
                    <TrendingUp className="w-4 h-4 text-medusa-primary" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-medusa-surface-1 bg-medusa-border flex items-center justify-center shadow-md">
                    <Activity className="w-4 h-4 text-foreground" />
                  </div>
                </div>
              </div>
              <p className="font-sans text-medusa-text-muted text-sm font-light mt-auto leading-relaxed">
                Latanwood, Naser Group ve onlarca vizyoner marka dijital dönüşüm
                operasyonlarında bize güveniyor.
              </p>
            </div>
          </div>

          {/* 2. KUTU: Müşteri Memnuniyeti / ROAS (Top Middle) */}
          <div className="md:col-span-6 lg:col-span-4 relative group flex overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-br from-white via-white/30 to-[#853ec7] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(133,62,199,0.5)]">
            <div className="relative z-10 w-full h-full flex flex-col justify-between rounded-[calc(32px-1px)] bg-gradient-to-br from-medusa-surface-1 to-medusa-primary border border-medusa-border/20 p-8 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] transition-colors duration-500 group-hover:from-medusa-primary group-hover:to-medusa-surface-1">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-heading text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground to-medusa-text-secondary tracking-tighter">
                  3x
                </span>
                <span className="font-sans text-sm font-medium text-medusa-text-secondary leading-tight">
                  Ortalama
                  <br />
                  ROAS Artışı
                </span>
              </div>
              <p className="font-sans text-medusa-text-muted text-sm font-light mt-auto leading-relaxed">
                Omnichannel pazarlama stratejilerimiz ve huni (funnel)
                optimizasyonlarımızla yatırım getirinizi maksimize ediyoruz.
              </p>
            </div>
          </div>

          {/* 3. KUTU: Sağ Kolon Dikey İmaj Kartı ve Buton (Spans 2 Rows) */}
          <div className="md:col-span-12 lg:col-span-4 lg:row-span-2 relative group flex overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-br from-white via-white/30 to-[#853ec7] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(133,62,199,0.5)] min-h-[400px] lg:min-h-[550px]">
            <div className="relative z-10 w-full h-full rounded-[calc(32px-1px)] overflow-hidden bg-medusa-surface-1 border border-medusa-border/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">
              

              {/* İçerik ve Gradient Katmanı */}
              <div className="absolute inset-0 bg-gradient-to-t from-medusa-surface-1 via-medusa-surface-1/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-heading text-3xl font-bold text-foreground mb-3 leading-tight">
                  Veriyi Eyleme
                  <br />
                  Dönüştürün
                </h3>
                <p className="font-sans text-medusa-text-secondary text-sm font-light mb-8 leading-relaxed">
                  Sektörel analizler ve dijital sağlık kontrolleriyle ekibinizin
                  her zaman doğru kararı almasını sağlıyoruz.
                </p>
                
                {/* Gradient Butonumuz */}
                <GradientButton text="Tüm Çözümleri İncele" className="w-full sm:w-max" />
              </div>
            </div>
          </div>

          {/* 4. KUTU: 360° Omnichannel (Bottom Left - Geniş Kutu) */}
          <div className="md:col-span-7 lg:col-span-5 relative group flex overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-br from-white via-white/30 to-[#853ec7] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(133,62,199,0.5)]">
            <div className="relative z-10 w-full h-full flex flex-col justify-between rounded-[calc(32px-1px)] bg-gradient-to-br from-medusa-surface-1 to-medusa-primary border border-medusa-border/20 p-8 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] transition-colors duration-500 group-hover:from-medusa-primary group-hover:to-medusa-surface-1">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-heading text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground to-medusa-text-secondary tracking-tighter">
                  360°
                </span>
                <span className="font-sans text-sm font-medium text-medusa-text-secondary leading-tight">
                  Omnichannel
                  <br />
                  Ekosistem
                </span>
              </div>
              <p className="font-sans text-medusa-text-muted text-sm font-light mt-auto max-w-[90%] leading-relaxed">
                Fiziksel ve dijital kanallarınızı (Web, Mobil, Sosyal Medya,
                CRM) tek bir çatı altında birleştirerek kesintisiz ve tutarlı
                bir müşteri deneyimi (CX) yaratıyoruz.
              </p>
            </div>
          </div>

          {/* 5. KUTU: Dijital Sağlık Kontrolü (Bottom Middle - Dar Kutu) */}
          <div className="md:col-span-5 lg:col-span-3 relative group flex overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-br from-white via-white/30 to-[#853ec7] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(133,62,199,0.5)]">
            <div className="relative z-10 w-full h-full flex flex-col justify-between rounded-[calc(32px-1px)] bg-gradient-to-br from-medusa-surface-1 to-medusa-primary border border-medusa-border/20 p-8 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] transition-colors duration-500 group-hover:from-medusa-primary group-hover:to-medusa-surface-1">
              <div className="mb-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                  Kapsamlı Analiz
                </h3>
                <p className="font-sans text-sm text-medusa-purple-light font-medium">
                  Dijital Sağlık Kontrolü
                </p>
              </div>
              <div className="mt-auto flex items-end justify-between">
                <span className="font-heading text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground to-medusa-text-secondary tracking-tighter">
                  14
                </span>
                <span className="font-sans text-medusa-text-muted text-sm font-light mb-1.5">
                  Günde Raporlama
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}