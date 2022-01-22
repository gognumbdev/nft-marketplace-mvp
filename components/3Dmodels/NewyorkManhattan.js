/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: truekit (https://sketchfab.com/truekit)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/new-york-city-manhattan-372bc495b3a941308f4a3198bc45e17b
title: New York City. Manhattan
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/3Dmodel/newyork_manhattan.gltf')
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (props.rotate) {
        return (group.current.rotation.y += 0.008)
    }
  });
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <lineSegments geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
        <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
        <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
        <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
        <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
        <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
        <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
        <mesh geometry={nodes.mesh_7.geometry} material={nodes.mesh_7.material} />
        <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} />
        <mesh geometry={nodes.mesh_9.geometry} material={nodes.mesh_9.material} />
        <mesh geometry={nodes.mesh_10.geometry} material={nodes.mesh_10.material} />
        <mesh geometry={nodes.mesh_11.geometry} material={nodes.mesh_11.material} />
        <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material} />
        <mesh geometry={nodes.mesh_13.geometry} material={nodes.mesh_13.material} />
        <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/3Dmodel/newyork_manhattan.gltf')
