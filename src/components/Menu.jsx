import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Menu = ({ onSectionChange, menuOpened, setMenuOpened, section }) => {
  const itemRef = useRef([]);

  const svgVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45 },
  };

  const lineVariants = {
    closed: (index) => ({ d: `M 3 ${index * 8 + 8} L 21 ${index * 8 + 8}` }),
    opened: (index) =>
      index === 1
        ? { opacity: 0 }
        : { d: `M 4 ${index === 0 ? 4 : 20} L 20 ${index === 0 ? 20 : 4}` },
  };

  const menuVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
    exit: { opacity: 0, x: 300 },
  };

  const handleSectionChange = (index) => {
    onSectionChange(index);
    setMenuOpened(false);
  };

  useEffect(() => {
    if (itemRef.current[section]) {
      itemRef.current[section].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [section]);

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-11 right-11 p-4 bg-gradient-to-br from-purple-500 to-indigo-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:from-purple-600 hover:to-indigo-600 transition-transform transform hover:scale-110"
        aria-label="Toggle Menu"
      >
        <motion.svg
          initial="closed"
          animate={menuOpened ? "opened" : "closed"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          variants={svgVariants}
        >
          {[0, 1, 2].map((index) => (
            <motion.path
              key={index}
              fill="transparent"
              strokeWidth="3"
              stroke="white"
              strokeLinecap="round"
              custom={index}
              variants={lineVariants}
            />
          ))}
        </motion.svg>
      </button>
      <AnimatePresence>
        {menuOpened && (
          <motion.div
            className="z-10 fixed top-0 right-0 bottom-0 bg-gray-900 bg-opacity-95 backdrop-blur-lg text-white flex flex-col shadow-2xl rounded-l-2xl overflow-hidden p-4 my-48 md:my-32 pr-10"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div className="flex-1 flex items-start justify-center flex-col gap-8 p-8">
              {[
                "My Office",
                "Skills",
                "Education",
                "Projects",
                "Experience",
                "Contact",
              ].map((label, index) => (
                <MenuButton
                  key={label}
                  label={label}
                  onClick={() => handleSectionChange(index)}
                  isActive={section === index}
                  ref={(el) => (itemRef.current[index] = el)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const MenuButton = React.forwardRef(({ label, onClick, isActive }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`text-lg font-semibold tracking-wide cursor-pointer transition-transform transform duration-150 hover:scale-110 ${
        isActive ? "text-indigo-400" : "text-gray-400 duration-150 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
});
MenuButton.displayName = 'MenuButton';
