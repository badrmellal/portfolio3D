
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import { Scroll, ScrollControls } from '@react-three/drei'
import { HolderText } from './components/HolderText'
import { Suspense, useEffect, useState } from 'react'
import { ScrollManager } from './components/ScrollManager'
import  {Menu}  from './components/Menu'
import {  MotionConfig } from 'framer-motion'
import { framerMotionConfig } from './config'
import { Cursor } from './components/Cursor'
import { LoadingScreen } from './assets/loding-screen'


function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [ started, onStarted ] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);


  return (
    <>
    <LoadingScreen started={started} onStarted={onStarted} />
    <div className='h-screen bg-black text-white'>
    <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
     <Canvas shadows camera={{position: [0, 3, 6], fov: 30}}>
      <ScrollControls pages={6} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Suspense>
                {started &&
                  <Experience section={section} menuOpened={menuOpened} />                
                }
              </Suspense>
            </Scroll>
          <Scroll html>
            {started && 
              <HolderText setSection={setSection}/>            
            }
          </Scroll>
      </ScrollControls>
      </Canvas>
        <Menu section={section} onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
     <Cursor />

    </MotionConfig>
    </div>
    
    </>
  )
}

export default App
