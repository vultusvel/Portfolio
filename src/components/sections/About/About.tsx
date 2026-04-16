'use client';

import Image from 'next/image'
import { motion } from 'framer-motion';
import { gridVariants, containerVariants, itemVariants } from '@/animations/aboutAnimations';
import styles from './About.module.scss';

const MotionImage = motion.create(Image);

export default function About() {
  return (
    <main id='about' className={styles.aboutContainer}>
      <motion.div
        className={styles.backgroundGrid} 
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} 
      />

      <motion.div
        className={styles.aboutContentPhoto}
        variants={containerVariants('left')}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <MotionImage 
          src="/profile2.jpg" 
          alt="Profile"
          className={styles.aboutImage}
          width={200} 
          height={200}
          variants={itemVariants} 
          priority 
        />
        <motion.h2 variants={itemVariants} className={styles.aboutContentPhotoTitle}>Anahit Gevorgyan</motion.h2>
        <motion.p variants={itemVariants} className={styles.aboutContentPhotoText}>Software Engineer</motion.p>
      </motion.div>

      <motion.div
        className={styles.aboutContent}
        variants={containerVariants('right')}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h1 variants={itemVariants} className={styles.aboutTitle}>Hello</motion.h1>
        <motion.h2 variants={itemVariants}>Here&apos;s who I am & what I do</motion.h2>
        <motion.p variants={itemVariants} className={styles.aboutText}>
        Continuously learning and highly motivated frontend engineer with solid experience in building scalable web applications. Experienced in integrating third-party services, designing efficient state management solutions, and optimizing performance in production environments. Comfortable working across the full development lifecycle - from implementing UI components to collaborating on backend integrations. Focused on writing maintainable, high-quality code and continuously improving development processes.
        </motion.p>
      </motion.div>
    </main>
  );
}
