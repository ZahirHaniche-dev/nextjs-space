export const fadeIn = (initScaleValue?: number, endScaleValue?: number) => ({
    hidden: { opacity: 0, scale: initScaleValue },
    visible: { opacity: 1, scale: endScaleValue, transition: { duration: 0.6 } },
  });
  
  export const slideIn = (
    direction: "left" | "right",
    delayDuration?: number,
    transitionDuration?: number,
    xValue: number = 100,
  ) => ({
    hidden: { x: direction === "left" ? -xValue : xValue, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: transitionDuration, delay: delayDuration },
    },
  });
  
  // Explore Button Variants
  export const containerVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };
  
  export const rocketVariants = {
    rest: { y: 0 },
    hover: { y: -10 },
    tap: { y: -100, transition: { duration: 0.5 } },
  };
  
  export const glowVariants = {
    rest: { opacity: 0, scale: 0 },
    hover: {
      opacity: 0.5,
      scale: 1.5,
      y: 10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: { opacity: 1, scale: 2, y: 100, transition: { duration: 0.5 } },
  };
  
  export const particleVariants = {
    rest: { opacity: 0, y: 0 },
    hover: {
      opacity: 1,
      y: [10, -10],
      transition: {
        yoyo: Infinity,
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    tap: { opacity: 0, y: 100, transition: { duration: 0.5 } },
  };