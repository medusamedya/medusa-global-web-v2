// components/layout/Header.tsx
"use client";

import { ArrowRight, Menu, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import MobileMenu from "./MobileMenu"; // Yeni bileşenimizi içe aktardık
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobil menü durumu
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Eski useEffect'i sil, yerine bunu ekle:
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isScrolled
            ? "bg-[var(--bg-header)] backdrop-blur-xl border-b border-[var(--border-color)] py-4 shadow-2xl" 
            : "bg-transparent py-6 sm:py-7"
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* LEFT: Logo (Kurumsal Hiyerarşi) */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/Logo.png" 
                alt="Medusa Global Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

         {/* MIDDLE: Pill Menu (Sadece Masaüstü) */}
          <nav
            className={`hidden md:flex items-center rounded-full transition-all duration-500 ease-in-out ${
              isScrolled
                ? "bg-transparent gap-8"
                : "bg-black/30 dark:bg-white/10 backdrop-blur-md px-6 py-2 border border-black/10 dark:border-white/10 gap-2 shadow-lg"
            }`}
          >
            {[
              { name: "Anasayfa", path: "/" },
              { name: "Hakkımızda", path: "/about" },
              { name: "Hizmetler", path: "/services" },
              { name: "Fiyatlandırma", path: "/pricing" },
              { name: "Blog", path: "/blog" },
              { name: "İletişim", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="font-sans text-[13px] px-4 py-1.5 text-white dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-300 rounded-full hover:bg-black/50 dark:hover:bg-white/10"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT: Theme Toggle, CTA & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            
            {/* Header Aksiyon Butonu (Masaüstünde görünür, mobilde gizlenebilir veya kalabilir - şu an görünür) */}
            <div className="hidden sm:inline-flex relative overflow-hidden rounded-full p-[1.5px] group flex-shrink-0 cursor-pointer">
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_100%)] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <button className="font-sans relative z-10 flex items-center justify-center gap-3 bg-[#08020F] text-white px-5 py-2.5 rounded-full font-bold text-[13px] tracking-wide transition-all duration-300 hover:bg-transparent hover:text-white group/btn">
                <span>İletişime Geçin</span>
                <div className="w-6 h-6 rounded-full bg-medusa-purple/10 dark:bg-medusa-spark/20 flex items-center justify-center group-hover:bg-medusa-spark group-hover:rotate-45 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-white group-hover/btn:text-[#08020F] transition-colors" />
                </div>
              </button>
            </div>

            {/* Mobil Hamburger Butonu */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 bg-black/5 dark:bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-black/5 dark:border-white/10 active:scale-95 transition-transform"
            >
              <Menu className="w-5 h-5 text-[#08020F] dark:text-white" />
            </button>
            
          </div>
        </div>
      </header>

      {/* Dışa Aktardığımız Mobil Menü Bileşeni */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}