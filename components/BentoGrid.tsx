"use client";

import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  Globe, 
  Cpu, 
  Paintbrush, 
  Search, 
  TrendingUp, 
  Sparkles, 
  Smartphone, 
  PlusCircle 
} from "lucide-react";
import Link from "next/link";

interface BentoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  className?: string;
  delay: number;
}

function BentoCard({ icon, title, description, href, className = "", delay }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`group relative overflow-hidden bg-[#121214] border border-[#1F1F23] rounded-3xl p-8 flex flex-col justify-between hover:border-[#2E2E35] transition-all duration-300 ${className}`}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div>
        <div className="w-12 h-12 rounded-2xl bg-[#0A0A0B] border border-[#1F1F23] flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300 mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-[#8E8E93] text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <Link
        href={href}
        className="text-xs font-semibold tracking-wider uppercase text-[#8E8E93] group-hover:text-accent transition-colors flex items-center gap-1"
      >
        Learn More <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
      </Link>
    </motion.div>
  );
}

export default function BentoGrid() {
  const cards = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Shopify Development",
      description: "Custom, high-converting Shopify stores built for speed, performance, and scale.",
      href: "/services#shopify",
      className: "md:col-span-2",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "WordPress Development",
      description: "Flexible, SEO-ready WordPress sites that your marketing team can actually manage.",
      href: "/services#wordpress",
      className: "",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Next.js & React Development",
      description: "Blazing-fast web apps, dashboards, and custom frontends built on modern tech stacks.",
      href: "/services#nextjs",
      className: "",
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Interfaces that look premium and convert visitors, moving seamlessly from wireframe to code.",
      href: "/services#uiux",
      className: "md:col-span-2",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO",
      description: "Technical audit + on-page strategy + authority growth to get you found and keep you there.",
      href: "/services#seo",
      className: "",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Marketing",
      description: "Paid acquisition campaigns engineered around client ROI and unit economics, not vanity metrics.",
      href: "/services#marketing",
      className: "",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Automation & AI Workflows",
      description: "We connect your internal tools and build intelligent agents to automate hours of weekly busywork.",
      href: "/services#automation",
      className: "md:col-span-2",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Android & Mobile Apps",
      description: "Native Kotlin and cross-platform apps built to launch fast, scale, and captivate users.",
      href: "/services#android",
      className: "",
    },
    {
      icon: <PlusCircle className="w-6 h-6" />,
      title: "And More...",
      description: "Branding, professional copywriting, CRM setups, and custom DevOps engineering tailored to your growth.",
      href: "/services#more",
      className: "",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, idx) => (
        <BentoCard
          key={idx}
          icon={card.icon}
          title={card.title}
          description={card.description}
          href={card.href}
          className={card.className}
          delay={(idx % 3) * 0.1}
        />
      ))}
    </div>
  );
}
