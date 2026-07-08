"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import InnerHero from "../components/InnerHero";

// GEÇİCİ BLOG DATASI (İleride bir CMS'den veya veritabanından gelecek)
const blogPosts = [
  {
    id: 1,
    title: "B2B Büyüme Stratejilerinde Omnichannel'ın Gücü",
    excerpt: "Fiziksel ve dijital kanalları tek bir ekosistemde birleştirerek müşteri deneyimini (CX) ve sadakatini nasıl %300 artırabileceğinizi keşfedin.",
    category: "Strateji",
    date: "12 Ekim 2026",
    readTime: "5 dk okuma",
    // Linkin gideceği adres (slug)
    slug: "b2b-buyume-stratejilerinde-omnichannelin-gucu",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Performans Pazarlamasında Veri Odaklı Dönüşüm",
    excerpt: "Sadece bütçe harcamak yerine, anlamlı verileri (Data-Driven) kullanarak ROAS (Reklam Harcamalarının Getirisi) oranlarınızı nasıl maksimize edersiniz?",
    category: "Pazarlama",
    date: "28 Eylül 2026",
    readTime: "4 dk okuma",
    slug: "performans-pazarlamasinda-veri-odakli-donusum",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Geleceğin Arayüzleri: 2027 UI/UX Trendleri",
    excerpt: "Kullanıcıların dijital varlıklarınızla olan etkileşimini artırmak için nöromarketing ve yapay zeka destekli yeni nesil tasarım prensipleri.",
    category: "Tasarım",
    date: "15 Eylül 2026",
    readTime: "6 dk okuma",
    slug: "gelecegin-arayuzleri-2027-ui-ux-trendleri",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
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
           <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="relative inline-flex overflow-hidden rounded-full p-[1px] shadow-sm mb-6">
            {/* Sürekli dönen arka plan (Mor ve Spark Işığı) */}
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-medusa-purple)_0%,var(--color-medusa-purple)_40%,var(--color-medusa-spark)_50%,var(--color-medusa-purple)_60%,var(--color-medusa-purple)_100%)] opacity-80" />

            {/* İç Zemin ve Metin */}
            <div className="relative z-10 inline-flex items-center justify-center w-full h-full rounded-full bg-medusa-base-dark/95 px-4 py-1.5 backdrop-blur-md">
              <span className="font-sans text-sm font-semibold tracking-wide text-white drop-shadow-md">
                Bloglar
              </span>
            </div>
          </div>
           <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
  En Güncel <span className="text-transparent bg-clip-text bg-gradient-to-r from-medusa-purple via-medusa-spark to-medusa-purple animate-text-shine inline-block">Yazılarımız</span>
</h2>
          </div>

          {/* Yatay Blog Kartları Listesi */}
          <div className="flex flex-col gap-8 sm:gap-12">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Link ile tüm kartı tıklanabilir yapıyoruz. Href'e slug'ı veriyoruz */}
                <Link href={`/blog/${post.slug}`} className="block w-full">
                  
                  {/* Yatay Kart Yapısı (Desktop'ta yan yana, Mobilde alt alta) */}
                  <div className="relative z-10 flex flex-col md:flex-row bg-[#0A0314]/60 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-medusa-purple/50 transition-colors duration-500">
                    
                    {/* Sol: Görsel Alanı */}
                    <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                      <Image 
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                      {/* Üzerindeki Kategori Etiketi */}
                      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full z-20">
                        <span className="font-sans text-xs font-medium text-medusa-spark uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Sağ: İçerik Alanı */}
                    <div className="relative w-full md:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
                      
                      {/* Tarih ve Okuma Süresi */}
                      <div className="flex items-center gap-4 text-white/50 text-sm font-sans mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Başlık */}
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-medusa-purple group-hover:to-medusa-spark transition-all duration-300">
                        {post.title}
                      </h3>

                      {/* Özet (Excerpt) */}
                      <p className="font-sans text-white/60 text-base leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Okumaya Devam Et Butonu */}
                      <div className="mt-auto flex items-center gap-2 text-sm font-bold text-white group-hover:text-medusa-spark transition-colors duration-300">
                        Makaleyi Oku 
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
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