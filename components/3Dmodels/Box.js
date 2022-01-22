import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three"

const Box = ({rotate}) => {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        if (rotate) {
            return (ref.current.rotation.z += 0.008)
        }
    });

    return (
        <mesh 
            className="cursor-pointer"
            rotation={new THREE.Euler(Math.PI / 2, 0, 0)}
            ref={ref}
        >
            <boxBufferGeometry attach="geometry" args={[3,3,3]} />
            <meshNormalMaterial attach="material" />
        </mesh>
    ) 
};

export default Box;
