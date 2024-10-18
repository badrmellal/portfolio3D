import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import audioFilesMain from "/audioFilesMain.mp3";

export const LoadingScreen = ({ started, onStarted, loadingProgress }) => {
  const [showEnterButton, setShowEnterButton] = useState(false);
  const mainAudioRef = useRef(new Audio(audioFilesMain));
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Use Framer Motion's useSpring for smooth progress updates
  const displayProgress = useSpring(0, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    let interval;
    if (!isLoaded) {
      interval = setInterval(() => {
        displayProgress.get() < 95 && displayProgress.set(displayProgress.get() + 0.5);
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isLoaded, displayProgress]);

  useEffect(() => {
    if (loadingProgress === 100 && !isLoaded) {
      setIsLoaded(true);
      displayProgress.set(100);
      setTimeout(() => {
        setShowEnterButton(true);
      }, 500);
    }
  }, [loadingProgress, isLoaded, displayProgress]);

  const handleEnterClicked = () => {
    mainAudioRef.current.play().then(() => {
      mainAudioRef.current.loop = true;
      onStarted(true);
    }).catch((err) => {
      console.log("Audio play was stopped because: ", err);
    });
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${
        started ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <motion.div
        className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: showEnterButton ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-full bg-white"
          style={{ width: displayProgress.get() + '%' }}
        />
      </motion.div>

      <motion.div
        className="mt-4 text-white text-2xl font-montserrat"
        initial={{ opacity: 1 }}
        animate={{ opacity: showEnterButton ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayProgress.get().toFixed(0)}%
      </motion.div>

      <AnimatePresence>
        {showEnterButton && (
          <motion.div
            className="text-center text-white mt-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            <button 
              className="text-3xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white border border-white bg-transparent px-8 py-4 rounded-lg shadow-lg hover:bg-white hover:text-black transition-colors duration-300"
              onClick={handleEnterClicked}
            >
              Enter
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
