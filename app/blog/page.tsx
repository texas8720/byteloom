"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Search, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: "shopify" | "web-dev" | "seo" | "marketing" | "automation" | "design";
  categoryLabel: string;
  readTime: string;
  date: string;
  color: string;
}

export default function BlogPage() {
  const categories = [
    { label: "All Posts", value: "all" },
    { label: "Shopify", value: "shopify" },
    { label: "Web Dev", value: "web-dev" },
    { label: "SEO", value: "seo" },
    { label: "Marketing", value: "marketing" },
    { label: "Automation", value: "automation" },
    { label: "Design", value: "design" },
  ];

  const posts: Post[] = [
    {
      id: 1,
      title: "How to Save 15 Hours a Week with Custom LLM Document Parsing Workflows",
      excerpt: "Repetitive invoicing and invoice PDF data entries are major operations bottlenecks. Learn how we connected custom AI parsers directly to internal ERPs to automate validation.",
      category: "automation",
      categoryLabel: "Automation",
      readTime: "5 min read",
      date: "July 8, 2026",
      color: "from-purple-500/20 to-indigo-500/20"
    },
    {
      id: 2,
      title: "The Complete Checklist for Technical SEO Audits in 2026",
      excerpt: "Ranking on Google requires more than keywords. We break down the crawlability checks, schema markups, and core web vitals layouts that keep your page indexed and visible.",
      category: "seo",
      categoryLabel: "SEO",
      readTime: "8 min read",
      date: "June 28, 2026",
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: 3,
      title: "Typography and Spacing: How Visual Hierarchy Multiplies Checkout Conversions",
      excerpt: "Premium design isn't just art — it is conversion science. Learn how tightening headings tracking and expanding body heights affects checkout completions on Shopify.",
      category: "design",
      categoryLabel: "Design",
      readTime: "4 min read",
      date: "June 15, 2026",
      color: "from-pink-500/20 to-rose-500/20"
    }
  ];

  const featuredPost = {
    title: "Why Headless Shopify is the Future of High-Scale E-Commerce",
    excerpt: "D2C brands need faster speeds and tailored checkout layouts to beat acquisition costs. We outline how decoupled frontends increase sales volume and checkout security.",
    category: "shopify",
    categoryLabel: "Shopify",
    readTime: "12 min read",
    date: "July 9, 2026",
    color: "from-blue-500/20 to-indigo-500/20"
  };

  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredPosts = activeCategory === "all"
    ? posts
    : posts.filter((post) => post.category === activeCategory);

  return (
    <>
      <Navbar />

      <main className="bg-[#0A0A0B] min-h-screen pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Insights on design,
              <br />
              <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
                dev, and growth.
              </span>
            </h1>
            <p className="text-[#8E8E93] text-lg leading-relaxed">
              Actionable guides, technical blueprints, and design systems analysis curated for ambitious founders.
            </p>
          </div>

          {/* Featured Post Area (Visible when all or shopify is active) */}
          {(activeCategory === "all" || activeCategory === "shopify") && (
            <div className="mb-20">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-4">
                Featured Article
              </span>
              <div className="group bg-[#121214] border border-[#1F1F23] hover:border-[#2E2E35] rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 transition-all duration-300">
                {/* Visual Area (5 columns) */}
                <div className={`lg:col-span-5 bg-gradient-to-br ${featuredPost.color} h-64 lg:h-auto flex items-center justify-center p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(#1f1f23_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-25" />
                  <span className="text-4xl font-extrabold text-white/10 uppercase tracking-widest">{featuredPost.categoryLabel}</span>
                </div>
                
                {/* Content Area (7 columns) */}
                <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-[#8E8E93] mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#0A0A0B] border border-[#1F1F23] font-semibold text-accent uppercase tracking-wider">
                        {featuredPost.categoryLabel}
                      </span>
                      <span>{featuredPost.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-accent transition-colors mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#8E8E93] leading-relaxed mb-8">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <Link
                    href={`/blog/headless-shopify`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white group-hover:text-accent transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Category Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-[#1F1F23]/60 pb-6 mb-12">
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

          {/* Recent Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group bg-[#121214] border border-[#1F1F23] hover:border-[#2E2E35] rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Image Placeholder */}
                  <div className={`h-48 bg-gradient-to-tr ${post.color} flex items-center justify-center p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[radial-gradient(#1f1f23_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-25" />
                    <span className="text-xl font-bold text-white/20 uppercase tracking-widest">{post.categoryLabel}</span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[10px] text-[#8E8E93] mb-3">
                      <span className="font-semibold text-accent uppercase tracking-wider">
                        {post.categoryLabel}
                      </span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-accent transition-colors mb-3 leading-snug">
                      {post.title}
                    </h4>
                    <p className="text-xs text-[#8E8E93] leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#1F1F23]/60 mt-4 flex justify-between items-center">
                  <span className="text-[10px] font-semibold text-[#8E8E93] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white group-hover:text-accent transition-colors"
                  >
                    Read
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
