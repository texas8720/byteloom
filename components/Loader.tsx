"use client";

import * as React from "react";
import gsap from "gsap";
import LoomScene from "./LoomScene";

const LoaderContext = React.createContext({ isReady: false });

export const useLoader = () => React.useContext(LoaderContext);

export default function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [loomProgress, setLoomProgress] = React.useState(0);
  const [prefersReduced, setPrefersReduced] = React.useState(false);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLDivElement>(null);
  const logoRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Respect reduced motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(motionQuery.matches);

    // Skip loader if already loaded in this session
    const hasLoaded = sessionStorage.getItem("byteloom-loaded");
    if (hasLoaded || motionQuery.matches) {
      setIsReady(true);
      return;
    }

    // Animate loading simulation synced to WebGL braiding
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("byteloom-loaded", "true");
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => setIsReady(true),
        });
      },
    });

    const progressObj = { value: 0 };
    const loomObj = { value: 0 };

    tl.to(progressObj, {
      value: 100,
      duration: 1.8,
      ease: "power1.inOut",
      onUpdate: () => setProgress(Math.floor(progressObj.value)),
    });

    tl.to(loomObj, {
      value: 1,
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate: () => setLoomProgress(loomObj.value),
    }, 0);

    // Braid knot flash / wordmark reveal timeline
    tl.to(logoRef.current, {
      scale: 1.1,
      opacity: 1,
      duration: 0.4,
      ease: "back.out(1.7)",
    }, "-=0.3");

    tl.to(textRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.2,
    }, "-=0.4");

  }, []);

  if (isReady) {
    return (
      <LoaderContext.Provider value={{ isReady }}>
        {children}
      </LoaderContext.Provider>
    );
  }

  // If reduced motion is preferred, render a quick 400ms fade overlay
  if (prefersReduced) {
    return (
      <div className="fixed inset-0 bg-[#090B10] flex items-center justify-center z-[9999] transition-opacity duration-300">
        <span className="font-mono text-xs uppercase tracking-widest text-[#2FE6D0]">
          BYTELOOM ONLINE
        </span>
      </div>
    );
  }

  return (
    <LoaderContext.Provider value={{ isReady }}>
      <div 
        ref={containerRef}
        className="fixed inset-0 bg-[#090B10] flex flex-col justify-between p-8 z-[9999] overflow-hidden"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(29,34,43,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(29,34,43,0.12)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

        {/* Top Header telemetry */}
        <div className="flex justify-between items-center w-full font-mono text-[9px] tracking-widest text-[#868C97] uppercase z-10">
          <span>BYTELOOM.SYS</span>
          <span>BOOT_SEQUENCE_ALPHA</span>
        </div>

        {/* Central 3D Loom Scene */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-[450px] h-[450px] relative">
            <LoomScene mode="braiding" progress={loomProgress} />
            
            {/* Wordmark appearing on knot braid completion */}
            <div 
              ref={logoRef}
              className="absolute inset-0 flex items-center justify-center opacity-0 scale-95 pointer-events-none"
            >
              <h2 className="text-4xl font-display font-semibold tracking-wider text-[#F3F2EE] drop-shadow-[0_0_15px_rgba(108,99,255,0.4)]">
                Byteloom<span className="text-[#2FE6D0]">.</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Bottom loading status */}
        <div 
          ref={textRef}
          className="flex justify-between items-end w-full font-mono text-[9px] tracking-widest text-[#868C97] uppercase z-10"
        >
          <div className="flex flex-col gap-1.5">
            <span className="text-[#2FE6D0] animate-pulse">WEAVING SYSTEM ONLINE...</span>
            <span className="text-[8px] text-[#868C97]/60">CONNECTING DESIGN + CODE + SEO</span>
          </div>
          <span className="text-[#F3F2EE] font-semibold text-xs">
            {progress}%
          </span>
        </div>
      </div>
    </LoaderContext.Provider>
  );
}
