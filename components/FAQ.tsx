"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-[rgba(237,238,242,0.08)] py-6 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
      >
        <span className="font-mono text-xs uppercase tracking-wider text-white group-hover:text-[#D9A441] transition-colors duration-200">
          {question}
        </span>
        <span className="ml-4 text-[#D9A441] flex items-center justify-center transition-transform duration-200">
          {isOpen ? <Minus className="w-4 h-4" strokeWidth={1.5} /> : <Plus className="w-4 h-4" strokeWidth={1.5} />}
        </span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-xs sm:text-sm text-[#8891A3] leading-relaxed pt-4 max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Most custom websites take 3–6 weeks depending on scope; larger web systems, multi-platform integrations, or custom automations take longer. You'll get a clear timeline after our discovery call.",
    },
    {
      question: "Do you work with early-stage startups?",
      answer: "Yes — a large part of our client base consists of founders building their first product or relaunching their systems.",
    },
    {
      question: "Can you handle ongoing work, not just one-off projects?",
      answer: "Yes, we offer retainer agreements for ongoing development, SEO management, marketing support, and automation maintenance.",
    },
    {
      question: "What platforms do you build on?",
      answer: "We focus on Next.js / React, custom headless Shopify store setups, tailored WordPress architectures, and native/cross-platform Android apps.",
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes — every project includes an initial support window, and we offer ongoing retainer maintenance plans for continuous system updates.",
    },
    {
      question: "How do we get started?",
      answer: "Schedule a free strategy call — we'll discuss your goals, system requirements, and send a proposal within 48 hours.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-[#12161F] border border-[rgba(237,238,242,0.08)] rounded-md p-6 md:p-10 max-w-3xl mx-auto">
      {faqs.map((faq, idx) => (
        <FAQItem
          key={idx}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === idx}
          onToggle={() => handleToggle(idx)}
        />
      ))}
    </div>
  );
}
