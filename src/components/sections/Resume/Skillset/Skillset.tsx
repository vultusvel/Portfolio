'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion'; 
import styles from './Skillset.module.scss';
import { skills } from './constants';

export default function Skillset() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollXProgress } = useScroll({
    container: ref
  });

  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scroll = (dir: 'left' | 'right') => {
    if (!ref.current) return;
    const scrollAmount = 300;
    ref.current.scrollBy({
      left: dir === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Professional Skillset</h2>

      <div className={styles.wrapper}>
        <button onClick={() => scroll('left')} className={styles.arrowBtn}>
          <Image src="/left.png" alt="left" width={30} height={30} />
        </button>

        <div className={styles.scrollContainer} ref={ref}>
          {skills.map((skill, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.inner}>
                <div className={styles.front}>
                  <Image src={skill.logo} alt={skill.name} width={60} height={60} />
                  <h3 className={styles.skillName}>{skill.name}</h3>
                </div>
                <div className={styles.back}>
                  <p>{skill.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => scroll('right')} className={styles.arrowBtn}>
          <Image src="/right.png" alt="right" width={30} height={30} />
        </button>
      </div>

      <div className={styles.progressContainer}>
        <motion.div 
          className={styles.progressBar} 
          style={{ scaleX }} 
        />
      </div>
    </div>
  );
}
