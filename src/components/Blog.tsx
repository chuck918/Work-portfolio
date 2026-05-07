"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { posts } from "@/lib/data";

export const Blog = () => {
  return (
    <section className="py-32 px-6 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[8px] text-primary mb-6 block font-bold">
              Journal
            </span>
            <h2 className="text-4xl md:text-7xl font-light tracking-tight leading-none text-black">
              Latest <br />
              <span className="text-black/20 italic font-serif">Insights.</span>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/blog" className="text-[10px] uppercase tracking-[4px] font-bold text-black border-b border-black/10 hover:border-black transition-colors py-2">
              View Publication
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden mb-8 aspect-[4/5] bg-[#fafafa]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
              </Link>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[3px] text-black/30 font-bold">
                  <span>{post.date}</span>
                  <span className="w-8 h-[1px] bg-black/10" />
                  <span className="text-primary">{post.category}</span>
                </div>
                <h3 className="text-2xl font-light leading-tight group-hover:text-primary transition-colors duration-500">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-black/50 text-base font-light leading-relaxed line-clamp-3">
                  {post.desc}
                </p>
                <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Link href={`/blog/${post.slug}`} className="text-[10px] uppercase tracking-[4px] font-bold flex items-center gap-2">
                    Read Article <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
