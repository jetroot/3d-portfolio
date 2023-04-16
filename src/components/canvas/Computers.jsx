import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { PointLight } from "three";
import {Loader} from '../Loader'

const Computers = () => {
    const pc = useGLTF("./desktop_pc/pc.glb");

    return (
        <Center>
            <mesh>
                <hemisphereLight intensity={0.5} groundColor={"black"} />
                {/* <pointLight intensity={1} position={[0, 200, 5]} /> */}
                <ambientLight intensity={1} position={[0, 0, 5]} />
                <spotLight intensity={1} position={[0.48, 1, 0]} />
                {/* <directionalLight
                color="white"
                intensity={1}
                position={[0, 0, 5]}
            /> */}

                <primitive
                    object={pc.scene}
                    scale={0.0148}
                    // scale={0.1}
                    position={[-100, -45, -75]}
                    // position={[0, -45, -75]}
                    rotation={[-0.01, -0.3, -0.1]}
                />
            </mesh>
        </Center>
    );
};

export const ComputerCanvas = () => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [15, 10, 4], fov: 50 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    // rotation={[1, 0, 0]}
                    // autoRotate={true}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default Computers;
