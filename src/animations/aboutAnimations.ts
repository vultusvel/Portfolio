import { Variants } from 'framer-motion';

export const gridVariants: Variants = {
  hidden: { 
    opacity: 0,
    transition: { duration: 1, ease: "easeInOut" } 
  },
  visible: {
    opacity: 0.5, 
    transition: { duration: 1.2, ease: "easeOut" }
  }
};

export const containerVariants = (direction: 'left' | 'right'): Variants => ({
  hidden: { 
    opacity: 0, 
    x: direction === 'left' ? -150 : 150,
    transition: { duration: 1, ease: "easeInOut" } 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, staggerChildren: 0.15, when: "beforeChildren" }
  }
});

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
