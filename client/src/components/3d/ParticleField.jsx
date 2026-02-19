'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const Particles = () => {
    const ref = useRef();

    // Create 500 random particles
    const count = 500;
    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 15; // Spread
        }
        return positions;
    }, []);

    useFrame((state) => {
        if (ref.current) {
            // Subtle rotation based on time
            ref.current.rotation.y = state.clock.elapsedTime * 0.05;
            ref.current.rotation.x = state.clock.elapsedTime * 0.02;
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    itemSize={3}
                    array={positions}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#ffffff"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
};

export default function ParticleCanvas() {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Particles />
        </Canvas>
    );
}
