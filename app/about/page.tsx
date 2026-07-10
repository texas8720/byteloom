"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Zap, Users, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-6 h-6 text-accent" />,
      title: "Outcomes over output",
      description: "We measure success by your business growth, active metrics, and user sign-ups, not by arbitrary hours billed."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#10B981]" />,
      title: "Speed with craft",
      description: "Moving fast is a competitive advantage. But we never compromise on high code standards or pixel-perfect layout alignment."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "One team, full ownership",
      description: "No messy handoffs or finger-pointing. We manage design, development, marketing, and automation seamlessly in-house."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-accent" />,
      title: "Built to scale",
      description: "Every website, app, and AI workflow we deliver is designed clean and documented so it can scale with you tomorrow."
    }
  ];

  const team = [
    {
      name: "Anand Mehta",
      role: "Co-Founder & Tech Lead",
      bio: "Former senior engineer at Vercel. Obsessed with edge functions, React compile optimizations, and page speed.",
      avatarColor: "from-blue-600 to-indigo-600"
    },
    {
      name: "Priya Sharma",
      role: "Design Director",
      bio: "Ex-Stripe UI designer. Believes that premium visual design and clean typography are direct conversion multipliers.",
      avatarColor: "from-pink-600 to-rose-600"
    },
    {
      name: "Dev Patel",
      role: "Automation Specialist",
      bio: "Systems architect and API expert. Connected over 500+ custom pipelines to eliminate operational overhead.",
      avatarColor: "from-purple-600 to-violet-600"
    },
    {
      name: "Karan Sen",
      role: "Growth Strategist",
      bio: "Technical SEO analyst and performance ad manager. Driven by search rankings and growth ROI.",
      avatarColor: "from-emerald-600 to-teal-600"
    }
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
              We're Byteloom.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-[#8E8E93] leading-relaxed max-w-2xl mx-auto"
            >
              A team of designers, developers, marketers, and automation specialists obsessed with helping founders move fast.
            </motion.p>
          </div>
        </section>

        {/* Story & Mission */}
        <section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-[#1F1F23]/60 pb-20">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">Our Story</h2>
            <p className="text-base text-[#8E8E93] leading-relaxed mb-6">
              Byteloom started with a simple frustration: startups were stuck stitching
              together freelancers, agencies, and tools that didn't talk to each other.
              We built Byteloom to be the one team founders call — for the website, the
              product, the growth, and everything that runs quietly behind it.
            </p>
          </div>
          <div className="bg-[#121214] border border-[#1F1F23] rounded-3xl p-8 flex flex-col justify-center">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">Our Mission</h2>
            <p className="text-xl font-medium text-white leading-relaxed">
              &ldquo;To give founders back their time by building the digital systems that let them focus on what matters.&rdquo;
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Our Core Values</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">How we drive success</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#121214] border border-[#1F1F23] rounded-2xl p-6 flex flex-col hover:border-[#2E2E35] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A0A0B] border border-[#1F1F23] flex items-center justify-center mb-5 text-accent">
                  {val.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{val.title}</h4>
                <p className="text-sm text-[#8E8E93] leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-[#1F1F23]/60">
          <div className="text-center mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Meet the Team</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Obsessed with shipping fast</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-[#121214] border border-[#1F1F23] rounded-3xl overflow-hidden flex flex-col hover:border-[#2E2E35] transition-all"
              >
                {/* Visual Avatar Placeholder with gradient */}
                <div className={`h-48 bg-gradient-to-br ${member.avatarColor} flex items-center justify-center p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[#0A0A0B]/20 mix-blend-overlay" />
                  <span className="text-5xl font-black text-white/40 tracking-wider">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-lg tracking-tight mb-1">{member.name}</h4>
                    <p className="text-xs text-accent font-medium uppercase tracking-wider mb-4">{member.role}</p>
                    <p className="text-xs text-[#8E8E93] leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-5xl mx-auto px-6 mt-12">
          <div className="bg-gradient-to-r from-accent/15 via-accent/5 to-transparent border border-accent/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">Ready to ship?</h3>
              <p className="text-sm text-[#8E8E93] max-w-md">Let's build, optimize, and automate your startup systems with a unified agency team.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-accent hover:bg-accent-hover px-6 py-3 rounded-full transition-colors shadow-lg shadow-accent/20 flex-shrink-0"
            >
              Work With Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
