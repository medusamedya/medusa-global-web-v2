"use client";

import React from "react";
import { ArrowUpRight, TrendingUp, Activity, Users } from "lucide-react";

export default function HighImpactSolutions() {
  return (
    <section className="relative w-full py-24 bg-background transition-colors duration-500 overflow-hidden">
      {/* Derinlik Izgarası */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- ÜST BAŞLIK BÖLÜMÜ --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-6">
          {/* Animasyonlu Kurumsal Badge */}
          <div className="relative inline-flex overflow-hidden rounded-full p-[1px] shadow-sm">
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_100%)] opacity-80" />
            <div className="relative z-10 inline-flex items-center justify-center w-full h-full rounded-full bg-medusa-base-dark/95 px-5 py-1.5 backdrop-blur-md">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.15em] text-white uppercase drop-shadow-md">
                Performans & Ölçeklenme
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground dark:text-white tracking-tight transition-colors duration-300">
            İşletmenizi Büyütecek Yüksek Etkili Çözümler
          </h2>
          <p className="text-lg text-foreground/80 dark:text-white/70 leading-relaxed transition-colors duration-300">
            Ekibinizi operasyonel iş akışlarını hızlandıran, satışları ölçekleyen ve müşteri bağını güçlendiren veriye dayalı stratejilerle donatın.
          </p>
        </div>

        {/* --- BENTO BOX GRID BÖLÜMÜ --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          
          {/* 1. KUTU: Sektör Liderlerinin Tercihi (Top Left) */}
          <div className="md:col-span-6 lg:col-span-4 relative group rounded-[2rem] p-[2px] overflow-hidden shadow-lg min-h-[260px] flex">
            <span className="absolute inset-[-200%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-spark)_25%,var(--color-medusa-base-dark)_50%,var(--color-medusa-purple)_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-full rounded-[calc(2rem-2px)] bg-background/95 dark:bg-[#08020F]/95 backdrop-blur-xl p-8 flex flex-col justify-between border border-foreground/5 dark:border-white/5 transition-colors duration-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-foreground dark:text-white leading-tight">Lider Markaların<br/>Tercihi</h3>
                {/* Avatarlar Yertutucu */}
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#08020F] bg-medusa-purple flex items-center justify-center"><Users className="w-5 h-5 text-white" /></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#08020F] bg-medusa-gold flex items-center justify-center"><TrendingUp className="w-5 h-5 text-white" /></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#08020F] bg-medusa-spark flex items-center justify-center"><Activity className="w-5 h-5 text-black" /></div>
                </div>
              </div>
              <p className="text-foreground/70 dark:text-white/60 text-sm font-light mt-auto">
                Latanwood, Naser Group ve onlarca vizyoner marka dijital dönüşüm operasyonlarında bize güveniyor.
              </p>
            </div>
          </div>

          {/* 2. KUTU: Müşteri Memnuniyeti / ROAS (Top Middle) */}
          <div className="md:col-span-6 lg:col-span-4 relative group rounded-[2rem] p-[2px] overflow-hidden shadow-lg min-h-[260px] flex">
            <span className="absolute inset-[-200%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-gold)_0%,var(--color-medusa-purple)_25%,var(--color-medusa-base-dark)_50%,var(--color-medusa-gold)_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-full rounded-[calc(2rem-2px)] bg-background/95 dark:bg-[#08020F]/95 backdrop-blur-xl p-8 flex flex-col border border-foreground/5 dark:border-white/5 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-5xl font-black text-foreground dark:text-white tracking-tighter">3x</span>
                <span className="text-sm font-medium text-foreground/80 dark:text-white/80 leading-tight">Ortalama<br/>ROAS Artışı</span>
              </div>
              <p className="text-foreground/70 dark:text-white/60 text-sm font-light mt-auto">
                Omnichannel pazarlama stratejilerimiz ve huni (funnel) optimizasyonlarımızla yatırım getirinizi maksimize ediyoruz.
              </p>
            </div>
          </div>

          {/* 3. KUTU: Sağ Kolon Dikey İmaj Kartı (Spans 2 Rows) */}
          <div className="md:col-span-12 lg:col-span-4 lg:row-span-2 relative group rounded-[2rem] p-[2px] overflow-hidden shadow-lg min-h-[400px] lg:min-h-[550px] flex">
            <span className="absolute inset-[-150%] animate-[spin_7s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-spark)_0%,var(--color-medusa-purple)_25%,var(--color-medusa-base-dark)_50%,var(--color-medusa-spark)_100%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-full h-full rounded-[calc(2rem-2px)] overflow-hidden bg-[#08020F]">
              
              {/* Arka Plan Görseli (Şimdilik Yer Tutucu, İstenirse Değiştirilebilir) */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')" }}
              ></div>
              
              {/* İçerik ve Gradient Katmanı */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08020F] via-[#08020F]/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-3 leading-tight">Veriyi Eyleme<br/>Dönüştürün</h3>
                <p className="text-white/70 text-sm font-light mb-8">
                  Sektörel analizler ve dijital sağlık kontrolleriyle ekibinizin her zaman doğru kararı almasını sağlıyoruz.
                </p>
                {/* Aksiyon Butonu */}
                <button className="flex items-center justify-center gap-2 bg-white text-[#08020F] px-6 py-4 rounded-full font-bold hover:bg-medusa-spark hover:text-black transition-all duration-300 w-full sm:w-max group/btn shadow-xl">
                  <span className="bg-medusa-purple text-white p-1 rounded-full group-hover/btn:bg-black transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                  Tüm Çözümleri İncele
                </button>
              </div>
            </div>
          </div>

          {/* 4. KUTU: 360° Omnichannel (Bottom Left - Geniş Kutu) */}
          <div className="md:col-span-7 lg:col-span-5 relative group rounded-[2rem] p-[2px] overflow-hidden shadow-lg min-h-[260px] flex">
            <span className="absolute inset-[-200%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-spark)_25%,var(--color-medusa-base-dark)_50%,var(--color-medusa-purple)_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-full rounded-[calc(2rem-2px)] bg-background/95 dark:bg-[#08020F]/95 backdrop-blur-xl p-8 flex flex-col justify-between border border-foreground/5 dark:border-white/5 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl md:text-5xl font-black text-foreground dark:text-white tracking-tighter">360°</span>
                <span className="text-sm font-medium text-foreground/80 dark:text-white/80 leading-tight">Omnichannel<br/>Ekosistem</span>
              </div>
              <p className="text-foreground/70 dark:text-white/60 text-sm font-light mt-auto max-w-[90%]">
                Fiziksel ve dijital kanallarınızı (Web, Mobil, Sosyal Medya, CRM) tek bir çatı altında birleştirerek kesintisiz ve tutarlı bir müşteri deneyimi (CX) yaratıyoruz.
              </p>
            </div>
          </div>

          {/* 5. KUTU: Dijital Sağlık Kontrolü (Bottom Middle - Dar Kutu) */}
          <div className="md:col-span-5 lg:col-span-3 relative group rounded-[2rem] p-[2px] overflow-hidden shadow-lg min-h-[260px] flex">
            <span className="absolute inset-[-300%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-gold)_0%,var(--color-medusa-purple)_25%,var(--color-medusa-base-dark)_50%,var(--color-medusa-gold)_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-full rounded-[calc(2rem-2px)] bg-background/95 dark:bg-[#08020F]/95 backdrop-blur-xl p-8 flex flex-col justify-between border border-foreground/5 dark:border-white/5 transition-colors duration-500">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground dark:text-white mb-1">Kapsamlı Analiz</h3>
                <p className="text-sm text-medusa-purple dark:text-medusa-gold font-medium">Dijital Sağlık Kontrolü</p>
              </div>
              <div className="mt-auto flex items-end justify-between">
                <span className="text-4xl md:text-5xl font-black text-foreground dark:text-white tracking-tighter">14</span>
                <span className="text-foreground/70 dark:text-white/60 text-sm font-light mb-1">Günde Raporlama</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}