"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";

type BlogPost = {
  title: string;
  date: string;
  image: string;
  content: string;
};

export default function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <main className="w-full min-h-screen bg-background pb-24">
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={post.image} alt={post.title} fill className="object-cover filter grayscale opacity-40" priority />
          <div className="absolute inset-0 bg-medusa-primary/40 mix-blend-color" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-4xl pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-medusa-text-secondary hover:text-foreground transition-colors duration-300 mb-8 font-sans text-sm font-medium">
              <ArrowLeft className="w-4 h-4" /> Tüm Makalelere Dön
            </Link>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-medusa-text-secondary text-sm font-sans">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-medusa-purple-light" />
                <span>{post.date}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative w-full z-10 -mt-8">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="hidden lg:block w-16 flex-shrink-0">
              <div className="sticky top-32 flex flex-col items-center gap-4">
                <span className="font-sans text-[10px] uppercase tracking-widest text-medusa-text-muted mb-2 rotate-180" style={{ writingMode: "vertical-rl" }}>
                  Paylaş
                </span>
                <div className="w-[1px] h-12 bg-medusa-border/30 mb-2" />
                <Share2 className="w-4 h-4 text-medusa-text-secondary hover:text-medusa-purple-light cursor-pointer transition-colors duration-300" />
              </div>
            </div>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full font-sans text-medusa-text-secondary text-lg leading-relaxed space-y-8 pb-16
                [&>p]:text-medusa-text-secondary [&>p]:leading-loose
                [&>h2]:font-heading [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-12 [&>h2]:mb-6
                [&>h3]:font-heading [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-foreground [&>h3]:mt-10 [&>h3]:mb-4
                [&_strong]:text-foreground [&_strong]:font-semibold
                [&>blockquote]:border-l-4 [&>blockquote]:border-medusa-purple-light [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-8 [&>blockquote]:text-xl [&>blockquote]:font-sans [&>blockquote]:italic [&>blockquote]:text-foreground/90"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
