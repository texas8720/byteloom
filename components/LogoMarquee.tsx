"use client";

import { motion } from "framer-motion";

export default function LogoMarquee() {
  const logos = [
    { name: "Acme", symbol: "✦" },
    { name: "Globex", symbol: "❖" },
    { name: "Initech", symbol: "▲" },
    { name: "Umbrella", symbol: "⬡" },
    { name: "Hooli", symbol: "✺" },
    { name: "Veer", symbol: "▼" },
    { name: "Stripe-like", symbol: "◆" },
    { name: "Vercel-like", symbol: "▲" },
  ];

  // Duplicate the array to create a seamless infinite loop
  const displayLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-[#0A0A0B] py-10 border-y border-[#1F1F23]/60 relative">
      {/* Gradients to fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-[#8E8E93]">
          Powering products for ambitious teams
        </p>
      </div>

      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-16 pr-16">
          {displayLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-xl font-bold text-[#8E8E93]/40 hover:text-white transition-colors duration-300 cursor-default"
            >
              <span className="text-accent text-2xl">{logo.symbol}</span>
              <span className="tracking-tight">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
