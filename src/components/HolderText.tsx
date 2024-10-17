import { animate, motion } from "framer-motion";
import Particles from "../assets/particles";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaYoutube, FaGithub } from 'react-icons/fa';
import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import {useOutsideClick} from './outsideClick';
import { Html, Torus, Billboard, Text, RoundedBox, OrbitControls, Stars, Line } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useSpring, animated } from '@react-spring/three'
import * as THREE from 'three'
import { FlipWords } from "../assets/flip-words";
import MagneticEffect from "../assets/magnetic-effect";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const Section = (props: any) => {
const { children, mobileTop  } = props;

    return(
        <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop? "justify-start mt-12 md:mt-1 md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
)
}

const IntroSection = (props) => {
  const { setSection } = props;
  const words = ['Badr', 'Mellal'];

    return (
      <Section mobileTop className="pl-4">
        <h1 className="md:text-6xl text-4xl font-extrabold font-montserrat leading-snug">
          I&apos;m
          <br />
          <div className="italic px-1">
            <FlipWords words={words}/>
          </div>
        </h1>
        <motion.p
          className="md:text-lg text-md font-light font-montserrat text-gray-200 mt-4"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          A software developer from Morocco
          <br />
          Mastering Cutting-Edge Technologies on a daily basis
        </motion.p>
        <motion.button
          className={`bg-indigo-500 text-white py-6 px-12 
            rounded-lg font-bold text-xl mt-16 flex items-center justify-center group/modal-btn relative overflow-hidden whitespace-nowrap md:min-w-[200px] min-w-[130px] md:h-[60px] h-[50px]`}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 2,
            },
          }}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.3,
            },
          }}
          onClick={() => setSection(5)}
        >
          <span className="group-hover/modal-btn:translate-x-full font-montserrat text-base md:text-xl absolute inset-0 flex items-center justify-center transition-transform duration-500">
            Contact Me
          </span>
          <div className="translate-x-full group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition-transform duration-500 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
        </motion.button>
      </Section>
    );
  };

  const skills = [
    { title: "Threejs / 3D Modeling", level: 70, color: "#FF6B6B" },
    { title: "React / Typescript / Nextjs", level: 90, color: "#4ECDC4" },
    { title: "Java / Spring Boot", level: 75, color: "#45B7D1" },
    { title: "Tailwind / Framer Motion", level: 80, color: "#F7B731" },
    { title: "Firebase / AWS", level: 70, color: "#5D5FEF" },
  ];
  
  const languages = [
    { title: "French", level: 100, flags: "🇫🇷" },
    { title: "English", level: 90, flags: "🇬🇧" },
    { title: "Arabic", level: 100, flags: "🇲🇦" }
  ];
  
  const SkillBar = ({ skill, index }) => (
    <motion.div className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: false }}>
      <div className="flex justify-between items-center mb-2">
      <motion.h3
        className="md:text-xl text-lg font-bold text-gray-50 mb-2"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 1, delay: 0.5 + index * 0.2 },
          },
        }}
      >
        {skill.title}
      </motion.h3>
      <motion.span
        className="text-gray-300"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 1, delay: index * 0.2 },
          },
        }}
      >
        {skill.level}%
      </motion.span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
          variants={{
            hidden: { scaleX: 0, originX: 0 },
            visible: {
              scaleX: 1,
              width: `${skill.level}%`,
              transition: { duration: 1, delay: 0.5 + index * 0.2 },
            },
          }}
        />
      </div>
    </motion.div>
  );
  
  const LanguageBubble = ({ language, index }) => (
    <motion.div
      className="bg-white hover:bg-indigo-100 cursor-pointer rounded-full p-4 shadow-lg flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.3 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      whileHover={{ scale: 1.1 }}
      viewport={{ once: true }}
    >
      <span className="text-3xl mb-2">{language.flags}</span>
      <span className="font-semibold text-gray-800">{language.title}</span>
      <span className="text-sm text-gray-600">{language.level}%</span>
    </motion.div>
  );
  
  
  const SkillsSection = () => {
    return (
      <Section className="py-16 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2
              className="md:text-5xl text-3xl font-bold font-montserrat text-center mb-12"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
              }}
            >
              Skills & Languages
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                {skills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} />
                ))}
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex space-x-4">
                  {languages.map((language, index) => (
                    <LanguageBubble key={index} language={language} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    );
  };

  function TooltipCard() {
    return (
      <Section>
        <ul className="max-w-2xl mx-auto w-full md:mt-1 mt-24 gap-4">
          <motion.h1
            className="md:text-5xl text-3xl font-bold font-montserrat mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Education
          </motion.h1>
          {cards.map((card, index) => (
            <div className="relative p-4 flex flex-col md:flex-row md:ml-24 justify-between text-center md:text-left items-center">
              <div className="flex gap-4 flex-col md:flex-row justify-center items-center text-center">
                <div>
                  <img
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-25 w-25 md:h-14 md:w-14 rounded-full object-cover object-top"
                  />
                    <div className="absolute top-2 mt-2 w-60 p-3 z-30 bg-white text-gray-700 text-left shadow-lg rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs font-montserrat italic font-light">{card.content()}</p>
                    </div>
                </div>
                <div>
                  <h3 className="font-medium text-neutral-400 dark:text-neutral-200 text-center md:text-left">
                    {card.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-center md:text-left">
                    {card.description}
                  </p>
                </div>
              </div>
              <a target="_blank" href={card.ctaLink}>
              <div className="px-4 py-2 text-sm rounded-full font-bold bg-gray-200 hover:bg-indigo-500 hover:text-white text-black mt-4 md:mt-0 cursor-pointer relative">
                {card.ctaText}
               
              </div>
              </a>
            </div>
          ))}
        </ul>
      </Section>
    );
  }
  
  
export const CloseIcon = () => {
    return (
      <motion.svg
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.05,
          },
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 text-white"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </motion.svg>
    );
  };
  
  const cards = [
    {
      description: "Bachelor's Degree in Electrical Engineering",
      title: "University of Science, Morocco (2016-2019)",
      src: "/um5-png.png",
      ctaText: "Learn More",
      ctaLink: "http://www.fsr.ac.ma/",
      content: () => {
        return (
          <p>
            My journey began with a Bachelor's in Electrical Engineering, providing a strong foundation in technical principles. 
            Key focus areas included circuit design and power systems. Here, I discovered a passion for creating 
            innovative solutions that bridge the gap between physical devices and digital intelligence.
          </p>
        );
      },
    },
    {
      description: "Master's Degree in Applied Computing",
      title: "University of Science, Morocco (2021-2023)",
      src: "/um5-png.png",
      ctaText: "Learn More",
      ctaLink: "http://www.fsr.ac.ma/",
      content: () => {
        return (
          <p>
          My Master's in Applied Computing was a transformative experience, where I immersed myself in the cutting-edge world 
          of software and data science. I tackled complex projects involving algorithm optimization, 
          and Java-based applications. This advanced study refined my problem-solving skills and positioned me as a tech-savvy 
          innovator ready to tackle real-world challenges with a modern toolkit.
          </p>
        );
      },
    },
    {
      description: "Bachelor of Computer Science(ML & AI)",
      title: "University of London, UK (2024-2027)",
      src: "/University_of_London.svg.png",
      ctaText: "Learn More",
      ctaLink: "https://london.ac.uk",
      content: () => {
        return (
          <p>
          I am currently pursuing a Bachelor's in Computer Science at the University of London, 
          a globally recognized institution for excellence in education. This program offers a unique 
          foundations, with a curriculum that spans cutting-edge fields from development in C++ and C# to Python. 
          My goal is to emerge as a versatile techn leader, capable of driving innovation on a global scale and addressing the complex challenges.

          </p>
        );
      },
    }
  ];
  
  const experiences = [
    {
      role: "Telecommunications Engineer",
      company: "MaM Prod",
      location: "Morocco",
      duration: "Jan 2020 - Dec 2021",
      color: "#4A90E2",
      startDate: new Date("2020-01-01"),
      endDate: new Date("2021-12-31"),
      icon: "antenna",
      scale: 0.8
    },
    {
      role: "Junior Front-end Developer",
      company: "MaM Production",
      location: "Morocco",
      duration: "Jan 2021 - Jul 2024",
      color: "#50E3C2",
      startDate: new Date("2021-01-01"),
      endDate: new Date("2024-07-28"),
      icon: "laptop",
      scale: 0.01
    },
    {
      role: "Content-creator and Full Stack Developer",
      company: "Self-employed",
      location: "Bristol",
      duration: "Jul 2024 - Present",
      color: "#F5A623",
      startDate: new Date("2024-07-30"),
      endDate: new Date(),
      icon: "code",
      scale: 0.04
    }
  ];
  
  function IconGeometry({ icon, scale=0.5 }) {
    const [model, setModel] = useState(null)
    const loader = useMemo(() => new GLTFLoader(), [])
  
    useMemo(() => {
      let modelPath = ''
      switch (icon) {
        case 'antenna':
          modelPath = '/computer_server.glb'
          break
        case 'laptop':
          modelPath = '/laptop_concept.glb'
          break
        case 'code':
          modelPath = '/designer_setup.glb'
          break
        default:
          modelPath = '/designer_setup.glb'
      }
  
      loader.load(modelPath, (gltf) => {
        setModel(gltf.scene)
      })
    }, [icon, loader])
  
    if (!model) {
      return null
    }
  
    return <primitive object={model} scale={scale} />
  }
  
  function ExperienceNode({ experience, position, index }) {
    const [hovered, setHovered] = useState(false)
    const meshRef = useRef()
    const { size } = useThree()
  
    const isSmallScreen = size.width < 768
  
    const { scale, emissiveIntensity } = useSpring({
      scale: hovered ? 1.3 : 1,
      emissiveIntensity: hovered ? 1 : 0.5,
      config: { mass: 1, tension: 170, friction: 26 },
    })
  
    useFrame((state) => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.01
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime + index) * 0.1
      }
    })
  
    return (
      <animated.group position={position} scale={scale}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <IconGeometry icon={experience.icon} scale={experience.scale} />
          <animated.meshStandardMaterial
            color={experience.color}
            emissive={experience.color}
            emissiveIntensity={emissiveIntensity}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <Text
          position={[0, isSmallScreen ? 0.9 : 1.2, 0]}
          fontSize={isSmallScreen ? 0.18 : 0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {experience.role}
        </Text>
        <Text
          position={[0, isSmallScreen ? 0.6 : 0.8, 0]}
          fontSize={isSmallScreen ? 0.14 : 0.18}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {experience.company}
        </Text>
        <Text
          position={[0, isSmallScreen ? 0.3 : 0.4, 0]}
          fontSize={isSmallScreen ? 0.12 : 0.14}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {experience.duration}
        </Text>
        {hovered && (
          <Html position={[0, isSmallScreen ? 1.2 : 1.6, 0]}>
            <div style={{ 
              background: 'rgba(0, 0, 0, 0.8)', 
              color: 'white', 
              padding: '8px 12px', 
              borderRadius: '8px', 
              fontSize: isSmallScreen ? '14px' : '16px',
              whiteSpace: 'nowrap',
              textAlign: 'center',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
            }}>
              {experience.location}
            </div>
          </Html>
        )}
      </animated.group>
    )
  }
  
  function SpiralTimeline() {
    const lineRef = useRef()
    const { size } = useThree()
  
    const isSmallScreen = size.width < 768
  
    const spiralPoints = useMemo(() => {
      const points = []
      const numPoints = 100
      const spiralRadius = isSmallScreen ? 3.5 : 5.5
      const heightScale = isSmallScreen ? 0.4 : 0.6
  
      for (let i = 0; i < numPoints; i++) {
        const t = i / (numPoints - 1)
        const angle = t * Math.PI * 2 * 1.5
        const radius = spiralRadius * (1 - t * 0.5)
        const x = Math.cos(angle) * radius
        const y = t * heightScale * 5 - heightScale * 2.5
        const z = Math.sin(angle) * radius
        points.push(new THREE.Vector3(x, y, z))
      }
  
      return points
    }, [isSmallScreen])
  
    const experiencePositions = useMemo(() => {
      return experiences.map((_, index) => {
        const t = index / (experiences.length - 1)
        const point = spiralPoints[Math.floor(t * (spiralPoints.length - 1))]
        return point
      })
    }, [isSmallScreen, spiralPoints])
  
    useFrame(({ clock }) => {
      if (lineRef.current) {
        lineRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.1
      }
    })
  
    return (
      <group ref={lineRef}>
        <Line
          points={spiralPoints}
          color="#FFFFFF"
          lineWidth={2}
          opacity={0.5}
          transparent
        />
        {experiences.map((exp, index) => (
          <ExperienceNode
            key={index}
            experience={exp}
            position={experiencePositions[index]}
            index={index}
          />
        ))}
      </group>
    )
  }
  
  export default function WorkExperience() {
    const { size } = useThree()
    const isSmallScreen = size.width < 768
  
    return (
      <group position={[0, isSmallScreen ? -1 : -2, 0]} scale={isSmallScreen ? 0.9 : 1}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <SpiralTimeline />
      </group>
    )
  }

  const ContactItem = ({ icon, label, value }) => {
    const getHref = () => {
      if (label === 'EMAIL') {
        return `mailto:${value}`;
      }
      if (label === 'LOCATION') {
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(value)}`;
      }
      return '#';
    };
  
    return (
      <motion.div
        className="flex items-center mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-4">
          {icon}
        </div>
        <div>
          <p className="text-gray-500 text-sm">{label}</p>
          <a
            href={getHref()}
            target={label === 'EMAIL' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="text-gray-800 hover:cursor-pointer hover:text-indigo-600"
          >
            {value}
          </a>
        </div>
      </motion.div>
    );
  };

  const SocialIcon = ({ icon, href }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-indigo-500 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
  const ContactSection = () => {
    return (
      <Section className="bg-transparent py-16">
        <div className="container mx-auto px-4 max-w-md">
          <motion.div
            className="bg-indigo-100 rounded-lg shadow-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl font-montserrat font-bold text-black mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let's Get In Touch
            </motion.h2>
            <motion.p
              className="text-gray-500 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              To build something extraordinary together.
            </motion.p>
            
            <ContactItem 
              icon={<FaEnvelope className="text-white" />}
              label="EMAIL"
              value="contact@badr-mellal.com"
              
            />
            <ContactItem 
              icon={<FaMapMarkerAlt className="text-white" />}
              label="LOCATION"
              value="Bristol, United Kingdom"
            />
            
            <motion.div 
              className="flex space-x-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <MagneticEffect>
                <SocialIcon icon={<FaYoutube />} href="https://www.youtube.com/channel/UCM8Gr2DKgxkUAYPh7YQXn0Q" />                
              </MagneticEffect>
              <MagneticEffect>
                <SocialIcon icon={<FaGithub />} href="https://github.com/badrmellal" />
              </MagneticEffect>
              <MagneticEffect>
                <SocialIcon icon={<FaLinkedinIn />} href="https://www.linkedin.com/in/badr-mellal-207a34201/" />
              </MagneticEffect>
            </motion.div>
          </motion.div>
        </div>
      </Section>
    );
  };  

export const HolderText = (props) => {
  const { setSection } = props;
    return(
        <div className="flex flex-col items-center w-screen">

        <IntroSection setSection ={setSection}/>

        <SkillsSection />
        
        <Particles
          className="absolute inset-0 -z-10"
          quantity={200}
          ease={80}
          color={"#ffffff"}
          refresh
        /> 

        <TooltipCard /> 
           
        <Section>
           <h1 className="font-bold font-montserrat text-2xl md:text-4xl">Projects</h1>
        </Section>
        
        <Section>
            <h1 className="font-bold font-montserrat text-2xl md:text-4xl">Experience</h1>
        </Section>

       <ContactSection />

        </div>
    )
}