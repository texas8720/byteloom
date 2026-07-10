"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      price: "$1,500",
      description: "Ideal for launching a simple web presence or updating an existing asset.",
      features: [
        "Single service focus (e.g., Landing page, Shopify template)",
        "Up to 2 comprehensive revision rounds",
        "2–3 week standard delivery timeline",
        "Basic technical SEO and schema setups",
        "Standard email and Slack updates",
      ],
      ctaText: "Get Started",
      ctaHref: "/contact?package=starter",
      popular: false,
    },
    {
      name: "Growth",
      price: "$4,500",
      description: "For startups looking for a full custom website, performance setups, and launch marketing.",
      features: [
        "Full custom website (Design + Development)",
        "Advanced SEO & performance speed tuning",
        "Up to 4 collaborative revision rounds",
        "4–6 week delivery timeline",
        "30 days priority post-launch support",
        "Dedicated UI designer & Web developer",
      ],
      ctaText: "Get Started",
      ctaHref: "/contact?package=growth",
      popular: true,
    },
    {
      name: "Scale",
      price: "Custom",
      description: "Tailored for growing teams that need ongoing development, marketing, and AI integrations.",
      features: [
        "Multi-service engagement (Web + Marketing + AI)",
        "Dedicated project squad & project manager",
        "Ongoing monthly retainer iterations",
        "Priority technical support & strict SLAs",
        "Custom app integrations & automation setups",
        "Bi-weekly alignment & strategy updates",
      ],
      ctaText: "Book a Call",
      ctaHref: "/contact?package=scale",
      popular: false,
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
              Transparent pricing.
              <br />
              <span className="bg-gradient-to-r from-accent to-[#10B981] bg-clip-text text-transparent">
                No surprises.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-[#8E8E93] leading-relaxed max-w-2xl mx-auto"
            >
              Every project is scoped to your exact business goals — here's our baseline starting points.
            </motion.p>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-[#121214] border rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.popular
                  ? "border-accent shadow-xl shadow-accent/5 scale-105 z-10"
                  : "border-[#1F1F23] hover:border-[#2E2E35]"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {tier.name}
                </h3>
                
                <p className="text-xs text-[#8E8E93] leading-relaxed mb-6">
                  {tier.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8 border-b border-[#1F1F23]/60 pb-6">
                  <span className="text-4xl font-extrabold text-white tracking-tight">
                    {tier.price === "Custom" ? "" : "From "}
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="text-xs text-[#8E8E93] font-semibold">/project</span>
                  )}
                </div>

                <ul className="flex flex-col gap-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0A0A0B] border border-[#1F1F23] flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-[#F5F5F7]/80 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={tier.ctaHref}
                className={`inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-300 w-full justify-center ${
                  tier.popular
                    ? "bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/15 hover:scale-[1.02]"
                    : "bg-[#0A0A0B] border border-[#1F1F23] hover:border-accent hover:text-accent text-white"
                }`}
              >
                {tier.ctaText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </section>

        {/* Pricing Sub-note */}
        <section className="max-w-3xl mx-auto px-6 text-center mt-16">
          <p className="text-sm text-[#8E8E93] italic">
            &ldquo;Every business is different — these are starting points. Book a call for an exact quote.&rdquo;
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
