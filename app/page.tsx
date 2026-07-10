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
  ShoppingBag,
  Globe,
  Cpu,
  Search,
  Check,
  Copy,
  Sparkles,
  Zap,
  Compass,
  Puzzle,
  Smartphone,
  PlusCircle,
  HelpCircle,
  MessageSquare
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BentoGrid from "@/components/BentoGrid";
import LogoMarquee from "@/components/LogoMarquee";
import StatCounters from "@/components/StatCounters";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ThreadLine from "@/components/ThreadLine";

const KnotIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="#D9A441"
    strokeWidth="2"
    className="flex-shrink-0"
  >
    <circle cx="12" cy="12" r="5" stroke="#D9A441" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="2" fill="#D9A441" />
    <path d="M7 12h-3M17 12h3" strokeLinecap="round" />
  </svg>
);

const QuoteIcon = () => (
  <span className="font-display text-8xl text-[#D9A441]/10 absolute -top-4 -left-4 select-none italic pointer-events-none">
    “
  </span>
);

export default function Home() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const heroRef = React.useRef<HTMLElement>(null);
  const servicesRef = React.useRef<HTMLElement>(null);
  const processRef = React.useRef<HTMLElement>(null);
  const footerRef = React.useRef<HTMLDivElement>(null);

  // Cursor follower state
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    // Media queries
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

  // Showcase state
  const [activeComponent, setActiveComponent] = React.useState("glass-card");
  const [copiedCode, setCopiedCode] = React.useState(false);

  const SHOWCASE_COMPONENTS = [
    {
      id: "glass-card",
      name: "Sleek Metric Card",
      description: "Clean dark-mode card structure with gold status labels and numeric details.",
      preview: (
        <div className="bg-[#12161F] border border-[rgba(237,238,242,0.08)] p-6 rounded-md max-w-sm w-full mx-auto relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#0B0E14] border border-[rgba(237,238,242,0.08)] flex items-center justify-center text-[#D9A441]">
                <Cpu className="w-4.5 h-4.5" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white">System Health</h4>
                <p className="text-[9px] text-[#8891A3] font-mono">LIVE UPDATE</p>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#3ED9C4]/10 text-[#3ED9C4] font-medium border border-[#3ED9C4]/20">
              STABLE
            </span>
          </div>
          <div className="space-y-1 mb-6">
            <span className="text-[9px] text-[#8891A3] font-mono uppercase tracking-wider block">Operational Yield</span>
            <span className="text-2xl font-display font-semibold text-white tracking-tight">99.98%</span>
          </div>
          <div className="flex gap-2">
            <button className="flex-grow py-2 text-[10px] font-mono uppercase tracking-wider font-semibold rounded-md bg-[#D9A441] text-[#0B0E14] hover:bg-[#C59130] transition-colors cursor-pointer">
              Restart Node
            </button>
            <button className="flex-grow py-2 text-[10px] font-mono uppercase tracking-wider font-semibold rounded-md bg-[#0B0E14] text-[#EDEEF2] border border-[rgba(237,238,242,0.08)] hover:bg-[#12161F] transition-colors cursor-pointer">
              View Log
            </button>
          </div>
        </div>
      ),
      code: `<div className="bg-[#12161F] border border-white/5 rounded-md p-6 relative overflow-hidden">
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-md bg-[#0B0E14] border border-white/5 flex items-center justify-center text-[#D9A441]">
        <Cpu className="w-4.5 h-4.5" />
      </div>
      <div>
        <h4 className="text-xs font-mono uppercase tracking-wider text-white">System</h4>
        <p className="text-[9px] text-zinc-500 font-mono">LIVE</p>
      </div>
    </div>
    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#3ED9C4]/10 text-[#3ED9C4] border border-[#3ED9C4]/20">
      ACTIVE
    </span>
  </div>
  <div className="space-y-1 mb-6">
    <span className="text-[9px] text-zinc-500 font-mono uppercase">Operational Yield</span>
    <span className="text-2xl font-semibold text-white">99.98%</span>
  </div>
</div>`
    },
    {
      id: "glow-button",
      name: "Brass Accent Button",
      description: "Action button with clean gold boundaries and fast high-contrast hover fill.",
      preview: (
        <div className="flex items-center justify-center h-48">
          <button className="relative group px-8 py-3.5 rounded-md text-xs font-mono tracking-wider uppercase font-semibold text-[#D9A441] hover:text-[#0B0E14] bg-transparent border border-[#D9A441] transition-all duration-200 cursor-pointer overflow-hidden">
            <span className="absolute inset-0 w-full h-full bg-[#D9A441] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out z-0" />
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
              Initialize Project
            </span>
          </button>
        </div>
      ),
      code: `<button className="relative group px-8 py-3.5 rounded-md text-xs font-mono tracking-wider uppercase font-semibold text-[#D9A441] hover:text-[#0B0E14] bg-transparent border border-[#D9A441] transition-all duration-200 cursor-pointer overflow-hidden">
  <span className="absolute inset-0 w-full h-full bg-[#D9A441] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out z-0" />
  <span className="relative z-10 flex items-center gap-2">
    <Sparkles className="w-3.5 h-3.5" />
    Initialize Project
  </span>
</button>`
    },
    {
      id: "notifications",
      name: "Technical Feed",
      description: "Clean activity feed utilizing signal teal indicators and monospaced timings.",
      preview: (
        <div className="bg-[#12161F] border border-[rgba(237,238,242,0.08)] p-5 rounded-md max-w-sm w-full mx-auto space-y-4">
          <div className="flex items-center justify-between border-b border-[rgba(237,238,242,0.08)] pb-3">
            <h4 className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">Node Event Log</h4>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ED9C4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3ED9C4]"></span>
            </span>
          </div>
          <div className="space-y-3">
            {[
              { text: "Shopify sync complete", time: "02m", color: "bg-[#3ED9C4]" },
              { text: "Database query resolved", time: "11m", color: "bg-[#8891A3]" },
              { text: "Workflow trigger fired", time: "45m", color: "bg-[#D9A441]" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-[11px] p-2.5 rounded-md bg-[#0B0E14] border border-[rgba(237,238,242,0.05)]">
                <span className="text-zinc-300 flex items-center gap-2 font-mono">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                  {item.text}
                </span>
                <span className="text-[9px] text-[#8891A3] font-mono">{item.time} AGO</span>
              </div>
            ))}
          </div>
        </div>
      ),
      code: `<div className="bg-[#12161F] border border-white/5 p-5 rounded-md max-w-sm w-full space-y-4">
  <div className="flex items-center justify-between border-b border-white/5 pb-3">
    <h4 className="text-[10px] font-mono uppercase">Event Log</h4>
    <span className="h-2 w-2 rounded-full bg-[#3ED9C4]" />
  </div>
  <div className="space-y-3">
    <div className="flex items-center justify-between text-[11px] p-2.5 rounded bg-[#0B0E14]">
      <span className="font-mono text-zinc-300">Shopify synced</span>
      <span className="text-[9px] text-zinc-550">02m AGO</span>
    </div>
  </div>
</div>`
    }
  ];

  const currentComponent = SHOWCASE_COMPONENTS.find(c => c.id === activeComponent) || SHOWCASE_COMPONENTS[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentComponent.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div ref={containerRef} className="relative bg-[#0B0E14] w-full text-[#EDEEF2] overflow-hidden min-h-screen">
      {/* Desktop Custom Cursor */}
      {isDesktop && !prefersReducedMotion && (
        <div 
          className={`cursor-dot ${isHoveringInteractive ? "cursor-dot-active" : ""}`}
          style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
        />
      )}

      {/* Shared Absolute SVG ThreadLine */}
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
        className="relative min-h-screen pt-36 pb-24 flex flex-col justify-center items-center z-10"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-[10px] tracking-widest uppercase text-[#D9A441] mb-6 block"
          >
            SYSTEMS WEAVING DESIGN AND DEVELOPMENT
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-semibold tracking-tight leading-[1.05] text-[#EDEEF2] max-w-5xl mb-8"
          >
            We weave design, code, &amp; SEO into <span className="italic text-[#D9A441]">one system.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-[#8891A3] max-w-2xl leading-relaxed mb-12"
          >
            ByteLoom is a premium digital agency. We construct custom Next.js web systems, optimize automated backends, and engineer custom Shopify storefronts. Structured for velocity. Crafted for clarity.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact?type=strategy"
              className="px-6 py-3 rounded-md text-[10px] font-mono tracking-wider uppercase font-semibold text-[#0B0E14] bg-[#D9A441] hover:bg-[#C59130] transition-colors border border-[#D9A441] cursor-pointer"
            >
              Book a Call
            </Link>
            <Link
              href="/work"
              className="px-6 py-3 rounded-md text-[10px] font-mono tracking-wider uppercase font-semibold text-[#D9A441] hover:text-[#0B0E14] bg-transparent border border-[rgba(217,164,65,0.3)] hover:bg-[#D9A441] hover:border-[#D9A441] transition-all duration-200 cursor-pointer"
            >
              See Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Stats Section */}
      <section className="relative z-10 border-t border-[rgba(237,238,242,0.08)] bg-[#0B0E14]">
        <StatCounters />
      </section>

      {/* Problem Section */}
      <section className="py-28 relative z-10 bg-[#0B0E14] border-t border-[rgba(237,238,242,0.08)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#D9A441] mb-3 block">
              THE FRAGMENTED SYSTEM
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white mb-6">
              Most agencies compartmentalize. We unify.
            </h2>
            <p className="text-[#8891A3] text-sm leading-relaxed">
              Startups fail when their tools don't communicate. A designer hands off a mockup, the developer simplifies it, the marketing specialist complains about the speed, and the founder pays the price.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#12161F] border border-[rgba(237,238,242,0.08)] p-8 rounded-md hover:border-[#D9A441]/35 hover:bg-[#171C27] transition-all duration-200 group">
              <div className="w-10 h-10 rounded-md bg-[#0B0E14] border border-[rgba(237,238,242,0.08)] flex items-center justify-center text-[#D9A441] mb-6">
                <Clock className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h4 className="text-base font-display font-semibold text-white mb-3">Slow, disconnected timelines</h4>
              <p className="text-xs text-[#8891A3] leading-relaxed">
                Traditional agencies isolate production blocks, dragging out project launches by months while overhead accrues.
              </p>
            </div>
            
            <div className="bg-[#12161F] border border-[rgba(237,238,242,0.08)] p-8 rounded-md hover:border-[#D9A441]/35 hover:bg-[#171C27] transition-all duration-200 group">
              <div className="w-10 h-10 rounded-md bg-[#0B0E14] border border-[rgba(237,238,242,0.08)] flex items-center justify-center text-[#D9A441] mb-6">
                <Users2 className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h4 className="text-base font-display font-semibold text-white mb-3">Isolated Freelancers</h4>
              <p className="text-xs text-[#8891A3] leading-relaxed">
                Contractors code without consulting design or SEO experts, leading to slow rendering metrics and broken interfaces.
              </p>
            </div>

            <div className="bg-[#12161F] border border-[rgba(237,238,242,0.08)] p-8 rounded-md hover:border-[#D9A441]/35 hover:bg-[#171C27] transition-all duration-200 group">
              <div className="w-10 h-10 rounded-md bg-[#0B0E14] border border-[rgba(237,238,242,0.08)] flex items-center justify-center text-[#D9A441] mb-6">
                <TrendingDown className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h4 className="text-base font-display font-semibold text-white mb-3">Low-Performing Products</h4>
              <p className="text-xs text-[#8891A3] leading-relaxed">
                A design agency designs a pretty layout, but misses index structures, keyword tags, and core vitals entirely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef}
        className="py-28 relative z-10 bg-[#0B0E14] border-t border-[rgba(237,238,242,0.08)]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#D9A441] mb-3 block">
              OUR DEPLOYMENT ENGINE
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white mb-6">
              Complete architectural services, structured in harmony.
            </h2>
            <p className="text-[#8891A3] text-sm leading-relaxed">
              We weave multiple layers into a single integrated digital deployment, making sure your brand, user interface, SEO indexing, and automations operate in unison.
            </p>
          </div>

          <BentoGrid />
        </div>
      </section>

      {/* 21st.dev Style Showcase Section */}
      <section className="py-28 relative z-10 bg-[#12161F] border-y border-[rgba(237,238,242,0.08)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-8">
              <span className="font-mono text-[9px] tracking-widest uppercase text-[#D9A441] mb-3 block">
                COMPONENTS REGISTRY
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white">
                Slick interactive modular parts.
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[#8891A3] text-xs sm:text-sm leading-relaxed">
                Every component is constructed with pure semantic code structure, small radii, clean borders, and responsive design alignment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* List */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-4">
              <div className="space-y-2">
                {SHOWCASE_COMPONENTS.map((comp) => (
                  <button
                    key={comp.id}
                    onClick={() => setActiveComponent(comp.id)}
                    className={`w-full text-left p-4 rounded-md border transition-all cursor-pointer ${
                      activeComponent === comp.id
                        ? "bg-[#0B0E14] border-[#D9A441]/40"
                        : "bg-transparent border-[rgba(237,238,242,0.08)] hover:bg-[#0B0E14]/50"
                    }`}
                  >
                    <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-1">{comp.name}</h4>
                    <p className="text-[11px] text-[#8891A3] leading-relaxed">{comp.description}</p>
                  </button>
                ))}
              </div>
              <div className="p-4 rounded-md bg-[#0B0E14]/40 border border-[rgba(237,238,242,0.08)] text-[10px] font-mono uppercase tracking-wider text-[#8891A3]">
                💡 FAST RENDER &bull; ACCESSIBILITY OPTIMIZED &bull; LIGHTWEIGHT
              </div>
            </div>

            {/* Render Preview & Code */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <div className="bg-[#0B0E14] border border-[rgba(237,238,242,0.08)] rounded-md p-6 flex flex-col justify-center min-h-[300px]">
                <span className="text-[9px] font-mono text-[#8891A3] uppercase tracking-widest block mb-4">PREVIEW</span>
                <div className="flex-grow flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentComponent.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="w-full"
                    >
                      {currentComponent.preview}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="bg-[#0B0E14] border border-[rgba(237,238,242,0.08)] rounded-md flex flex-col overflow-hidden min-h-[300px]">
                <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(237,238,242,0.08)] bg-[#12161F]">
                  <span className="text-[9px] font-mono text-[#8891A3]">tailwind-code.tsx</span>
                  <button
                    onClick={handleCopyCode}
                    className="p-1 rounded text-zinc-400 hover:text-white transition-all cursor-pointer"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-[#3ED9C4]" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                <div className="p-4 font-mono text-[9px] text-[#8891A3] overflow-y-auto leading-relaxed flex-1 select-text">
                  <AnimatePresence mode="wait">
                    <motion.pre
                      key={currentComponent.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="font-mono whitespace-pre"
                    >
                      {currentComponent.code}
                    </motion.pre>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        ref={processRef}
        className="py-28 relative z-10 bg-[#0B0E14] border-t border-[rgba(237,238,242,0.08)]"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="font-mono text-[9px] tracking-widest uppercase text-[#D9A441] mb-3 block">
            THE METHODOLOGY
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white mb-16">
            Our Woven Process
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-12 max-w-5xl mx-auto text-left">
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
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-300 font-semibold">
                    0{idx + 1}. {item.step}
                  </span>
                </div>
                <p className="text-[11px] text-[#8891A3] leading-relaxed pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[#8891A3] text-xs mb-10 max-w-xl mx-auto leading-relaxed">
            Every step is tightly linked. Code is informed by design, and designs are built with performance rules in mind.
          </p>

          <Link
            href="/process"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-[10px] font-mono tracking-wider uppercase font-semibold text-[#D9A441] hover:text-[#0B0E14] bg-transparent border border-[rgba(217,164,65,0.3)] hover:bg-[#D9A441] hover:border-[#D9A441] transition-all duration-200 cursor-pointer"
          >
            See Our Full Process
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 relative z-10 bg-[#0B0E14] border-t border-[rgba(237,238,242,0.08)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#D9A441] block">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white">
              System reviews from real founders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Byteloom completely redesigned our storefront. Their team combined high-converting Liquid code with custom app logic, which directly boosted our revenue.",
                author: "Sarah Jenkins",
                role: "Founder, Bloomwear"
              },
              {
                quote: "They developed our Next.js dashboard and automated our customer onboarding pipeline. Our internal hours saved went up by 40% in just two weeks.",
                author: "Michael Chen",
                role: "CTO, LogiSync"
              },
              {
                quote: "Their technical SEO work was remarkable. We jumped to page 1 for three core target terms within 60 days of our clean structural deployment.",
                author: "Elena Rostova",
                role: "Director, Apex Capital"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#12161F] border border-[rgba(237,238,242,0.08)] p-8 rounded-md relative overflow-hidden flex flex-col justify-between"
              >
                <QuoteIcon />
                <p className="text-xs text-[#EDEEF2] italic leading-relaxed mb-8 relative z-10">
                  {item.quote}
                </p>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                    {item.author}
                  </h4>
                  <p className="text-[10px] text-[#8891A3] font-mono">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 relative z-10 bg-[#12161F] border-t border-[rgba(237,238,242,0.08)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#D9A441] block">
              COMMON INQUIRIES
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white">
              Technical FAQ
            </h2>
          </div>

          <FAQ />
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        ref={footerRef}
        className="py-28 relative z-10 bg-[#0B0E14] border-t border-[rgba(237,238,242,0.08)]"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-6xl font-display font-semibold tracking-tight text-white mb-6">
            Let&apos;s weave a high-performance system together.
          </h2>
          <p className="text-[#8891A3] text-sm leading-relaxed max-w-xl mx-auto mb-10">
            Book an engineering strategy call. We will discuss custom architecture, Shopify design systems, Next.js optimization, and search rankings.
          </p>

          <Link
            href="/contact?type=strategy"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-[10px] font-mono tracking-wider uppercase font-semibold text-[#0B0E14] bg-[#D9A441] hover:bg-[#C59130] transition-colors border border-[#D9A441] cursor-pointer"
          >
            Schedule Strategy Call
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          
          <p className="text-[9px] font-mono uppercase tracking-wider text-zinc-600 mt-4">
            NO SALES DECK &bull; DIRECT CONVERSATION &bull; 30 MIN
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
