"use client";

import React from "react";
import { motion } from "framer-motion";
import { HardHat, PencilRuler, Lamp, Map, Leaf, ShieldCheck } from "lucide-react";

const expertise = [
  {
    icon: HardHat,
    title: "General Constructing",
    desc: "Seamless execution from groundbreaking to final inspection. We manage every technical detail to deliver uncompromising structural integrity.",
  },
  {
    icon: PencilRuler,
    title: "Architectural Design",
    desc: "Conceptualizing spaces that balance form and function. Our designs are rooted in timeless aesthetics and modern efficiency.",
  },
  {
    icon: Lamp,
    title: "Interior Architecture",
    desc: "Crafting bespoke interior environments that reflect personal identity while optimizing ergonomic flow and material luxury.",
  },
  {
    icon: Map,
    title: "Urban Planning",
    desc: "Strategizing large-scale developments that integrate harmoniously with the existing urban fabric and foster community growth.",
  },
  {
    icon: Leaf,
    title: "Sustainable Systems",
    desc: "Implementing passive heating, renewable energy, and low-impact materials to create buildings that give back to the environment.",
  },
  {
    icon: ShieldCheck,
    title: "Project Management",
    desc: "Rigorous oversight of timelines, budgets, and vendors. We ensure your vision is realized without friction or unforeseen costs.",
  },
];

const serviceCards = [
  { image: "/images/services-1.jpg", title: "Design & Build" },
  { image: "/images/services-2.jpg", title: "House Remodeling" },
  { image: "/images/services-3.jpg", title: "Construction Management" },
  { image: "/images/services-4.jpg", title: "Painting & Tiling" },
  { image: "/images/services-5.jpg", title: "Kitchen Remodeling" },
];

export const Services = () => {
  return (
    <section className="py-32 px-6 md:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-[10px] uppercase tracking-[8px] text-primary mb-6 block font-bold text-center lg:text-left">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-black text-center lg:text-left">
            Crafting Excellence <br />
            <span className="text-black/30">Through Precision.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-24">
          {/* Expertise List */}
          <div className="lg:w-1/2 space-y-16">
            {expertise.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group flex gap-8"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-[#fafafa] group-hover:bg-primary transition-colors duration-500 flex items-center justify-center">
                  <item.icon size={32} className="text-black group-hover:text-black transition-colors" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm uppercase tracking-[4px] font-bold mb-4 text-black">
                    {item.title}
                  </h3>
                  <p className="text-black/50 leading-relaxed font-light text-lg">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Service Cards Grid - More dynamic layout */}
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-6 md:gap-12">
              <div className="space-y-6 md:space-y-12">
                {serviceCards.slice(0, 3).map((card, i) => (
                  <ServiceCard key={i} {...card} delay={i * 0.2} />
                ))}
              </div>
              <div className="space-y-6 md:space-y-12 pt-12 md:pt-24">
                {serviceCards.slice(3, 5).map((card, i) => (
                  <ServiceCard key={i} {...card} delay={(i + 3) * 0.2} />
                ))}
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 -z-10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ image, title, delay }: { image: string; title: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className="group relative cursor-pointer overflow-hidden shadow-2xl shadow-black/5"
  >
    <div className="aspect-[3/4] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-white/90 backdrop-blur-sm">
      <h3 className="text-[10px] uppercase tracking-[3px] font-bold text-black text-center">
        {title}
      </h3>
    </div>
  </motion.div>
);
