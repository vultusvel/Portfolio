'use client';

import { motion } from 'framer-motion';
import styles from './Languages.module.scss';

const langs = ['English', 'Russian', 'Armenian', 'Ukrainian', 'Polish'];

export default function Languages() {
  return (
    <div className={styles.container}>
      <h2 className={styles.containerTitle}>Languages</h2>
      <div className={styles.languagesWrapper}>
        {langs.map((lang, i) => (
          <motion.div
            key={lang}
            className={styles.lang}
            initial={{ opacity: 0, rotate: -10, y: 20 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            whileHover={{ scale: 1.1, rotate: 2, zIndex: 10 }}
            transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
          >
            {lang}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
