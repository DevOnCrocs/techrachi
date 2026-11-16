import React, { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Clock, 
  PhoneCall, 
  Coins, 
  ShieldCheck 
} from 'lucide-react';

// Lightweight 3D Neural / Audio Core Orb
const NeuralOrb: React.FC = () => {
  const coreRef = useRef<THREE.Mesh>(null!);
  const wireRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const ring3Ref = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Pulse core rhythmically like an audio/neural frequency
    const pulse = 1 + Math.sin(t * 2.2) * 0.05 + Math.sin(t * 4.5) * 0.02;
    if (coreRef.current) {
      coreRef.current.scale.set(pulse, pulse, pulse);
      coreRef.current.rotation.y += delta * 0.3;
      coreRef.current.rotation.x += delta * 0.12;
    }

    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.22;
      wireRef.current.rotation.z += delta * 0.12;
      const wirePulse = 1.25 + Math.sin(t * 2.8) * 0.03;
      wireRef.current.scale.set(wirePulse, wirePulse, wirePulse);
    }

    // Rotate orbital rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.35;
      ring1Ref.current.rotation.x = Math.sin(t * 0.4) * 0.35;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.28;
      ring2Ref.current.rotation.y = Math.cos(t * 0.5) * 0.35;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y += delta * 0.2;
      ring3Ref.current.rotation.z = Math.sin(t * 0.3) * 0.25;
    }

    // Gentle cursor/pointer reaction (damped interpolation)
    if (groupRef.current) {
      const targetX = state.pointer.x * 0.45;
      const targetY = state.pointer.y * 0.35;
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.06;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.06;
    }
  });

  return (
    <group ref={groupRef} scale={[1.3, 1.3, 1.3]}>
      <Float speed={2.0} rotationIntensity={0.25} floatIntensity={0.4}>
        {/* Central Core - Translucent Geometric Wireframe */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[0.95, 1]} />
          <meshStandardMaterial
            color="#4f46e5"
            wireframe
            transparent
            opacity={0.25}
            emissive="#6366f1"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Outer Neural Wireframe Lattice */}
        <mesh ref={wireRef}>
          <icosahedronGeometry args={[1.25, 1]} />
          <meshStandardMaterial
            color="#06b6d4"
            wireframe
            transparent
            opacity={0.45}
            emissive="#22d3ee"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Orbiting Audio Ring 1 */}
        <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.75, 0.016, 16, 64]} />
          <meshStandardMaterial
            color="#0284c7"
            emissive="#38bdf8"
            emissiveIntensity={0.8}
            roughness={0.2}
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Orbiting Neural Ring 2 */}
        <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[2.05, 0.014, 16, 64]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#818cf8"
            emissiveIntensity={0.75}
            roughness={0.2}
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Outer Accent Ring 3 */}
        <mesh ref={ring3Ref} rotation={[Math.PI / 6, -Math.PI / 3, 0]}>
          <torusGeometry args={[2.35, 0.012, 16, 64]} />
          <meshStandardMaterial
            color="#9333ea"
            emissive="#c084fc"
            emissiveIntensity={0.6}
            roughness={0.3}
            transparent
            opacity={0.5}
          />
        </mesh>
      </Float>
    </group>
  );
};

// Canvas Fallback component
const CanvasLoader: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative w-16 h-16 flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-2 border-indigo-500/40 border-t-cyan-400 animate-spin" />
      <div className="absolute w-6 h-6 rounded-full bg-indigo-500/20 animate-ping" />
    </div>
  </div>
);

interface HeroProps {
  onBookCall: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCall }) => {
  const sectionRef = useRef<HTMLElement>(null!);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 overflow-hidden bg-[#D8D8D8] subtle-grid"
    >
      {/* Ambient radial lighting glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/70 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[420px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* 3D Neural / Audio Core Canvas Render positioned directly behind Hero Section */}
      <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center -z-0">
        <Suspense fallback={<CanvasLoader />}>
          <Canvas
            eventSource={sectionRef}
            camera={{ position: [0, 0, 5.0], fov: 45 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
            className="w-full h-full"
          >
            <ambientLight intensity={0.9} />
            <pointLight position={[10, 10, 10]} intensity={1.4} color="#ffffff" />
            <pointLight position={[-10, -10, -5]} intensity={1.0} color="#22d3ee" />
            <pointLight position={[0, -5, 5]} intensity={0.8} color="#818cf8" />
            <NeuralOrb />
          </Canvas>
        </Suspense>
      </div>

      {/* White Overlay Above the 3D Render */}
      <div className="absolute inset-0 bg-white/55 backdrop-blur-[1.5px] pointer-events-none z-[1]" />

      {/* Centered and Middle-Justified Content Layer */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-slate-800 border border-black/10 mb-6 shadow-sm backdrop-blur-md bg-white/75"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
          </span>
          <span className="text-slate-800 font-semibold">
            AI Automation &amp; Custom Software for Growing Businesses
          </span>
          <Sparkles className="w-3.5 h-3.5 text-indigo-600 ml-0.5" />
        </motion.div>

        {/* H1 Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.08] mb-6 drop-shadow-sm max-w-4xl"
        >
          Stop Paying People to Do What AI Can Do{' '}
          <span className="text-indigo-600 underline decoration-indigo-400/60 underline-offset-8">
            While You Sleep.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-base sm:text-lg lg:text-xl text-slate-800 max-w-2xl mx-auto mb-8 leading-relaxed font-medium"
        >
          We build AI assistants, autonomous workflow agents, and voice agents that answer every customer, capture every lead, and handle your repetitive work around the clock, so your team focuses on growth, not busywork.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-4 w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 12px 30px -5px rgba(15, 23, 42, 0.35)' }}
            whileTap={{ scale: 0.98 }}
            onClick={onBookCall}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-slate-950 hover:bg-slate-800 shadow-xl shadow-slate-950/20 flex items-center justify-center gap-2.5 group transition-all duration-200"
          >
            <span>Book Your Free Strategy Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#demos"
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-800 bg-white/80 hover:bg-white border border-black/10 hover:border-black/20 flex items-center justify-center gap-2 shadow-sm transition-all duration-200 backdrop-blur-sm"
          >
            <Play className="w-4 h-4 text-indigo-600 fill-indigo-600/20" />
            <span>▶ Try a Live AI Agent</span>
          </motion.a>
        </motion.div>

        {/* Micro-copy under buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-xs text-slate-600 mb-10 font-medium"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Free 30-minute call · No obligation · You leave with a custom automation roadmap</span>
        </motion.div>

        {/* 3 Hero Bullets */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-black/[0.08]"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/80 border border-black/10 shadow-sm backdrop-blur-sm text-xs sm:text-sm text-slate-800">
            <div className="w-5 h-5 rounded-md bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
              <Clock className="w-3.5 h-3.5 text-indigo-600" />
            </div>
            <span>
              Reclaim <strong className="text-slate-950 font-semibold">20+ hours a week</strong> of manual work
            </span>
          </div>

          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/80 border border-black/10 shadow-sm backdrop-blur-sm text-xs sm:text-sm text-slate-800">
            <div className="w-5 h-5 rounded-md bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0">
              <PhoneCall className="w-3.5 h-3.5 text-cyan-600" />
            </div>
            <span>
              Never miss a call, chat, or lead again, <strong className="text-slate-950 font-semibold">24/7/365</strong>
            </span>
          </div>

          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/80 border border-black/10 shadow-sm backdrop-blur-sm text-xs sm:text-sm text-slate-800">
            <div className="w-5 h-5 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
              <Coins className="w-3.5 h-3.5 text-emerald-600" />
            </div>
            <span>
              Cut operational costs <strong className="text-slate-950 font-semibold">without cutting service quality</strong>
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
