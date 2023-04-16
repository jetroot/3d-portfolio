import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    useTexture,
    Preload,
} from "@react-three/drei";
import Loader from "../Loader";


const Ball = (props) => {
  const [decal] = useTexture([props.icon])

    return (
        <Float>
            <ambientLight intensity={0.25} />
            <directionalLight intensity={1} position={[0, 0, 0.04]} />
            <mesh scale={3}>
                <sphereGeometry />
                <meshStandardMaterial flatShading color={"#f1f1f1"} />
                <Decal map={decal} flatShading position={[0, 0, 1]} />
            </mesh>
        </Float>
    );
};

const BallCanvas = ({icon}) => {
  return (
      <Canvas
          frameloop="demand"

          gl={{ preserveDrawingBuffer: true }}
      >
          <Suspense fallback={<Loader />}>
              <OrbitControls enableZoom={false}
              />
              <Ball icon={icon} />
          </Suspense>

          <Preload all />
      </Canvas>
  );
}

export default BallCanvas;
