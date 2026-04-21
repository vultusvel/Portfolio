'use client';

import { motion } from 'framer-motion';
import styles from './Experience.module.scss';
import { experiences } from './constants';

export default function Experience() {
    return (
        <section className={styles.container}>
            <div className={styles.containerTitle}>
                <h2 className={styles.title}>Experience</h2>
                <a
                    href="/MY_CV.pdf"
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

                            {exp.contributions && exp.contributions.length > 0 && (
                                <>
                                    <h4 className={styles.subTitle}>Key Contributions</h4>
                                    <div className={styles.responsibilities}>
                                        {exp.contributions.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                className={styles.respItem}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: idx * 0.1 }}
                                            >
                                                {item}
                                            </motion.div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {exp.responsibilities && exp.responsibilities.length > 0 && (
                                <>
                                    <h4 className={styles.subTitle}>Responsibilities</h4>
                                    <div className={styles.responsibilities}>
                                        {exp.responsibilities.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                className={styles.respItem}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                            >
                                                {item}
                                            </motion.div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {exp.technologies && exp.technologies.length > 0 && (
                                <>
                                    <h4 className={styles.subTitle}>Technologies</h4>
                                    <div className={styles.responsibilities}>
                                        {exp.technologies.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                className={styles.techItem}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: idx * 0.03 }}
                                            >
                                                {item}
                                            </motion.div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
