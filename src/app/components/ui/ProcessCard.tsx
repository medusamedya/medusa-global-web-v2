import React from "react";

export interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  tag?: string; // İsteğe bağlı (Örn: Expectations section'da kullanılmayabilir)
  className?: string; // Dışarıdan ekstra margin/padding vermek için
}

export default function ProcessCard({
  number,
  title,
  description,
  tag,
  className = "",
}: ProcessCardProps) {
  return (
    <div
      className={`relative h-full overflow-hidden rounded-[2rem] p-[2px] group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(61,10,107,0.3)] ${className}`}
    >
      {/* Dönen Border Katmanı (Yeni Medusa Renkleri) */}
      <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-secondary)_0%,var(--color-medusa-purple-light)_25%,var(--color-medusa-primary)_50%,var(--color-medusa-secondary)_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Kart İçeriği / Maske */}
      <div className="relative z-10 h-full rounded-[calc(2rem-2px)] bg-medusa-surface-1/95 backdrop-blur-xl p-8 flex flex-col items-start border border-medusa-border/20 transition-colors duration-500">
        
        {/* Üst Köşe Parlama Efekti (Hover Durumunda Aktif Olur) */}
        <div className="absolute inset-0 rounded-[calc(2rem-2px)] bg-gradient-to-br from-medusa-purple-light/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Tag / Kategori (Eğer tag gönderilmişse render edilir) */}
        {tag && (
          <span className="font-sans text-xs md:text-sm font-bold tracking-widest text-medusa-purple-light mb-4 transition-colors duration-300">
            {tag}
          </span>
        )}

        {/* Numara ve Başlık Alanı */}
        <div className="relative w-full mb-4 flex items-baseline">
          {/* Dev Arka Plan Numarası */}
          <span className="absolute -left-2 -top-10 font-heading text-7xl md:text-8xl font-black text-foreground/[0.04] select-none group-hover:text-medusa-purple-light/10 transition-colors duration-500">
            {number}
          </span>

          {/* Sütun Başlığı */}
          <h3 className="relative z-10 font-heading text-xl md:text-2xl font-bold text-foreground transition-colors duration-300 pl-1">
            {title}
          </h3>
        </div>

        {/* Açıklama Metni */}
        <p className="font-sans text-sm md:text-[15px] text-medusa-text-secondary leading-relaxed font-light transition-colors duration-300 group-hover:text-foreground mt-auto">
          {description}
        </p>
      </div>
    </div>
  );
}