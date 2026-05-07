"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Project", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[1001] bg-white border-b border-black/5 py-6 px-6 lg:px-24 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-black uppercase tracking-[6px] hover:text-primary transition-all duration-500"
        >
          Nazir<span className="text-primary">.</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-12">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group relative text-[10px] font-bold uppercase tracking-[4px] transition-all duration-500 py-2",
                      isActive
                        ? "text-primary"
                        : "text-black/40 hover:text-black"
                    )}
                  >
                    {item.label}
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full",
                      isActive && "w-full"
                    )} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="px-8 py-3 bg-black text-white text-[10px] uppercase tracking-[3px] font-bold hover:bg-primary hover:text-black transition-all duration-500"
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-black hover:text-primary transition-all duration-500"
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span className={cn("h-[2px] w-full bg-black transition-all duration-500", isOpen && "rotate-45 translate-y-2")} />
            <span className={cn("h-[2px] w-full bg-black transition-all duration-500", isOpen && "opacity-0")} />
            <span className={cn("h-[2px] w-full bg-black transition-all duration-500", isOpen && "-rotate-45 -translate-y-2")} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[1002] lg:hidden"
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-[1003] lg:hidden flex flex-col p-12 md:p-24 shadow-2xl"
            >
              <div className="mb-24 flex justify-between items-center">
                <span className="text-xl font-bold uppercase tracking-[4px]">Menu</span>
                <button onClick={toggleMenu} className="p-2 text-black hover:text-primary transition-colors">
                  <X size={32} />
                </button>
              </div>
              <ul className="flex flex-col space-y-8">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-4xl font-light tracking-tighter block transition-all duration-500",
                          isActive ? "text-primary translate-x-4" : "text-black/30 hover:text-black hover:translate-x-4"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-auto pt-12 border-t border-black/5">
                <p className="text-[10px] uppercase tracking-[4px] text-black/30 font-bold mb-6">Contact</p>
                <a href="mailto:hello@nazir.com" className="text-2xl font-light hover:text-primary transition-colors block mb-2">
                  hello@nazir.com
                </a>
                <p className="text-black/50">+44 20 7946 0123</p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
