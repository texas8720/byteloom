"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
}

function Counter({ value, suffix, decimals = 0, label }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      const currentVal = easedProgress * (end - start) + start;
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        <span className="text-[#00f0ff]">{suffix}</span>
      </div>
      <div className="font-mono text-[9px] tracking-widest uppercase text-[#8891A3]">
        {label}
      </div>
    </div>
  );
}

export default function StatCounters() {
  const stats = [
    { value: 120, suffix: "+", label: "Projects Delivered" },
    { value: 50, suffix: "+", label: "Startups Served" },
    { value: 4.9, suffix: "/5", decimals: 1, label: "Average Rating" },
    { value: 30, suffix: "+", label: "Countries Served" },
  ];

  return (
    <div className="bg-[#0B0E14] py-16 border-b border-[rgba(237,238,242,0.08)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <Counter
            key={idx}
            value={stat.value}
            suffix={stat.suffix}
            decimals={stat.decimals}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
}
