"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Users2,
  TrendingDown,
  Cpu,
  Check,
  Sparkles,
  Zap,
  Compass,
  Puzzle,
  Smartphone,
  PlusCircle
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BentoGrid from "@/components/BentoGrid";
import LogoMarquee from "@/components/LogoMarquee";
import StatCounters from "@/components/StatCounters";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ThreadLine from "@/components/ThreadLine";
import WeaveBoard from "@/components/WeaveBoard";

const KnotIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="var(--accent)"
    strokeWidth="2"
    className="flex-shrink-0"
  >
    <circle cx="12" cy="12" r="5" stroke="var(--accent)" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="2" fill="var(--accent)" />
    <path d="M7 12h-3M17 12h3" strokeLinecap="round" />
  </svg>
);

const QuoteIcon = () => (
  <span className="font-display text-8xl text-accent/10 absolute -top-4 -left-4 select-none italic pointer-events-none">
    “
  </span>
);

export default function Home() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const heroRef = React.useRef<HTMLElement>(null);
  const servicesRef = React.useRef<HTMLElement>(null);
  const processRef = React.useRef<HTMLElement>(null);
  const footerRef = React.useRef<HTMLDivElement>(null);

  // Mouse position and trail
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [trail, setTrail] = React.useState<{ x: number; y: number }[]>([]);
  const [isHoveringInteractive, setIsHoveringInteractive] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener("change", motionListener);

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(desktopQuery.matches);
    const desktopListener = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    desktopQuery.addEventListener("change", desktopListener);

    return () => {
      motionQuery.removeEventListener("change", motionListener);
      desktopQuery.removeEventListener("change", desktopListener);
    };
  }, []);

  React.useEffect(() => {
    if (!isDesktop || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Calculate trail relative to document scroll position
      const docX = e.clientX + window.scrollX;
      const docY = e.clientY + window.scrollY;
      
      setTrail(prev => {
        const nextTrail = [...prev, { x: docX, y: docY }];
        if (nextTrail.length > 25) {
          return nextTrail.slice(nextTrail.length - 25);
        }
        return nextTrail;
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.getAttribute("role") === "button";
      setIsHoveringInteractive(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isDesktop, prefersReducedMotion]);

  const getTrailPath = () => {
    if (trail.length < 2) return "";
    return trail.reduce((acc, point, idx) => {
      if (idx === 0) return `M ${point.x} ${point.y}`;
      return `${acc} L ${point.x} ${point.y}`;
    }, "");
  };

  return (
    <div ref={containerRef} className="relative bg-background text-foreground w-full overflow-hidden">
      {/* Desktop Custom Cursor follower */}
      {isDesktop && !prefersReducedMotion && (
        <div 
          className={`cursor-dot ${isHoveringInteractive ? "cursor-dot-active" : ""}`}
          style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
        />
      )}

      {/* Cursor vector thread trail */}
      {isDesktop && !prefersReducedMotion && trail.length > 1 && (
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-40 overflow-visible">
          <path
            d={getTrailPath()}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.65"
            className="transition-colors duration-200"
          />
        </svg>
      )}

      {/* Shared Absolute SVG scroll-linked ThreadLine */}
      <ThreadLine 
        containerRef={containerRef}
        heroRef={heroRef}
        servicesRef={servicesRef}
        processRef={processRef}
        footerRef={footerRef}
      />

      <Navbar />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen pt-44 pb-32 flex flex-col justify-center items-center z-10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-[9px] tracking-widest uppercase text-accent mb-6 block"
          >
            SYSTEMS WEAVING DESIGN AND DEVELOPMENT
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-semibold tracking-tight leading-[1.05] text-foreground max-w-5xl mb-8"
          >
            We weave design, code, &amp; SEO into <span className="italic text-accent">one system.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-muted max-w-2xl leading-relaxed mb-14"
          >
            ByteLoom is a premium digital agency. We construct custom Next.js web systems, optimize automated backends, and engineer custom Shopify storefronts. Structured for velocity. Crafted for clarity.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24"
          >
            <Link
              href="/contact?type=strategy"
              className="px-6 py-3 rounded-md text-[10px] font-mono tracking-wider uppercase font-semibold text-background bg-accent hover:bg-accent-hover transition-colors border border-accent cursor-pointer"
            >
              Book a Call
            </Link>
            <Link
              href="/work"
              className="px-6 py-3 rounded-md text-[10px] font-mono tracking-wider uppercase font-semibold text-accent hover:text-background bg-transparent border border-accent/30 hover:bg-accent hover:border-accent transition-all duration-200 cursor-pointer"
            >
              See Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Stats Section */}
      <section className="relative z-10 border-t border-card-border bg-background">
        <StatCounters />
      </section>

      {/* Problem Section */}
      <section className="py-28 md:py-36 relative z-10 bg-background border-t border-card-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl mb-24">
            <span className="font-mono text-[9px] tracking-widest uppercase text-accent mb-3 block">
              THE FRAGMENTED SYSTEM
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-foreground mb-6">
              Most agencies compartmentalize. We unify.
            </h2>
            <p className="text-muted text-xs sm:text-sm leading-relaxed">
              Startups fail when their tools don't communicate. A designer hands off a mockup, the developer simplifies it, the marketing specialist complains about the speed, and the founder pays the price.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-card-border p-8 rounded-md hover:border-card-border-hover hover:bg-card transition-all duration-200 group">
              <div className="w-10 h-10 rounded-md bg-background border border-card-border flex items-center justify-center text-accent mb-6">
                <Clock className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h4 className="text-base font-display font-semibold text-foreground mb-3">Slow, disconnected timelines</h4>
              <p className="text-xs text-muted leading-relaxed">
                Traditional agencies isolate production blocks, dragging out project launches by months while overhead accrues.
              </p>
            </div>
            
            <div className="bg-card border border-card-border p-8 rounded-md hover:border-card-border-hover hover:bg-card transition-all duration-200 group">
              <div className="w-10 h-10 rounded-md bg-background border border-card-border flex items-center justify-center text-accent mb-6">
                <Users2 className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h4 className="text-base font-display font-semibold text-foreground mb-3">Isolated Freelancers</h4>
              <p className="text-xs text-muted leading-relaxed">
                Contractors code without consulting design or SEO experts, leading to slow rendering metrics and broken interfaces.
              </p>
            </div>

            <div className="bg-card border border-card-border p-8 rounded-md hover:border-card-border-hover hover:bg-card transition-all duration-200 group">
              <div className="w-10 h-10 rounded-md bg-background border border-card-border flex items-center justify-center text-accent mb-6">
                <TrendingDown className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h4 className="text-base font-display font-semibold text-foreground mb-3">Low-Performing Products</h4>
              <p className="text-xs text-muted leading-relaxed">
                A design agency designs a pretty layout, but misses index structures, keyword tags, and core vitals entirely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef}
        className="py-28 md:py-36 relative z-10 bg-background border-t border-card-border"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl mb-24">
            <span className="font-mono text-[9px] tracking-widest uppercase text-accent mb-3 block">
              OUR DEPLOYMENT ENGINE
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-foreground mb-6">
              Complete architectural services, structured in harmony.
            </h2>
            <p className="text-muted text-xs sm:text-sm leading-relaxed">
              We weave multiple layers into a single integrated digital deployment, making sure your brand, user interface, SEO indexing, and automations operate in unison.
            </p>
          </div>

          <BentoGrid />
        </div>
      </section>

      {/* WeaveBoard Widget Section */}
      <section className="py-28 md:py-36 relative z-10 bg-background border-t border-card-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="font-mono text-[9px] tracking-widest uppercase text-accent block">
              INTERACTIVE LOOM CONSTELATION
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-foreground">
              Weave your bespoke system setup
            </h2>
            <p className="text-muted text-xs sm:text-sm leading-relaxed">
              Select or deselect technology blocks to customize the deployment metrics and watch the pathways form.
            </p>
          </div>

          <WeaveBoard />
        </div>
      </section>

      {/* Process Section */}
      <section 
        ref={processRef}
        className="py-28 md:py-36 relative z-10 bg-background border-t border-card-border"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <span className="font-mono text-[9px] tracking-widest uppercase text-accent mb-3 block">
            THE METHODOLOGY
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-foreground mb-20">
            Our Woven Process
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16 max-w-5xl mx-auto text-left">
            {[
              { step: "Discovery", desc: "Define structural parameters and targets" },
              { step: "Strategy", desc: "Map architecture, indexing routes, & flows" },
              { step: "Design", desc: "Craft interfaces without default templates" },
              { step: "Build", desc: "Code high-velocity Next.js or Shopify stores" },
              { step: "Launch", desc: "Deploy with optimized caching structures" },
              { step: "Grow", desc: "Analyze metrics, SEO position, & workflow yield" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <KnotIcon />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-foreground font-semibold">
                    0{idx + 1}. {item.step}
                  </span>
                </div>
                <p className="text-[11px] text-muted leading-relaxed pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-muted text-xs mb-12 max-w-xl mx-auto leading-relaxed">
            Every step is tightly linked. Code is informed by design, and designs are built with performance rules in mind.
          </p>

          <Link
            href="/process"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-[10px] font-mono tracking-wider uppercase font-semibold text-accent hover:text-background bg-transparent border border-accent/30 hover:bg-accent hover:border-accent transition-all duration-200 cursor-pointer"
          >
            See Our Full Process
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 md:py-36 relative z-10 bg-background border-t border-card-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="font-mono text-[9px] tracking-widest uppercase text-accent block">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-foreground">
              System reviews from real founders
            </h2>
          </div>

          <Testimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 md:py-36 relative z-10 bg-card border-t border-card-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="font-mono text-[9px] tracking-widest uppercase text-accent block">
              COMMON INQUIRIES
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-foreground">
              Technical FAQ
            </h2>
          </div>

          <FAQ />
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        ref={footerRef}
        className="py-36 relative z-10 bg-background border-t border-card-border"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-foreground mb-6">
            Let&apos;s weave a high-performance system together.
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-xl mx-auto mb-12">
            Book an engineering strategy call. We will discuss custom architecture, Shopify design systems, Next.js optimization, and search rankings.
          </p>

          <Link
            href="/contact?type=strategy"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-[10px] font-mono tracking-wider uppercase font-semibold text-background bg-accent hover:bg-accent-hover transition-colors border border-accent cursor-pointer"
          >
            Schedule Strategy Call
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          
          <p className="text-[9px] font-mono uppercase tracking-wider text-muted mt-6">
            NO SALES DECK &bull; DIRECT CONVERSATION &bull; 30 MIN
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
