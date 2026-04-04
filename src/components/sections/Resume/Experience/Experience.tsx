'use client';

import { motion } from 'framer-motion';
import styles from './Experience.module.scss';

const experiences = [
    {
        title: 'Present',
        side: 'left',
        description: 'Frontend Engineer working on global product...',
        responsibilities: ['API integration', 'Code reviews', 'Testing', 'Agile'],
    },
    {
        title: 'Internship',
        side: 'right',
        description: 'Worked on real-world projects',
        responsibilities: ['Bug fixing', 'UI', 'Learning'],
    },
];

export default function Experience() {
    return (
        <section className={styles.container}>
            <div className={styles.containerTitle}>
                <h2 className={styles.title}>Experience</h2>
                <a
                    href="/CV.pdf"
                    download="Anahit_Gevorgyan_CV.pdf"
                    className={styles.downloadButton}
                >
                    Download CV
                </a>
            </div>

            <div className={styles.timeline}>
                <motion.div
                    className={styles.line}
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 1 }}
                />

                {experiences.map((exp, i) => (
                    <div key={i} className={`${styles.row} ${exp.side === 'left' ? styles.rowLeft : styles.rowRight}`}>

                        <div className={styles.dot} />

                        <motion.div
                            className={styles.card}
                            initial={{ opacity: 0, x: exp.side === 'left' ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className={styles.timeTag}>{exp.title}</span>
                            <p className={styles.description}>{exp.description}</p>

                            <h4 className={styles.subTitle}>Responsibilities</h4>
                            <div className={styles.responsibilities}>
                                {exp.responsibilities.map((item, idx) => (
                                    <div key={idx} className={styles.respItem}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
