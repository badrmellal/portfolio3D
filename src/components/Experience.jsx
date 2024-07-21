import { Avatar } from "./Avatar"
import { motion } from "framer-motion-3d";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import CloudsBG from "./BubblesBG";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import BubblesBG from "./BubblesBG";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useMemo } from "react";
import { framerMotionConfig } from "../config";
import { FinalScene } from "./FinalScene";

export const Experience = (props) => {
    const { section, menuOpened } = props;
    const {viewport} = useThree();

    const cameraPositionX = useMotionValue();
    const cameraLookAtX = useMotionValue();

    useEffect(()=> {
      animate(cameraPositionX, menuOpened ? -2 : 0, {
        ...framerMotionConfig
      });
      animate(cameraLookAtX, menuOpened? 2 : 0, {
        ...framerMotionConfig
      });
    },[menuOpened])

    useFrame((state)=> {
      state.camera.position.x = cameraPositionX.get();
      state.camera.lookAt(cameraLookAtX.get(), 0, 0);
    })

    const scale = useMemo(() => {
      return section === 0 ? [1.486, 1.586, 1.046] : [1, 1, 1];
    }, [section]);
  
    // Define the rotation based on your requirements (example rotation added)
    const rotation = useMemo(() => {
      return section === 0 ? [-Math.PI, 0.788, -Math.PI] : [0, 0, 0];
    }, [section]);

    return(
        <>
       <directionalLight castShadow position={[10, 10, 10]} intensity={1.5} />

      <motion.group
        position={[0.7, -0.456, 0.5]} 
        scale={[0.25, 0.25, 0.25]}
        rotation-y={-Math.PI /5}
        animate={{
          y: section === 0 ? -0.456 : 2,
          opacity: section === 0 ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <FinalScene section={section} />  

        <EffectComposer>
                <Bloom 
                    luminanceThreshold={0.2} 
                    luminanceSmoothing={0.2} 
                    intensity={0.1} 
                    height={700} 
                />
      </EffectComposer>
      </motion.group>
   
        <motion.group position={[0, 0, 10]}
        animate={{ 
        y: section === 1 ? -viewport.height : 0,
        z: section === 1 ? 0 : 10,
        }}
        >
        {section === 1 && 
        <Float>
        <BubblesBG section={section} />
      </Float>
        }
          
      
           <motion.group rotation={rotation} scale={scale} position={[0.88, -0.5, 0.5]} >
            <Avatar animation={section === 1 ? "falling" : "typing"}/>
          </motion.group>  

        </motion.group>

        <motion.group rotation={rotation} scale={scale} position={[0.88, -0.5, 0.5]} >
            <Avatar animation={section === 0 ? "typing" : "falling"}/>
          </motion.group>  
     
        </>
    )
}