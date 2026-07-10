"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, ArrowRight, X, Sparkles, Cpu, Award } from "lucide-react";

interface Project {
  id: number;
  client: string;
  industry: string;
  result: string;
  summary: string;
  challenge: string;
  approach: string;
  solution: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  tags: string[];
  category: "shopify" | "web-apps" | "branding" | "automation" | "mobile";
  color: string;
}

export default function WorkPage() {
  const categories = [
    { label: "All", value: "all" },
    { label: "Shopify", value: "shopify" },
    { label: "Web Apps", value: "web-apps" },
    { label: "Branding", value: "branding" },
    { label: "Automation", value: "automation" },
    { label: "Mobile", value: "mobile" },
  ];

  const projects: Project[] = [
    {
      id: 1,
      client: "Lotus Bloom",
      industry: "D2C Cosmetics",
      result: "+34% conversion rate in 6 weeks",
      summary: "Rebuilt the entire Shopify storefront architecture from scratch, optimizing code density and Core Web Vitals to deliver a lightning-fast shopping experience.",
      challenge: "Lotus Bloom suffered from high bounce rates and low conversion because their Shopify store took over 6 seconds to load on mobile. App fatigue and messy theme code bloated their site.",
      approach: "We audited all active apps, custom coded a theme based on clean Liquid structures, and compressed images. We redesigned the product detail pages to optimize the cart-add flow.",
      solution: "A custom headless-like Shopify liquid build with minimal app dependencies, fully optimized layout shifting, and streamlined responsive checkout paths.",
      testimonial: {
        quote: "Byteloom rebuilt our Shopify store in 3 weeks and conversion jumped 34%. They just get it.",
        author: "Aditi Rao",
        role: "Founder, Lotus Bloom"
      },
      tags: ["Shopify", "SEO", "UI/UX"],
      category: "shopify",
      color: "from-pink-500/20 to-indigo-500/20",
    },
    {
      id: 2,
      client: "ApexFlow Technologies",
      industry: "Data SaaS",
      result: "10x faster report compilation",
      summary: "Architected a custom React dashboard on top of a serverless database backend, allowing users to compile and share analytics reports in milliseconds.",
      challenge: "ApexFlow's enterprise users complained of dashboard lockups when loading large time-series databases, causing drop-offs in customer retention.",
      approach: "We implemented incremental static regeneration (ISR) and optimized API response schemas. We replaced heavy chart scripts with lightweight SVG-based visualization libraries.",
      solution: "A modern Next.js 14 dashboards app with dynamic code splitting, custom caching layers, and responsive UI components.",
      testimonial: {
        quote: "Finally, an agency that does design, dev, AND marketing well. One team, zero handoff chaos.",
        author: "James Carter",
        role: "CEO, ApexFlow Technologies"
      },
      tags: ["Next.js", "React", "DevOps"],
      category: "web-apps",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 3,
      client: "Aura Logistics",
      industry: "Supply Chain",
      result: "Saved 20 hours/week in busywork",
      summary: "Mapped internal document handling and integrated intelligent LLM extraction workflows to automate invoice validation and tracking.",
      challenge: "Aura's operations desk spent hours copy-pasting tracking details from invoice PDF files into their ERP manually, resulting in input errors.",
      approach: "We designed a automated parser pipeline using LLMs to read incoming invoices, validate data against active database records, and automatically update ERP fields.",
      solution: "An automated workflow engine built using Make.com, Python functions, and OpenAI APIs, with a visual validation log UI for managers.",
      testimonial: {
        quote: "Their automation work alone saved us 20 hours a week. Incredible ROI.",
        author: "Meera Shah",
        role: "COO, Aura Logistics"
      },
      tags: ["Automation", "AI Workflows"],
      category: "automation",
      color: "from-purple-500/20 to-indigo-500/20",
    },
    {
      id: 4,
      client: "Velo Mobility",
      industry: "Urban Micro-transit",
      result: "4.9 stars App Store rating",
      summary: "Engineered a high-performance cross-platform mobile application with offline-first support and real-time mapping integrations.",
      challenge: "Velo needed a reliable mobile app for users to find and unlock nearby electric scooters in poor network environments.",
      approach: "We selected Flutter for cross-platform efficiency and designed an offline-first local database using SQLite. We synchronized map caching to optimize load times.",
      solution: "A native-performing mobile app featuring custom BLE unlock flows, fast Mapbox overlays, and seamless checkout integrations.",
      testimonial: {
        quote: "We launched on schedule, and users loved the speed of unlocking. Byteloom delivered exactly what they promised.",
        author: "Nikhil Varma",
        role: "Director of Product, Velo Mobility"
      },
      tags: ["Android", "UI/UX", "API Dev"],
      category: "mobile",
      color: "from-emerald-500/20 to-teal-500/20",
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Navbar />

      <main className="bg-[#0A0A0B] min-h-screen pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Real results for
              <br />
              <span className="bg-gradient-to-r from-accent to-[#10B981] bg-clip-text text-transparent">
                real founders.
              </span>
            </h1>
            <p className="text-[#8E8E93] text-lg leading-relaxed">
              We focus on building systems that drive real growth, conversions, and operational speed. Explore our past work below.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-[#1F1F23]/60 pb-6 mb-12">
            <span className="text-[#8E8E93] text-xs font-semibold uppercase tracking-wider mr-4 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeCategory === cat.value
                    ? "bg-accent text-white shadow-md shadow-accent/15"
                    : "bg-[#121214] text-[#8E8E93] hover:text-white border border-[#1F1F23] hover:border-[#2E2E35]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-[#121214] border border-[#1F1F23] hover:border-[#2E2E35] rounded-3xl overflow-hidden flex flex-col transition-all duration-300"
              >
                {/* Visual Mockup Area */}
                <div className={`h-64 bg-gradient-to-tr ${project.color} flex items-center justify-center p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(#1f1f23_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-25" />
                  <div className="z-10 bg-[#0A0A0B]/85 border border-[#1F1F23]/80 px-6 py-4 rounded-2xl text-center shadow-xl">
                    <span className="text-xs uppercase tracking-widest text-[#8E8E93] font-semibold block mb-1">
                      {project.client}
                    </span>
                    <span className="text-lg md:text-xl font-bold text-white block">
                      {project.result}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-[#8E8E93] uppercase tracking-wider">
                        {project.client}
                      </span>
                      <span className="text-[#1F1F23] font-bold">•</span>
                      <span className="text-xs text-[#8E8E93] font-medium">
                        {project.industry}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-accent transition-colors mb-3">
                      {project.result}
                    </h3>
                    <p className="text-sm text-[#8E8E93] leading-relaxed mb-6">
                      {project.summary}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-[#0A0A0B] border border-[#1F1F23] text-[10px] font-semibold text-[#F5F5F7]/70">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white group-hover:text-accent transition-colors">
                      View Case Study
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Case Study Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0A0B]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#121214] border border-[#1F1F23] rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 md:p-10 relative scrollbar-thin scrollbar-thumb-[#1F1F23]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#0A0A0B] border border-[#1F1F23] text-[#8E8E93] hover:text-white transition-colors"
                aria-label="Close case study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8E8E93] font-semibold block mb-2">
                  {selectedProject.client} — {selectedProject.industry}
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-8 pr-10">
                  {selectedProject.result}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-y border-[#1F1F23]/60 py-8">
                  <div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" /> Challenge
                    </span>
                    <p className="text-sm text-[#8E8E93] leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#10B981] uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Approach
                    </span>
                    <p className="text-sm text-[#8E8E93] leading-relaxed">
                      {selectedProject.approach}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" /> Solution
                    </span>
                    <p className="text-sm text-[#8E8E93] leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Testimonial Block */}
                <div className="bg-[#0A0A0B] border border-[#1F1F23] rounded-2xl p-6 md:p-8 mb-6">
                  <p className="text-base md:text-lg italic text-[#F5F5F7]/95 mb-4 leading-relaxed">
                    &ldquo;{selectedProject.testimonial.quote}&rdquo;
                  </p>
                  <div className="text-sm font-semibold text-white">
                    — {selectedProject.testimonial.author}
                  </div>
                  <div className="text-xs text-[#8E8E93]">
                    {selectedProject.testimonial.role}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-8">
                  <div className="flex gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-[#0A0A0B] border border-[#1F1F23] text-xs font-semibold text-[#8E8E93]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#1F1F23] hover:bg-accent text-white transition-colors duration-300"
                  >
                    Back to Work
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
