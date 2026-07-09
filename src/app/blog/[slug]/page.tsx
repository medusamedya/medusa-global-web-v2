"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

// GEÇİCİ DETAY DATASI
const getBlogPostBySlug = (slug: string) => {
  const posts = [
    {
      slug: "b2b-buyume-stratejilerinde-omnichannelin-gucu",
      title: "B2B Büyüme Stratejilerinde Omnichannel'ın Gücü",
      category: "Strateji",
      date: "12 Ekim 2026",
      readTime: "5 dk okuma",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      content: `
        <p>Geleneksel B2B pazarlaması, dijitalleşmenin hız kazanmasıyla birlikte köklü bir değişim geçiriyor. Artık kurumlar, müşterilerine sadece bir ürün veya hizmet değil, <strong>kesintisiz ve uçtan uca bir deneyim (CX)</strong> sunmak zorunda.</p>
        <h2>Neden Omnichannel?</h2>
        <p>Omnichannel (Çoklu Kanal) yaklaşımı, fiziksel toplantılardan web sitesi ziyaretlerine, sosyal medya etkileşimlerinden CRM verilerine kadar tüm temas noktalarının birbiriyle konuşmasını sağlar. Müşteri, hangi kanaldan gelirse gelsin markanızla olan yolculuğuna kaldığı yerden devam eder.</p>
        <blockquote>"Başarılı bir dijital dönüşüm, teknolojiyi bir amaç olarak değil, pürüzsüz müşteri deneyimi yaratmak için bir araç olarak kullanmaktan geçer."</blockquote>
        <p>Medusa Global olarak yürüttüğümüz son projelerde, omnichannel stratejisini benimseyen markaların Müşteri Yaşam Boyu Değeri (LTV) metriklerinde %300'e varan artışlar gözlemledik. Veriyi merkezde tutan, tasarımı insan odaklı kurgulayan bu ekosistem, sürdürülebilir büyümenin en temel anahtarıdır.</p>
      `,
    },
  ];

  return posts.find((p) => p.slug === slug) || posts[0];
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  return (
    <main className="w-full min-h-screen bg-background pb-24">
      
      {/* =========================================
          1. SİNEMATİK HERO (KAPAK) ALANI
          ========================================= */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end justify-center overflow-hidden">
        {/* Arka Plan Görseli */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover filter grayscale opacity-40"
            priority
          />
          {/* Görseli arkaplana eriten kurumsal gradientler */}
          <div className="absolute inset-0 bg-medusa-primary/40 mix-blend-color" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        {/* Hero İçeriği (Başlık ve Meta) */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-4xl pb-16">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Geri Dönüş Butonu */}
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-medusa-text-secondary hover:text-foreground transition-colors duration-300 mb-8 font-sans text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> Tüm Makalelere Dön
            </Link>

           

            {/* Yazı Başlığı */}
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              {post.title}
            </h1>

            {/* Tarih ve Okuma Süresi */}
            <div className="flex items-center gap-6 text-medusa-text-secondary text-sm font-sans">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-medusa-purple-light" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-medusa-purple-light" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          2. OKUMA ALANI VE İÇERİK
          ========================================= */}
      <section className="relative w-full z-10 -mt-8">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sol Taraf: Sosyal Paylaşım (Sticky) */}
            <div className="hidden lg:block w-16 flex-shrink-0">
              <div className="sticky top-32 flex flex-col items-center gap-4">
                <span className="font-sans text-[10px] uppercase tracking-widest text-medusa-text-muted mb-2 rotate-180" style={{ writingMode: 'vertical-rl' }}>
                  Paylaş
                </span>
                <div className="w-[1px] h-12 bg-medusa-border/30 mb-2" />
                <Share2 className="w-4 h-4 text-medusa-text-secondary hover:text-medusa-purple-light cursor-pointer transition-colors duration-300" />
              </div>
            </div>

            {/* Sağ Taraf: Metin İçeriği */}
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full font-sans text-medusa-text-secondary text-lg leading-relaxed space-y-8 pb-16
                /* Özel HTML Tag Stilleri - Yeni Temaya Uygun */
                [&>p]:text-medusa-text-secondary [&>p]:leading-loose
                [&>h2]:font-heading [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-12 [&>h2]:mb-6
                [&>h3]:font-heading [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-foreground [&>h3]:mt-10 [&>h3]:mb-4
                [&>strong]:text-foreground [&>strong]:font-semibold
                [&>blockquote]:border-l-4 [&>blockquote]:border-medusa-purple-light [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-8 [&>blockquote]:text-xl [&>blockquote]:font-sans [&>blockquote]:italic [&>blockquote]:text-foreground/90
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
          </div>
        </div>
      </section>

    </main>
  );
}