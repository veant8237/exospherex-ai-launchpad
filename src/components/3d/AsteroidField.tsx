import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

interface AsteroidProps {
  position: [number, number, number];
  scale: number;
  speed: number;
  rotationSpeed: [number, number, number];
}

const Asteroid = ({ position, scale, speed, rotationSpeed }: AsteroidProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create irregular asteroid geometry
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1, 1);
    const positionAttribute = geo.attributes.position;
    const vertex = new THREE.Vector3();

    for (let i = 0; i < positionAttribute.count; i++) {
      vertex.fromBufferAttribute(positionAttribute, i);
      vertex.multiplyScalar(0.8 + Math.random() * 0.4);
      positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }

    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed[0];
      meshRef.current.rotation.y += rotationSpeed[1];
      meshRef.current.rotation.z += rotationSpeed[2];

      // Floating movement
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.position.x =
        position[0] + Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale} geometry={geometry}>
      <meshStandardMaterial
        color="#1a1a2e"
        roughness={0.9}
        metalness={0.1}
        emissive="#00d4ff"
        emissiveIntensity={0.05}
      />
    </mesh>
  );
};

const FloatingRock = ({ position, scale }: { position: [number, number, number]; scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#16213e"
          roughness={0.8}
          metalness={0.2}
          emissive="#8b5cf6"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
};

const GlowingSphere = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial
        color="#00d4ff"
        emissive="#00d4ff"
        emissiveIntensity={2}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

const Scene = () => {
  const asteroids = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10,
          -5 - Math.random() * 15,
        ] as [number, number, number],
        scale: 0.3 + Math.random() * 0.5,
        speed: 0.3 + Math.random() * 0.5,
        rotationSpeed: [
          Math.random() * 0.01,
          Math.random() * 0.01,
          Math.random() * 0.01,
        ] as [number, number, number],
      })),
    []
  );

  const floatingRocks = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 8,
          -3 - Math.random() * 10,
        ] as [number, number, number],
        scale: 0.2 + Math.random() * 0.3,
      })),
    []
  );

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.2} />
      
      {/* Primary light - cyan accent */}
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      
      {/* Secondary light - purple accent */}
      <pointLight position={[-10, -5, 5]} intensity={0.5} color="#8b5cf6" />
      
      {/* Directional light for depth */}
      <directionalLight position={[0, 5, 5]} intensity={0.3} color="#ffffff" />

      {/* Stars background */}
      <Stars
        radius={100}
        depth={50}
        count={3000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      {/* Asteroids */}
      {asteroids.map((asteroid, i) => (
        <Asteroid key={`asteroid-${i}`} {...asteroid} />
      ))}

      {/* Floating rocks with glow effect */}
      {floatingRocks.map((rock, i) => (
        <FloatingRock key={`rock-${i}`} {...rock} />
      ))}

      {/* Glowing orbs */}
      <GlowingSphere position={[5, 2, -8]} />
      <GlowingSphere position={[-6, -1, -12]} />
      <GlowingSphere position={[0, 3, -15]} />
    </>
  );
};

export const AsteroidField = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
};
