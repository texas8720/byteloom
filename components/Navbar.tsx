"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Layers, ChevronDown } from "lucide-react";
import gsap from "gsap";

const SERVICES_PREVIEW = [
  { name: "Shopify Dev", desc: "Headless eCommerce", color: "from-[#6C63FF]/20 to-transparent" },
  { name: "WordPress Dev", desc: "Flexible Marketing CMS", color: "from-[#2FE6D0]/20 to-transparent" },
  { name: "Next.js & React", desc: "Fast Custom Web Apps", color: "from-[#6C63FF]/20 to-transparent" },
  { name: "UI/UX Design", desc: "Bespoke System Layouts", color: "from-[#2FE6D0]/20 to-transparent" },
  { name: "SEO Optimization", desc: "Organic Traffic Growth", color: "from-[#6C63FF]/20 to-transparent" },
  { name: "Paid Ads Growth", desc: "ROI Performance Loops", color: "from-[#2FE6D0]/20 to-transparent" },
  { name: "AI Automations", desc: "Agent Operations Setup", color: "from-[#6C63FF]/20 to-transparent" },
  { name: "Android Apps", desc: "Native App Development", color: "from-[#2FE6D0]/20 to-transparent" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const pathname = usePathname();
  
  const headerRef = useRef<HTMLElement>(null);
  const logoPathRef = useRef<SVGPathElement>(null);
  const bookCallRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Scroll height and backdrop filter tween
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      gsap.to(headerRef.current, {
        paddingTop: isScrolled ? "12px" : "24px",
        paddingBottom: isScrolled ? "12px" : "24px",
        backgroundColor: isScrolled ? "rgba(9, 11, 16, 0.88)" : "rgba(9, 11, 16, 0)",
        backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
        borderBottomColor: isScrolled ? "var(--line)" : "transparent",
        duration: 0.35,
        ease: "power2.out",
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Subtle idle logo thread-pulse stroke offset loop
    if (logoPathRef.current) {
      gsap.to(logoPathRef.current, {
        strokeDashoffset: -20,
        duration: 2.5,
        repeat: -1,
        ease: "linear",
      });
    }

    // Magnetic Book a Call CTA button
    const btn = bookCallRef.current;
    if (btn) {
      const xTo = gsap.quickTo(btn, "x", { duration: 0.3, ease: "power3.out" });
      const yTo = gsap.quickTo(btn, "y", { duration: 0.3, ease: "power3.out" });

      const onMouseMove = (e: MouseEvent) => {
        const { left, top, width, height } = btn.getBoundingClientRect();
        const x = e.clientX - (left + width / 2);
        const y = e.clientY - (top + height / 2);
        // Move subtly
        xTo(x * 0.35);
        yTo(y * 0.35);
      };

      const onMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      btn.addEventListener("mousemove", onMouseMove);
      btn.addEventListener("mouseleave", onMouseLeave);

      return () => {
        btn.removeEventListener("mousemove", onMouseMove);
        btn.removeEventListener("mouseleave", onMouseLeave);
      };
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services", isMenu: true },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Process", href: "/process" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 border-b border-transparent py-6 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-md bg-card border border-card-border flex items-center justify-center text-accent">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  ref={logoPathRef}
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  strokeDasharray="6 3"
                />
              </svg>
            </div>
            <span className="font-semibold text-lg tracking-tight font-display text-foreground">
              Byteloom<span className="text-teal">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              if (link.isMenu) {
                return (
                  <div
                    key={link.name}
                    className="relative py-1"
                    onMouseEnter={() => setShowMegaMenu(true)}
                    onMouseLeave={() => setShowMegaMenu(false)}
                  >
                    <button
                      className="flex items-center gap-1 font-mono tracking-widest uppercase text-[10px] text-muted hover:text-accent cursor-pointer"
                    >
                      {link.name}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-250 ${showMegaMenu ? "rotate-180 text-accent" : ""}`} />
                    </button>

                    {/* Services Dropdown Mega Menu */}
                    <AnimatePresence>
                      {showMegaMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[580px] z-50 pointer-events-auto"
                        >
                          <div className="bg-card border border-card-border rounded-md p-6 grid grid-cols-2 gap-4 shadow-2xl">
                            {SERVICES_PREVIEW.map((item, idx) => (
                              <Link
                                key={idx}
                                href="/services"
                                className="group/item flex items-start gap-3 p-2 rounded-md hover:bg-background border border-transparent hover:border-card-border transition-all"
                              >
                                <div className={`w-8 h-8 rounded-sm bg-gradient-to-tr ${item.color} border border-card-border flex items-center justify-center text-accent`}>
                                  <Layers className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                  <h5 className="font-sans text-xs font-semibold text-foreground group-hover/item:text-accent transition-colors">
                                    {item.name}
                                  </h5>
                                  <p className="text-[10px] text-muted font-mono mt-0.5">{item.desc}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-mono tracking-widest uppercase text-[10px] relative py-1 transition-colors ${
                    isActive ? "text-accent font-semibold" : "text-muted hover:text-accent"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-5">
            {/* Live Telemetry Status Widget */}
            <div className="flex items-center px-3 py-1.5 rounded-full border border-card-border bg-card/40 font-mono text-[9px] tracking-widest text-[#868C97]">
              <span className="relative flex h-1.5 w-1.5 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal"></span>
              </span>
              SYSTEMS OPERATIONAL
            </div>

            <Link
              ref={bookCallRef}
              href="/contact?type=strategy"
              className="px-5 py-2.5 rounded-md text-[10px] font-mono tracking-widest uppercase font-semibold text-foreground bg-accent hover:bg-accent-hover transition-colors border border-accent"
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

      {/* Fullscreen Mobile takeover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background flex flex-col justify-between p-8 md:hidden"
          >
            {/* Corner Decorative Thread Lines */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-accent/20" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-accent/20" />

            <div className="flex flex-col gap-6 pt-24">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-display font-medium tracking-wide uppercase transition-colors ${
                      pathname === link.href ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-auto">
              <div className="flex items-center justify-center py-3.5 border border-card-border rounded-md font-mono text-[9px] tracking-widest text-[#868C97]">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal animate-ping mr-2" />
                SYSTEMS OPERATIONAL
              </div>

              <Link
                href="/contact?type=strategy"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3.5 rounded-md text-xs font-mono uppercase tracking-widest font-semibold text-foreground bg-accent hover:bg-accent-hover transition-colors"
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
