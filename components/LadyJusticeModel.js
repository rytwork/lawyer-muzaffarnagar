"use client"

import { useGLTF } from "@react-three/drei"

export default function LadyJusticeModel(props) {

    const { scene } = useGLTF("/models/lady_justice.glb")

    return (
        <primitive
            object={scene}
            scale={4}
            position={[0, -0.5, 0]}
            rotation={[0, 0.5, 0]}
            {...props}
        />
    )
}