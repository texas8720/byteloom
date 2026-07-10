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
    <div className="border-b border-[#1F1F23]/80 py-6 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-base md:text-lg font-medium text-white group-hover:text-accent transition-colors duration-200">
          {question}
        </span>
        <span className="ml-4 w-8 h-8 rounded-full bg-[#121214] border border-[#1F1F23] flex items-center justify-center text-[#8E8E93] group-hover:text-white transition-colors duration-200">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm md:text-base text-[#8E8E93] leading-relaxed pt-4 max-w-3xl">
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
      answer: "Most websites take 3–6 weeks depending on scope; larger web apps or multi-service engagements can run longer. You'll get a clear timeline after our discovery call.",
    },
    {
      question: "Do you work with early-stage startups?",
      answer: "Yes — a large part of our client base is founders building their first product or relaunching their brand.",
    },
    {
      question: "Can you handle ongoing work, not just one-off projects?",
      answer: "Yes, we offer monthly retainers for development, marketing, SEO, and automation support.",
    },
    {
      question: "What platforms do you build on?",
      answer: "Shopify, WordPress, Next.js, React, and native/cross-platform for Android & iOS.",
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes — every project includes a support window, and we offer ongoing maintenance plans after that.",
    },
    {
      question: "How do we get started?",
      answer: "Book a free strategy call — we'll learn about your goals and send a proposal within 48 hours.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-[#121214] border border-[#1F1F23] rounded-3xl p-6 md:p-10 max-w-3xl mx-auto">
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
