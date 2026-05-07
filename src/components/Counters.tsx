"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building, Users, Construction, Handshake } from "lucide-react";
import gsap from "gsap";

const stats = [
  { icon: Building, label: "Projects Completed", value: 128 },
  { icon: Users, label: "Happy Clients", value: 84 },
  { icon: Construction, label: "Awards Won", value: 15 },
  { icon: Handshake, label: "Years Experience", value: 12 },
];

export const Counters = () => {
  return (
    <section 
      className="relative py-48 bg-[#0a0a0a] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/images/cover_bg_1.jpg')] bg-cover bg-center bg-fixed opacity-20 grayscale" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-24">
          {stats.map((stat, i) => (
            <CounterItem key={i} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CounterItem = ({ icon: Icon, label, value, index }: { icon: any; label: string; value: number; index: number }) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (isInView && countRef.current) {
      gsap.to(countRef.current, {
        innerText: value,
        duration: 3,
        snap: { innerText: 1 },
        ease: "power4.out",
        delay: index * 0.2,
      });
    }
  }, [isInView, value, index]);

  return (
    <motion.div 
      ref={containerRef} 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 1 }}
      className="text-center space-y-6"
    >
      <div className="text-6xl md:text-8xl font-light text-white tracking-tighter tabular-nums leading-none">
        <span ref={countRef}>0</span>
      </div>
      <div className="h-[1px] w-12 bg-primary/30 mx-auto" />
      <div className="text-[10px] uppercase tracking-[6px] font-bold text-white/30">
        {label}
      </div>
    </motion.div>
  );
};
