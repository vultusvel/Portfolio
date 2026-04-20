'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Header.module.scss';

const sections = [
  { id: 'about', label: 'About me' },
  { id: 'resume', label: 'Resume' },
  { id: 'projects', label: 'Projects' },
  { id: 'contacts', label: 'Contacts' },
];

export default function Header() {
  const [active, setActive] = useState('about');

  const scrollToSection = (id: string) => {
    setActive(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      let closestSection = '';
      let minDistance = Infinity;

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - window.innerHeight / 2);

        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section.id;
        }
      });

      if (closestSection) {
        setActive(closestSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={styles.header}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <nav className={styles.container}>
        <div className={styles.logoGroup}>
          <h2 className={styles.name}>Anahit Gevorgyan</h2>
          <span className={styles.divider}>/</span>
          <p className={styles.role}>Software Engineer</p>
        </div>

        <ul className={styles.nav}>
          {sections.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`${styles.link} ${active === item.id ? styles.active : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}