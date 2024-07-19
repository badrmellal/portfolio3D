import { Avatar } from "./Avatar"
import { DeskSetup } from "./FullDeskSetup"
import { motion } from "framer-motion-3d";
import { OfficeDeskFinal } from "./OfficeDeskFinal";
import { Bloom, EffectComposer, Glitch } from "@react-three/postprocessing";
import CloudsBG from "./BubblesBG";
import { Canvas, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import BubblesBG from "./BubblesBG";


export const Experience = (props) => {
    const { section, menuOpened } = props;
    const {viewport} = useThree();
    return(
        <>
       <directionalLight castShadow position={[10, 10, 10]} intensity={3.5} />

      <motion.group
        position={[-0.8, -1.8, -2.5]} 
        scale={[0.25, 0.25, 0.25]}
        rotation-y={-Math.PI /6}
        animate={{
          y: section === 0 ? -1.8 : 2,
          opacity: section === 0 ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <OfficeDeskFinal section={section} />
        <EffectComposer>
                <Bloom 
                    luminanceThreshold={0.2} 
                    luminanceSmoothing={0.2} 
                    intensity={0.1} 
                    height={700} 
                />
      </EffectComposer>
      </motion.group>
   
      {section === 1 && (
        <motion.group position={[0, 0, 10]}
        animate={{ 
        y: section === 1 ? -viewport.height : 0,
        z: section === 1 ? 0 : 10,
        }}
        >
          <BubblesBG section={section} />
        </motion.group>
      )}
        </>
    )
}