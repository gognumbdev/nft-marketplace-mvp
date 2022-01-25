/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Forest Katsch (https://sketchfab.com/ForestKatsch)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/spacex-falcon-9-block-45-12285ccc02de4d5c91b00632f0722c92
title: SpaceX Falcon 9 Block 4.5
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/3Dmodel/spacex.gltf')
  useFrame((state, delta) => {
    if (props.rotate) {
        return (group.current.rotation.x += 0.008)
    }
  });
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[0, 0, -3.14]} scale={0.1}>
          <group position={[0, 0, 47.8]}>
            <mesh geometry={nodes['m1d-vac_nozzle_0'].geometry} material={nodes['m1d-vac_nozzle_0'].material} />
          </group>
          <group position={[0, 0, 57.4]} rotation={[0, 0, Math.PI / 2]}>
            <mesh geometry={nodes.left_fairing_shell_0.geometry} material={nodes.left_fairing_shell_0.material} />
          </group>
          <group position={[0, 0, 57.4]} rotation={[0, 0, -Math.PI / 2]}>
            <mesh geometry={nodes.right_fairing_shell_0.geometry} material={nodes.right_fairing_shell_0.material} />
          </group>
          <primitive object={nodes['f9-v12_rig_rootJoint']} />
          <group position={[0, 0, 44]}>
            <mesh geometry={nodes.stage_one_rcs_0.geometry} material={nodes.stage_one_rcs_0.material} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3Dmodel/spacex.gltf')
