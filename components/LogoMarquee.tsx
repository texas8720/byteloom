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
    <div className="w-full overflow-hidden bg-background py-10 border-y border-card-border relative z-10">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center font-mono text-[9px] tracking-widest uppercase text-muted">
          POWERING PRODUCTS FOR AMBITIOUS TEAMS
        </p>
      </div>

      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-16 pr-16">
          {displayLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-lg font-mono font-bold text-muted/30 hover:text-foreground transition-colors duration-300 cursor-default"
            >
              <span className="text-accent text-xl">{logo.symbol}</span>
              <span className="tracking-tight uppercase">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
