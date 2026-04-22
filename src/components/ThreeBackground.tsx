"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, MeshDistortMaterial, Float, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useState, useRef, useMemo } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function ParticleField() {
    const points = useMemo(() => {
        const p = new Float32Array(2000 * 3);
        for (let i = 0; i < 2000; i++) {
            p[i * 3] = (Math.random() - 0.5) * 10;
            p[i * 3 + 1] = (Math.random() - 0.5) * 10;
            p[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return p;
    }, []);

    const ref = useRef<THREE.Points>(null!);
    useFrame((state) => {
        ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        ref.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    });

    return (
        <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#D4AF37"
                size={0.015}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

function FloatingObject() {
    const mesh = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, Math.cos(t / 2) / 4 + 0.25, 0.1);
        mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, Math.sin(t / 4) / 4 + 0.25, 0.1);
        mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, Math.sin(t / 2) / 4, 0.1);
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={mesh} position={[0, 0, 0]}>
                <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                <MeshDistortMaterial
                    color="#D4AF37"
                    speed={2}
                    distort={0.3}
                    radius={1}
                    emissive="#D4AF37"
                    emissiveIntensity={2}
                    metalness={1}
                    roughness={0.1}
                />
            </mesh>
        </Float>
    );
}

export default function ThreeBackground() {
    return (
        <div className="absolute inset-0 z-0 bg-black">
            <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
                <color attach="background" args={["#000"]} />
                <ambientLight intensity={0.2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#D4AF37" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D4AF37" />

                <ParticleField />
                <FloatingObject />

                <EffectComposer>
                    <Bloom
                        luminanceThreshold={0.2}
                        mipmapBlur
                        intensity={1.5}
                        radius={0.4}
                    />
                </EffectComposer>

                <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            </Canvas>
        </div>
    );
}
