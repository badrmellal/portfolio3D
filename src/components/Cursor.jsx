import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";


export const Cursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [hoverButton, setHoverButton] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const moveCursor = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.closest("button") ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("a")
      ) {
        setHoverButton(true);
      } else {
        setHoverButton(false);
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        className={`z-50 fixed -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-200 ease-out ${
          hoverButton ? "w-14 h-14 border-2 border-indigo-400" : "w-6 h-6"
        }`}
        ref={cursorRef}
        style={{
          left: springX,
          top: springY,
          borderRadius: "50%",
          backgroundColor: hoverButton ? "transparent" : "#fff",
          mixBlendMode: hoverButton ? "difference" : "normal",
        }}
      ></motion.div>
      <motion.div
        className={`z-50 fixed -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-200 ease-out ${
          hoverButton ? "w-2 h-2 bg-indigo-500" : "w-2 h-2 bg-indigo-500"
        }`}
        ref={cursorDotRef}
        style={{
          left: x,
          top: y,
          borderRadius: "50%",
        }}
      ></motion.div>
    </>
  );
};
