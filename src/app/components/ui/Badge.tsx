import React from "react";

interface BadgeProps {
  text: string;
  className?: string; // İhtiyaç anında dışarıdan margin (mb-8 vb.) verebilmek için
}

export default function Badge({ text, className = "" }: BadgeProps) {
  return (
    <div className={`relative inline-flex overflow-hidden rounded-full p-[1px] shadow-lg ${className}`}>
      
      {/* Çerçeve Parlaması: 
        Kenarlara çok daha parlak ve patlayan bir mor (#A855F7) eklendi.
        Tam orta nokta ise keskin beyaz (via-white).
      */}
      <span className="absolute inset-0 bg-gradient-to-r from-[#A855F7] via-white to-[#853ec7]" />
      
      {/* İç Zemin ve Metin */}
      <div className="relative z-10 inline-flex items-center justify-center rounded-full bg-[#24183E] px-5 py-1.5 backdrop-blur-md">
        <span className="font-sans text-xs sm:text-[13px] font-medium tracking-wide text-white drop-shadow-md">
          {text}
        </span>
      </div>
      
    </div>
  );
}