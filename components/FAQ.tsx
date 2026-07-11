"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const ThreadKnotIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={`transition-all duration-300 ${isOpen ? "rotate-90 text-teal" : "text-accent"}`}
  >
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 2v20M2 12h20" stroke="currentColor" strokeLinecap="round" />
  </svg>
);

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-card-border py-6 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
      >
        <span className="font-sans text-sm md:text-base font-medium text-foreground group-hover:text-accent transition-colors duration-200">
          {question}
        </span>
        <span className="ml-4 flex items-center justify-center">
          <ThreadKnotIcon isOpen={isOpen} />
        </span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-xs sm:text-sm text-muted leading-relaxed pt-4 max-w-3xl">
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
    <div className="bg-card border border-card-border rounded-md p-6 md:p-10 max-w-3xl mx-auto">
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
