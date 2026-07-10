"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Play, Compass, ArrowUpRight, Zap, Puzzle, TrendingDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BentoGrid from "@/components/BentoGrid";
import LogoMarquee from "@/components/LogoMarquee";
import StatCounters from "@/components/StatCounters";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#0A0A0B]">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#10B981]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121214] border border-[#1F1F23] text-xs font-medium text-white mb-8"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
            </span>
            ⚡ Trusted by 50+ founders & startups
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] mb-6"
          >
            Build. Launch. Scale.
            <br />
            <span className="bg-gradient-to-r from-accent via-indigo-400 to-[#10B981] bg-clip-text text-transparent">
              Your digital growth partner.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-xl text-[#8E8E93] max-w-2xl leading-relaxed mb-10"
          >
            Byteloom designs, builds, and automates the digital products fast-growing
            startups run on — from Shopify stores to AI-powered workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact?type=strategy"
              className="group px-8 py-4 rounded-full text-sm font-semibold text-white bg-accent hover:bg-accent-hover transition-all duration-300 shadow-xl shadow-accent/20 hover:scale-[1.03] flex items-center gap-2"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="px-8 py-4 rounded-full text-sm font-semibold text-[#8E8E93] hover:text-white hover:bg-[#121214] border border-[#1F1F23] hover:border-[#2E2E35] transition-all duration-300"
            >
              See Our Work →
            </Link>
          </motion.div>
        </div>

        {/* Visual Bento Mockup Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto px-6 mt-20 relative"
        >
          <div className="relative rounded-2xl border border-[#1F1F23] bg-[#121214] p-4 shadow-2xl shadow-accent/5">
            <div className="flex items-center gap-2 mb-4 border-b border-[#1F1F23]/60 pb-3">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-[#8E8E93] ml-2">byteloom.digital/dashboard</span>
            </div>
            <div className="h-64 md:h-96 rounded-lg bg-[#0A0A0B] flex items-center justify-center relative overflow-hidden border border-[#1F1F23]/50">
              <div className="absolute inset-0 bg-[radial-gradient(#1f1f23_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
              <div className="flex flex-col items-center gap-4 text-center z-10 px-6">
                <div className="p-4 rounded-full bg-[#121214] border border-[#1F1F23] text-accent animate-pulse">
                  <Play className="w-8 h-8 fill-current" />
                </div>
                <h3 className="text-lg font-semibold text-white">Watch our 2-min workflow walk-through</h3>
                <p className="text-xs text-[#8E8E93] max-w-sm">See how Byteloom merges development, design, and SEO into one lightning-fast service framework.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Social Proof Section */}
      <LogoMarquee />
      <StatCounters />

      {/* Problem Section */}
      <section className="py-24 bg-[#0A0A0B] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-xs font-semibold tracking-wider uppercase text-accent mb-3">The Problem</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Most agencies slow you down.
              <br />
              We're built for speed.
            </h3>
            <p className="text-[#8E8E93] text-base md:text-lg leading-relaxed">
              Founders don't have time for slow timelines, disconnected freelancers, or agencies
              that only do one thing. You need a team that can design your brand, build your
              product, get you found on Google, and automate the busywork — without juggling
              five different vendors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#121214] border border-[#1F1F23] rounded-3xl p-8 hover:border-[#2E2E35] transition-all">
              <div className="text-3xl mb-6">🐌</div>
              <h4 className="text-lg font-semibold text-white mb-3">Slow, unpredictable timelines</h4>
              <p className="text-sm text-[#8E8E93] leading-relaxed">
                Traditional agencies work in silos, causing endless delays, missed launch dates, and blown budgets.
              </p>
            </div>
            <div className="bg-[#121214] border border-[#1F1F23] rounded-3xl p-8 hover:border-[#2E2E35] transition-all">
              <div className="text-3xl mb-6">🧩</div>
              <h4 className="text-lg font-semibold text-white mb-3">Fragmented teams</h4>
              <p className="text-sm text-[#8E8E93] leading-relaxed">
                Freelancers don't talk to each other. Your designer leaves before the developer starts, leading to chaos.
              </p>
            </div>
            <div className="bg-[#121214] border border-[#1F1F23] rounded-3xl p-8 hover:border-[#2E2E35] transition-all">
              <div className="text-3xl mb-6">📉</div>
              <h4 className="text-lg font-semibold text-white mb-3">Pretty websites that don't rank</h4>
              <p className="text-sm text-[#8E8E93] leading-relaxed">
                A design agency makes a beautiful site, but fails technical SEO and performance. You get zero traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-[#121214] border-y border-[#1F1F23] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-xs font-semibold tracking-wider uppercase text-accent mb-3">The Solution</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              One team. Every service your startup needs.
            </h3>
            <p className="text-[#8E8E93] text-base md:text-lg leading-relaxed">
              Byteloom brings design, development, marketing, and automation under one roof —
              so you move faster, spend less, and launch with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Build fast</h4>
                <p className="text-sm text-[#8E8E93] leading-relaxed">
                  Production-ready Shopify, WordPress, Next.js & React builds developed with strict code standards.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981]">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Get found</h4>
                <p className="text-sm text-[#8E8E93] leading-relaxed">
                  Advanced SEO setups and high-ROI performance marketing campaigns built to scale your user acquisition.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Puzzle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Scale smart</h4>
                <p className="text-sm text-[#8E8E93] leading-relaxed">
                  Connect apps and build custom AI-powered workflows that save your team dozens of manual hours every week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-xs font-semibold tracking-wider uppercase text-accent mb-3">Our Services</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Everything you need, under one roof.
            </h3>
            <p className="text-[#8E8E93] text-base md:text-lg">
              From your first landing page to your fully automated backend.
            </p>
          </div>

          <BentoGrid />
        </div>
      </section>

      {/* Process Preview Section */}
      <section className="py-24 bg-[#121214] border-y border-[#1F1F23]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-xs font-semibold tracking-wider uppercase text-accent mb-3">Our Process</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8">
            How we work
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-8 max-w-4xl mx-auto">
            {["Discovery", "Strategy", "Design", "Build", "Launch", "Grow"].map((step, idx) => (
              <div key={step} className="flex items-center gap-3 md:gap-6">
                <div className="px-5 py-2.5 rounded-full bg-[#0A0A0B] border border-[#1F1F23] text-sm font-semibold text-white">
                  {idx + 1}. {step}
                </div>
                {idx < 5 && <ChevronRight className="w-5 h-5 text-[#8E8E93]/60 hidden sm:block" />}
              </div>
            ))}
          </div>

          <p className="text-[#8E8E93] text-sm md:text-base mb-10 max-w-xl mx-auto">
            A clear, transparent process — you'll always know what's happening and why.
          </p>

          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-accent hover:bg-accent-hover px-6 py-3 rounded-full transition-colors shadow-lg shadow-accent/20"
          >
            See Our Full Process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-semibold tracking-wider uppercase text-accent mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Founders trust Byteloom to move fast
            </h3>
          </div>

          <Testimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#121214] border-t border-[#1F1F23]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-semibold tracking-wider uppercase text-accent mb-3">FAQ</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Frequently Asked Questions
            </h3>
          </div>

          <FAQ />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-[#0A0A0B] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Let's build something founders remember.
          </h2>
          <p className="text-[#8E8E93] text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Book a free 30-minute strategy call — no pitch decks, just a real conversation about your goals.
          </p>

          <Link
            href="/contact?type=strategy"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-accent hover:bg-accent-hover transition-all duration-300 shadow-xl shadow-accent/20 hover:scale-[1.03]"
          >
            Book a Free Strategy Call
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <p className="text-xs text-[#8E8E93]/60 mt-4">
            No commitment. No spam. Just clarity.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
