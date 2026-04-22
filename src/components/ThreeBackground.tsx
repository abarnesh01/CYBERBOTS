"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function ParticleField() {
    const count = 1500;
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 20;
            p[i * 3 + 1] = (Math.random() - 0.5) * 20;
            p[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return p;
    }, []);

    const ref = useRef<THREE.Points>(null!);
    useFrame((state) => {
        ref.current.rotation.y = state.clock.getElapsedTime() * 0.015;
        ref.current.rotation.x = state.clock.getElapsedTime() * 0.01;
    });

    return (
        <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#D4AF37"
                size={0.008}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.2}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

function HeroObject() {
    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <Sphere args={[1.5, 64, 64]} position={[0, 0, -2]}>
                <MeshDistortMaterial
                    color="#D4AF37"
                    speed={1.5}
                    distort={0.2}
                    radius={1}
                    wireframe
                    transparent
                    opacity={0.1}
                />
            </Sphere>
        </Float>
    );
}

export default function ThreeBackground() {
    return (
        <div className="absolute inset-0 z-0 bg-black">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <color attach="background" args={["#000"]} />
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={0.5} color="#D4AF37" />

                <ParticleField />
                <HeroObject />

                <EffectComposer>
                    <Bloom
                        luminanceThreshold={0.8}
                        mipmapBlur
                        intensity={0.3}
                        radius={0.4}
                    />
                </EffectComposer>
            </Canvas>
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
        </div>
    );
}
