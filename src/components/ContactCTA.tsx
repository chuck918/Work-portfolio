"use client";

import React from "react";
import { motion } from "framer-motion";

export const ContactCTA = () => {
  return (
    <section className="py-48 px-6 md:px-24 bg-white relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#fafafa] -z-10 translate-x-1/4 skew-x-12" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-2/3"
          >
            <span className="text-[10px] uppercase tracking-[8px] text-primary mb-6 block font-bold">
              Get in touch
            </span>
            <h2 className="text-5xl md:text-8xl font-light text-black tracking-tight leading-[0.9]">
              Ready to start your <br />
              <span className="text-black/20 italic font-serif">next project?</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/3 space-y-12"
          >
            <p className="text-xl text-black/50 font-light leading-relaxed">
              Let's collaborate to turn your vision into reality. Reach out to discuss your ideas and see how we can help you create something extraordinary.
            </p>
            <button className="group relative px-12 py-6 overflow-hidden bg-black transition-all duration-500">
              <span className="relative z-10 text-[10px] uppercase tracking-[4px] font-bold text-white group-hover:text-black transition-colors duration-500">
                Let's Talk
              </span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
