"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface LoomSceneProps {
  mode: "braiding" | "idle" | "ambient" | "interactive";
  progress?: number; // 0 to 1, driven by GSAP loader
  activeNodes?: string[]; // for interactive constellation
  onNodeClick?: (id: string) => void;
}

function GenerativeThreads({ mode, progress = 0.5, activeNodes = [], onNodeClick }: LoomSceneProps) {
  const isBraiding = mode === "braiding";
  const threadRefs = React.useRef<THREE.Line[]>([]);
  const [pointsData, setPointsData] = React.useState<THREE.Vector3[][]>([[], [], [], []]);
  const pointer = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pointer.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const newPointsData: THREE.Vector3[][] = [[], [], [], []];

    // Compute coordinate points for 4 strands
    const numPoints = 64;
    const isIdle = mode === "idle";
    const isAmbient = mode === "ambient";

    // Dynamic scale factor for radius collapse
    // In braiding mode, progress collapses the radius. In idle/ambient, radius is fixed
    const radiusScale = isBraiding 
      ? (1 - progress) * 2.5 + progress * 0.15 
      : isAmbient 
        ? 1.0 
        : 1.5;

    for (let i = 0; i < 4; i++) {
      const strandPoints: THREE.Vector3[] = [];
      const phase = (i * Math.PI) / 2;
      const isViolet = i % 2 === 0;

      for (let t = 0; t <= numPoints; t++) {
        const pct = t / numPoints; // 0 to 1
        
        // Helix angle
        const helixTurns = isBraiding ? 4 : 2.5;
        const angle = pct * Math.PI * helixTurns + phase + (isBraiding ? 0 : time * 0.4);
        
        // Collapse radius in the middle to simulate a knot
        const knotFactor = isBraiding 
          ? Math.sin(pct * Math.PI) 
          : Math.sin(pct * Math.PI) * 0.8;
          
        const r = radiusScale * (1 - knotFactor * 0.6);

        // Core coordinates
        let x = r * Math.cos(angle);
        let y = (pct - 0.5) * 5; // vertical span
        let z = r * Math.sin(angle);

        // Add ambient drift/noise to loose threads on load
        if (isBraiding && progress < 0.8) {
          const noise = (1 - progress) * 0.4 * Math.sin(time * 2 + pct * 5);
          x += noise;
          z += noise;
        }

        // Apply dynamic parallax tilt for idle mode
        if (isIdle) {
          x += pointer.current.x * 0.15 * (1 - Math.abs(pct - 0.5));
          z += pointer.current.y * 0.15 * (1 - Math.abs(pct - 0.5));
        }

        strandPoints.push(new THREE.Vector3(x, y, z));
      }
      newPointsData[i] = strandPoints;
    }

    setPointsData(newPointsData);
  });

  const colors = ["#6C63FF", "#2FE6D0", "#6C63FF", "#2FE6D0"];

  return (
    <group>
      {pointsData.map((points, idx) => {
        if (points.length === 0) return null;
        
        // Generate BufferGeometry from Vector3 points
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        return (
          <line key={idx}>
            <primitive object={geometry} />
            <lineBasicMaterial
              color={colors[idx]}
              linewidth={mode === "ambient" ? 1 : 2}
              transparent
              opacity={mode === "ambient" ? 0.25 : 0.8}
            />
          </line>
        );
      })}

      {/* Subtle particle field inside Loom */}
      {mode !== "ambient" && (
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[
                new Float32Array(
                  Array.from({ length: 90 }, (_, i) => {
                    const pct = Math.random();
                    const angle = Math.random() * Math.PI * 2;
                    const r = (isBraiding ? (1 - progress) * 1.5 + 0.1 : 0.8) * Math.random();
                    return i % 3 === 0 
                      ? r * Math.cos(angle)
                      : i % 3 === 1 
                        ? (pct - 0.5) * 4
                        : r * Math.sin(angle);
                  })
                ),
                3,
              ]}
            />
          </bufferGeometry>
          <pointsMaterial
            color="#2FE6D0"
            size={0.03}
            transparent
            opacity={isBraiding ? (1 - progress) * 0.4 + 0.1 : 0.3}
            sizeAttenuation
          />
        </points>
      )}
    </group>
  );
}

export default function LoomScene({ mode, progress = 0.5, activeNodes = [], onNodeClick }: LoomSceneProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-full min-h-[300px] pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />

        <GenerativeThreads
          mode={mode}
          progress={progress}
          activeNodes={activeNodes}
          onNodeClick={onNodeClick}
        />

        {mode === "interactive" && <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.8} minPolarAngle={Math.PI / 2.2} />}
      </Canvas>
    </div>
  );
}
