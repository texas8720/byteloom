"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Layers, ArrowRight } from "lucide-react";
import gsap from "gsap";
import LoomScene from "./LoomScene";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [timeStr, setTimeStr] = useState("");
  
  const footerRef = useRef<HTMLDivElement>(null);
  const stitchRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    // Staggered column entry reveal using GSAP ScrollTrigger
    gsap.fromTo(
      ".footer-col",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      }
    );

    // Stitching top line animation
    if (stitchRef.current) {
      gsap.fromTo(
        stitchRef.current,
        { strokeDashoffset: 100 },
        {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        }
      );
    }

    // Tick clock once per second for UTC+5.30 telemetry
    const updateTime = () => {
      const date = new Date();
      // Format to HH:MM:SS
      const formatted = date.toLocaleTimeString("en-US", {
        hour12: false,
        timeZone: "Asia/Kolkata",
      });
      setTimeStr(formatted);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
    <footer 
      ref={footerRef}
      className="bg-background border-t border-transparent pt-20 pb-10 relative z-10 overflow-hidden"
    >
      {/* 3D Loom Ambient Watermark Background */}
      <div className="absolute right-[-80px] bottom-[-40px] w-96 h-96 opacity-15 pointer-events-none z-0">
        <LoomScene mode="ambient" />
      </div>

      {/* SVG Stitching Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-4 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 16" preserveAspectRatio="none">
          <line
            ref={stitchRef}
            x1="0"
            y1="8"
            x2="1200"
            y2="8"
            stroke="var(--thread-violet)"
            strokeWidth="1.5"
            strokeDasharray="12 6"
            strokeDashoffset="100"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        
        {/* Column 1 - Brand */}
        <div className="footer-col flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-card border border-card-border flex items-center justify-center text-accent">
              <Layers className="w-4 h-4" />
            </div>
            <span className="font-semibold text-lg tracking-tight font-display text-foreground">Byteloom</span>
          </Link>
          <p className="text-xs text-muted leading-relaxed max-w-xs">
            We weave design, code, SEO, and automation into one high-performance system. Structured for velocity.
          </p>
          <div className="flex items-center gap-4 text-muted">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors duration-200" aria-label="LinkedIn">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors duration-200" aria-label="Twitter">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors duration-200" aria-label="GitHub">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2 - Services */}
        <div className="footer-col">
          <h3 className="font-mono text-[10px] uppercase tracking-widest text-foreground font-semibold mb-6">Services</h3>
          <ul className="flex flex-col gap-3">
            {services.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-xs text-muted hover:text-accent transition-colors duration-200">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div className="footer-col">
          <h3 className="font-mono text-[10px] uppercase tracking-widest text-foreground font-semibold mb-6">Company</h3>
          <ul className="flex flex-col gap-3">
            {company.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-xs text-muted hover:text-accent transition-colors duration-200">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Get Started */}
        <div className="footer-col flex flex-col gap-6">
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-foreground font-semibold mb-4">Get Started</h3>
            <p className="text-xs text-muted mb-1 font-mono">EMAIL: hello@byteloom.com</p>
            <p className="text-xs text-muted font-mono">PHONE: +91 XX XXX XXXXX</p>
          </div>
          
          <Link
            href="/contact?type=strategy"
            className="px-4 py-2 rounded-md text-[10px] font-mono tracking-widest uppercase font-semibold text-background bg-accent hover:bg-accent-hover transition-colors border border-accent w-fit"
          >
            Book a Call
          </Link>

          <div>
            <h4 className="font-mono text-[9px] uppercase tracking-widest text-foreground font-semibold mb-3">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-card text-foreground border border-card-border rounded-md px-3 py-1.5 text-xs w-full focus:outline-none focus:border-accent transition-colors duration-200 font-mono"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent-hover text-background rounded-md px-3 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
            {subscribed && (
              <p className="text-[10px] text-accent font-mono uppercase mt-2">Subscribed successfully.</p>
            )}
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-card-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        {/* Technical always-on clock/build telemetry */}
        <p className="text-[9px] font-mono text-muted uppercase">
          BYTELOOM.SYS v2.6 // UTC+05:30 [ {timeStr || "12:00:00"} ]
        </p>
        <div className="flex gap-6 text-[9px] font-mono uppercase">
          <Link href="/privacy" className="text-muted hover:text-accent transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-muted hover:text-accent transition-colors duration-200">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
