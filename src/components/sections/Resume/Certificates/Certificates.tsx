'use client';

import { motion } from 'framer-motion';
import styles from './Certificates.module.scss';

const certificates = [
  { title: 'AWS Solutions Architect', desc: 'Cloud architecture fundamentals', link: '/AWS.png' },
  { title: 'AI Fundamentals', desc: 'Machine learning basics', link: '/AWS.png' },
  { title: 'Frontend Advanced', desc: 'Deep dive into React ecosystem', link: '/AWS.png' },
  { title: 'System Design', desc: 'Scalable architecture principles', link: '/AWS.png' },
];

export default function Certificates() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Certificates</h2>

      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            className={styles.card}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <h3 className={styles.cardTitle}>{cert.title}</h3>
            <p className={styles.cardDesc}>{cert.desc}</p>
            <a 
              href={cert.link}
              download
              className={styles.viewLink}
            >
              Download Certificate ↓
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
