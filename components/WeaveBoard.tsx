"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, AlertCircle } from "lucide-react";

interface NodeItem {
  id: string;
  name: string;
  x: number;
  y: number;
  tech: string;
  specs: string[];
}

const NODES: NodeItem[] = [
  {
    id: "design",
    name: "UI/UX DESIGN",
    x: 100,
    y: 80,
    tech: "FIGMA / VECTOR CANVAS",
    specs: ["Custom typography architecture", "Interactive component states", "Scale-ready layouts"]
  },
  {
    id: "nextjs",
    name: "NEXT.JS / REACT",
    x: 380,
    y: 60,
    tech: "REACT 19 / TAILWIND V4",
    specs: ["Server-side rendering (SSR)", "Prisma ORM & PostgreSQL setup", "Optimized Turbopack builds"]
  },
  {
    id: "shopify",
    name: "SHOPIFY / ECOM",
    x: 440,
    y: 220,
    tech: "LIQUID / HEADLESS ENDPOINTS",
    specs: ["High-conversion theme systems", "Bespoke checkout customization", "Fast inventory integrations"]
  },
  {
    id: "ai",
    name: "AI / AGENTS",
    x: 240,
    y: 280,
    tech: "LLM / BACKEND PIPELINES",
    specs: ["RAG vector DB orchestration", "Automated email/chat response", "Task trigger integrations"]
  },
  {
    id: "seo",
    name: "SEO / RANKINGS",
    x: 80,
    y: 200,
    tech: "TECHNICAL SEMANTICS",
    specs: ["Perfect core web vitals (100/100)", "Dynamic site rendering check", "Keyword indexing loops"]
  }
];

export default function WeaveBoard() {
  const [selectedIds, setSelectedIds] = React.useState<string[]>(["design", "nextjs"]);

  const toggleNode = (id: string) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) {
        if (prev.length <= 1) return prev; // Keep at least one active
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const activeNodes = NODES.filter(n => selectedIds.includes(n.id));

  // Build the connector SVG paths dynamically connecting the selected nodes
  const buildPaths = () => {
    if (activeNodes.length < 2) return null;
    const paths: React.JSX.Element[] = [];

    for (let i = 0; i < activeNodes.length - 1; i++) {
      const from = activeNodes[i];
      const to = activeNodes[i + 1];
      // Generate a smooth cubic curve between coordinates
      const cx1 = from.x + (to.x - from.x) / 2;
      const cy1 = from.y;
      const cx2 = from.x + (to.x - from.x) / 2;
      const cy2 = to.y;
      const d = `M ${from.x} ${from.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${to.x} ${to.y}`;

      paths.push(
        <g key={`path-${from.id}-${to.id}`}>
          {/* Shadow path */}
          <path
            d={d}
            fill="none"
            stroke="var(--background)"
            strokeWidth="4"
            className="transition-colors duration-200"
          />
          {/* Animated gold thread */}
          <motion.path
            d={d}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4 }}
            className="transition-colors duration-200"
          />
        </g>
      );
    }

    // Connect last node back to first node if 3 or more are selected
    if (activeNodes.length >= 3) {
      const from = activeNodes[activeNodes.length - 1];
      const to = activeNodes[0];
      const cx1 = from.x + (to.x - from.x) / 2;
      const cy1 = from.y;
      const cx2 = from.x + (to.x - from.x) / 2;
      const cy2 = to.y;
      const d = `M ${from.x} ${from.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${to.x} ${to.y}`;

      paths.push(
        <g key={`path-loop-${from.id}-${to.id}`}>
          <path
            d={d}
            fill="none"
            stroke="var(--background)"
            strokeWidth="4"
            className="transition-colors duration-200"
          />
          <motion.path
            d={d}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4 }}
            className="transition-colors duration-200"
          />
        </g>
      );
    }

    return paths;
  };

  // Compute mock integration metrics based on selection count
  const metrics = {
    speed: selectedIds.includes("nextjs") ? "100/100" : "85/100",
    latency: `${25 + selectedIds.length * 8}ms`,
    efficiency: `+${selectedIds.length * 15}%`,
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch py-10 px-4 md:px-8 bg-card border border-card-border rounded-md">
      {/* Node Interactive Map */}
      <div className="lg:col-span-7 flex flex-col justify-center items-center relative overflow-hidden bg-background border border-card-border rounded-md min-h-[360px] p-6">
        <span className="absolute top-4 left-4 font-mono text-[9px] tracking-widest text-muted uppercase">
          INTERACTIVE ENGINE MAP
        </span>
        
        {/* Connection Canvas */}
        <svg
          viewBox="0 0 520 360"
          className="w-full h-full max-w-[520px] max-h-[360px] overflow-visible z-10"
        >
          {/* Connector Paths */}
          {buildPaths()}

          {/* Render Nodes */}
          {NODES.map((node) => {
            const isSelected = selectedIds.includes(node.id);
            return (
              <g
                key={node.id}
                onClick={() => toggleNode(node.id)}
                className="cursor-pointer group"
              >
                {/* Outer pulsing ring */}
                {isSelected && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="12"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1"
                    className="animate-pulse"
                  />
                )}
                {/* Node Center */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="6"
                  fill={isSelected ? "var(--accent)" : "var(--card)"}
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  className="transition-all duration-200 group-hover:scale-110"
                />
                {/* Text Label */}
                <text
                  x={node.x}
                  y={node.y - 12}
                  textAnchor="middle"
                  fill="var(--foreground)"
                  className="font-mono text-[8px] font-bold tracking-widest select-none uppercase transition-colors duration-200"
                >
                  {node.name}
                </text>
              </g>
            );
          })}
        </svg>
        <span className="absolute bottom-4 font-mono text-[8px] tracking-wider text-muted uppercase text-center max-w-[280px]">
          Click nodes to weave integration pathways
        </span>
      </div>

      {/* Specifications Dashboard */}
      <div className="lg:col-span-5 flex flex-col justify-between p-2">
        <div className="space-y-6">
          <div>
            <span className="font-mono text-[9px] tracking-widest text-accent uppercase block mb-1">
              ACTIVE WEAVE LAYERS
            </span>
            <h4 className="text-xl font-display font-medium text-foreground tracking-tight">
              {activeNodes.map(n => n.name.split(" ")[0]).join(" + ")}
            </h4>
          </div>

          {/* Active Features */}
          <div className="space-y-3.5">
            <span className="font-mono text-[9px] tracking-widest text-muted uppercase block">
              INTEGRATION METRICS
            </span>
            <div className="grid grid-cols-3 gap-2.5">
              <div className="bg-background border border-card-border p-3 rounded-md text-center">
                <span className="text-[9px] font-mono text-muted uppercase block">Page Speed</span>
                <span className="text-sm font-technical font-semibold text-foreground mt-1 block">
                  {metrics.speed}
                </span>
              </div>
              <div className="bg-background border border-card-border p-3 rounded-md text-center">
                <span className="text-[9px] font-mono text-muted uppercase block">Latency</span>
                <span className="text-sm font-technical font-semibold text-[#3ED9C4] mt-1 block">
                  {metrics.latency}
                </span>
              </div>
              <div className="bg-background border border-card-border p-3 rounded-md text-center">
                <span className="text-[9px] font-mono text-muted uppercase block">Efficiency</span>
                <span className="text-sm font-technical font-semibold text-accent mt-1 block">
                  {metrics.efficiency}
                </span>
              </div>
            </div>
          </div>

          {/* Node Specifications */}
          <div className="space-y-3">
            <span className="font-mono text-[9px] tracking-widest text-muted uppercase block">
              Bespeaking Specifications
            </span>
            <div className="space-y-2.5 max-h-[160px] overflow-y-auto pr-2">
              {activeNodes.flatMap(n => n.specs).map((spec, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-foreground">
                  <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" strokeWidth={2} />
                  <span className="font-mono text-[11px] uppercase tracking-wide text-foreground/90">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-card-border pt-4 mt-6">
          <Link
            href="/contact?type=strategy"
            className="w-full text-center py-2.5 rounded-md text-[10px] font-mono tracking-wider uppercase font-semibold text-background bg-accent hover:bg-accent-hover transition-colors border border-accent block"
          >
            Deploy Active Setup
          </Link>
        </div>
      </div>
    </div>
  );
}
