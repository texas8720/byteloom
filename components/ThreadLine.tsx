"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ThreadLineProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  heroRef: React.RefObject<HTMLElement | null>;
  servicesRef: React.RefObject<HTMLElement | null>;
  processRef: React.RefObject<HTMLElement | null>;
  footerRef: React.RefObject<HTMLElement | null>;
}

export default function ThreadLine({
  containerRef,
  heroRef,
  servicesRef,
  processRef,
  footerRef
}: ThreadLineProps) {
  const [path, setPath] = React.useState("");
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  React.useEffect(() => {
    const calculatePath = () => {
      const container = containerRef.current;
      const hero = heroRef.current;
      const services = servicesRef.current;
      const process = processRef.current;
      const footer = footerRef.current;

      if (!container || !hero || !services || !process || !footer) return;

      const containerRect = container.getBoundingClientRect();
      const heroRect = hero.getBoundingClientRect();
      const servicesRect = services.getBoundingClientRect();
      const processRect = process.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();

      // Relative offsets
      const heroTop = heroRect.top - containerRect.top;
      const servicesTop = servicesRect.top - containerRect.top;
      const processTop = processRect.top - containerRect.top;
      const footerTop = footerRect.top - containerRect.top;

      const width = containerRect.width;

      // 1. Under Hero title (centered)
      const p1_x = width / 2;
      const p1_y = heroTop + (heroRect.height * 0.45);

      // 2. Bottom of Hero
      const p2_x = width / 2;
      const p2_y = heroTop + heroRect.height - 60;

      // 3. Weave left side of Services
      const p3_x = width * 0.12;
      const p3_y = servicesTop + 120;

      // 4. Weave right side of Services
      const p4_x = width * 0.88;
      const p4_y = servicesTop + (servicesRect.height * 0.35);

      // 5. Weave left side of Services lower
      const p5_x = width * 0.12;
      const p5_y = servicesTop + (servicesRect.height * 0.65);

      // 6. Connect to bottom of Services
      const p6_x = width * 0.5;
      const p6_y = servicesTop + servicesRect.height - 100;

      // 7. Top of Process section
      const p7_x = width * 0.5;
      const p7_y = processTop + 100;

      // 8. Middle of Process section
      const p8_x = width * 0.5;
      const p8_y = processTop + (processRect.height * 0.55);

      // 9. Connecting to Footer
      const p9_x = width * 0.5;
      const p9_y = footerTop + 60;

      // Woven "B" mark path logic
      const bSize = 14;
      const bx = p9_x - 7;
      const by = p9_y;

      const b_path = `
        M ${bx} ${by} 
        v ${bSize * 2} 
        h ${bSize * 0.7} 
        c ${bSize * 0.4} 0, ${bSize * 0.7} -${bSize * 0.35}, ${bSize * 0.7} -${bSize * 0.65} 
        c 0 -${bSize * 0.3}, -${bSize * 0.3} -${bSize * 0.55}, -${bSize * 0.7} -${bSize * 0.55} 
        h -${bSize * 0.7} 
        h ${bSize * 0.7} 
        c ${bSize * 0.4} 0, ${bSize * 0.7} -${bSize * 0.3}, ${bSize * 0.7} -${bSize * 0.55} 
        c 0 -${bSize * 0.25}, -${bSize * 0.3} -${bSize * 0.45}, -${bSize * 0.7} -${bSize * 0.45} 
        h -${bSize * 0.7}
      `;

      // Build organic Bezier curvatures
      const pathString = `
        M ${p1_x} ${p1_y}
        L ${p2_x} ${p2_y}
        C ${p2_x} ${p2_y + 120}, ${p3_x} ${p3_y - 120}, ${p3_x} ${p3_y}
        C ${p3_x} ${p3_y + 180}, ${p4_x} ${p4_y - 180}, ${p4_x} ${p4_y}
        C ${p4_x} ${p4_y + 180}, ${p5_x} ${p5_y - 180}, ${p5_x} ${p5_y}
        C ${p5_x} ${p5_y + 150}, ${p6_x} ${p6_y - 150}, ${p6_x} ${p6_y}
        C ${p6_x} ${p6_y + 100}, ${p7_x} ${p7_y - 100}, ${p7_x} ${p7_y}
        L ${p8_x} ${p8_y}
        L ${p9_x} ${p9_y}
        ${b_path}
      `;

      setPath(pathString.replace(/\s+/g, " ").trim());
    };

    calculatePath();
    window.addEventListener("resize", calculatePath);
    const timer = setTimeout(calculatePath, 800);
    
    return () => {
      window.removeEventListener("resize", calculatePath);
      clearTimeout(timer);
    };
  }, [containerRef, heroRef, servicesRef, processRef, footerRef]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  });

  // Animate drawing: if prefersReducedMotion is active, always show the full path immediately
  const pathLength = useTransform(smoothProgress, [0, 1], prefersReducedMotion ? [1, 1] : [0, 1]);

  if (!path) return null;

  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-visible"
      aria-hidden="true"
    >
      {/* Background shadow path for readability */}
      <path
        d={path}
        fill="none"
        stroke="#0B0E14"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      {/* Active gold thread path */}
      <motion.path
        d={path}
        fill="none"
        stroke="#D9A441"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pathLength }}
      />
    </svg>
  );
}
