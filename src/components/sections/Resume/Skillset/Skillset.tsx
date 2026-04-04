'use client';
import { useRef } from 'react';
import Image from 'next/image';
import styles from './Skillset.module.scss';

const skills = [
    { name: 'React', logo: '/logos/React-icon.svg.png', desc: 'Hooks, Context API, Performance optimization' },
    { name: 'Next.js', logo: '/logos/nextjs.svg', desc: 'App Router, SSR, SSG & API Routes' },
    { name: 'TypeScript', logo: '/logos/ts.svg', desc: 'Static typing, Interfaces and Generics' },
    { name: 'SCSS', logo: '/logos/scss.svg', desc: 'Mixins, Variables and BEM architecture' },
    { name: 'Framer', logo: '/logos/framer.svg', desc: 'Complex layout & scroll animations' },
    { name: 'JavaScript', logo: '/logos/js.svg', desc: 'ES6+, Async/Await and DOM' },
];

export default function Skillset() {
    const ref = useRef<HTMLDivElement>(null);
  
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
      </div>
    );
  }
  