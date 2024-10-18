import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import { Scroll, ScrollControls, useFBX, useProgress } from '@react-three/drei'
import { HolderText } from './components/HolderText'
import { Suspense, useEffect, useState } from 'react'
import { ScrollManager } from './components/ScrollManager'
import { Menu } from './components/Menu'
import { MotionConfig } from 'framer-motion'
import { framerMotionConfig } from './config'
import { Cursor } from './components/Cursor'
import { LoadingScreen } from './assets/loading-screen'
import { useGLTF } from '@react-three/drei'

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [started, setStarted] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const { progress } = useProgress();

  useEffect(() => {
    let totalProgress = 0;
    let loadedItems = 0;
    const totalItems = 7; // 1 for scene + 5 animations + 1 for other assets

    // Load the main scene
    useGLTF.preload('/FinalScene.glb', (gltf) => {
      loadedItems++;
      updateProgress();
    });

    // Load animations
    const animations = [
      '/animations/Typing.fbx',
      '/animations/Falling.fbx',
      '/animations/Kneeling Pointing.fbx',
      '/animations/Idle.fbx',
      '/animations/Falling Idle.fbx'
    ];

    animations.forEach(animation => {
      useFBX.preload(animation, () => {
        loadedItems++;
        updateProgress();
      });
    });

    // Update progress
    function updateProgress() {
      totalProgress = (loadedItems / totalItems) * 100;
      setLoadingProgress(totalProgress);
    }

    // Use the progress from useProgress for other assets
    setLoadingProgress(prev => Math.max(prev, progress));

  }, [progress]);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <LoadingScreen started={started} onStarted={setStarted} loadingProgress={loadingProgress} />
      <div className='h-screen bg-black text-white'>
        <MotionConfig transition={{ ...framerMotionConfig }}>
          <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 3, 6], fov: 30 }}>
            <ScrollControls pages={6} damping={0.1}>
              <ScrollManager section={section} onSectionChange={setSection} />
              <Scroll>
                <Suspense>
                  {started && (
                    <Experience section={section} menuOpened={menuOpened} />
                  )}
                </Suspense>
              </Scroll>
              <Scroll html>
                {started && (
                  <HolderText setSection={setSection} />
                )}
              </Scroll>
            </ScrollControls>
          </Canvas>
          <Menu
            section={section}
            onSectionChange={setSection}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
          />
          <Cursor />
        </MotionConfig>
      </div>
    </>
  )
}

export default App
