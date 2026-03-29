import Link from 'next/link';
import styles from './About.module.scss';

export default function About() {
    return (
        <main className={styles.aboutContainer}>
            <div className={styles.aboutContentPhoto}>
                <img src="/images/about.jpg" alt="About me" className={styles.aboutImage} />
                <h2 className={styles.aboutText}>
                    Anahit Gevorgyan
                </h2>
                <p className={styles.aboutText}>Software Engineer</p>
            </div>

            <div className={styles.aboutContent}>
                <h1 className={styles.aboutTitle}>Hello</h1>
                <p className={styles.aboutText}>Here's who I am & what I do</p>


                <p className={styles.aboutText}>
                    I'm a software engineer with a passion for building web applications. I am a quick learner and I am always looking to improve my skills.
                </p>
            </div>

        </main>
    );
}