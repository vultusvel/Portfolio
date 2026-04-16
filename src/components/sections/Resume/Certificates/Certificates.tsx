'use client';

import { motion } from 'framer-motion';
import styles from './Certificates.module.scss';

const certificates = [
  { title: 'AWS Solutions Architect', desc: 'Design and deployment of scalable, highly available, and fault-tolerant systems on AWS.', link: 'https://www.credly.com/badges/5e850e1e-4aac-4b60-8db1-47470f88a66e/public_url' },
  { title: 'Generative AI Fundamentals', desc: 'Understanding LLMs, neural network principles, and the ethical implications of generative AI.', link: '/AIFundametals.png' },
  { title: 'GCP - Cloud Digital Leader', desc: 'Strategic cloud adoption and utilizing Google Cloud services for business transformation and operational efficiency.', link: 'https://www.credly.com/badges/37ba501d-cb4a-48b2-9e75-a25d16d566fd/public_url' },
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
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewLink}
            >
              Link to certificate ↓
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
