"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Byteloom rebuilt our Shopify store in 3 weeks and conversion jumped 34%. They just get it.",
      name: "Aditi Rao",
      role: "Founder",
      company: "Lotus Bloom",
      avatarColor: "from-pink-500 to-indigo-500",
    },
    {
      quote: "Finally, an agency that does design, dev, AND marketing well. One team, zero handoff chaos.",
      name: "James Carter",
      role: "CEO",
      company: "ApexFlow Technologies",
      avatarColor: "from-emerald-500 to-teal-500",
    },
    {
      quote: "Their automation work alone saved us 20 hours a week. Incredible ROI.",
      name: "Meera Shah",
      role: "COO",
      company: "Aura Logistics",
      avatarColor: "from-purple-500 to-accent",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative overflow-hidden bg-[#121214] border border-[#1F1F23] rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
      <div className="absolute top-6 right-8 text-accent/15 select-none pointer-events-none">
        <Quote className="w-24 h-24 stroke-[4]" />
      </div>

      <div className="min-h-[200px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-6"
          >
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-white tracking-wide">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>

            <div className="flex items-center gap-4 mt-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${testimonials[current].avatarColor} flex items-center justify-center font-bold text-white shadow-lg`}>
                {testimonials[current].name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <h4 className="font-semibold text-white tracking-tight">
                  {testimonials[current].name}
                </h4>
                <p className="text-xs text-[#8E8E93]">
                  {testimonials[current].role}, {testimonials[current].company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8 border-t border-[#1F1F23]/60 pt-6">
          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  current === idx ? "bg-accent w-6" : "bg-[#1F1F23]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-[#0A0A0B] border border-[#1F1F23] flex items-center justify-center text-[#8E8E93] hover:text-white hover:border-[#2E2E35] transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-[#0A0A0B] border border-[#1F1F23] flex items-center justify-center text-[#8E8E93] hover:text-white hover:border-[#2E2E35] transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
