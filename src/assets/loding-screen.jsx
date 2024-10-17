import { useProgress } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import audioFilesMain from "/audioFilesMain.mp3";

export const LoadingScreen = ({ started, onStarted }) => {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);
  const [showEnterButton, setShowEnterButton] = useState(false);
  const mainAudioRef = useRef(new Audio(audioFilesMain));

  useEffect(() => {
    setDisplayProgress(progress);

    if (progress === 100) {
     setTimeout(()=>{
      setShowEnterButton(true);
     }, 500) 
    }
  }, [progress]);

  const handleEnterClicked = () =>{
    mainAudioRef.current.play().then(()=>{
      mainAudioRef.current.loop = true;
      onStarted(true);
    }).catch((err)=> {
      console.log("Audio play was stoped because: ", err);
    })
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${
        started ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {!showEnterButton && (
        <motion.svg
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96"
          viewBox="0 0 100 100"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="20"
            fill="white"
            fontFamily="Montserrat"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            {displayProgress.toFixed(0)}%
          </motion.text>
        </motion.svg>
      )}

      <AnimatePresence>
        {showEnterButton && (
          <motion.div
            className="text-center text-white"
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
              onClick={handleEnterClicked}>
              Enter
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
