"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Layers, Sun } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Process", href: "/process" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0E14]/80 border-b border-[rgba(237,238,242,0.08)] py-4 backdrop-blur-md"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-md bg-[#12161F] border border-[rgba(237,238,242,0.08)] flex items-center justify-center text-[#D9A441] group-hover:scale-105 transition-transform duration-300">
              <Layers className="w-4.5 h-4.5" />
            </div>
            <span className="font-semibold text-lg tracking-tight font-display text-[#EDEEF2]">
              Byteloom<span className="text-[#D9A441]">.</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-mono tracking-wider uppercase text-[10px] transition-colors duration-200 hover:text-[#D9A441] relative py-1 ${
                    isActive ? "text-[#D9A441]" : "text-[#8891A3]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D9A441]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 rounded-md text-zinc-400 hover:text-[#EDEEF2] hover:bg-[#12161F] border border-[rgba(237,238,242,0.08)] transition-all cursor-pointer">
              <Sun className="w-3.5 h-3.5" />
            </button>
            
            <a
              href="https://github.com/texas8720/byteloom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#12161F] hover:bg-[#171C27] border border-[rgba(237,238,242,0.08)] hover:border-[#D9A441]/30 text-zinc-450 hover:text-white transition-all cursor-pointer font-mono tracking-wider uppercase text-[9px]"
            >
              <GithubIcon className="w-3 h-3" />
              <span className="hidden lg:inline text-zinc-300">byteloom</span>
              <span className="h-3 w-px bg-zinc-800" />
              <span className="flex items-center gap-0.5 text-[#D9A441] font-bold">
                ★ <span className="text-zinc-400 font-medium">104k</span>
              </span>
            </a>

            <Link
              href="/contact?type=strategy"
              className="px-4 py-2 rounded-md text-[10px] font-mono tracking-wider uppercase font-semibold text-[#0B0E14] bg-[#D9A441] hover:bg-[#C59130] transition-colors border border-[#D9A441]"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-[#8891A3] hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-24 pb-8 px-6 bg-[#0B0E14] flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-mono uppercase tracking-wider transition-colors ${
                    pathname === link.href ? "text-[#D9A441]" : "text-[#8891A3]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`text-xl font-mono uppercase tracking-wider transition-colors ${
                  pathname === "/contact" ? "text-[#D9A441]" : "text-[#8891A3]"
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-4 mt-auto">
              <Link
                href="/contact?type=strategy"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3.5 rounded-md text-xs font-mono uppercase tracking-wider font-semibold text-[#0B0E14] bg-[#D9A441] hover:bg-[#C59130] transition-colors"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
