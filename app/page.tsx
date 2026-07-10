"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Play,
  Compass,
  Zap,
  Puzzle,
  ShoppingBag,
  Globe,
  Cpu,
  Search,
  Terminal,
  Check,
  Copy,
  Sparkles,
  Heart,
  MessageSquare,
  Layers,
  ArrowUpRight,
  Sun
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BentoGrid from "@/components/BentoGrid";
import LogoMarquee from "@/components/LogoMarquee";
import StatCounters from "@/components/StatCounters";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const STACKS = [
  {
    id: "nextjs",
    name: "Next.js / React",
    icon: Globe,
    badge: "⚡ Dynamic Web Apps",
    title: "Blazing-fast custom software",
    description: "Next-gen React builds with SSR, static optimization, and absolute code clarity.",
    command: "npx byteloom init --stack nextjs",
    features: ["Prisma & PostgreSQL integrated", "Tailwind CSS & Framer Motion", "Serverless API routes Ready"]
  },
  {
    id: "shopify",
    name: "Shopify / eCom",
    icon: ShoppingBag,
    badge: "🛍️ High-Conversion eCom",
    title: "Shopify stores built for revenue",
    description: "Tailor-made Shopify themes, headless setups, and custom apps engineered for scale.",
    command: "npx byteloom init --stack shopify",
    features: ["Optimized conversion flow", "Custom theme liquid architecture", "Headless Next.js integrations"]
  },
  {
    id: "agents",
    name: "Custom AI / Agents",
    icon: Cpu,
    badge: "🤖 Intelligent Automation",
    title: "AI Workflows that save hours",
    description: "Integrate LLMs, AI agents, and custom backend scripts to automate manual team operations.",
    command: "npx byteloom init --stack agents",
    features: ["RAG database integrations", "Multi-platform agent sync", "Custom automated script triggers"]
  },
  {
    id: "seo",
    name: "Advanced SEO / Growth",
    icon: Search,
    badge: "📈 Rank on Google",
    title: "Technical SEO built into code",
    description: "On-page optimization, audit automation, speed refinement, and content loops that drive organic traffic.",
    command: "npx byteloom init --stack seo",
    features: ["Dynamic Sitemap generation", "Perfect core web vitals", "Semantic HTML architecture"]
  }
];

const getTerminalOutput = (tabId: string) => {
  switch (tabId) {
    case "nextjs":
      return `✓ Project initialized successfully!
✓ Set up Prisma schema & PostgreSQL
✓ Configured Tailwind CSS v4 & Framer Motion
✓ Running build check: success!
👉 Ready to customize: app/page.tsx`;
    case "shopify":
      return `✓ Shopify theme structure generated
✓ Synchronized custom Liquid layout schema
✓ Hydrated components with headless endpoints
👉 Next: run shopify theme dev`;
    case "agents":
      return `✓ AI Agent pipeline loaded
✓ Configured LLM orchestration parameters
✓ Connected WhatsApp / Slack API triggers
👉 Next: run local test-agent`;
    case "seo":
      return `✓ Running SEO core check on target domain...
✓ Audited sitemap & meta configurations
✓ Core Web Vitals optimized: 100/100 Mobile/Desktop
👉 Next: read design-system/MASTER.md`;
    default:
      return "";
  }
};

export default function Home() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [copied, setCopied] = React.useState(false);
  const [activeComponent, setActiveComponent] = React.useState("glass-card");
  const [copiedCode, setCopiedCode] = React.useState(false);

  const currentStack = STACKS[activeTab];

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(currentStack.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const SHOWCASE_COMPONENTS = [
    {
      id: "glass-card",
      name: "Glassmorphic Card",
      description: "Multi-layered frosted glass with backdrop blur and dynamic glow outline.",
      preview: (
        <div className="glass-card glass-card-hover p-6 rounded-2xl max-w-sm w-full mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">SaaS Balance</h4>
                <p className="text-[10px] text-zinc-500">Updated just now</p>
              </div>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] font-medium border border-[#10B981]/25">
              +18.4%
            </span>
          </div>
          <div className="space-y-1 mb-6">
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-semibold">Total Revenue</span>
            <span className="text-3xl font-bold text-white tracking-tight">$45,231.89</span>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 py-2 text-xs font-semibold rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors cursor-pointer">
              Withdraw
            </button>
            <button className="flex-1 py-2 text-xs font-semibold rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 hover:text-white transition-colors cursor-pointer">
              Details
            </button>
          </div>
        </div>
      ),
      code: `<div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden">
  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
        <Layers className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-white">SaaS Balance</h4>
        <p className="text-[10px] text-zinc-500">Updated just now</p>
      </div>
    </div>
    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
      +18.4%
    </span>
  </div>
  <div className="space-y-1 mb-6">
    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Total Revenue</span>
    <span className="text-3xl font-bold text-white">$45,231.89</span>
  </div>
</div>`
    },
    {
      id: "glow-button",
      name: "Interactive Glow Button",
      description: "Button with gradient border and dynamic drop shadow glow on hover.",
      preview: (
        <div className="flex items-center justify-center h-48">
          <button className="relative group px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-zinc-950 border border-zinc-800 hover:border-accent/40 transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(108,92,231,0.05)] hover:shadow-[0_0_30px_rgba(108,92,231,0.25)] hover:scale-[1.03]">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/20 to-indigo-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <span className="relative flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent group-hover:animate-pulse" />
              Launch Dashboard
            </span>
          </button>
        </div>
      ),
      code: `<button className="relative group px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-zinc-950 border border-zinc-800 hover:border-indigo-500/40 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.05)] hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:scale-[1.03]">
  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  <span className="relative flex items-center gap-2">
    <Sparkles className="w-4 h-4 text-indigo-400" />
    Launch Dashboard
  </span>
</button>`
    },
    {
      id: "notifications",
      name: "Live Feed List",
      description: "Notification feed with animated entry, count indicator, and dynamic items.",
      preview: (
        <div className="glass-card p-5 rounded-2xl max-w-sm w-full mx-auto space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-850 pb-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Live System Events</h4>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
          </div>
          <div className="space-y-3">
            {[
              { text: "Shopify webhook synched", time: "2m ago", color: "text-[#10B981]" },
              { text: "PostgreSQL backup finished", time: "12m ago", color: "text-blue-400" },
              { text: "AI pipeline task completed", time: "45m ago", color: "text-accent" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#0A0A0B]/60 border border-[#1F1F23] hover:border-zinc-850 transition-colors">
                <span className="text-zinc-350 flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.color} bg-current`} />
                  {item.text}
                </span>
                <span className="text-[10px] text-zinc-555">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      code: `<div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 max-w-sm w-full space-y-4">
  <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Live Events</h4>
    <span className="flex h-2 w-2 relative">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
    </span>
  </div>
  <div className="space-y-3">
    <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
      <span className="text-zinc-350">Shopify synced</span>
      <span className="text-[10px] text-zinc-500">2m ago</span>
    </div>
  </div>
</div>`
    },
    {
      id: "bar-chart",
      name: "Interactive Bar Analytics",
      description: "Sleek responsive analytics visualization built with Tailwind CSS.",
      preview: (
        <div className="glass-card p-5 rounded-2xl max-w-sm w-full mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Weekly Conversion</h4>
            <span className="text-[10px] text-zinc-500">Average: 4.8%</span>
          </div>
          <div className="flex items-end justify-between gap-2 h-28 pt-4">
            {[
              { val: 40, day: "M" },
              { val: 75, day: "T", active: true },
              { val: 55, day: "W" },
              { val: 90, day: "T" },
              { val: 30, day: "F" },
              { val: 65, day: "S" },
              { val: 80, day: "S" }
            ].map((bar, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 group/bar">
                <div className="w-full relative rounded-t-sm overflow-hidden bg-zinc-800/60 group-hover/bar:bg-zinc-700/80 transition-colors" style={{ height: `${bar.val}px` }}>
                  <div className={`absolute inset-0 bg-gradient-to-t ${bar.active ? "from-accent to-indigo-400" : "from-zinc-700 to-zinc-550"} opacity-80 group-hover/bar:opacity-100 transition-opacity`} />
                </div>
                <span className="text-[10px] text-zinc-500 font-semibold">{bar.day}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      code: `<div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 max-w-sm w-full space-y-6">
  <div className="flex items-center justify-between">
    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Weekly Conversion</h4>
  </div>
  <div className="flex items-end justify-between gap-2 h-28 pt-4">
    <div className="flex-1 flex flex-col items-center gap-2 group">
      <div className="w-full bg-zinc-800 rounded-t-sm h-12 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-500 to-cyan-400" />
      </div>
      <span className="text-[10px] text-zinc-500">M</span>
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
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-24 flex flex-col justify-center overflow-hidden bg-[#0A0A0B] bg-grid-pattern">
        {/* Glow meshes */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-mesh-glow rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121214] border border-[#1F1F23] text-xs font-semibold text-zinc-300 hover:text-white transition-all cursor-default mb-8"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>⚡ Design-first development engine</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white max-w-5xl leading-[1.05] mb-6"
          >
            The UI/UX engine for
            <br />
            <span className="text-gradient">fast-growing startups.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-12"
          >
            Byteloom designs, builds, and automates high-performance digital products — combining gorgeous UI, clean Next.js/Shopify code, and search engine integration.
          </motion.p>

          {/* Stack Pill Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-2.5 mb-12 max-w-3xl"
          >
            {STACKS.map((stack, idx) => {
              const Icon = stack.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={stack.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                    isActive
                      ? "bg-accent border-accent text-white shadow-lg shadow-accent/20"
                      : "bg-[#121214] border-[#1F1F23] hover:border-[#2E2E35] text-zinc-450 hover:text-white"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{stack.name}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Dynamic Stack Info & Command Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 text-left"
          >
            {/* Left: Info */}
            <div className="md:col-span-5 flex flex-col justify-center space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                {currentStack.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {currentStack.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {currentStack.description}
              </p>
              <ul className="space-y-2.5 pt-2">
                {currentStack.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Terminal CLI Box */}
            <div className="md:col-span-7">
              <div className="rounded-xl border border-[#1F1F23] bg-[#0B0B0C] shadow-2xl overflow-hidden relative group">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0F0F11] border-b border-[#1F1F23]/60">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-650">terminal - byteloom-cli</span>
                  <button
                    onClick={handleCopyCommand}
                    className="p-1 rounded text-zinc-550 hover:text-white hover:bg-zinc-900 transition-all cursor-pointer"
                    title="Copy command"
                  >
                    {copied ? <Check className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>

                {/* Body */}
                <div className="p-5 font-mono text-xs text-zinc-300 space-y-4 min-h-[170px] select-text">
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-bold">$</span>
                    <span>{currentStack.command}</span>
                    <span className="w-1.5 h-3 bg-accent animate-blink" />
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.pre
                      key={currentStack.id}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[11px] text-zinc-550 leading-relaxed font-mono whitespace-pre-wrap"
                    >
                      {getTerminalOutput(currentStack.id)}
                    </motion.pre>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Logobar */}
      <LogoMarquee />
      <StatCounters />

      {/* 21st.dev Style Component Showcase */}
      <section className="py-28 bg-[#0A0A0B] border-t border-[#1F1F23] relative">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
              Interactive Component Showcase
            </span>
            <h2 className="text-3xl md:text-6xl font-black tracking-tight text-white">
              Sleek design, built for conversion.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              We construct custom web components adhering to strict accessibility guidelines, smooth interactive animations, and responsive structures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Component Selectors */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-4">
              <div className="space-y-2">
                {SHOWCASE_COMPONENTS.map((comp) => (
                  <button
                    key={comp.id}
                    onClick={() => setActiveComponent(comp.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      activeComponent === comp.id
                        ? "bg-[#121214] border-accent/40 shadow-lg shadow-accent/5"
                        : "bg-transparent border-[#1F1F23] hover:border-zinc-800 hover:bg-[#121214]/40"
                    }`}
                  >
                    <h4 className="text-sm font-semibold text-white mb-1">{comp.name}</h4>
                    <p className="text-xs text-zinc-550 leading-relaxed">{comp.description}</p>
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#121214]/60 border border-[#1F1F23] text-xs text-zinc-450 leading-relaxed">
                💡 All components are fully responsive, support dark/light modes, and use Framer Motion for premium fluid interactions.
              </div>
            </div>

            {/* Right: Component Preview and Code Panel */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Preview Box */}
              <div className="glass-card rounded-2xl p-6 flex flex-col justify-center min-h-[300px]">
                <span className="text-[10px] font-bold text-zinc-650 uppercase tracking-widest block mb-4">Live Preview</span>
                <div className="flex-1 flex items-center justify-center">
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

              {/* Code Box */}
              <div className="rounded-2xl border border-[#1F1F23] bg-[#0B0B0C] flex flex-col justify-between overflow-hidden min-h-[300px]">
                <div className="flex items-center justify-between px-4 py-3 bg-[#0F0F11] border-b border-[#1F1F23]/60">
                  <span className="text-[10px] font-mono text-zinc-650">tailwind-code.tsx</span>
                  <button
                    onClick={handleCopyCode}
                    className="p-1 rounded text-zinc-550 hover:text-white hover:bg-zinc-900 transition-all cursor-pointer"
                    title="Copy snippet"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>

                <div className="p-4 font-mono text-[10px] text-zinc-500 overflow-y-auto leading-relaxed flex-1 select-text">
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

      {/* Problem Section */}
      <section className="py-24 bg-[#0A0A0B] border-t border-[#1F1F23] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-xs font-semibold tracking-wider uppercase text-accent mb-3">The Problem</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Most agencies slow you down.
              <br />
              We're built for speed.
            </h3>
            <p className="text-zinc-405 text-base md:text-lg leading-relaxed">
              Founders don't have time for slow timelines, disconnected freelancers, or agencies
              that only do one thing. You need a team that can design your brand, build your
              product, get you found on Google, and automate the busywork — without juggling
              five different vendors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card glass-card-hover p-8 rounded-3xl relative overflow-hidden">
              <div className="text-3xl mb-6">🐌</div>
              <h4 className="text-lg font-semibold text-white mb-3">Slow, unpredictable timelines</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Traditional agencies work in silos, causing endless delays, missed launch dates, and blown budgets.
              </p>
            </div>
            <div className="glass-card glass-card-hover p-8 rounded-3xl relative overflow-hidden">
              <div className="text-3xl mb-6">🧩</div>
              <h4 className="text-lg font-semibold text-white mb-3">Fragmented teams</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Freelancers don't talk to each other. Your designer leaves before the developer starts, leading to chaos.
              </p>
            </div>
            <div className="glass-card glass-card-hover p-8 rounded-3xl relative overflow-hidden">
              <div className="text-3xl mb-6">📉</div>
              <h4 className="text-lg font-semibold text-white mb-3">Pretty websites that don't rank</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
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
                <p className="text-sm text-zinc-400 leading-relaxed">
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
                <p className="text-sm text-zinc-400 leading-relaxed">
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
                <p className="text-sm text-zinc-400 leading-relaxed">
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
            <p className="text-zinc-400 text-base md:text-lg">
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

          <p className="text-zinc-400 text-sm md:text-base mb-10 max-w-xl mx-auto">
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
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Book a free 30-minute strategy call — no pitch decks, just a real conversation about your goals.
          </p>

          <Link
            href="/contact?type=strategy"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-accent hover:bg-accent-hover transition-all duration-300 shadow-xl shadow-accent/20 hover:scale-[1.03]"
          >
            Book a Free Strategy Call
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <p className="text-xs text-zinc-550 mt-4">
            No commitment. No spam. Just clarity.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
