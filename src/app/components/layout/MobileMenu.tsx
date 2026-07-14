// components/layout/MobileMenu.tsx
"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link"; // Next.js'in hızlı sayfa geçişi için eklendi
import GradientButton from "../ui/GradientButton";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Masaüstü (Header) menüsü ile birebir senkronize edilmiş rota yapısı
const menuItems = [
  { name: "Anasayfa", path: "/" },
  { name: "Hakkımızda", path: "/about" },
  //{ name: "Ekibimiz", path: "/team" },
  { name: "Hizmetler", path: "/services" },
  //{ name: "Çalışmalarımız", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "İletişim", path: "/contact" },
];

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
        className={`fixed top-0 right-0 w-[85vw] sm:w-[350px] h-full bg-background border-l border-foreground/10 z-[70] transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Üst Bar (Kurumsal İsim ve Kapatma Butonu) */}
        <div className="flex items-center justify-between p-6 border-b border-foreground/5">
          <span className="font-heading font-bold text-lg text-foreground tracking-widest uppercase">
            MEDUSAGLOBAL
          </span>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-medusa-secondary/20 transition-colors group"
            aria-label="Menüyü Kapat"
          >
            <X className="w-5 h-5 text-foreground group-hover:text-medusa-purple-light transition-colors" />
          </button>
        </div>

        {/* Navigasyon Linkleri (Hover efektli ve oklu) */}
        <nav className="flex-1 flex flex-col py-8 px-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={onClose}
              className="group flex items-center justify-between py-4 border-b border-foreground/5 text-lg font-medium text-foreground/80 hover:text-medusa-purple-light transition-colors"
            >
              <span>{item.name}</span>
              <span className="text-medusa-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                →
              </span>
            </Link>
          ))}
        </nav>

        {/* Alt Kısım (Hızlı İletişim / CTA) */}
        <div className="p-6 border-t border-medusa-border/20 bg-medusa-surface-1/50">
          <Link 
            href="/contact"
            onClick={onClose}
            className="block w-full"
          >
            {/* Esnek padding ve tam genişlik özelliğiyle butonumuz */}
            <GradientButton 
              text="Birlikte Değerlendirelim" 
              className="w-full" 
              paddingClass="py-3 w-full" 
            />
          </Link>
        </div>
      </div>
    </>
  );
}