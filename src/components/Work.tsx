"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { projects } from "@/lib/data";

export const Work = () => {
  // Split projects into 3 columns for desktop masonry
  const column1 = projects.filter((_, i) => i % 3 === 0);
  const column2 = projects.filter((_, i) => i % 3 === 1);
  const column3 = projects.filter((_, i) => i % 3 === 2);

  return (
    <section className="py-32 px-6 md:px-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[8px] text-primary mb-6 block font-bold"
            >
              Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-light tracking-tight leading-none text-white"
            >
              <span className="text-white">Selected</span> <br />
              <span className="text-white/20 italic font-serif">Works.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:text-right max-w-sm"
          >
            <p className="text-white/40 font-light text-lg leading-relaxed">
              A curated collection of architectural projects that push the boundaries of design and sustainability.
            </p>
          </motion.div>
        </div>

        {/* Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-8">
            {column1.map((project, i) => (
              <ProjectCard key={project.id} {...project} index={i * 3} />
            ))}
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col gap-8 lg:mt-16">
            {column2.map((project, i) => (
              <ProjectCard key={project.id} {...project} index={i * 3 + 1} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-8 lg:mt-32">
            {column3.map((project, i) => (
              <ProjectCard key={project.id} {...project} index={i * 3 + 2} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <Link href="/work" className="group relative px-12 py-6 overflow-hidden border border-white/10 hover:border-white transition-colors duration-500">
            <span className="relative z-10 text-[10px] uppercase tracking-[4px] font-bold text-white group-hover:text-black transition-colors duration-500">View All Projects</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ id, slug, title, category, image, aspectRatio, index }: { id: string; slug: string; title: string; category: string; image: string; aspectRatio: string; index: number }) => {
  return (
    <Link href={`/work/${slug}`} className="block w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          delay: (index % 3) * 0.1, 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        className={cn(
          "group relative overflow-hidden bg-zinc-900",
          aspectRatio
        )}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2.5s] ease-out group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
        
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]">
            <span className="text-primary text-[10px] uppercase tracking-[4px] font-bold mb-4 block">
              Project {id}
            </span>
            <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-2 leading-tight">
              {title}
            </h3>
            <p className="text-white/40 text-[10px] uppercase tracking-[2px] mb-6">{category}</p>
          </div>
          
          <div className="h-[1px] w-0 group-hover:w-full bg-primary/40 transition-all duration-1000 delay-100" />
          
          <div className="flex justify-between items-center mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
            <p className="text-white/60 text-[10px] uppercase tracking-[4px] font-bold">Explore</p>
            <ArrowRight className="text-white/60 group-hover:text-primary transition-colors" size={18} />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};


