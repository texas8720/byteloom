"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Layers, Sun, Moon } from "lucide-react";

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
  const [theme, setTheme] = useState("light");
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
    
    // Read theme from localStorage or preferred system
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

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
            ? "bg-background/85 border-b border-card-border py-4 backdrop-blur-md"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-md bg-card border border-card-border flex items-center justify-center text-accent group-hover:scale-105 transition-transform duration-300">
              <Layers className="w-4.5 h-4.5" strokeWidth={1.5} />
            </div>
            <span className="font-semibold text-lg tracking-tight font-display text-foreground">
              Byteloom<span className="text-accent">.</span>
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
                  className={`font-mono tracking-wider uppercase text-[10px] transition-colors duration-200 hover:text-accent relative py-1 ${
                    isActive ? "text-accent font-semibold" : "text-muted"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-muted hover:text-foreground hover:bg-card border border-card-border transition-all cursor-pointer"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
            
            <a
              href="https://github.com/texas8720/byteloom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-card border border-card-border hover:border-accent/30 text-muted hover:text-foreground transition-all cursor-pointer font-mono tracking-wider uppercase text-[9px]"
            >
              <GithubIcon className="w-3 h-3" />
              <span className="hidden lg:inline">byteloom</span>
              <span className="h-3 w-px bg-card-border" />
              <span className="flex items-center gap-0.5 text-accent font-bold">
                ★ <span className="text-muted font-medium">104k</span>
              </span>
            </a>

            <Link
              href="/contact?type=strategy"
              className="px-4 py-2 rounded-md text-[10px] font-mono tracking-wider uppercase font-semibold text-background bg-accent hover:bg-accent-hover transition-colors border border-accent"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-muted hover:text-foreground transition-colors"
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
            className="fixed inset-0 z-40 pt-24 pb-8 px-6 bg-background flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-mono uppercase tracking-wider transition-colors ${
                    pathname === link.href ? "text-accent" : "text-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`text-xl font-mono uppercase tracking-wider transition-colors ${
                  pathname === "/contact" ? "text-accent" : "text-muted"
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-4 mt-auto">
              <button
                onClick={toggleTheme}
                className="w-full py-3.5 rounded-md text-xs font-mono uppercase tracking-wider font-semibold border border-card-border bg-card text-foreground flex items-center justify-center gap-2 cursor-pointer"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="w-4 h-4" /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4" /> Dark Mode
                  </>
                )}
              </button>

              <Link
                href="/contact?type=strategy"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3.5 rounded-md text-xs font-mono uppercase tracking-wider font-semibold text-background bg-accent hover:bg-accent-hover transition-colors"
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
