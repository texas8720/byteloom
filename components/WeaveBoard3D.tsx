"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { Check } from "lucide-react";
import Link from "next/link";

interface NodeItem {
  id: string;
  name: string;
  pos: [number, number, number];
  tech: string;
  specs: string[];
}

const NODES: NodeItem[] = [
  {
    id: "design",
    name: "UI/UX DESIGN",
    pos: [-1.8, 1.2, 0],
    tech: "FIGMA / VECTOR CANVAS",
    specs: ["Custom typography architecture", "Interactive component states", "Scale-ready layouts"]
  },
  {
    id: "nextjs",
    name: "NEXT.JS / REACT",
    pos: [1.8, 1.2, 0.5],
    tech: "REACT 19 / TAILWIND V4",
    specs: ["Server-side rendering (SSR)", "Prisma ORM & PostgreSQL setup", "Optimized Turbopack builds"]
  },
  {
    id: "shopify",
    name: "SHOPIFY / ECOM",
    pos: [2.2, -0.6, -0.5],
    tech: "LIQUID / HEADLESS ENDPOINTS",
    specs: ["High-conversion theme systems", "Bespoke checkout customization", "Fast inventory integrations"]
  },
  {
    id: "ai",
    name: "AI / AGENTS",
    pos: [0, -1.6, 0],
    tech: "LLM / BACKEND PIPELINES",
    specs: ["RAG vector DB orchestration", "Automated email/chat response", "Task trigger integrations"]
  },
  {
    id: "seo",
    name: "SEO / RANKINGS",
    pos: [-2.2, -0.6, 0.5],
    tech: "TECHNICAL SEMANTICS",
    specs: ["Perfect core web vitals (100/100)", "Dynamic site rendering check", "Keyword indexing loops"]
  }
];

function InteractiveNode({
  node,
  isSelected,
  onClick
}: {
  node: NodeItem;
  isSelected: boolean;
  onClick: () => void;
}) {
  const meshRef = React.useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = node.pos[1] + Math.sin(t * 2 + node.pos[0]) * 0.08;
    }
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        position={node.pos}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}
      >
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshBasicMaterial
          color={isSelected ? "#2FE6D0" : "#1D222B"}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function ConnectorLines({ activeIds }: { activeIds: string[] }) {
  const activeNodes = NODES.filter((n) => activeIds.includes(n.id));
  if (activeNodes.length < 2) return null;

  const lines: React.JSX.Element[] = [];

  for (let i = 0; i < activeNodes.length - 1; i++) {
    const from = activeNodes[i];
    const to = activeNodes[i + 1];

    // Compute curved quadratic Bezier points
    const points: [number, number, number][] = [];
    const p0 = new THREE.Vector3(...from.pos);
    const p2 = new THREE.Vector3(...to.pos);
    
    // Control point offset vertically and depth-wise to create a loop
    const p1 = new THREE.Vector3()
      .addVectors(p0, p2)
      .multiplyScalar(0.5)
      .add(new THREE.Vector3(0, 0.6, 0.4));

    const curve = new THREE.QuadraticBezierCurve3(p0, p1, p2);
    const curvePoints = curve.getPoints(32);

    lines.push(
      <Line
        key={`line-${from.id}-${to.id}`}
        points={curvePoints}
        color="#6C63FF"
        lineWidth={2}
        opacity={0.8}
        transparent
      />
    );
  }

  // Connect last node back to first if 3 or more are active
  if (activeNodes.length >= 3) {
    const from = activeNodes[activeNodes.length - 1];
    const to = activeNodes[0];
    const p0 = new THREE.Vector3(...from.pos);
    const p2 = new THREE.Vector3(...to.pos);
    const p1 = new THREE.Vector3()
      .addVectors(p0, p2)
      .multiplyScalar(0.5)
      .add(new THREE.Vector3(0, 0.6, -0.4));

    const curve = new THREE.QuadraticBezierCurve3(p0, p1, p2);
    const curvePoints = curve.getPoints(32);

    lines.push(
      <Line
        key={`line-loop-${from.id}-${to.id}`}
        points={curvePoints}
        color="#2FE6D0"
        lineWidth={2}
        opacity={0.8}
        transparent
      />
    );
  }

  return <>{lines}</>;
}

export default function WeaveBoard3D() {
  const [selectedIds, setSelectedIds] = React.useState<string[]>(["design", "nextjs"]);
  const [metrics, setMetrics] = React.useState({ speed: 100, latency: 45, efficiency: 15 });
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleNode = (id: string) => {
    setSelectedIds((prev) => {
      let nextIds;
      if (prev.includes(id)) {
        if (prev.length <= 1) return prev;
        nextIds = prev.filter((x) => x !== id);
      } else {
        nextIds = [...prev, id];
      }

      // Animate telemetry metrics dynamically using GSAP typewriter number tweens
      const targetSpeed = nextIds.includes("nextjs") ? 100 : 80;
      const targetLatency = 20 + nextIds.length * 9;
      const targetEff = nextIds.length * 15;

      const obj = { ...metrics };
      gsap.to(obj, {
        speed: targetSpeed,
        latency: targetLatency,
        efficiency: targetEff,
        duration: 0.8,
        ease: "power2.out",
        onUpdate: () => {
          setMetrics({
            speed: Math.round(obj.speed),
            latency: Math.round(obj.latency),
            efficiency: Math.round(obj.efficiency),
          });
        },
      });

      return nextIds;
    });
  };

  const activeNodes = NODES.filter((n) => selectedIds.includes(n.id));

  if (!mounted) return null;

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch py-10 px-4 md:px-8 bg-card border border-card-border rounded-md">
      {/* R3F Node Constellation Board */}
      <div className="lg:col-span-7 flex flex-col justify-center items-center relative overflow-hidden bg-background border border-card-border rounded-md min-h-[380px] p-6">
        <span className="absolute top-4 left-4 font-mono text-[9px] tracking-widest text-[#868C97] uppercase">
          3D INTERACTIVE NODE CONSTELATION
        </span>

        <div className="w-full h-[320px] pointer-events-auto">
          <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />

            <ConnectorLines activeIds={selectedIds} />

            {NODES.map((node) => (
              <InteractiveNode
                key={node.id}
                node={node}
                isSelected={selectedIds.includes(node.id)}
                onClick={() => toggleNode(node.id)}
              />
            ))}

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2.2}
              maxPolarAngle={Math.PI / 1.8}
              minAzimuthAngle={-Math.PI / 4}
              maxAzimuthAngle={Math.PI / 4}
            />
          </Canvas>
        </div>

        <span className="absolute bottom-4 font-mono text-[8px] tracking-widest text-muted uppercase text-center max-w-[280px]">
          Drag to tilt 3D board &bull; Click spheres to connect
        </span>
      </div>

      {/* Specification Panel */}
      <div className="lg:col-span-5 flex flex-col justify-between p-6 bg-background border border-card-border rounded-md">
        <div className="space-y-6">
          <div>
            <span className="font-mono text-[9px] tracking-widest text-accent uppercase block mb-1">
              ACTIVE WEAVE LAYERS
            </span>
            <h4 className="text-xl font-display font-medium text-foreground tracking-tight">
              {activeNodes.map((n) => n.name.split(" ")[0]).join(" + ")}
            </h4>
          </div>

          {/* Telemetry Metrics */}
          <div className="space-y-3.5">
            <span className="font-mono text-[9px] tracking-widest text-muted uppercase block">
              SYSTEM TELEMETRY
            </span>
            <div className="grid grid-cols-3 gap-2.5">
              <div className="bg-background border border-card-border p-3 rounded-md text-center">
                <span className="text-[9px] font-mono text-muted uppercase block">SPEED</span>
                <span className="text-sm font-technical font-semibold text-foreground mt-1 block">
                  {metrics.speed}/100
                </span>
              </div>
              <div className="bg-background border border-card-border p-3 rounded-md text-center">
                <span className="text-[9px] font-mono text-muted uppercase block">LATENCY</span>
                <span className="text-sm font-technical font-semibold text-teal mt-1 block">
                  {metrics.latency}ms
                </span>
              </div>
              <div className="bg-background border border-card-border p-3 rounded-md text-center">
                <span className="text-[9px] font-mono text-muted uppercase block">EFFICIENCY</span>
                <span className="text-sm font-technical font-semibold text-accent mt-1 block">
                  +{metrics.efficiency}%
                </span>
              </div>
            </div>
          </div>

          {/* Node Specifications */}
          <div className="space-y-3">
            <span className="font-mono text-[9px] tracking-widest text-[#868C97] uppercase block">
              TECHNICAL SPECIFICATIONS
            </span>
            <div className="space-y-2.5 max-h-[160px] overflow-y-auto pr-2">
              {activeNodes
                .flatMap((n) => n.specs)
                .map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-foreground">
                    <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" strokeWidth={2} />
                    <span className="font-mono text-[11px] uppercase tracking-wide text-foreground/90">
                      {spec}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="border-t border-card-border pt-4 mt-6">
          <Link
            href="/contact?type=strategy"
            className="w-full text-center py-2.5 rounded-md text-[10px] font-mono tracking-widest uppercase font-semibold text-background bg-accent hover:bg-accent-hover transition-colors border border-accent block"
          >
            Deploy Active Setup
          </Link>
        </div>
      </div>
    </div>
  );
}
