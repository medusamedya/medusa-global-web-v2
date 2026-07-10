// components/layout/Header.tsx
"use client";

import { ArrowRight, Menu, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu"; // Yeni bileşenimizi içe aktardık
import Link from "next/link";
import GradientButton from "../ui/GradientButton";
import Image from "next/image";

export default function Header() {
  // 1. Durumu 'false' olarak başlat
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // 2. Scroll event'ini güvenli bir şekilde ekle
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. EĞER HATA ALIYORSAN: 'if (!mounted) return null' SİLMELİSİN.
  // Bunun yerine bileşenin ilk render'da varsayılan halini (sabit, statik) göstermesini sağlamalıyız.
  // Header zaten her zaman görünür olmalı, bu yüzden return null; kullanmak DOM'da "sıçramaya" neden olur.

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
              <Image
                src="/Logo.png"
                alt="Logo"
                width={48}
                height={48}
                priority
                className="object-contain"
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
              { name: "Ekibimiz", path: "/team" },
              { name: "Hizmetler", path: "/services" },
              { name: "Çalışmalarımız", path: "/projects" },
              { name: "Blog", path: "/blog" },
              { name: "İletişim", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="font-sans text-[16px] px-4 py-1.5 text-white dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors duration-300 rounded-full hover:bg-black/50 dark:hover:bg-white/10"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT: Theme Toggle, CTA & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <GradientButton
              text="İletişime Geçin"
              paddingClass="px-6 py-2"
              showIcon={false}
            />

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
