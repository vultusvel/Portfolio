import styles from './Resume.module.scss';
import Experience from './Experience/Experience';
import Languages from './Languages/Languages';
import Skillset from './Skillset/Skillset';
import Certificates from './Certificates/Certificates';

export default function Resume() {
    return (
        <section id="resume" className={styles.resumeContainer}>
            <div className={styles.headerBox}>
                <h1 className={styles.resumeTitle}>Resume</h1>
            </div>

            <div className={styles.content}>
                <Experience />
                <Languages />
                <Skillset />
                <Certificates />
            </div>
        </section>
    );
}
