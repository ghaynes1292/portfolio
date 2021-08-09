export const staggerVariantsMotion = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const staggerChildrenMotion = {
  animate: {
    opacity: 1,
    translateY: 0
  },
  variants: staggerVariantsMotion
}

export const cardContainerMotion = {
  initial: "hidden",
  animate: "visible",
  variants: {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }
};

export const cardMotion = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.95 },
  variants: { 
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
};
