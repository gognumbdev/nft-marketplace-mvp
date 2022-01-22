/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: FranciscoDugarte (https://sketchfab.com/FranciscoDugarte)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/bitcoin-free-model-551901abb50a4166abdf5f7c92311d37
title: BITCOIN - FREE MODEL
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model({ ...props }) { 
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/3Dmodel/bitcoin.gltf')
  const { actions } = useAnimations(animations, group)
  
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (props.rotate) {
        return (group.current.rotation.z += 0.008)
    }
  });
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group name="16783_Zeus_v1_NEW001" rotation={[-Math.PI / 2, 0, 0]} scale={10}>
            <mesh
              geometry={nodes['16783_Zeus_v1_NEW001_oro2_0'].geometry}
              material={nodes['16783_Zeus_v1_NEW001_oro2_0'].material}
            />
            <mesh
              geometry={nodes['16783_Zeus_v1_NEW001_oro2_0_1'].geometry}
              material={nodes['16783_Zeus_v1_NEW001_oro2_0_1'].material}
            />
            <mesh
              geometry={nodes['16783_Zeus_v1_NEW001_oro2_0_2'].geometry}
              material={nodes['16783_Zeus_v1_NEW001_oro2_0_2'].material}
            />
            <mesh
              geometry={nodes['16783_Zeus_v1_NEW001_oro2_0_3'].geometry}
              material={nodes['16783_Zeus_v1_NEW001_oro2_0_3'].material}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3Dmodel/bitcoin.gltf')
