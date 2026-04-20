'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './Projects.module.scss';
import { projects } from './constants'

interface ProjectProps {
    project: {
        id: number;
        title: string;
        description: string;
        images: string[];
        link: string;
    };
}

function ProjectCard({ project }: ProjectProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const { scrollXProgress } = useScroll({
        container: scrollRef
    });

    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const scroll = (dir: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const scrollAmount = scrollRef.current.clientWidth;
        scrollRef.current.scrollBy({
            left: dir === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <div className={styles.card}>
            <div className={styles.sliderWrapper}>
                <button onClick={() => scroll('left')} className={`${styles.arrow} ${styles.left}`}>
                    <Image src="/left.png" alt="left" width={30} height={30} sizes="(max-width: 768px) 100vw, 500px" />
                </button>

                <div className={styles.scrollContainer} ref={scrollRef}>
                    {project.images.map((img: string, i: number) => (
                        <div key={i} className={styles.imageItem}>
                            <Image src={img} alt={project.title} fill className={styles.image} sizes="(max-width: 768px) 100vw, 500px" />
                        </div>
                    ))}
                </div>

                <button onClick={() => scroll('right')} className={`${styles.arrow} ${styles.right}`}>
                    <Image src="/right.png" alt="right" width={30} height={30} sizes="(max-width: 768px) 100vw, 500px" />
                </button>

                <div className={styles.progressContainer}>
                    <motion.div className={styles.progressBar} style={{ scaleX }} />
                </div>
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.text}>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                    View on GitHub →
                </a>
            </div>

        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <h2 className={styles.mainTitle}>Projects</h2>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            <motion.div
                className={styles.seeMoreWrapper}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <a
                    href="https://github.com/vultusvel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.seeMoreLink}
                >
                    See more projects on GitHub
                </a>
            </motion.div>
        </section>
    );
}
