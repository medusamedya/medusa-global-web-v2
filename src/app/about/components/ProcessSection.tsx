"use client";

import React from "react";
import Badge from "@/app/components/ui/Badge";
import ProcessCard from "@/app/components/ui/ProcessCard"; // Dosya yolunu kendi klasör yapına göre düzelt

interface ProcessItem {
  id: number;
  tag: string;
  title: string;
  description: string;
}

// 3 Vurucu soruyu kartlara bölüyoruz
const processData: ProcessItem[] = [
  {
    id: 1,
    tag: "ODAK",
    title: "Müşteri Perspektifi",
    description: '"Bu, müşterinizin gözünde neyi değiştiriyor?"',
  },
  {
    id: 2,
    tag: "ETKİ",
    title: "Aksiyon ve Sonuç",
    description:
      '"Buradaki aksiyon işe mi yarıyor, yoksa yalnızca yer mi kaplıyor?"',
  },
  {
    id: 3,
    tag: "ÇÖZÜM",
    title: "Kök Neden",
    description: '"Asıl tıkanan noktayı bulalım, gerisi çözülür."',
  },
];

export default function ProcessSection() {
  return (
    <section className="relative w-full py-24 bg-background transition-colors duration-500 overflow-hidden border-t border-medusa-border/20">
      <div className="container mx-auto px-6 relative z-10">
        {/* --- ÜST BAŞLIK VE AÇIKLAMA --- */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-4 space-y-6">
          <Badge text="Peki, bizimle çalışınca ne oluyor?" className="mb-4" />

          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-wide">
            Bir tedarikçi ile yola çıkmış olmazsınız;{" "}
            <br className="hidden md:block" />
            bir <span className="text-[#ef6906] italic">ortak</span>{" "}
            edinirsiniz.
          </h2>

          <p className="font-sans  text-normal md:text-lg text-medusa-text-secondary">
            Süslü lafın, gösterişten ibaret rakamların ve raftan indirilmiş
            hazır planların yeri yok. Bunun yerine: neyin tıkandığına dair açık
            bir teşhis, onu açacak bir yol haritası ve markanızı en az sizin
            kadar sahiplenen bir ekip.
          </p>

          <p className="font-heading text-lg font-bold text-foreground mt-8">
            Bunları sormayı severiz:
          </p>
        </div>

        {/* --- 3'LÜ SORU KARTLARI (GRID) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {processData.map((item) => (
            <ProcessCard
              key={item.id}
              title={item.title}
              description={item.description}
              tag={item.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
