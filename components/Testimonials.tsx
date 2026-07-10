"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Byteloom rebuilt our Shopify store in 3 weeks and conversion jumped 34%. They just get it.",
      name: "Aditi Rao",
      role: "Founder",
      company: "Lotus Bloom",
    },
    {
      quote: "Finally, an agency that does design, dev, AND marketing well. One team, zero handoff chaos.",
      name: "James Carter",
      role: "CEO",
      company: "ApexFlow Technologies",
    },
    {
      quote: "Their automation work alone saved us 20 hours a week. Incredible ROI.",
      name: "Meera Shah",
      role: "COO",
      company: "Aura Logistics",
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
    <div className="relative overflow-hidden bg-[#12161F] border border-[rgba(237,238,242,0.08)] rounded-md p-8 md:p-12 max-w-4xl mx-auto z-10">
      {/* Editorial Quote Indicator */}
      <span className="font-display text-[160px] leading-none text-[#D9A441]/5 absolute -top-10 -left-2 select-none pointer-events-none italic font-bold">
        “
      </span>

      <div className="min-h-[220px] flex flex-col justify-between relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg md:text-xl font-display font-medium leading-relaxed text-[#EDEEF2] tracking-wide">
              {testimonials[current].quote}
            </p>

            <div className="flex items-center gap-4 mt-4">
              <div className="w-10 h-10 rounded-md bg-[#0B0E14] border border-[rgba(237,238,242,0.08)] flex items-center justify-center font-mono text-xs font-semibold text-[#D9A441]">
                {testimonials[current].name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
                  {testimonials[current].name}
                </h4>
                <p className="font-mono text-[9px] uppercase tracking-wider text-[#8891A3] mt-0.5">
                  {testimonials[current].role} &bull; {testimonials[current].company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8 border-t border-[rgba(237,238,242,0.08)] pt-6">
          {/* Dots as small gold lines */}
          <div className="flex gap-1.5 items-center">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1 rounded-sm transition-all duration-200 cursor-pointer ${
                  current === idx ? "bg-[#D9A441] w-5" : "bg-[rgba(237,238,242,0.08)] w-2.5"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-9 h-9 rounded-md bg-[#0B0E14] border border-[rgba(237,238,242,0.08)] flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#D9A441]/25 hover:bg-[#12161F] transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-9 h-9 rounded-md bg-[#0B0E14] border border-[rgba(237,238,242,0.08)] flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#D9A441]/25 hover:bg-[#12161F] transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
