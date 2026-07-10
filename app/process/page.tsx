"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Eye, ShieldAlert, Award, Compass, Sparkles, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function ProcessPage() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      description: "We learn your business, goals, and constraints.",
      timeline: "3–5 days",
      icon: <HelpCircle className="w-5 h-5" />,
      expect: "Interactive kickoff session, system access mapping, brand alignment questionnaire.",
      need: "Active system credentials (if migration), design guidelines, reference links, target audience profile.",
    },
    {
      num: "02",
      title: "Strategy",
      description: "We map the right technical solution and project roadmap.",
      timeline: "3–5 days",
      icon: <Compass className="w-5 h-5" />,
      expect: "Visual site architecture map, scoped project sprint lists, technical specification drafts.",
      need: "Timely review and approval on the proposed scope items and choice of CMS / framework stack.",
    },
    {
      num: "03",
      title: "Design",
      description: "Wireframes → high-fidelity designs, with your feedback built in.",
      timeline: "1–2 weeks",
      icon: <Eye className="w-5 h-5" />,
      expect: "Interactive Figma prototype, design system library, mobile-responsive view mockups.",
      need: "Structured feedback cycles on layout spacing, color accents, and typography scale.",
    },
    {
      num: "04",
      title: "Build",
      description: "Development sprints with structured check-ins and staging updates.",
      timeline: "2–3 weeks",
      icon: <Sparkles className="w-5 h-5" />,
      expect: "Private staging URL, clean and semantic code, integrated animations, responsive layout checks.",
      need: "Prompt feedback on mid-sprint builds and clarity on minor business logic exceptions.",
    },
    {
      num: "05",
      title: "Launch",
      description: "Rigorous QA testing, indexing setup, and a smooth go-live transition.",
      timeline: "2–3 days",
      icon: <Award className="w-5 h-5" />,
      expect: "Production hosting configuration, DNS mapping, speed optimization audit, search console validation.",
      need: "DNS manager credentials access or coordinated nameserver update approval.",
    },
    {
      num: "06",
      title: "Grow",
      description: "Ongoing support, security monitoring, and conversion optimization.",
      timeline: "Continuous",
      icon: <ShieldAlert className="w-5 h-5" />,
      expect: "Core Web Vitals health tracking, technical site maintenance, minor layout iterations, performance audits.",
      need: "Prioritized list of active marketing campaigns or requested backlogs on the first of each month.",
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
              A process built for
              <br />
              <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
                clarity, not chaos.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-[#8E8E93] leading-relaxed max-w-2xl mx-auto"
            >
              We run a transparent, structured workflow so you always know what's happening, what to expect, and when we need you.
            </motion.p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="max-w-4xl mx-auto px-6 relative mt-12">
          {/* Vertical Center Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#1F1F23]/60 -translate-x-1/2 pointer-events-none" />

          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`flex flex-col md:flex-row relative items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Icon (centered on desktop, left on mobile) */}
                  <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#121214] border border-[#2E2E35] flex items-center justify-center text-accent z-10 shadow-lg shadow-accent/5">
                    {step.icon}
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-[45%] pl-16 md:pl-0">
                    <div className="bg-[#121214] border border-[#1F1F23] rounded-3xl p-6 md:p-8 hover:border-[#2E2E35] transition-all">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-3xl font-extrabold text-accent/25">{step.num}</span>
                        <span className="text-[10px] font-semibold text-white/70 uppercase tracking-widest bg-[#0A0A0B] border border-[#1F1F23] px-3 py-1 rounded-full">
                          {step.timeline}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                        {step.title}
                      </h3>
                      
                      <p className="text-sm text-[#8E8E93] leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="space-y-4 border-t border-[#1F1F23]/60 pt-4 text-xs">
                        <div>
                          <span className="font-semibold text-white uppercase tracking-wider block mb-1">What to expect:</span>
                          <span className="text-[#8E8E93] leading-relaxed block">{step.expect}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-accent uppercase tracking-wider block mb-1">What we need from you:</span>
                          <span className="text-[#8E8E93] leading-relaxed block">{step.need}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for desktop alignment */}
                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <div className="bg-[#121214] border border-[#1F1F23] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">Ready to start?</h2>
            <p className="text-[#8E8E93] text-sm md:text-base max-w-xl mx-auto mb-8">
              Book a strategy call to align on your goals, discuss timelines, and map out a tailored proposal for your startup.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-accent hover:bg-accent-hover px-6 py-3 rounded-full transition-colors shadow-lg shadow-accent/20"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
