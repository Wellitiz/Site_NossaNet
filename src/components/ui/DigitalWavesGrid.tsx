'use client';
import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Vertex Shader: Ondas Digitais de Alta Performance
const vertexShader = `
  uniform float uTime;
  varying float vElevation;
  varying vec2 vUv;

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
    // Matemática de ondas compostas (mais orgânico e visível)
    float elevation = sin(modelPosition.x * 0.1 + uTime * 0.8) * 2.0;
    elevation += sin(modelPosition.z * 0.15 + uTime * 0.6) * 1.5;
    elevation += sin((modelPosition.x + modelPosition.z) * 0.1 + uTime * 0.4) * 1.0;
    
    modelPosition.y += elevation;
    vElevation = elevation;
    vUv = uv;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    // Tamanho do ponto (usado apenas se for Points)
    gl_PointSize = (20.0 + elevation * 5.0) * (1.0 / -viewPosition.z);
  }
`;

// Fragment Shader: Brilho Neon e Transparência
const fragmentShader = `
  varying float vElevation;
  varying vec2 vUv;
  uniform bool uIsPoints;

  void main() {
    if (uIsPoints) {
      // Formato circular para pontos
      float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
      if(distanceToCenter > 0.5) discard;
      
      float strength = 0.05 / distanceToCenter;
      strength = pow(strength, 1.5);
      
      // Cor Verde NossaNet (#89f336)
      vec3 color = vec3(0.537, 0.953, 0.212); 
      float mixFactor = (vElevation + 3.0) / 6.0;
      vec3 finalColor = mix(color * 0.4, color, mixFactor);
      
      gl_FragColor = vec4(finalColor, strength * 0.8);
    } else {
      // Efeito de Linha (Wireframe)
      vec3 color = vec3(0.537, 0.953, 0.212);
      float mixFactor = (vElevation + 3.0) / 6.0;
      vec3 finalColor = mix(color * 0.2, color, mixFactor);
      
      // Opacidade baseada na distância (fade out nas bordas)
      float edgeAlpha = 1.0 - smoothstep(0.3, 0.5, abs(vUv.x - 0.5));
      edgeAlpha *= 1.0 - smoothstep(0.3, 0.5, abs(vUv.y - 0.5));
      
      gl_FragColor = vec4(finalColor, edgeAlpha * 0.3);
    }
  }
`;

function WaveGrid() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const pointsMaterialRef = useRef<THREE.ShaderMaterial>(null);

  const { geometry } = useMemo(() => {
    // Geometria de plano para o grid
    const geo = new THREE.PlaneGeometry(150, 150, 60, 60);
    geo.rotateX(-Math.PI / 2);
    return { geometry: geo };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (materialRef.current) materialRef.current.uniforms.uTime.value = time;
    if (pointsMaterialRef.current) pointsMaterialRef.current.uniforms.uTime.value = time;
  });

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uIsPoints: { value: false }
  }), []);

  const pointsUniforms = useMemo(() => ({
    uTime: { value: 0 },
    uIsPoints: { value: true }
  }), []);

  return (
    <group position={[0, -5, 0]}>
      {/* Grid de Linhas (Waves) */}
      <mesh geometry={geometry}>
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent={true}
          wireframe={true}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          uniforms={uniforms}
        />
      </mesh>

      {/* Pontos nos Vértices (Nodes) */}
      <points geometry={geometry}>
        <shaderMaterial
          ref={pointsMaterialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent={true}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          uniforms={pointsUniforms}
        />
      </points>
    </group>
  );
}

export function DigitalWaves() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-nossa-black" />;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none bg-nossa-black overflow-hidden">
      <Canvas 
        camera={{ position: [40, 25, 40], fov: 45 }} 
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          powerPreference: "high-performance",
          alpha: true 
        }}
      >
        <color attach="background" args={['#030712']} />
        <fog attach="fog" args={['#030712', 30, 90]} />
        <WaveGrid />
      </Canvas>
      
      {/* Overlay de gradiente para suavizar a transição com o conteúdo */}
      <div className="absolute inset-0 bg-gradient-to-b from-nossa-black/20 via-transparent to-nossa-black pointer-events-none" />
    </div>
  );
}
