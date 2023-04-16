import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Center,
    OrbitControls,
    Preload,
    useAnimations,
    useGLTF,
} from "@react-three/drei";
import { PointLight } from "three";
import { Loader } from "../Loader";
import { motion } from "framer-motion";

const Rocket = () => {
    const { scene } = useGLTF("./rocket/rocket.glb");
    const myMesh = useRef();

    useFrame(({ clock }) => {
        // do rocket animation here
        // Basic Animation Example
        // let x = clock.getElapsedTime();
        // myMesh.current.rotation.x = -Math.sinh(x);
    });

    return (
        <Center>
            <mesh ref={myMesh}>
                <hemisphereLight intensity={1} groundColor={"black"} />
                {/* <pointLight intensity={1} position={[0, 200, 5]} /> */}
                <ambientLight intensity={4} position={[0, 0, 0]} />
                <primitive
                    object={scene}
                    scale={0.2}
                    position={[0, 0, 0]}
                    rotation={[Math.PI, 0, 0]}
                />
                {/* <primitive
                object={scene}
                scale={0.2}
                position={[0, -0.4, 0]}
                rotation={[0, -2.7*Math.PI /2, 0]}
            /> */}
            </mesh>
        </Center>
    );
};

export const RocketCanvas = () => {
    return (
        <Canvas
            // frameloop="demand"
            shadows
            camera={{ position: [0, 2 * 400, 0], fov: 30 }}
            // camera={{ position: [0, -1, .2], fov: 70 }}
            gl={{ preserveDrawingBuffer: true }}
            className="flex justify-center w-full"
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    // enableZoom={false}
                    autoRotate
                    maxPolarAngle={Math.PI / 4}
                    minPolarAngle={-Math.PI }
                />
                <Rocket />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default RocketCanvas;
