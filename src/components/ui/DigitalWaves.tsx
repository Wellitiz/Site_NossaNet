'use client';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Waves() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 100;
  const sep = 3;

  const [positions, setPositions] = useMemo(() => {
    const positions = new Float32Array(count * count * 3);
    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        positions[i] = (xi - count / 2) * sep;
        positions[i + 1] = 0;
        positions[i + 2] = (zi - count / 2) * sep;
        i += 3;
      }
    }
    return [positions];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!pointsRef.current) return;
    
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        pos[i + 1] = Math.sin(xi / 5 + time) * 2 + Math.cos(zi / 5 + time) * 2;
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
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#89f336"
        size={0.15}
        sizeAttenuation
        transparent
        opacity={0.4}
      />
    </points>
  );
}

export function DigitalWaves() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
      <Canvas camera={{ position: [50, 50, 50], fov: 75 }}>
        <Waves />
      </Canvas>
    </div>
  );
}
