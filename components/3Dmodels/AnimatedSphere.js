
import { Sphere,MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const AnimatedSphere = ({rotate}) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
    
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
      if (rotate) {
          return (ref.current.rotation.z += 0.008)
      }
  });

  return (
      <Sphere ref={ref} visible args={[1,100,200]} scale={2}>
          <MeshDistortMaterial
            color="#8352FD"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0}
          />
      </Sphere>
  )
};

export default AnimatedSphere;
