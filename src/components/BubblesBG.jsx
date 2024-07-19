import { MathUtils } from 'three'
import { createContext, useContext, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Instances, Instance, Environment, Clouds, Cloud, CameraShake } from '@react-three/drei'
import { EffectComposer, N8AO, TiltShift2 } from '@react-three/postprocessing'
import { motion } from "framer-motion-3d";
import { BallCollider, CuboidCollider, Physics, RigidBody } from '@react-three/rapier'
import * as THREE from "three"
import { random } from "maath"

const context = createContext()

const particles = Array.from({ length: 100 }, () => ({
  factor: MathUtils.randInt(20, 100),
  speed: MathUtils.randFloat(0.01, 0.75),
  xFactor: MathUtils.randFloatSpread(40),
  yFactor: MathUtils.randFloatSpread(10),
  zFactor: MathUtils.randFloatSpread(10)
}))

export default function BubblesBG(props) {
  const { section } = props;

  return (
<motion.group shadows dpr={[1, 2]} gl={{ antialias: false}} camera={{ fov: 50, position: [0, 0, 20] }} animate={{scale: section === 1 ? 0.08 : 0}} >
    <color attach="background" args={['#f0f0f0']} />
      <fog attach="fog" args={['purple', 20, -5]} />
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <Clouds limit={400} material={THREE.MeshLambertMaterial}>
        <Physics gravity={[0, 0, 0]}>
          <Puffycloud seed={10} position={[50, 0, 0]} />
          <Puffycloud seed={20} position={[0, 50, 0]} />
          <Puffycloud seed={30} position={[50, 0, 50]} />
          <Puffycloud seed={40} position={[0, 0, -50]} />
          <CuboidCollider position={[0, -15, 0]} args={[400, 10, 400]} />
        </Physics>
      </Clouds>
      <EffectComposer disableNormalPass>
        <N8AO aoRadius={6} intensity={2} color="purple" />
        <TiltShift2 blur={0.1} />
      </EffectComposer>
      <Environment preset="city" />
</motion.group>
  )
}

function Bubbles() {
  const ref = useRef()
  useFrame((state, delta) => void (ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, (-state.mouse.x * Math.PI) / 6, 2.75, delta)))
  return (
    <Instances limit={particles.length} ref={ref} castShadow receiveShadow position={[0, 2.5, 0]}>
      <sphereGeometry args={[0.45, 64, 64]} />
      <meshStandardMaterial roughness={1} color="#f0f0f0" />
      {particles.map((data, i) => (
        <Bubble key={i} {...data} />
      ))}
    </Instances>
  )
}

function Bubble({ factor, speed, xFactor, yFactor, zFactor }) {
  const ref = useRef()
  useFrame((state) => {
    const t = factor + state.clock.elapsedTime * (speed / 2)
    ref.current.scale.setScalar(Math.max(1.5, Math.cos(t) * 5))
    ref.current.position.set(
      Math.cos(t) + Math.sin(t * 1) / 10 + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
      Math.sin(t) + Math.cos(t * 2) / 10 + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
      Math.sin(t) + Math.cos(t * 2) / 10 + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 4
    )
  })
  return <Instance ref={ref} />
}

function Puffycloud({ seed, vec = new THREE.Vector3(), ...props }) {
  const api = useRef()
  const light = useRef()
  const rig = useContext(context)
  const [flash] = useState(() => new random.FlashGen({ count: 10, minDuration: 40, maxDuration: 200 }))
  const contact = (payload) => payload.other.rigidBodyObject.userData?.cloud && payload.totalForceMagnitude / 1000 > 100 && flash.burst()
  useFrame((state, delta) => {
    const impulse = flash.update(state.clock.elapsedTime, delta)
    light.current.intensity = impulse * 15000
    if (impulse === 1) rig?.current?.setIntensity(1)
    api.current?.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(10))
  })
  return (
    <RigidBody ref={api} userData={{ cloud: true }} onContactForce={contact} linearDamping={4} angularDamping={1} friction={0.1} {...props} colliders={false}>
      <BallCollider args={[4]} />
      <Cloud seed={seed} fade={30} speed={0.1} growth={4} segments={40} volume={6} opacity={0.6} bounds={[4, 3, 1]} />
      <Cloud seed={seed + 1} fade={30} position={[0, 1, 0]} speed={0.5} growth={4} volume={10} opacity={1} bounds={[6, 2, 1]} />
      <pointLight position={[0, 0, 0.5]} ref={light} color="blue" />
    </RigidBody>
  )
}
