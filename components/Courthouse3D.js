"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import LadyJusticeModel from "./LadyJusticeModel"

export default function Courthouse3D() {

    return (
        <div className="absolute inset-0 -z-10">

            <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>

                {/* Lighting */}

                <ambientLight intensity={0.6} />

                <directionalLight
                    position={[5, 8, 5]}
                    intensity={1.5}
                />

                <spotLight
                    position={[0, 6, 4]}
                    angle={0.3}
                    intensity={2}
                />

                {/* 3D Model */}

                <LadyJusticeModel />

                {/* Controls */}

                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                />

                {/* Environment */}

                <Environment preset="sunset" />

            </Canvas>

        </div>
    )
}