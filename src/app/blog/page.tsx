"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import InnerHero from "../components/InnerHero";
import Badge from "../components/ui/Badge";

// GEÇİCİ BLOG DATASI
const blogPosts = [
  {
    id: 1,
    title: "B2B Büyüme Stratejilerinde Omnichannel'ın Gücü",
    excerpt:
      "Fiziksel ve dijital kanalları tek bir ekosistemde birleştirerek müşteri deneyimini (CX) ve sadakatini nasıl %300 artırabileceğinizi keşfedin.",
    slug: "b2b-buyume-stratejilerinde-omnichannelin-gucu",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Performans Pazarlamasında Veri Odaklı Dönüşüm",
    excerpt:
      "Sadece bütçe harcamak yerine, anlamlı verileri (Data-Driven) kullanarak ROAS (Reklam Harcamalarının Getirisi) oranlarınızı nasıl maksimize edersiniz?",
    slug: "performans-pazarlamasinda-veri-odakli-donusum",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Geleceğin Arayüzleri: 2027 UI/UX Trendleri",
    excerpt:
      "Kullanıcıların dijital varlıklarınızla olan etkileşimini artırmak için nöromarketing ve yapay zeka destekli yeni nesil tasarım prensipleri.",
    slug: "gelecegin-arayuzleri-2027-ui-ux-trendleri",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <main className="w-full min-h-screen bg-background">
      {/* 1. INNER HERO COMPONENTİ */}
      <InnerHero
        title="Dijital"
        accentTitle="İçerik Merkezi"
        description="Sektörel analizler, dijital büyüme stratejileri ve teknoloji dünyasındaki en son trendleri uzman ekibimizin kaleminden keşfedin."
      />

      {/* 2. BLOG LİSTESİ SECTION */}
      <section className="relative w-full py-24 z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          {/* Badge ve Başlık Alanı */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 space-y-4">
            <Badge text="Bloglar" className="mb-8" />
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              En Güncel Yazılarımız
            </h2>
          </div>

          {/* Yatay Blog Kartları Listesi */}
          <div className="flex flex-col gap-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <Link href={`/blog/${post.slug}`} className="block w-full outline-none">
                  
                  {/* DIŞ ÇERÇEVE (Referans Görseldeki Gradient ve Yuvarlaklık) */}
                  <div className="relative overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-br from-white/80 via-white/30 to-[#853ec7] shadow-lg hover:shadow-[0_15px_40px_rgba(133,62,199,0.25)] transition-all duration-500 hover:-translate-y-1">
                    
                    {/* İÇ ZEMİN (Kapsül Yapısı) */}
                    <div className="relative z-10 flex flex-col md:flex-row bg-[#080312] rounded-[31px] p-3 sm:p-4 gap-6 md:gap-10 h-full">
                      
                      {/* Sol: Görsel Alanı (İçeriden Boşluklu ve Köşeleri Yuvarlatılmış) */}
                      <div className="relative w-full md:w-[35%] aspect-square  rounded-[24px] overflow-hidden shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover filter  opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        />
                      </div>

                      {/* Sağ: İçerik Alanı (Minimal Tipografi) */}
                      <div className="relative w-full md:w-[65%] flex flex-col justify-center py-4 md:py-8 pr-4 sm:pr-8">
                        
                        {/* Başlık */}
                        <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white mb-5 transition-colors duration-300">
                          {post.title}
                        </h3>

                        {/* Özet (Excerpt) */}
                        <p className="font-sans text-white/60 text-base md:text-[17px] leading-relaxed font-light mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Aksiyon: Devamını Oku (Görseldeki "Continue Read ->" Stili) */}
                        <div className="mt-auto flex items-center gap-2 text-[15px] font-sans font-medium text-white transition-colors duration-300">
                          Devamını Oku
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                        </div>

                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}