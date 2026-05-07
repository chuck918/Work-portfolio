"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const slides = [
  {
    image: "/images/img_bg_1.jpg",
    title: "Architectural Excellence",
    subtitle: "Crafting timeless structures that redefine modern living and inspire the soul.",
    link: "#",
  },
  {
    image: "/images/img_bg_2.jpg",
    title: "Interior Innovation",
    subtitle: "Where functionality meets aesthetic perfection in every single detail.",
    link: "#",
  },
  {
    image: "/images/img_bg_3.jpg",
    title: "Sustainable Design",
    subtitle: "Eco-friendly solutions for a greener, brighter, and more resilient future.",
    link: "#",
  },
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          {/* Cinematic Background */}
          <motion.div 
            initial={{ scale: 1.2, x: "-2%" }}
            animate={{ scale: 1, x: "0%" }}
            transition={{ duration: 12, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center grayscale brightness-50"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          
          <div className="relative h-full flex items-center px-6 md:px-24">
            <div className="max-w-7xl mx-auto w-full">
              <div className="relative z-10">
                <motion.div
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-3xl"
                >
                  <span className="text-primary text-[10px] uppercase tracking-[10px] mb-8 block font-bold">
                    Luxury Architecture
                  </span>
                  <h1 className="text-6xl md:text-[9rem] font-light mb-12 text-white tracking-tighter leading-[0.8]">
                    {slides[current].title.split(' ').map((word, i) => (
                      <span key={i} className={cn("inline-block mr-6", i === 1 && "text-white/20 italic font-serif")}>
                        {word}
                      </span>
                    ))}
                  </h1>
                  
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 1.5 }}
                      className="text-xl md:text-2xl font-light text-white/50 max-w-lg leading-relaxed"
                    >
                      {slides[current].subtitle}
                    </motion.p>
                    
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.2, duration: 1 }}
                    >
                      <button className="group relative px-12 py-6 overflow-hidden border border-white/20 hover:border-white transition-colors duration-500">
                        <span className="relative z-10 text-[10px] uppercase tracking-[4px] font-bold text-white group-hover:text-black transition-colors duration-500">
                          Explore Works
                        </span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-12 right-12 flex items-center gap-8 z-20">
        <div className="flex gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className="group relative py-4"
            >
              <div className={`h-[2px] w-12 transition-all duration-500 ${
                current === index ? "bg-white" : "bg-white/20 group-hover:bg-white/40"
              }`} />
              <span className={`absolute -top-4 left-0 text-[10px] font-bold transition-all duration-500 ${
                current === index ? "opacity-100 text-white" : "opacity-0"
              }`}>
                0{index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
