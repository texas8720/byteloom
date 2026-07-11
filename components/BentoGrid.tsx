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
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -3 }}
      className={`group relative overflow-hidden bg-card border border-card-border rounded-md p-8 flex flex-col justify-between hover:bg-card hover:border-card-border-hover transition-all duration-200 ${className}`}
    >
      <div>
        <div className="w-10 h-10 rounded-md bg-background border border-card-border flex items-center justify-center text-accent group-hover:scale-105 transition-transform duration-200 mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-display font-medium text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted text-xs sm:text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <Link
        href={href}
        className="font-mono uppercase tracking-wider text-[9px] text-muted group-hover:text-accent transition-colors flex items-center gap-1"
      >
        Learn More <span className="group-hover:translate-x-0.5 transition-transform duration-150">→</span>
      </Link>
    </motion.div>
  );
}

export default function BentoGrid() {
  const cards = [
    {
      icon: <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />,
      title: "Shopify Development",
      description: "Custom, high-converting Shopify stores built for speed, performance, and scale.",
      href: "/services#shopify",
      className: "md:col-span-2",
    },
    {
      icon: <Globe className="w-5 h-5" strokeWidth={1.5} />,
      title: "WordPress Development",
      description: "Flexible, SEO-ready WordPress sites that your marketing team can actually manage.",
      href: "/services#wordpress",
      className: "",
    },
    {
      icon: <Cpu className="w-5 h-5" strokeWidth={1.5} />,
      title: "Next.js & React Development",
      description: "Blazing-fast web apps, dashboards, and custom frontends built on modern tech stacks.",
      href: "/services#nextjs",
      className: "",
    },
    {
      icon: <Paintbrush className="w-5 h-5" strokeWidth={1.5} />,
      title: "UI/UX Design",
      description: "Interfaces that look premium and convert visitors, moving seamlessly from wireframe to code.",
      href: "/services#uiux",
      className: "md:col-span-2",
    },
    {
      icon: <Search className="w-5 h-5" strokeWidth={1.5} />,
      title: "SEO",
      description: "Technical audit + on-page strategy + authority growth to get you found and keep you there.",
      href: "/services#seo",
      className: "",
    },
    {
      icon: <TrendingUp className="w-5 h-5" strokeWidth={1.5} />,
      title: "Performance Marketing",
      description: "Paid acquisition campaigns engineered around client ROI and unit economics, not vanity metrics.",
      href: "/services#marketing",
      className: "",
    },
    {
      icon: <Sparkles className="w-5 h-5" strokeWidth={1.5} />,
      title: "Automation & AI Workflows",
      description: "We connect your internal tools and build intelligent agents to automate hours of weekly busywork.",
      href: "/services#automation",
      className: "md:col-span-2",
    },
    {
      icon: <Smartphone className="w-5 h-5" strokeWidth={1.5} />,
      title: "Android & Mobile Apps",
      description: "Native Kotlin and cross-platform apps built to launch fast, scale, and captivate users.",
      href: "/services#android",
      className: "",
    },
    {
      icon: <PlusCircle className="w-5 h-5" strokeWidth={1.5} />,
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
          delay={(idx % 3) * 0.08}
        />
      ))}
    </div>
  );
}
