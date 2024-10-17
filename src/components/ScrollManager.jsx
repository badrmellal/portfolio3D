import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const ScrollManager = (props) => {
  const { section, onSectionChange } = props;

  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  useEffect(() => {
    // To scroll to the desired section when the section state changes
    const scrollToSection = () => {
      const targetScrollTop = section * data.el.clientHeight;
      isAnimating.current = true;

      gsap.to(data.el, {
        duration: 1,
        scrollTop: targetScrollTop,
        onComplete: () => {
          isAnimating.current = false;
        },
      });
    };

    scrollToSection();
  }, [section]);


  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    // we first calculate the current section based on the scroll position
    const curSection = Math.floor(data.scroll.current * data.pages);

    // we ensure that section updates only when it changes
    if (curSection !== section) {
      onSectionChange(curSection);
    }

    lastScroll.current = data.scroll.current;
  });
 
  return null;
};