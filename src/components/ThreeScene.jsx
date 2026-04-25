import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, scale, color, speed, distort }) => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
            meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <icosahedronGeometry args={[1, 1]} />
                <MeshDistortMaterial
                    color={color}
                    transparent
                    opacity={0.15}
                    distort={distort}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
};

const TorusShape = ({ position, scale, color, speed }) => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
            meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.15;
        }
    });

    return (
        <Float speed={speed * 0.8} rotationIntensity={0.3} floatIntensity={1}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <torusGeometry args={[1, 0.3, 16, 32]} />
                <meshStandardMaterial
                    color={color}
                    transparent
                    opacity={0.1}
                    roughness={0.3}
                    metalness={0.9}
                    wireframe
                />
            </mesh>
        </Float>
    );
};

const Particles = ({ count = 150 }) => {
    const meshRef = useRef();

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 10,
                ],
                scale: Math.random() * 0.02 + 0.005,
            });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        if (!meshRef.current) return;
        particles.forEach((particle, i) => {
            const t = state.clock.elapsedTime;
            dummy.position.set(
                particle.position[0] + Math.sin(t * 0.3 + i) * 0.3,
                particle.position[1] + Math.cos(t * 0.2 + i) * 0.4,
                particle.position[2] + Math.sin(t * 0.1 + i * 0.5) * 0.2
            );
            dummy.scale.setScalar(particle.scale);
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial color="#ef4444" transparent opacity={0.4} />
        </instancedMesh>
    );
};

const ThreeScene = () => {
    return (
        <div className="three-canvas-container">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ef4444" />
                <pointLight position={[-5, -5, 5]} intensity={0.3} color="#ff6b6b" />

                {/* Floating Geometric Shapes */}
                <FloatingShape position={[-4, 3, -3]} scale={1.2} color="#ef4444" speed={0.8} distort={0.3} />
                <FloatingShape position={[5, -2, -4]} scale={0.9} color="#dc2626" speed={0.6} distort={0.4} />
                <FloatingShape position={[-3, -4, -2]} scale={0.7} color="#ff6b6b" speed={1} distort={0.2} />
                <FloatingShape position={[3, 4, -5]} scale={1.5} color="#ef4444" speed={0.4} distort={0.5} />

                {/* Wireframe Torus Rings */}
                <TorusShape position={[6, 1, -3]} scale={0.8} color="#ef4444" speed={0.5} />
                <TorusShape position={[-5, -1, -4]} scale={1.1} color="#dc2626" speed={0.3} />
                <TorusShape position={[0, 5, -6]} scale={1.4} color="#ff3131" speed={0.2} />

                {/* Particle Field */}
                <Particles count={120} />

                {/* Fog for depth */}
                <fog attach="fog" args={['#000000', 5, 20]} />
            </Canvas>
        </div>
    );
};

export default ThreeScene;
