'use client';
import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Vertex Shader: Ondas Orgânicas e Fluidas
const vertexShader = `
  uniform float uTime;
  varying float vElevation;
  varying vec2 vUv;

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
    // Matemática de ondas compostas (mais orgânico)
    float elevation = sin(modelPosition.x * 0.15 + uTime * 0.8) * 1.5;
    elevation += sin(modelPosition.z * 0.2 + uTime * 0.5) * 1.5;
    elevation += sin((modelPosition.x + modelPosition.z) * 0.1 + uTime * 0.3) * 1.0;
    
    modelPosition.y += elevation;
    vElevation = elevation;
    vUv = uv;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    // Tamanho do ponto baseado na distância e na elevação
    gl_PointSize = (15.0 + elevation * 2.0) * (1.0 / -viewPosition.z);
  }
`;

// Fragment Shader: Partículas Circulares com Glow
const fragmentShader = `
  varying float vElevation;
  void main() {
    // Transforma o quadrado em círculo suave
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    if(distanceToCenter > 0.5) discard;
    
    float strength = 0.05 / distanceToCenter;
    strength = pow(strength, 2.0);

    // Cor dinâmica: mais brilho no topo das ondas
    vec3 color = vec3(0.537, 0.953, 0.212); // #89f336
    float mixFactor = (vElevation + 3.0) / 6.0;
    vec3 finalColor = mix(color * 0.3, color, mixFactor);

    gl_FragColor = vec4(finalColor, strength * 0.6);
  }
`;

function WaveShader() {
  const shaderRef = useRef<THREE.ShaderMaterial>(null);

  // Aumentando a densidade para ficar mais "preenchido"
  const { count, positions } = useMemo(() => {
    const c = 120; // Mais denso
    const pos = new Float32Array(c * c * 3);
    let i = 0;
    for (let xi = 0; xi < c; xi++) {
      for (let zi = 0; zi < c; zi++) {
        pos[i] = (xi - c / 2) * 3.5;
        pos[i + 1] = 0;
        pos[i + 2] = (zi - c / 2) * 3.5;
        i += 3;
      }
    }
    return { count: c, positions: pos };
  }, []);

  useFrame((state) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={shaderRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        uniforms={{
          uTime: { value: 0 }
        }}
      />
    </points>
  );
}

export function DigitalWaves() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldRender(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none bg-nossa-black overflow-hidden">
      {shouldRender && (
        <Canvas 
          camera={{ position: [50, 45, 50], fov: 60 }} 
          dpr={[1, 1.5]}
          gl={{ 
            antialias: false, 
            powerPreference: "high-performance",
            alpha: true 
          }}
        >
          <color attach="background" args={['#030712']} />
          <WaveShader />
        </Canvas>
      )}
    </div>
  );
}
