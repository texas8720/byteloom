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

  const displayLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-[#0B0E14] py-10 border-y border-[rgba(237,238,242,0.08)] relative z-10">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0E14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0E14] to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center font-mono text-[9px] tracking-widest uppercase text-[#8891A3]">
          POWERING PRODUCTS FOR AMBITIOUS TEAMS
        </p>
      </div>

      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-16 pr-16">
          {displayLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-lg font-mono font-bold text-[#8891A3]/30 hover:text-white transition-colors duration-300 cursor-default"
            >
              <span className="text-[#00f0ff] text-xl shadow-[0_0_8px_rgba(0,240,255,0.2)]">{logo.symbol}</span>
              <span className="tracking-tight uppercase">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
