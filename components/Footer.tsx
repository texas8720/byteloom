"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const services = [
    { name: "Shopify Development", href: "/services#shopify" },
    { name: "WordPress Development", href: "/services#wordpress" },
    { name: "Next.js & React Development", href: "/services#nextjs" },
    { name: "UI/UX Design", href: "/services#uiux" },
    { name: "SEO", href: "/services#seo" },
    { name: "Performance Marketing", href: "/services#marketing" },
    { name: "Automation & AI Workflows", href: "/services#automation" },
    { name: "Android Development", href: "/services#android" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Process", href: "/process" },
    { name: "Case Studies", href: "/work" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#0A0A0B] border-t border-[#1F1F23] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1 - Brand */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white">
              <Layers className="w-4.5 h-4.5" />
            </div>
            <span className="font-semibold text-lg tracking-tight">Byteloom</span>
          </Link>
          <p className="text-sm text-[#8E8E93] leading-relaxed max-w-xs">
            We build the systems behind fast-growing companies. Design. Development. Automation. One team.
          </p>
          <div className="flex items-center gap-4 text-[#8E8E93]">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200" aria-label="LinkedIn">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200" aria-label="Twitter">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200" aria-label="Instagram">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200" aria-label="GitHub">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2 - Services */}
        <div>
          <h3 className="font-semibold text-sm tracking-wider uppercase text-white mb-6">Services</h3>
          <ul className="flex flex-col gap-3">
            {services.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-sm text-[#8E8E93] hover:text-white transition-colors duration-200">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div>
          <h3 className="font-semibold text-sm tracking-wider uppercase text-white mb-6">Company</h3>
          <ul className="flex flex-col gap-3">
            {company.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-sm text-[#8E8E93] hover:text-white transition-colors duration-200">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Get Started */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="font-semibold text-sm tracking-wider uppercase text-white mb-4">Get Started</h3>
            <p className="text-sm text-[#8E8E93] mb-1">Email: hello@byteloom.com</p>
            <p className="text-sm text-[#8E8E93]">Phone: +91 XX XXX XXXXX</p>
          </div>
          
          <Link
            href="/contact?type=strategy"
            className="w-fit text-center px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-accent hover:bg-accent-hover transition-all duration-300 shadow-md shadow-accent/10"
          >
            Book a Free Strategy Call
          </Link>

          <div>
            <h4 className="font-semibold text-xs tracking-wider uppercase text-white mb-3">Get growth tips in your inbox</h4>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#121214] text-white border border-[#1F1F23] rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-accent transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent-hover text-white rounded-lg px-4 flex items-center justify-center transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-emerald-400 mt-2">Thanks for subscribing!</p>
            )}
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-[#1F1F23]/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[#8E8E93]">
          &copy; {new Date().getFullYear()} Byteloom Digital. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-[#8E8E93]">
          <Link href="/privacy" className="hover:text-white transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors duration-200">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
