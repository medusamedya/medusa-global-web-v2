"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react"; // Calendar ikonunu ekledim
import InnerHero from "../components/InnerHero";
import Badge from "../components/ui/Badge";

// MERKEZİ VERİYİ İÇERİ AKTARIYORUZ
import { blogPosts } from "@/data/blogs"; 

export default function BlogPage() {
  const newestBlogPosts = [...blogPosts].reverse();

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
            {newestBlogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <Link href={`/blog/${post.slug}`} className="block w-full outline-none">
                  
                  {/* DIŞ ÇERÇEVE */}
                  <div className="relative overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-br from-white/80 via-white/30 to-[#853ec7] shadow-lg hover:shadow-[0_15px_40px_rgba(133,62,199,0.25)] transition-all duration-500 hover:-translate-y-1">
                    
                    {/* İÇ ZEMİN */}
                    <div className="relative z-10 flex flex-col md:flex-row bg-[#080312] rounded-[31px] p-3 sm:p-4 gap-6 md:gap-10 h-full">
                      
                      {/* Sol: Görsel Alanı */}
                      <div className="relative w-full md:w-[35%] aspect-square rounded-[24px] overflow-hidden shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover filter opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        />
                      </div>

                      {/* Sağ: İçerik Alanı */}
                      <div className="relative w-full md:w-[65%] flex flex-col justify-center py-4 md:py-8 pr-4 sm:pr-8">
                        
                        {/* YENİ: Tarih Alanı (B2B güveni artırır) */}
                        <div className="flex items-center gap-2 text-medusa-purple-light text-sm font-mono mb-4">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>

                        {/* Başlık */}
                        <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white mb-5 transition-colors duration-300">
                          {post.title}
                        </h3>

                        {/* Özet (Excerpt) - Meta Description'dan çekildi */}
                        <p className="font-sans text-white/60 text-base md:text-[17px] leading-relaxed font-light mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Aksiyon: Devamını Oku */}
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
