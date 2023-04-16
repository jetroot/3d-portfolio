import { Html, useProgress } from "@react-three/drei";

export const Loader = () => {
    const { progress } = useProgress();

    return (
        <Html>
            <span style={{ fontSize: 14, color: "#f1f1f1", fontWeight: 600 }}>
                {progress.toFixed(2)}%
            </span>
        </Html>
    );
};

export default Loader;
