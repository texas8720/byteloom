"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Users2, TrendingDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BentoGrid from "@/components/BentoGrid";
import StatCounters from "@/components/StatCounters";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import WeaveBoard3D from "@/components/WeaveBoard3D";
import LoomScene from "@/components/LoomScene";

export default function Home() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const heroTextRef = React.useRef<HTMLHeadingElement>(null);
  
  const heroRef = React.useRef<HTMLElement>(null);
  const servicesRef = React.useRef<HTMLElement>(null);
  const processRef = React.useRef<HTMLElement>(null);
  const footerRef = React.useRef<HTMLDivElement>(null);

  const processTriggerRef = React.useRef<HTMLDivElement>(null);
  const ctaBtnRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Headline character reveal using GSAP
    if (heroTextRef.current) {
      const chars = heroTextRef.current.innerText.split("");
      heroTextRef.current.innerHTML = chars
        .map((c) => `<span class="hero-char inline-block opacity-0 translate-y-4">${c === " " ? "&nbsp;" : c}</span>`)
        .join("");

      gsap.to(".hero-char", {
        opacity: 1,
        y: 0,
        stagger: 0.02,
        duration: 0.65,
        ease: "power3.out",
        delay: 0.1,
      });
    }

    // Process horizontal-scroll scrollytelling pinning timeline
    const section = processRef.current;
    const trigger = processTriggerRef.current;
    if (section && trigger) {
      const scrollWidth = trigger.scrollWidth;
      const windowWidth = window.innerWidth;
      
      gsap.to(trigger, {
        x: () => -(scrollWidth - windowWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.2,
          start: "top top",
          end: () => `+=${scrollWidth - windowWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }

    // Magnetic CTA Button at the bottom
    const ctaBtn = ctaBtnRef.current;
    if (ctaBtn) {
      const xTo = gsap.quickTo(ctaBtn, "x", { duration: 0.35, ease: "power3.out" });
      const yTo = gsap.quickTo(ctaBtn, "y", { duration: 0.35, ease: "power3.out" });

      const onMouseMove = (e: MouseEvent) => {
        const { left, top, width, height } = ctaBtn.getBoundingClientRect();
        const x = e.clientX - (left + width / 2);
        const y = e.clientY - (top + height / 2);
        xTo(x * 0.4);
        yTo(y * 0.4);
      };

      const onMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      ctaBtn.addEventListener("mousemove", onMouseMove);
      ctaBtn.addEventListener("mouseleave", onMouseLeave);

      return () => {
        ctaBtn.removeEventListener("mousemove", onMouseMove);
        ctaBtn.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, []);

  return (
    <div ref={containerRef} className="relative bg-background text-foreground w-full overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-44 pb-32 flex flex-col justify-center items-center z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text panel */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="font-mono text-[9px] tracking-widest uppercase text-accent mb-6">
              SYSTEMS WEAVING DESIGN AND DEVELOPMENT
            </span>
            <h1
              ref={heroTextRef}
              className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight leading-[1.05] text-foreground mb-8"
            >
              We weave design, code, &amp; SEO into one system.
            </h1>
            <p className="text-sm sm:text-base text-muted max-w-xl leading-relaxed mb-12">
              ByteLoom constructs custom Next.js web systems, structures headless Shopify stores, and automates internal tools. We weave disparate parts into high-performance telemetry pipelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link
                href="/contact?type=strategy"
                className="px-6 py-3 rounded-md text-[10px] font-mono tracking-widest uppercase font-semibold text-background bg-accent hover:bg-accent-hover transition-colors border border-accent text-center"
              >
                Book a Call
              </Link>
              <Link
                href="/work"
                className="px-6 py-3 rounded-md text-[10px] font-mono tracking-widest uppercase font-semibold text-accent hover:text-background bg-transparent border border-accent/30 hover:bg-accent hover:border-accent transition-all duration-200 text-center"
              >
                See Our Work
              </Link>
            </div>
          </div>

          {/* Right 3D Loom Scene */}
          <div className="lg:col-span-5 w-full h-[400px] lg:h-[500px] relative pointer-events-none">
            <LoomScene mode="idle" />
          </div>

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
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-6">
              Most agencies compartmentalize. We unify.
            </h2>
            <p className="text-muted text-xs sm:text-sm leading-relaxed">
              Startups fail when their tools don't communicate. A designer hands off a mockup, the developer simplifies it, the marketing specialist complains about the speed, and the founder pays the price.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-card-border p-8 rounded-md hover:border-card-border-hover transition-all duration-200 group">
              <div className="w-10 h-10 rounded-md bg-background border border-card-border flex items-center justify-center text-accent mb-6">
                <Clock className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-display font-semibold text-foreground mb-3">Slow, disconnected timelines</h4>
              <p className="text-xs text-muted leading-relaxed">
                Traditional agencies isolate production blocks, dragging out project launches by months while overhead accrues.
              </p>
            </div>
            
            <div className="bg-card border border-card-border p-8 rounded-md hover:border-card-border-hover transition-all duration-200 group">
              <div className="w-10 h-10 rounded-md bg-background border border-card-border flex items-center justify-center text-accent mb-6">
                <Users2 className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-display font-semibold text-foreground mb-3">Isolated Freelancers</h4>
              <p className="text-xs text-muted leading-relaxed">
                Contractors code without consulting design or SEO experts, leading to slow rendering metrics and broken interfaces.
              </p>
            </div>

            <div className="bg-card border border-card-border p-8 rounded-md hover:border-card-border-hover transition-all duration-200 group">
              <div className="w-10 h-10 rounded-md bg-background border border-card-border flex items-center justify-center text-accent mb-6">
                <TrendingDown className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-display font-semibold text-foreground mb-3">Low-Performing Products</h4>
              <p className="text-xs text-muted leading-relaxed">
                A design agency designs a pretty layout, but misses index structures, keyword tags, and core vitals entirely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-28 md:py-36 relative z-10 bg-background border-t border-card-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl mb-24">
            <span className="font-mono text-[9px] tracking-widest uppercase text-accent mb-3 block">
              OUR DEPLOYMENT ENGINE
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-6">
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
              INTERACTIVE LOOM CONSTELLATION
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-foreground">
              Weave your bespoke system setup
            </h2>
            <p className="text-muted text-xs sm:text-sm leading-relaxed">
              Select or deselect technology blocks to customize the deployment metrics and watch the pathways form.
            </p>
          </div>

          <WeaveBoard3D />
        </div>
      </section>

      {/* Process Section - GSAP Pinning Horizontal Scroll Scrollytelling */}
      <section 
        ref={processRef} 
        className="relative z-10 bg-background border-t border-card-border"
      >
        <div 
          ref={processTriggerRef} 
          className="flex flex-row w-[500vw] h-screen items-center"
        >
          {/* Cover/Intro slide */}
          <div className="w-[100vw] h-screen flex flex-col justify-center px-12 md:px-24">
            <span className="font-mono text-[9px] tracking-widest uppercase text-accent mb-3 block">
              THE METHODOLOGY
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground mb-6 max-w-xl">
              Our Woven Process
            </h2>
            <p className="text-muted text-sm max-w-lg leading-relaxed">
              Scroll vertically to unfold the engineering steps we take to weave design, code, and telemetry into one operational product.
            </p>
          </div>

          {/* Steps slides */}
          {[
            { step: "Discovery", desc: "Define structural parameters and targets. We map boundaries, system integrations, and core targets." },
            { step: "Strategy", desc: "Map architecture, indexing routes, & flows. Designing a telemetry schema aligned to indexing metrics." },
            { step: "Design", desc: "Craft interfaces without default templates. Clean, bespoke duotone layouts focused on high usability." },
            { step: "Build", desc: "Code high-velocity Next.js or Shopify stores. Utilizing React 19 server architectures and Tailwind v4." },
            { step: "Launch", desc: "Deploy with optimized caching structures. We launch with edge routing and speed metrics optimized." },
            { step: "Grow", desc: "Analyze metrics, SEO position, & workflow yield. Iterative adjustments driven by telemetry readouts." }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="w-[100vw] h-screen flex flex-col justify-center px-12 md:px-24 border-l border-card-border"
            >
              <span className="font-mono text-xl text-accent font-semibold mb-2 block">
                0{idx + 1}.
              </span>
              <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-6">
                {item.step}
              </h3>
              <p className="text-muted text-sm max-w-md leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 md:py-36 relative z-10 bg-background border-t border-card-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="font-mono text-[9px] tracking-widest uppercase text-accent block">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-[#F3F2EE]">
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
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-foreground">
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
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground mb-6">
            Let&apos;s weave a high-performance system together.
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-xl mx-auto mb-12">
            Book an engineering strategy call. We will discuss custom architecture, Shopify design systems, Next.js optimization, and search rankings.
          </p>

          <Link
            ref={ctaBtnRef}
            href="/contact?type=strategy"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-[10px] font-mono tracking-widest uppercase font-semibold text-background bg-accent hover:bg-accent-hover transition-colors border border-accent cursor-pointer"
          >
            Schedule Strategy Call
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          
          <p className="text-[9px] font-mono uppercase tracking-widest text-muted mt-6">
            NO SALES DECK &bull; DIRECT CONVERSATION &bull; 30 MIN
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
