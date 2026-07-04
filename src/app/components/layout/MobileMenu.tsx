// components/layout/MobileMenu.tsx
"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Menü açıkken arkadaki sayfanın kaydırılmasını (scroll) engelleriz
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = ["Anasayfa", "Hakkımızda", "Hizmetler", "Fiyatlandırma", "Blog"];

  return (
    <>
      {/* Karanlık Arka Plan Katmanı (Overlay) */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Menü Paneli (Sağdan kayarak gelen akışkan panel) */}
      <div 
        className={`fixed top-0 right-0 w-[85vw] sm:w-[350px] h-full bg-background dark:bg-medusa-base-dark border-l border-foreground/10 dark:border-white/10 z-[70] transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Üst Bar (Kurumsal İsim ve Kapatma Butonu) */}
        <div className="flex items-center justify-between p-6 border-b border-foreground/5 dark:border-white/5">
          <span className="font-heading font-bold text-lg text-foreground dark:text-white tracking-widest uppercase">
            MEDUSAGLOBAL
          </span>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-foreground/5 dark:bg-white/5 flex items-center justify-center hover:bg-medusa-purple/20 transition-colors group"
            aria-label="Menüyü Kapat"
          >
            <X className="w-5 h-5 text-foreground dark:text-white group-hover:text-medusa-purple transition-colors" />
          </button>
        </div>

        {/* Navigasyon Linkleri (Hover efektli ve oklu) */}
        <nav className="flex-1 flex flex-col py-8 px-6 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={onClose}
              className="group flex items-center justify-between py-4 border-b border-foreground/5 dark:border-white/5 text-lg font-medium text-foreground/80 dark:text-white/80 hover:text-medusa-purple dark:hover:text-medusa-spark transition-colors"
            >
              <span>{item}</span>
              <span className="text-medusa-purple dark:text-medusa-spark opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                →
              </span>
            </a>
          ))}
        </nav>

        {/* Alt Kısım (Hızlı İletişim / CTA) */}
        <div className="p-6 border-t border-foreground/5 dark:border-white/5 bg-foreground/5 dark:bg-white/5">
          <p className="text-xs font-bold text-medusa-purple dark:text-medusa-spark uppercase tracking-widest mb-4">
            Büyüme Yolculuğu
          </p>
          <a 
            href="mailto:hello@medusaglobal.com"
            onClick={onClose}
            className="flex items-center justify-center w-full py-4 rounded-full bg-[#08020F] dark:bg-white text-white dark:text-[#08020F] font-bold hover:bg-medusa-purple dark:hover:bg-medusa-spark hover:text-white transition-colors"
          >
            Birlikte Değerlendirelim
          </a>
        </div>
      </div>
    </>
  );
}