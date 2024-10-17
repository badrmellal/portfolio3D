import { Avatar } from "./Avatar"
import { motion } from "framer-motion-3d";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, useScroll } from "@react-three/drei";
import BubblesBG from "./BubblesBG";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { FinalScene } from "./FinalScene";
import { Projects } from "./Projects";
import WorkExperience from "./HolderText";

import audioFilesMain from "/audioFilesMain.mp3";
import audioFilesTyping from "/audioFilesTyping.mp3";
import audioFilesThunder from "/audioFilesThunder.mp3";
import audioFilesEducation from "/audioFilesEducation.mp3";
import audioFilesWork from "/audioFilesWork.mp3";
import audioFilesContact from "/audioFilesContact.mp3";

export const Experience = (props) => {
    const { menuOpened } = props;
    const {viewport} = useThree();
    const data = useScroll();
    const [section, setSection] = useState(0);
    const isMobile = window.innerWidth < 765;
    const responsiveRatio = viewport.width / 12;
    const officeScaleRatio = Math.max(0.1, Math.min(0.25 * responsiveRatio, 0.25));
    const avatarScaleRatio = Math.max(0.587, Math.min(1.55 * responsiveRatio, 1.55));
    const projectCardsScaleRation = Math.max(0.7, Math.min(0.3 * responsiveRatio), 0.7);
    const experienceCardsScaleRation = Math.max(0.7, Math.min(0.3 * responsiveRatio), 0.7);
    const audioMainRef = useRef(new Audio(audioFilesMain));
    const audioTypingRef = useRef(new Audio(audioFilesTyping));
    const audioEducationRef = useRef(new Audio(audioFilesEducation));
    const audioWorkRef = useRef(new Audio(audioFilesWork));
    const audioThunderRef = useRef(new Audio(audioFilesThunder));
    const audioContactRef = useRef(new Audio(audioFilesContact));


    useEffect(()=>{
      audioMainRef.current.play();
      audioMainRef.current.loop = true;
      return ()=> {
        audioMainRef.current.pause();
        audioMainRef.current.currentTime = 0;
      }
    },[]);

    useEffect(()=> {
      audioTypingRef.current.pause();
      audioEducationRef.current.pause();
      audioContactRef.current.pause();
      audioThunderRef.current.pause();
      audioWorkRef.current.pause();

      if (section === 0) {
        audioTypingRef.current.play();
        audioTypingRef.current.loop = true;
      } else if (section === 1) {
        audioThunderRef.current.play();
        audioThunderRef.current.loop = true;
      } else if (section === 2) {
        audioEducationRef.current.play();
        audioEducationRef.current.loop = true;
      } else if (section === 3) {
        audioWorkRef.current.play();
        audioWorkRef.current.loop = true;
      } else if (section === 4) {
        audioWorkRef.current.play();
        audioWorkRef.current.loop = true;
      } else if (section === 5) {
        audioContactRef.current.play();
      }

      return ()=> {
        audioTypingRef.current.pause();
        audioEducationRef.current.pause();
        audioContactRef.current.pause();
        audioThunderRef.current.pause();
        audioWorkRef.current.pause();
      }

    },[section])

    const cameraPositionX = useMotionValue(0);
    const cameraLookAtX = useMotionValue(0);

    useEffect(()=> {
      animate(cameraPositionX, menuOpened ? -2 : 0, {
        ...framerMotionConfig
      });
      animate(cameraLookAtX, menuOpened? 2 : 0, {
        ...framerMotionConfig
      });
    },[menuOpened])


    const characterContainerAboutRef = useRef();

    const [characterAnimation, setCharacterAnimation] = useState("typing");

    useEffect(() => {
      setCharacterAnimation("fallingIdle");
  
      const timeout = setTimeout(() => {
        if (section === 0) {
          setCharacterAnimation("typing");
        } else if (section === 1) {
          setCharacterAnimation("falling");
        } else if (section === 2) {
            setCharacterAnimation("idle");
        } else if (section === 3) {
          setCharacterAnimation("falling");
        } else if (section === 4) {
          setCharacterAnimation("fallingIdle");
        } else if (section === 5) {
          setCharacterAnimation("pointing");
        }
        else {
          setCharacterAnimation("fallingIdle");
        }
      }, 400);
  
      return () => clearTimeout(timeout); 
    }, [section]);

    const characterGroup = useRef();

    if (section === 0) {
      if (characterContainerAboutRef.current) {
        characterContainerAboutRef.current.getWorldPosition(characterGroup.current.position);
      }
    }

    useFrame((state) => {
      let curSection = Math.floor(data.scroll.current * data.pages);
  
      if (curSection > 5) {
        curSection = 5;
      }
  
      if (curSection !== section) {
        setSection(curSection);
      }
  
      state.camera.position.x = cameraPositionX.get();
      state.camera.lookAt(cameraLookAtX.get(), 0, 0);
    });

    const images = [
      // Front
      { position: [0, 0, 1.5], rotation: [0, 0, 0], url: 'https://i.postimg.cc/t432ync9/Screenshot-2024-05-26-at-09-03-46.png', title: 'NEXTJS TAILWIND FRAMERMOTION REACT REST-API FIREBASE THREEJS AUTH LOTTIE NODEJS VERCEL', imageLink: 'https://kuaisourcing.com' },
      // Left
      { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 3, 0], url: 'https://i.postimg.cc/wjJDdm8L/Screen-Shot-2024-01-25-at-9-52-06-AM.png', title: 'HTML CSS TAILWIND JAVASCRIPT API', imageLink: 'https://badrmellal-weather.netlify.app/'},
      { position: [-2, 0, 2.75], rotation: [0, Math.PI / 3, 0], url: '/badr-mellal.png', title: 'VITE TAILWIND THREEJS REACTTHREEFIBER FRAMERMOTION BLENDER', imageLink: 'https://badr-mellal.com'},
      // Right
      { position: [2.01, 0, 1.5], rotation: [0, -Math.PI / 3, 0], url: 'https://i.postimg.cc/D0mNwgnx/Screen-Shot-2024-01-25-at-9-44-48-AM.png', title: 'FIREBASE FLUTTER TAILWIND ADOBE GIT REST-API', imageLink: 'https://familiaplan.vercel.app/'},
      { position: [2, 0, 2.75], rotation: [0, -Math.PI / 3, 0], url: 'https://i.postimg.cc/zGyBS110/myticket-logo.png', title: 'NEXT TAILWIND TYPESCRIPT JAVA SPRINGBOOT POSTGRESQL AWS S3 CLOUDFRONT', imageLink: 'https://myticket.africa' }
    ];


    return(
        <>
       <directionalLight castShadow position={[10, 10, 10]} intensity={1.5} />

       <motion.group
       ref={characterGroup}
    //    position={[0.85, -0.5, 0.5]}
        rotation={[-Math.PI, 0.888, -Math.PI]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            y: isMobile ? -0.44 : -0.46,
            x: isMobile ? 0.025 : 0.101,
            z: isMobile ? 0.542 : 0.605,
            scaleX: avatarScaleRatio,
            scaleY: avatarScaleRatio,
            scaleZ: avatarScaleRatio,
          },
          1: {
            y: -viewport.height - 0.7,
            x: 0,
            z: 0,
            scaleX: avatarScaleRatio,
            scaleY: avatarScaleRatio,
            scaleZ: avatarScaleRatio,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          },
          2: {
            x: -2.5,
            y: -viewport.height * 2 - 1,
            z: 0,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
          },
          3: {
            y: -viewport.height * 3 - 0.2,
            x: isMobile ? -0.2 : 0.5,
            z: 0,
            scaleX: avatarScaleRatio,
            scaleY: avatarScaleRatio,
            scaleZ: avatarScaleRatio,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0, 
          },
          4: {
            y: -viewport.height * 4 - 0.2,
            x: isMobile ? 0.1 : -1.3,
            z: 0,
            scaleX: avatarScaleRatio,
            scaleY: avatarScaleRatio,
            scaleZ: avatarScaleRatio,
            rotateX: -Math.PI / 2,
            rotateY: Math.PI / 2,
            rotateZ: Math.PI / 2,
          },
          5: {
            y: -viewport.height * 5 - 0.2,
            x: -1.9,
            z: 1.3,
            rotateX: -0.3,
            rotateY: Math.PI / 5,
            rotateZ: 0,
          },
       
        }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>


      <motion.group
        position={[isMobile ? 0 : 0.7 * officeScaleRatio, isMobile ? -viewport.height / 6 : -0.456, 0.5]} 
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        rotation-y={-Math.PI /5}
        animate={{
          y: section === 0 ? -0.456 : 2,
          opacity: section === 0 ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <FinalScene section={section} />  
        <group
          ref={characterContainerAboutRef}
          name="Empty"
          position={[0.88, -0.5, 0.5]}
          rotation={[-Math.PI, 0.788, -Math.PI]}
        ></group>
      <EffectComposer>
          <Bloom 
              luminanceThreshold={0.2} 
              luminanceSmoothing={0.2} 
              intensity={0.1} 
              height={700} 
          />
      </EffectComposer>
      </motion.group>
   
      {section === 1 && 
        <motion.group position={[0, 0, 10]}
          animate={{ 
          y: section === 1 ? -viewport.height + 0.5 : 0,
          z: section === 1 ? 0 : 10,
          }}
          >

          <Float>
            <BubblesBG section={section} />
          </Float>
        </motion.group>
        }

      {section === 3 &&
        <motion.group
        scale={[isMobile ? 0.55 * projectCardsScaleRation :  0.9 * projectCardsScaleRation, isMobile ? 0.55 * projectCardsScaleRation : 0.9 * projectCardsScaleRation, isMobile ? 0.55 * projectCardsScaleRation :  0.9 * projectCardsScaleRation]}
        rotation-y={-Math.PI / 14}
        animate={{
          y: section === 3 ? isMobile ? -viewport.height * 3 - 1.8 : -viewport.height * 3 + 0.1 : 0,
          z: section === 3 ? -3.6 : 10,
          x: section === 3 ? isMobile ? 0.842 : 1.556 : 10,
        }}
      >
          <Projects images={images} />
        </motion.group>
      }

      {section === 4 &&
        <motion.group
          position={[0, 0, 0]}
          scale={[isMobile ? 0.55 * experienceCardsScaleRation : 0.8 * experienceCardsScaleRation, isMobile ? 0.55 * experienceCardsScaleRation : 0.8 * experienceCardsScaleRation, isMobile ? 0.55 * experienceCardsScaleRation : 0.8 * experienceCardsScaleRation]}
          rotation-y={-Math.PI / 4}
          animate={{
            y: section === 4 ? isMobile ? -viewport.height * 4 -3.5 : -viewport.height * 4 - 0.5 : 0,
            z: section === 4 ? -3.6 : 10,
            x: section === 4 ? isMobile ? 0.2 : 1.845 : 10,
          }}
        >
          <WorkExperience />
        </motion.group>
      }
     
        </>
    )
}