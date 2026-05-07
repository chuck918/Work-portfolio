"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag, Share2 } from "lucide-react";
import Link from "next/link";
import { posts } from "@/lib/data";

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-8">Article Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">Back to Journal</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <article className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb / Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[10px] uppercase tracking-[4px] font-bold text-black/40 hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} /> Back to Journal
          </button>
        </motion.div>

        {/* Header */}
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-6 mb-8">
              <span className="px-3 py-1 bg-zinc-100 text-[10px] uppercase tracking-[2px] font-bold text-primary">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-black/30 text-[10px] uppercase tracking-[2px] font-bold">
                <Clock size={12} />
                <span>5 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-light tracking-tight leading-tight mb-12 text-black">
              {post.title}
            </h1>

            <div className="flex items-center justify-between py-8 border-y border-black/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-100 overflow-hidden">
                  <img src="/images/img_bg_1.jpg" alt="Author" className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[2px] font-bold text-black">By Nazir Architectural Team</p>
                  <p className="text-[10px] uppercase tracking-[1px] text-black/30">{post.date}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Feature Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mb-24 aspect-[21/9] overflow-hidden"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>

        {/* Body Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="prose prose-zinc prose-lg max-w-none"
        >
          <div className="text-black/70 text-xl font-light leading-relaxed space-y-12">
            {post.content.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          
          {/* Quote Block Placeholder */}
          <blockquote className="my-24 pl-12 border-l-4 border-primary italic text-3xl font-serif text-black/20">
            "Architecture should speak of its time and place, but yearn for timelessness."
          </blockquote>

          <div className="text-black/70 text-xl font-light leading-relaxed space-y-12">
            <p>
              As we continue to iterate on these concepts, the role of the architect evolves from a master builder to a curator of experiences and a steward of the environment. The future of design is not just about the buildings we leave behind, but the legacy of health and harmony they provide for generations to come.
            </p>
          </div>
        </motion.div>

        {/* Tags */}
        <div className="mt-24 pt-12 border-t border-black/5 flex items-center gap-4">
          <Tag size={16} className="text-black/20" />
          <div className="flex gap-4">
            {["Architecture", "Innovation", "Sustainability"].map((tag) => (
              <span key={tag} className="text-[10px] uppercase tracking-[2px] font-bold text-black/40 hover:text-primary cursor-pointer transition-colors">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Recommended Posts */}
      <section className="mt-48 bg-zinc-50 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-light tracking-tight">More from <span className="text-black/20 italic font-serif">Journal.</span></h2>
            <Link href="/blog" className="text-[10px] uppercase tracking-[4px] font-bold border-b border-black/10 hover:border-black transition-all pb-2">View All</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.slice(0, 2).map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex gap-8">
                <div className="w-1/3 aspect-square overflow-hidden bg-black shrink-0">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-primary text-[10px] uppercase tracking-[2px] font-bold mb-2">{p.category}</span>
                  <h4 className="text-xl font-light leading-tight group-hover:text-primary transition-colors">{p.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
