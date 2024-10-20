/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 public/modelCharacter.glb 
*/

import React, { useEffect, useRef } from 'react'
import { useGraph } from '@react-three/fiber'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Avatar(props) {
  const group = useRef();
  const { scene } = useGLTF('/modelCharacter.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { animation } = props;

  const { animations: typingAnimation } = useFBX("/animations/Typing.fbx");
  const { animations: fallingAnimation } = useFBX("/animations/Falling.fbx");
  const { animations: kneelingPointing } = useFBX("/animations/Kneeling Pointing.fbx");
  const { animations: idleAnimation } = useFBX("/animations/Idle.fbx");
  const { animations: fallingIdle} = useFBX("/animations/Falling Idle.fbx");


  typingAnimation[0].name = 'typing';
  fallingAnimation[0].name = 'falling';
  kneelingPointing[0].name = 'pointing';
  idleAnimation[0].name = 'idle';
  fallingIdle[0].name = 'fallingIdle';

  const { actions } = useAnimations([typingAnimation[0], fallingAnimation[0], kneelingPointing[0], fallingIdle[0], idleAnimation[0]], group);
  useEffect(()=> {
    actions[animation].reset().play();
   return () => {
     actions[animation].reset().fadeOut(0.5);
   } 
  }, [animation, actions])
  return (
    <group {...props} receiveShadow castShadow ref={group} dispose={null}>
      <group rotation-x={-Math.PI / 2}>
      <primitive object={nodes.Hips} />
      <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
      <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} skeleton={nodes.Wolf3D_Glasses.skeleton} />
      <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
      <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
      <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
      <skinnedMesh frustumCulled={false} geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
      <skinnedMesh frustumCulled={false} name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
      <skinnedMesh frustumCulled={false} name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
      <skinnedMesh frustumCulled={false} name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
      <skinnedMesh frustumCulled={false} name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
   
      </group>
       </group>
  )
}

useGLTF.preload('/modelCharacter.glb');
useFBX.preload('/animations/Typing.fbx');
useFBX.preload('/animations/Falling.fbx');
useFBX.preload('/animations/Kneeling Pointing.fbx');
useFBX.preload('/animations/Idle.fbx');
useFBX.preload('/animations/Falling Idle.fbx');



