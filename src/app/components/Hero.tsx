"use client"; // Client for 3D and animation

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";
import Image from "next/image";

function Cube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.01; // Very slow rotation
      meshRef.current.rotation.y += delta * 0.01;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.0005; // Subtler float
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.8, 0.8, 0.8]} /> // Low-poly
      <meshPhysicalMaterial color="#8b4513" roughness={0.5} metalness={0.2} /> // Brownish shine
    </mesh>
  );
}

function Orb() {
  return (
    <mesh position={[0.5, 0, -2]}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial color="#ff7f50" emissive="#ff7f50" emissiveIntensity={2} /> // Pink-orange glow
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={['#001022']} /> // Navy bg
      <ambientLight intensity={0.3} />
      <directionalLight intensity={1} position={[5, 5, 5]} color="#ffffff" /> // Overall light
      <pointLight position={[0.5, 0, -2]} intensity={5} color="#ff7f50" /> // Orb light
      <Orb />
      // Minimal cubes for perf
      <Cube position={[-0.5, 1, -3]} />
      <Cube position={[1, -0.5, -2.5]} />
    </>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      // Poster for fast LCP (download dark navy jpg to public/assets/hero-poster.jpg)
      <Image src="/assets/hero-poster.jpg" alt="Hero background" fill priority className="object-cover" />
      // 3D Background (loads after poster, minimal for no heaviness)
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 1]} gl={{ antialias: false }} camera={{ position: [0, 0, 5], fov: 50 }}>
          <Scene />
        </Canvas>
      </div>
      // Text Overlay
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-wider">MOSS VICTOR</h1>
        <p className="text-lg md:text-2xl text-gray-400 mt-4 font-bold">Software Engineer AI Prompt Engineer Front End App Developer</p>
        <div className="mt-8 flex justify-center space-x-4">
          <p className="text-gray-500">As featured in: Logo1 Logo2 Logo3</p>
        </div>
        <div className="mt-8 animate-bounce">
          <a href="#expertise" className="text-white text-2xl">↓</a>
        </div>
      </div>
    </section>
  );
}