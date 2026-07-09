import React from "react";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string; // Dış kapsayıcı için genel sınıflar (margin vb.)
  paddingClass?: string; // İç zemindeki boşlukları (padding) kontrol etmek için
}

export default function GradientButton({ 
  text, 
  className = "", 
  paddingClass = "px-6 py-2.5 md:px-8 md:py-3", // Daha zarif (slim) varsayılan değerler
  ...props 
}: GradientButtonProps) {
  return (
    <button
      className={`group relative inline-flex overflow-hidden rounded-full p-[1px] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] active:scale-95 focus:outline-none ${className}`}
      {...props}
    >
      {/* Çerçeve Parlaması (Gradient Border) */}
      <span className="absolute inset-0 bg-gradient-to-r from-[#A855F7] via-white to-[#853ec7] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* İç Zemin ve Metin 
          paddingClass prop'u doğrudan buraya uygulanarak iç boşlukları esnek hale getiriyor.
      */}
      <div className={`relative z-10 flex w-full items-center justify-center rounded-full bg-[#24183E] backdrop-blur-md transition-colors duration-300 group-hover:bg-[#2c1d4b] ${paddingClass}`}>
        <span className="font-sans text-[14px] sm:text-[15px] font-normal tracking-wide text-white drop-shadow-md">
          {text}
        </span>
      </div>
    </button>
  );
}