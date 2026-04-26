import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, ContactShadows, TorusKnot } from '@react-three/drei';

function GoldJewelry(props) {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <Float rotationIntensity={0.5} floatIntensity={0.5} speed={2}>
            <TorusKnot ref={meshRef} args={[1, 0.3, 128, 16]} {...props}>
                <meshStandardMaterial
                    color="#FFD700"
                    roughness={0.1}
                    metalness={1}
                    envMapIntensity={1}
                />
            </TorusKnot>
        </Float>
    );
}

const JewelryScene = () => {
    return (
        <div className='w-full h-[400px] relative rounded-lg overflow-hidden'>
            <Canvas camera={{ position: [0, 0, 7], fov: 45 }} gl={{ alpha: true }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <Environment preset="city" />

                <GoldJewelry />

                <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={5} blur={2.5} far={4} color="#000000" />
                <OrbitControls enableZoom={false} autoRotate={false} />
            </Canvas>
        </div>
    );
};

export default JewelryScene;
