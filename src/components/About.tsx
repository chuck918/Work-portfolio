"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const About = () => {
  return (
    <section className="py-32 px-6 md:px-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          {/* Image with Reveal */}
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            className="lg:w-1/2 relative aspect-[4/5] w-full overflow-hidden"
          >
            <motion.div
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              className="w-full h-full bg-cover bg-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
              style={{ backgroundImage: "url(/images/img_bg_2.jpg)" }}
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/10 -z-10" />
          </motion.div>

          {/* Content */}
          <div className="lg:w-1/2 space-y-12">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[8px] text-primary mb-6 block font-bold">
                Experience
              </span>
              <h2 className="text-4xl md:text-6xl font-light mb-12 tracking-tight text-black leading-tight">
                Architectural Vision <br />
                <span className="text-black/30">Redefined.</span>
              </h2>
              
              <div className="space-y-8 text-black/60 text-lg font-light leading-relaxed max-w-xl">
                <p>
                  At Nazir, we believe that architecture is more than just building structures; it's about creating environments that inspire and endure.
                </p>
                <p>
                  With over a decade of experience, our team combines technical expertise with creative vision to deliver spaces that are both functional and breathtaking. We approach every project with a commitment to quality and sustainability.
                </p>
              </div>
            </motion.div>

            {/* Premium Stats/Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-black/5">
              {[
                { label: "Design", value: "Pure" },
                { label: "Quality", value: "Elite" },
                { label: "Process", value: "Smart" },
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="space-y-2"
                >
                  <p className="text-[10px] uppercase tracking-[3px] font-bold text-black/30">{step.label}</p>
                  <p className="text-2xl font-light text-black">{step.value}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-8"
            >
              <a href="/about" className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[4px] font-bold group">
                Discover our story 
                <span className="w-12 h-[1px] bg-black group-hover:w-16 transition-all duration-500" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
