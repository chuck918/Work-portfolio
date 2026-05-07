"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, User, Maximize } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-8">Project Not Found</h1>
          <Link href="/work" className="text-primary hover:underline">Back to Work</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Immersive Hero */}
      <section className="relative h-[90vh] overflow-hidden bg-black">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Navigation */}
        <div className="absolute top-32 left-6 md:left-24 z-10">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-4 text-[10px] uppercase tracking-[4px] font-bold text-white group"
          >
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all duration-500">
              <ArrowLeft size={16} />
            </div>
            Back to projects
          </button>
        </div>

        {/* Hero Title */}
        <div className="absolute bottom-24 left-6 md:left-24 right-6 md:right-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="text-primary text-xs uppercase tracking-[8px] font-bold mb-6 block">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-8xl font-light text-white tracking-tighter leading-none max-w-4xl">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="py-24 px-6 md:px-24 border-b border-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { icon: MapPin, label: "Location", value: project.location },
            { icon: User, label: "Client", value: project.client },
            { icon: Calendar, label: "Year", value: project.year },
            { icon: Maximize, label: "Area", value: project.area },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-black/30">
                <item.icon size={14} />
                <span className="text-[10px] uppercase tracking-[2px] font-bold">{item.label}</span>
              </div>
              <p className="text-lg font-light text-black">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">
            <div className="lg:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-12 text-black"
              >
                Vision & <br />
                <span className="text-black/20 italic font-serif">Narrative.</span>
              </motion.h2>
              <div className="space-y-8 text-black/60 text-xl font-light leading-relaxed">
                <p>{project.description}</p>
                <p>{project.content}</p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
               {/* Large Decorative Image/Gallery Placeholder */}
               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.2 }}
                 className="aspect-[4/5] bg-zinc-100 overflow-hidden"
               >
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover scale-110 rotate-3 grayscale"
                 />
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-zinc-50 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-24 text-center">
          <h3 className="text-4xl md:text-6xl font-light mb-12 tracking-tight">Have a project in mind?</h3>
          <Link 
            href="/contact" 
            className="inline-flex px-12 py-6 bg-black text-white text-[10px] uppercase tracking-[4px] font-bold hover:bg-primary hover:text-black transition-all duration-500"
          >
            Let's build together
          </Link>
        </div>
      </section>
    </main>
  );
}
