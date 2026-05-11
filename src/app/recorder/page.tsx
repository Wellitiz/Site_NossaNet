'use client';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function HighQualityWaves() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 180; // Voltando para a versão elegante
  const sep = 4.5;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * count * 3);
    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        pos[i] = (xi - count / 2) * sep;
        pos[i + 1] = 0;
        pos[i + 2] = (zi - count / 2) * sep;
        i += 3;
      }
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!pointsRef.current) return;
    
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        // Ondas elegantes e fluidas novamente
        pos[i + 1] = 
          Math.sin(xi / 7 + time * 0.9) * 3.5 + 
          Math.cos(zi / 7 + time * 0.9) * 3.5 +
          Math.sin((xi + zi) / 12 + time) * 2;
        i += 3;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#89f336"
        size={0.6}
        sizeAttenuation
        transparent
        opacity={1}
      />
    </points>
  );
}

export default function RecorderPage() {
  return (
    <div className="fixed inset-0 w-full h-full bg-nossa-black overflow-hidden z-[9999]">
      {/* Força o desaparecimento de qualquer elemento externo */}
      <style jsx global>{`
        header, footer, [class*="FloatingWhatsApp"], .whatsapp-button, 
        nextjs-portal, #__next-build-watcher, [data-nextjs-toast] {
          display: none !important;
        }
        body {
          overflow: hidden !important;
          background: black !important;
        }
      `}</style>
      {/* Luzes de Glow Originais do Hero */}
      <div className="absolute top-0 -left-20 w-[800px] h-[800px] bg-primary/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full"></div>
      
      {/* Efeito de Ondas */}
      <div className="absolute inset-0 z-10 pt-32">
        <Canvas camera={{ position: [50, 50, 50], fov: 75 }}>
          <HighQualityWaves />
        </Canvas>
      </div>

      {/* Guia Visual de Gravação (Invisível no vídeo se você enquadrar bem) */}
      <div className="absolute top-4 right-4 text-white/5 text-[10px] uppercase tracking-widest font-mono">
        Antigravity v6.5 HQ Recording Mode
      </div>
    </div>
  );
}
