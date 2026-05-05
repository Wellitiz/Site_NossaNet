'use client';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, CatmullRomCurve3 } from '@react-three/drei';
import * as THREE from 'three';

function FiberCable() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create a curve for the fiber
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-15, -5, 0),
      new THREE.Vector3(-5, 5, 5),
      new THREE.Vector3(5, -5, -5),
      new THREE.Vector3(15, 5, 0),
    ]);
  }, []);

  useFrame((state) => {
    const { mouse } = state;
    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouse.y * 0.2, 0.1);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouse.x * 0.2, 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <tubeGeometry args={[curve, 100, 0.2, 8, false]} />
        <MeshDistortMaterial
          color="#89f336"
          emissive="#89f336"
          emissiveIntensity={2}
          distort={0.3}
          speed={2}
          roughness={0}
        />
      </mesh>
    </Float>
  );
}

export function InteractiveFiber() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#89f336" />
        <FiberCable />
      </Canvas>
    </div>
  );
}
