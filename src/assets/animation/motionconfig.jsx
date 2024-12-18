export const button = {
    whileHover: { scale: 1.2 },
    whileTap: { scale: 0.9 },
    transition:{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17
    },
};

export const cardAnimation = {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
    },
};

export const navbarAnimation = {
    initial: { opacity: 0, y: -50 },  // Start off above the screen (y = -50)
    whileInView: { opacity: 1, y: 0 }, // Animate to normal position (y = 0)
    viewport: { once: true }, // Ensure animation happens once when it comes into view
    transition: {
      duration: 0.8,  // Duration of the animation
      delay: 0.2,  // Delay before animation starts
      ease: [0, 0.71, 0.2, 1.01],  // Custom easing function
    },
};

export const LRAnimation = {
    initial: { opacity: 0, x: -100 },  // Start off-screen to the left (x = -100)
    whileInView: { opacity: 1, x: 0 },  // Animate to normal position (x = 0)
    viewport: { once: true },  // Ensure animation happens once when it comes into view
    transition: {
      duration: 0.8,  // Duration of the animation
      delay: 0.2,  // Delay before animation starts
      ease: [0, 0.71, 0.2, 1.01],  // Custom easing function
    },
};
  
  export const RLAnimation = {
    initial: { opacity: 0, x: 100 },  // Start off-screen to the right (x = 100)
    whileInView: { opacity: 1, x: 0 },  // Animate to normal position (x = 0)
    viewport: { once: true },  // Ensure animation happens once when it comes into view
    transition: {
      duration: 0.8,  // Duration of the animation
      delay: 0.2,  // Delay before animation starts
      ease: [0, 0.71, 0.2, 1.01],  // Custom easing function
    },
};

export const BTAnimation = {
    initial: { opacity: 0, y: 100 },  // Start off-screen below (y = 100)
    whileInView: { opacity: 1, y: 0 },  // Animate to normal position (y = 0)
    viewport: { once: true },  // Ensure animation happens once when it comes into view
    transition: {
      duration: 0.8,  // Duration of the animation
      delay: 0.2,  // Delay before animation starts
      ease: [0, 0.71, 0.2, 1.01],  // Custom easing function
    },
};

export const TBAnimation = {
    initial: { opacity: 0, y: -100 },  // Start off-screen above (y = -100)
    whileInView: { opacity: 1, y: 0 },  // Animate to normal position (y = 0)
    viewport: { once: true },  // Ensure animation happens once when it comes into view
    transition: {
      duration: 0.8,  // Duration of the animation
      delay: 0.2,  // Delay before animation starts
      ease: [0, 0.71, 0.2, 1.01],  // Custom easing function
    },
};
  
  
  