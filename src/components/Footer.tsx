"use client";

import React from "react";
import Link from "next/link";
import { Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/5 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Copyright */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-[2px]">Nazir</h3>
            <p className="text-black/50 text-sm max-w-xs">
              Inspiring built spaces through modern architecture and minimalist design.
            </p>
            <p className="text-xs text-black/40 uppercase tracking-widest pt-4">
              &copy; 2026 Nazir. All rights reserved.
            </p>
          </div>

          {/* Navigation Links (Quick Access) */}
          <div className="flex flex-wrap justify-center gap-8 text-xs font-semibold uppercase tracking-[1px] text-black/60">
            <Link href="/work" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <p className="text-xs text-black/40 uppercase tracking-widest">Connect with us</p>
            <ul className="flex gap-4">
              <li>
                <a href="#" className="p-3 rounded-full border border-black/5 hover:border-primary hover:text-primary transition-all duration-300 block">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </li>
              <li>
                <a href="#" className="p-3 rounded-full border border-black/5 hover:border-primary hover:text-primary transition-all duration-300 block">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-1 2.12-2 3.36c1 1.2 2 3.12 2 5.12 0 4.12-3.12 7.12-7.12 7.12-2 0-3.84-.84-5.12-2.24C8.64 18.6 7.6 18 6.48 18c-2 0-3.12 1.12-3.12 1.12S2.24 18 1.12 15.88c1.12-1.12 2.12-1.12 2.12-1.12s-1.12-2.12-1.12-4.12c0-4.12 3.12-7.12 7.12-7.12 1.12 0 2.12.36 3.12 1 1-1.24 2-3.36 2-3.36S15.6 2.36 17 4c1.12.36 2.12.36 3.12 0 0 0 .36 1.12-.12 2.12z"></path></svg>
                </a>
              </li>
              <li>
                <a href="#" className="p-3 rounded-full border border-black/5 hover:border-primary hover:text-primary transition-all duration-300 block">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </li>
              <li>
                <a href="#" className="p-3 rounded-full border border-black/5 hover:border-primary hover:text-primary transition-all duration-300 block">
                  <Globe size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[2px] text-black/30">
          <p>Designed with passion</p>
          <p>Privacy Policy &bull; Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};
