"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ShoppingBag, 
  Globe, 
  Cpu, 
  Paintbrush, 
  Search, 
  TrendingUp, 
  Sparkles, 
  Smartphone, 
  ArrowRight,
  CheckCircle2,
  PlusCircle
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const servicesList = [
    {
      id: "shopify",
      icon: <ShoppingBag className="w-8 h-8 text-accent" />,
      name: "Shopify Development",
      description: "High-converting Shopify stores, built to scale with your brand.",
      deliverables: [
        "Custom theme design & development",
        "Speed & Core Web Vitals optimization",
        "App integrations & custom features",
        "Migration from other platforms",
        "Post-launch support"
      ],
      bestFor: "D2C brands & e-commerce founders",
    },
    {
      id: "wordpress",
      icon: <Globe className="w-8 h-8 text-[#10B981]" />,
      name: "WordPress Development",
      description: "Flexible, SEO-friendly WordPress websites your team can manage without a developer.",
      deliverables: [
        "Custom theme & page builder setup",
        "Plugin architecture & performance tuning",
        "CMS training for your team",
        "Security hardening & maintenance plans"
      ],
      bestFor: "Content-driven businesses, blogs, service businesses",
    },
    {
      id: "nextjs",
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      name: "Next.js & React Development",
      description: "Modern, blazing-fast web apps built on the same stack top startups use.",
      deliverables: [
        "Custom web app & dashboard development",
        "API integrations & backend architecture",
        "Performance & SEO optimization",
        "Ongoing feature development"
      ],
      bestFor: "SaaS startups & product companies",
    },
    {
      id: "uiux",
      icon: <Paintbrush className="w-8 h-8 text-accent" />,
      name: "UI/UX Design",
      description: "Interfaces that feel premium and convert visitors into customers.",
      deliverables: [
        "User research & wireframing",
        "High-fidelity UI design (Figma)",
        "Design systems & component libraries",
        "Usability testing"
      ],
      bestFor: "Startups building or redesigning a product",
    },
    {
      id: "seo",
      icon: <Search className="w-8 h-8 text-[#10B981]" />,
      name: "SEO",
      description: "Get found on Google — and stay there.",
      deliverables: [
        "Technical SEO audits & fixes",
        "On-page & content SEO",
        "Link building & authority growth",
        "Monthly reporting & strategy calls"
      ],
      bestFor: "Businesses relying on organic traffic",
    },
    {
      id: "marketing",
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      name: "Performance Marketing",
      description: "Paid campaigns engineered around ROI, not impressions.",
      deliverables: [
        "Meta & Google Ads management",
        "Landing page + funnel optimization",
        "Creative testing & iteration",
        "Transparent reporting dashboards"
      ],
      bestFor: "Startups ready to scale acquisition",
    },
    {
      id: "automation",
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      name: "Automation & AI Workflows",
      description: "We connect your tools and automate the repetitive work.",
      deliverables: [
        "Workflow automation (Zapier, Make, custom)",
        "AI-powered chatbots & support tools",
        "CRM & internal tool automation",
        "Custom API integrations"
      ],
      bestFor: "Growing teams drowning in manual work",
    },
    {
      id: "android",
      icon: <Smartphone className="w-8 h-8 text-[#10B981]" />,
      name: "Android / Mobile App Development",
      description: "Native and cross-platform apps built to launch fast and scale.",
      deliverables: [
        "Android (Kotlin) & cross-platform (Flutter/React Native)",
        "App architecture & backend integration",
        "Play Store launch support",
        "Post-launch maintenance"
      ],
      bestFor: "Startups launching a mobile-first product",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#0A0A0B] min-h-screen pt-32 pb-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
            >
              Every service. One team.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-[#8E8E93] leading-relaxed max-w-2xl mx-auto"
            >
              Design, development, marketing, and automation — built to work together.
            </motion.p>
          </div>
        </section>

        {/* Services List Section */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              className="bg-[#121214] border border-[#1F1F23] hover:border-[#2E2E35] rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative scroll-mt-24"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#0A0A0B] border border-[#1F1F23] flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight mb-3">
                  {service.name}
                </h2>
                <p className="text-sm text-[#8E8E93] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables checklist */}
                <div className="mb-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">What's Included:</h3>
                  <ul className="flex flex-col gap-2.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4.5 h-4.5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#F5F5F7]/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-[#1F1F23]/60 pt-6 mt-6">
                <p className="text-xs text-[#8E8E93] mb-4">
                  <strong className="text-white font-medium">Best for:</strong> {service.bestFor}
                </p>
                <Link
                  href={`/contact?service=${encodeURIComponent(service.name)}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#0A0A0B] border border-[#1F1F23] hover:border-accent hover:text-accent px-5 py-2.5 rounded-full transition-all duration-300 w-full justify-center"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}

          {/* Plus More Card */}
          <motion.div
            id="more"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-[#121214] border border-[#1F1F23] rounded-3xl p-8 flex flex-col justify-between md:col-span-2 relative scroll-mt-24"
          >
            <div>
              <div className="w-16 h-16 rounded-2xl bg-[#0A0A0B] border border-[#1F1F23] flex items-center justify-center mb-6">
                <PlusCircle className="w-8 h-8 text-accent animate-pulse" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-3">
                And more...
              </h2>
              <p className="text-sm text-[#8E8E93] leading-relaxed mb-6 max-w-2xl">
                Branding · Copywriting · CRM Setup · DevOps · QA Testing. We are a full-suite digital studio. Whatever your tech, design or operations need — Byteloom can weave it.
              </p>
            </div>
            <div className="border-t border-[#1F1F23]/60 pt-6 mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-[#8E8E93]">
                Don't see exactly what you need listed above? Let's discuss a custom arrangement.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-accent hover:bg-accent-hover px-6 py-3 rounded-full transition-colors shadow-lg shadow-accent/20 flex-shrink-0"
              >
                Ask Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
