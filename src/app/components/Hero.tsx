"use client"; // Client for 3D and animation

import { Canvas, useFrame, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing"; // For glow

// Extend for postprocessing if needed
extend({ EffectComposer, Bloom });

function Cube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.05; // Slower rotation
      meshRef.current.rotation.y += delta * 0.05;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.001; // Subtle float
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.8, 0.8, 0.8]} /> {/* Larger for visibility */}
      <meshPhysicalMaterial color="#8b4513" roughness={0.5} metalness={0.2} /> {/* Brownish with shine */}
    </mesh>
  );
}

function Orb() {
  return (
    <mesh position={[0.5, 0, -2]}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial color="#ff7f50" emissive="#ff7f50" emissiveIntensity={2} /> {/* Pink-orange glow */}
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={['#001022']} /> {/* Navy bg renders first */}
      <fog attach="fog" args={['#001022', 5, 20]} /> {/* Less dense fog */}
      <ambientLight intensity={0.3} />
      <directionalLight intensity={1} position={[5, 5, 5]} color="#ffffff" /> {/* Overall light */}
      <pointLight position={[0.5, 0, -2]} intensity={5} color="#ff7f50" /> {/* Stronger orb light */}
      <Orb />
      {/* Clustered cubes near orb */}
      <Cube position={[-0.5, 1, -3]} />
      <Cube position={[1, -0.5, -2.5]} />
      <Cube position={[-1, -1, -3.5]} />
      <Cube position={[0, 1.5, -4]} />
      <Cube position={[-1.5, 0.5, -2]} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
    </>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 1.2]} camera={{ position: [0, 0, 5], fov: 50 }}>
          <EffectComposer>
            <Scene />
            <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} /> {/* Glow effect */}
          </EffectComposer>
        </Canvas>
      </div>

      {/* Poster fallback for LCP - uncomment if needed and file exists */}
      {/* <Image src="/assets/hero-poster.jpg" alt="Hero background" fill priority className="object-cover" /> */}

      {/* Text Overlay */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-wider">MOSS VICTOR</h1>
        <p className="text-lg md:text-2xl text-gray-400 mt-4 font-bold">SOFTWARE ENGINEER,  AI PROMPT ENGINEER,  FRONT END &   APP DEVELOPER </p>
        <div className="mt-8 flex justify-center space-x-4">
          {/* Featured logos - add images later */}
          <p className="text-gray-500">As featured in: Logo1 Logo2 Logo3</p>
        </div>
        <div className="mt-8 animate-bounce">
          <a href="#expertise" className="text-white text-2xl">↓</a>
        </div>
      </div>
    </section>
  );
}