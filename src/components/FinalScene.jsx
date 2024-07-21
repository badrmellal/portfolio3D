/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 public/FinalScene.glb 
*/

import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'


export function FinalScene(props) {
  const group = React.useRef()
  const { scene, nodes, materials } = useGLTF('/FinalScene.glb')

  const textureDesk = useTexture('/SceneBaked.jpg');
  textureDesk.flipY = false;
  textureDesk.encoding = THREE.sRGBEncoding;
  const textureForDesk = new THREE.MeshStandardMaterial({
    map: textureDesk,
    roughness: 0.5,
    metalness: 0.2,
  })

  const textureWall = useTexture('/wallFinalBake.jpg');
  textureWall.flipY = false;
  textureWall.encoding = THREE.sRGBEncoding;
  const textureWallMaterial = new THREE.MeshStandardMaterial({
    map: textureWall,
    roughness: 0.5,
    metalness: 0.2,
  })

  const floorTexture = useTexture('/floorFinalBaked.jpg');
  floorTexture.flipY = false;
  floorTexture.encoding = THREE.sRGBEncoding;
  const floorMaterial = new THREE.MeshStandardMaterial({
    map: floorTexture,
    roughness: 0.5,
    metalness: 0.1,
  })

  const chairBaseTexture = useTexture('/chairBase.jpg');
  chairBaseTexture.flipY = false;
  chairBaseTexture.encoding = THREE.sRGBEncoding;
  const chairBaseMaterial = new THREE.MeshStandardMaterial({
    map: chairBaseTexture,
    roughness: 0.5,
    metalness: 0.2,
  })

  const chairBottomTexture = useTexture('/chairBottom.jpg');
  chairBottomTexture.flipY = false;
  chairBottomTexture.encoding = THREE.sRGBEncoding;
  const chairBottomMaterial = new THREE.MeshStandardMaterial({
    map: chairBottomTexture,
    roughness: 0.5,
    metalness: 0.2,
  })

  const chairTopTexture = useTexture('/chairTop.jpg');
  chairTopTexture.flipY = false;
  chairTopTexture.encoding = THREE.sRGBEncoding;
  const chairTopMaterial = new THREE.MeshStandardMaterial({
    map: chairTopTexture,
    roughness: 0.5,
    metalness: 0.2,
  })
 

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
     
        <group name="Escritorio-pc-Teclado-Pantalla-mouse" position={[14.633, -1.27, 6.594]} rotation={[Math.PI / 2, 0, 0]} scale={[2.021, 2.021, 1.701]}>
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_1" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_1'].geometry} material={textureForDesk} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_2" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_2'].geometry} material={materials['1042']} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_3" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_3'].geometry} material={materials['1053']} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_4" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_4'].geometry} material={materials['1045']} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_5" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_5'].geometry} material={materials['1055']} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_6" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_6'].geometry} material={materials['1043']} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_7" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_7'].geometry} material={materials['Material.001']} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_8" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_8'].geometry} material={materials['Material.008']} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_9" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_9'].geometry} material={materials['Material.004']} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_10" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_10'].geometry} material={materials['Material.005']} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_11" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_11'].geometry} material={materials['Material.006']} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_12" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_12'].geometry} material={materials['Material.007']} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_13" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_13'].geometry} material={textureForDesk} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_14" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_14'].geometry} material={materials['Material.015']} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_15" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_15'].geometry} material={textureForDesk} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_16" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_16'].geometry} material={textureForDesk} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_17" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_17'].geometry} material={textureForDesk} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_18" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_18'].geometry} material={textureForDesk} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_19" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_19'].geometry} material={materials['Material.025']} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_20" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_20'].geometry} material={materials.Material} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_21" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_21'].geometry} material={materials['Material.027']} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_22" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_22'].geometry} material={materials['Material.028']} />
          <mesh name="Escritorio-pc-Teclado-Pantalla-mouse_23" geometry={nodes['Escritorio-pc-Teclado-Pantalla-mouse_23'].geometry} material={materials['Material.029']} />
        </group>
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={floorMaterial} position={[6.133, 0, 0]} scale={61.408} /> 
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={textureWallMaterial} position={[6.281, 8.42, -8.372]} scale={[1.871, 3.289, 1.871]} />
       
        <mesh name="Cube006" geometry={nodes.Cube006.geometry} material={materials.Aluminium} position={[0.184, 4.307, 0.455]} rotation={[0, 1.549, 0]} scale={0.3} />
        <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={materials.Aluminium} position={[0.184, 2.582, 0.455]} rotation={[-Math.PI, 0.022, Math.PI / 2]} scale={0.3} />
        <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials.Aluminium} position={[1.597, 2.486, 0.456]} rotation={[Math.PI / 2, 0, -1.549]} scale={[0.028, 0.041, 0.028]} />
        <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials.Aluminium} position={[1.629, 2.516, -0.959]} rotation={[Math.PI / 2, 0, -1.549]} scale={[0.028, 0.041, 0.028]} />
        <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={materials.Aluminium} position={[-1.222, 2.486, 0.394]} rotation={[Math.PI / 2, 0, -1.549]} scale={[0.028, 0.041, 0.028]} />
        <mesh name="Cylinder003" geometry={nodes.Cylinder003.geometry} material={materials.Aluminium} position={[-1.191, 2.516, -1.021]} rotation={[Math.PI / 2, 0, -1.549]} scale={[0.028, 0.041, 0.028]} />
        <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials.DarkMetal} position={[0.185, 2.638, 0.425]} rotation={[0, 1.549, 0]} scale={0.3} />
        <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.DarkMetal} position={[0.216, 2.663, -0.991]} rotation={[0, 1.549, 0]} scale={0.3} />
        <mesh name="Cylinder004" geometry={nodes.Cylinder004.geometry} material={materials.Aluminium} position={[1.594, 2.487, 0.456]} rotation={[Math.PI / 2, 0, -1.549]} scale={0.019} />
        <mesh name="Cylinder005" geometry={nodes.Cylinder005.geometry} material={materials.Aluminium} position={[-1.162, 2.487, 0.396]} rotation={[Math.PI / 2, 0, -1.549]} scale={0.019} />
        <mesh name="Cylinder006" geometry={nodes.Cylinder006.geometry} material={materials.Aluminium} position={[1.625, 2.516, -0.959]} rotation={[Math.PI / 2, 0, -1.549]} scale={0.019} />
        <mesh name="Cylinder007" geometry={nodes.Cylinder007.geometry} material={materials.Aluminium} position={[-1.131, 2.516, -1.02]} rotation={[Math.PI / 2, 0, -1.549]} scale={0.019} />
        <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials.DarkMetal} position={[0.2, 2.305, -0.265]} rotation={[0, 1.549, 0.014]} scale={0.3} />
        <mesh name="Cylinder008" geometry={nodes.Cylinder008.geometry} material={materials.DarkMetal} position={[0.73, 2.264, -0.979]} rotation={[3.142, -1.549, 0]} scale={[0.019, 0.01, 0.019]} />
        <mesh name="Cylinder009" geometry={nodes.Cylinder009.geometry} material={materials.DarkMetal} position={[-0.303, 2.264, -1.001]} rotation={[3.142, -1.549, 0]} scale={[0.019, 0.01, 0.019]} />
        <mesh name="Cylinder010" geometry={nodes.Cylinder010.geometry} material={materials.DarkMetal} position={[-0.335, 2.255, 0.414]} rotation={[Math.PI, -1.549, -0.006]} scale={[0.019, 0.01, 0.019]} />
        <mesh name="Cylinder011" geometry={nodes.Cylinder011.geometry} material={materials.DarkMetal} position={[0.699, 2.255, 0.436]} rotation={[Math.PI, -1.549, -0.006]} scale={[0.019, 0.01, 0.019]} />
        <mesh name="Cube010" geometry={nodes.Cube010.geometry} material={materials.DarkMetal} position={[0.18, 2.252, 0.632]} rotation={[0, 1.549, 0]} scale={0.3} />
        <mesh name="Cube011" geometry={nodes.Cube011.geometry} material={materials.DarkMetal} position={[1.586, 2.231, 0.543]} rotation={[0, 1.549, 0]} scale={0.3} />
        <mesh name="Cube012" geometry={nodes.Cube012.geometry} material={materials.DarkMetal} position={[-1.203, 2.231, 0.482]} rotation={[Math.PI, -1.549, 0]} scale={0.3} />
        <mesh name="Cylinder012" geometry={nodes.Cylinder012.geometry} material={materials.DarkMetal} position={[0.184, 4.382, 0.455]} rotation={[0, 1.549, 0]} scale={0.3} />
        <mesh name="Cylinder013" geometry={nodes.Cylinder013.geometry} material={materials.DarkMetal} position={[0.184, 4.382, 0.455]} rotation={[0, 1.549, 0]} scale={0.3} />
        <mesh name="Cylinder014" geometry={nodes.Cylinder014.geometry} material={materials.DarkMetal} position={[0.184, 4.382, 0.455]} rotation={[0, 1.549, 0]} scale={0.3} />
        <mesh name="Cylinder015" geometry={nodes.Cylinder015.geometry} material={materials.DarkMetal} position={[0.184, 4.382, 0.455]} rotation={[0, 1.549, 0]} scale={0.3} />
        <mesh name="Cylinder016" geometry={nodes.Cylinder016.geometry} material={materials.DarkMetal} position={[0.184, 4.382, 0.455]} rotation={[0, 1.549, 0]} scale={0.3} />
        <mesh name="Cylinder017" geometry={nodes.Cylinder017.geometry} material={materials.DarkMetal} position={[0.184, 4.382, 0.455]} rotation={[0, 1.549, 0]} scale={0.3} />
        <mesh name="Cylinder018" geometry={nodes.Cylinder018.geometry} material={materials.DarkMetal} position={[0.184, 4.382, 0.455]} rotation={[0, 1.549, 0]} scale={0.3} />
        <mesh name="Cylinder019" geometry={nodes.Cylinder019.geometry} material={materials.DarkMetal} position={[0.184, 4.382, 0.455]} rotation={[0, 1.549, 0]} scale={0.3} />
        <mesh name="Cube013" geometry={nodes.Cube013.geometry} material={materials.DarkMetal} position={[0.198, 2.301, -0.235]} rotation={[0, 1.549, 0.007]} scale={0.3} />
        <mesh name="Cube014" geometry={nodes.Cube014.geometry} material={materials.DarkMetal} position={[0.208, 2.301, -0.234]} rotation={[0, 1.549, 0.007]} scale={0.3} />
        <mesh name="Cylinder020" geometry={nodes.Cylinder020.geometry} material={nodes.Cylinder020.material} position={[0.766, 2.225, -0.798]} rotation={[3.142, -1.549, 0]} scale={[0.019, 0.006, 0.019]} />
        <mesh name="Cylinder021" geometry={nodes.Cylinder021.geometry} material={nodes.Cylinder021.material} position={[0.743, 2.225, 0.26]} rotation={[3.142, -1.549, 0]} scale={[0.019, 0.006, 0.019]} />
        <mesh name="Cylinder022" geometry={nodes.Cylinder022.geometry} material={nodes.Cylinder022.material} position={[-0.351, 2.225, -0.822]} rotation={[3.142, -1.549, 0]} scale={[0.019, 0.006, 0.019]} />
        <mesh name="Cylinder023" geometry={nodes.Cylinder023.geometry} material={nodes.Cylinder023.material} position={[-0.374, 2.225, 0.235]} rotation={[3.142, -1.549, 0]} scale={[0.019, 0.006, 0.019]} />
        <mesh name="Cube015" geometry={nodes.Cube015.geometry} material={materials.DarkMetal} position={[0.184, 4.382, 0.455]} rotation={[0, 1.549, 0]} scale={[0.3, 0.3, 0.296]} />
        <mesh name="Cube017" geometry={nodes.Cube017.geometry} material={materials.DarkMetal} position={[0.2, 1.944, -0.295]} rotation={[0, 1.549, 0.313]} scale={0.376} />
        <mesh name="Cylinder024" geometry={nodes.Cylinder024.geometry} material={materials.DarkMetal} position={[0.179, 1.201, 0.665]} rotation={[0, 1.549, 0]} scale={[0.054, 0.186, 0.054]} />
        <mesh name="Cylinder025" geometry={nodes.Cylinder025.geometry} material={materials.Aluminium} position={[0.179, 0.655, 0.665]} rotation={[0, 1.549, 0]} scale={[0.097, 0.411, 0.097]} />
        <mesh name="Cylinder026" geometry={nodes.Cylinder026.geometry} material={chairBaseMaterial} position={[0.179, 0.49, 0.665]} rotation={[0, 1.549, 0]} scale={[0.22, 0.11, 0.22]} />
        <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={chairBottomMaterial} position={[0.199, 2.602, -0.27]} rotation={[0, 1.549, 0.003]} scale={1.44} />
        <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials.Mesh} position={[0.16, 4.705, 1.535]} rotation={[0, 1.549, -1.571]} scale={1.434} />
        <mesh name="Cylinder027" geometry={nodes.Cylinder027.geometry} material={materials.Kevlar} position={[0.208, 1.482, -0.449]} rotation={[0, 1.549, 0.46]} scale={0.207} />
        <mesh name="Cylinder028" geometry={nodes.Cylinder028.geometry} material={nodes.Cylinder028.material} position={[1.48, 0.152, -1.167]} rotation={[Math.PI / 2, 0, -1.549]} scale={[0.022, 0.047, 0.022]} />
        <mesh name="Circle001" geometry={nodes.Circle001.geometry} material={materials.Kevlar} position={[1.513, 0.152, -1.166]} rotation={[Math.PI / 2, 0, -1.549]} scale={0.15} />
        <mesh name="Circle002" geometry={nodes.Circle002.geometry} material={materials.Kevlar} position={[1.447, 0.152, -1.167]} rotation={[-Math.PI / 2, 0, 1.549]} scale={0.15} />
        <mesh name="Circle" geometry={nodes.Circle.geometry} material={materials.DarkMetal} position={[1.48, 0.152, -1.167]} rotation={[Math.PI / 2, 0, -1.549]} scale={0.15} />
        <mesh name="Cylinder029" geometry={nodes.Cylinder029.geometry} material={nodes.Cylinder029.material} position={[-1.039, 0.152, -1.222]} rotation={[Math.PI / 2, 0, -1.549]} scale={[0.022, 0.047, 0.022]} />
        <mesh name="Circle003" geometry={nodes.Circle003.geometry} material={materials.Kevlar} position={[-1.007, 0.152, -1.222]} rotation={[Math.PI / 2, 0, -1.549]} scale={0.15} />
        <mesh name="Circle004" geometry={nodes.Circle004.geometry} material={materials.Kevlar} position={[-1.072, 0.152, -1.223]} rotation={[-Math.PI / 2, 0, 1.549]} scale={0.15} />
        <mesh name="Circle005" geometry={nodes.Circle005.geometry} material={materials.DarkMetal} position={[-1.039, 0.152, -1.222]} rotation={[Math.PI / 2, 0, -1.549]} scale={0.15} />
        <mesh name="Cylinder030" geometry={nodes.Cylinder030.geometry} material={nodes.Cylinder030.material} position={[-1.991, 0.152, 1.305]} rotation={[Math.PI / 2, 0, 2.989]} scale={[0.022, 0.047, 0.022]} />
        <mesh name="Circle006" geometry={nodes.Circle006.geometry} material={materials.Kevlar} position={[-1.996, 0.152, 1.273]} rotation={[Math.PI / 2, 0, 2.989]} scale={0.15} />
        <mesh name="Circle007" geometry={nodes.Circle007.geometry} material={materials.Kevlar} position={[-1.986, 0.152, 1.337]} rotation={[-Math.PI / 2, 0, -2.989]} scale={0.15} />
        <mesh name="Circle008" geometry={nodes.Circle008.geometry} material={materials.DarkMetal} position={[-1.991, 0.152, 1.305]} rotation={[Math.PI / 2, 0, 2.989]} scale={0.15} />
        <mesh name="Cylinder031" geometry={nodes.Cylinder031.geometry} material={nodes.Cylinder031.material} position={[2.275, 0.152, 1.465]} rotation={[Math.PI / 2, 0, 1.029]} scale={[0.022, 0.047, 0.022]} />
        <mesh name="Circle009" geometry={nodes.Circle009.geometry} material={materials.Kevlar} position={[2.247, 0.152, 1.482]} rotation={[Math.PI / 2, 0, 1.029]} scale={0.15} />
        <mesh name="Circle010" geometry={nodes.Circle010.geometry} material={materials.Kevlar} position={[2.303, 0.152, 1.448]} rotation={[-Math.PI / 2, 0, -1.029]} scale={0.15} />
        <mesh name="Circle011" geometry={nodes.Circle011.geometry} material={materials.DarkMetal} position={[2.275, 0.152, 1.465]} rotation={[Math.PI / 2, 0, 1.029]} scale={0.15} />
        <mesh name="Cylinder032" geometry={nodes.Cylinder032.geometry} material={nodes.Cylinder032.material} position={[0.186, 0.152, 2.918]} rotation={[Math.PI / 2, 0, 1.029]} scale={[0.022, 0.047, 0.022]} />
        <mesh name="Circle012" geometry={nodes.Circle012.geometry} material={materials.Kevlar} position={[0.158, 0.152, 2.935]} rotation={[Math.PI / 2, 0, 1.029]} scale={0.15} />
        <mesh name="Circle013" geometry={nodes.Circle013.geometry} material={materials.Kevlar} position={[0.214, 0.152, 2.902]} rotation={[-Math.PI / 2, 0, -1.029]} scale={0.15} />
        <mesh name="Circle014" geometry={nodes.Circle014.geometry} material={materials.DarkMetal} position={[0.186, 0.152, 2.918]} rotation={[Math.PI / 2, 0, 1.029]} scale={0.15} />
        <mesh name="Circle015" geometry={nodes.Circle015.geometry} material={materials.Kevlar} position={[1.702, 4.454, -0.275]} rotation={[-1.501, -0.002, 1.549]} scale={0.03} />
        <mesh name="Circle016" geometry={nodes.Circle016.geometry} material={materials.Kevlar} position={[-1.3, 4.454, -0.342]} rotation={[1.641, 0.002, -1.549]} scale={0.03} />
        <mesh name="Cube016" geometry={nodes.Cube016.geometry} material={materials.Kevlar} position={[-1.403, 4.336, 0.226]} rotation={[0, 1.549, 0.041]} scale={[0.06, 0.025, 0.085]} />
        <mesh name="Cube022" geometry={nodes.Cube022.geometry} material={materials.Kevlar} position={[1.774, 4.337, 0.296]} rotation={[0, 1.549, 0.041]} scale={[0.06, 0.025, 0.085]} />
        <mesh name="Circle017" geometry={nodes.Circle017.geometry} material={materials.Kevlar} position={[0.798, 2.145, -0.707]} rotation={[Math.PI / 2, 0, -1.549]} scale={0.06} />
        <mesh name="Circle018" geometry={nodes.Circle018.geometry} material={materials.Kevlar} position={[-0.377, 2.145, -0.733]} rotation={[-Math.PI / 2, 0, 1.549]} scale={0.06} />
        <mesh name="Cylinder033" geometry={nodes.Cylinder033.geometry} material={materials.Kevlar} position={[1.377, 2.001, -0.449]} rotation={[2.792, 0.021, -1.563]} scale={0.3} />
        <mesh name="Cylinder034" geometry={nodes.Cylinder034.geometry} material={materials.Kevlar} position={[-0.992, 2.001, -0.501]} rotation={[2.792, 0.021, 1.578]} scale={0.3} />
        <mesh name="Cube023" geometry={nodes.Cube023.geometry} material={materials.Leather} position={[0.158, 4.09, 1.619]} rotation={[0, 1.549, 0.075]} scale={[0.069, 0.785, 0.785]} />
        <mesh name="Cube024" geometry={nodes.Cube024.geometry} material={materials.Leather} position={[0.16, 3.851, 1.521]} rotation={[0, 1.549, 0.146]} />
        <mesh name="Cube025" geometry={nodes.Cube025.geometry} material={materials.Leather} position={[0.16, 4.229, 1.544]} rotation={[0, 1.549, 0.351]} />
        <mesh name="Circle019" geometry={nodes.Circle019.geometry} material={materials.Kevlar} position={[1.657, 4.27, 1.414]} rotation={[Math.PI / 2, 0, -1.549]} scale={0.206} />
        <mesh name="Circle020" geometry={nodes.Circle020.geometry} material={materials.Kevlar} position={[1.658, 3.85, 1.394]} rotation={[Math.PI / 2, 0, -1.549]} scale={0.206} />
        <mesh name="Circle021" geometry={nodes.Circle021.geometry} material={materials.Kevlar} position={[-1.332, 3.85, 1.33]} rotation={[-1.484, -0.002, 1.549]} scale={0.206} />
        <mesh name="Circle022" geometry={nodes.Circle022.geometry} material={materials.Kevlar} position={[-1.332, 4.271, 1.346]} rotation={[-1.484, -0.002, 1.549]} scale={0.206} />
        <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials.Kevlar} position={[-1.611, 4.357, 0.22]} rotation={[0, 1.549, 0.043]} scale={0.3} />
        <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials.Kevlar} position={[1.988, 4.382, 0.301]} rotation={[0, 1.549, 0.043]} scale={0.3} />
        <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials.Kevlar} position={[1.988, 4.357, 0.3]} rotation={[0, 1.549, 0.043]} scale={0.3} />
        <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials.Kevlar} position={[1.988, 4.237, 0.295]} rotation={[0, 1.549, 0.043]} scale={[0.217, 0.3, 0.223]} />
        <mesh name="Cube018" geometry={nodes.Cube018.geometry} material={materials.Kevlar} position={[-1.611, 4.237, 0.215]} rotation={[0, 1.549, 0.043]} scale={[0.217, 0.3, 0.223]} />
        <mesh name="Cube000" geometry={nodes.Cube000.geometry} material={materials.Kevlar} position={[-1.611, 4.382, 0.222]} rotation={[0, 1.549, 0.043]} scale={0.3} />
        <mesh name="Cube019" geometry={nodes.Cube019.geometry} material={materials.Aluminium} position={[1.983, 2.511, 0.516]} rotation={[0, 1.549, -0.106]} scale={[0.217, 0.3, 0.223]} />
        <mesh name="Cube020" geometry={nodes.Cube020.geometry} material={materials.Aluminium} position={[-1.616, 2.511, 0.436]} rotation={[0, 1.549, -0.106]} scale={[0.217, 0.3, 0.223]} />
        <mesh name="Cube021" geometry={nodes.Cube021.geometry} material={materials.Kevlar} position={[1.983, 2.511, 0.521]} rotation={[0, 1.549, -0.106]} scale={[0.217, 0.3, 0.223]} />
        <mesh name="Cube026" geometry={nodes.Cube026.geometry} material={materials.Kevlar} position={[-1.618, 2.512, 0.505]} rotation={[-Math.PI, -1.549, 3.036]} scale={[0.217, 0.3, 0.223]} />
      </group>
    </group>
  )
}

useGLTF.preload('/FinalScene.glb')
