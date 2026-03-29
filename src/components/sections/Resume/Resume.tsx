import Link from 'next/link';
import styles from './Resume.module.scss';

export default function Resume() {
    return (
        <section className={styles.resumeContainer}>
            <h1 className={styles.resumeTitle}>Resume</h1>

            <div className={styles.resumeExperienceContainer}>
                    <h2 className={styles.resumeExperienceContainerTitle}>Experience</h2>

                    <Link href="/contact">Download CV</Link>
                </div>

            <article className={styles.resumeExperience}>
                <div className={styles.resumeExperienceInfo}>
                    <h3 className={styles.resumeExperienceInfoTitle}>Intership</h3>
                    <p className={styles.resumeExperienceInfoText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam dolore quo ratione voluptatem nemo eligendi, iste eius praesentium debitis et dolor. Esse expedita reprehenderit alias laborum saepe sint nostrum?</p>
                </div>

                <div className={styles.resumeExperienceInfo}>
                    <h3 className={styles.resumeExperienceInfoTitle}>Present</h3>
                    <p className={styles.resumeExperienceInfoText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam dolore quo ratione voluptatem nemo eligendi, iste eius praesentium debitis et dolor. Esse expedita reprehenderit alias laborum saepe sint nostrum?</p>
                </div>Z
            </article>


            <article className={styles.resumeLanguages}>
                <h2 className={styles.resumeLanguagesTitle}>Languages</h2>

                <div className={styles.resumeLanguagesInfo}>
                    <p className={styles.resumeLanguage}>English</p>
                    <p className={styles.resumeLanguage}>Russian</p>
                    <p className={styles.resumeLanguage}>Armenian</p>
                    <p className={styles.resumeLanguage}>Ukranian</p>
                </div>
            </article>

            <article className={styles.resumeSkillset}>
                <h2 className={styles.resumeSkillsetTitle}>Proffesional skillset</h2>

                <div className={styles.resumeSkillsetInfoList}>
                    <div className={styles.resumeSkillsetInfo}>
                        <h3 className={styles.resumeSkillsetInfoTitle}>Vue</h3>
                        <img src="/" alt="VueLogo" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, vero eveniet tenetur qui molestiae numquam, provident eos nam quisquam doloribus totam corporis, maiores impedit vel veniam pariatur illum accusantium earum?</p>
                    </div>


                    <div className={styles.resumeSkillsetInfo}>
                        <h3 className={styles.resumeSkillsetInfoTitle}> Vue </h3>
                        <img src="/" alt="VueLogo" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, vero eveniet tenetur qui molestiae numquam, provident eos nam quisquam doloribus totam corporis, maiores impedit vel veniam pariatur illum accusantium earum?</p>
                    </div>


                    <div className={styles.resumeSkillsetInfo}>
                        <h3 className={styles.resumeSkillsetInfoTitle}>Vue</h3>
                        <img src="/" alt="VueLogo" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, vero eveniet tenetur qui molestiae numquam, provident eos nam quisquam doloribus totam corporis, maiores impedit vel veniam pariatur illum accusantium earum?</p>
                    </div>
                </div>
            </article>


            <article className={styles.resumeCertificates}>
                <h2 className={styles.resumeCertificatesTitle}>Certificates</h2>

                <div className={styles.resumeCertificatesInfo}>
                    <h2 className={styles.resumeCertificatesInfoTitle}>Amazom Solutions Architech</h2>
                    <img src="/" alt="AWS" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellendus, ad harum, aut ipsa sunt maiores eum enim consequuntur minima neque illo consectetur veritatis aperiam? Maiores assumenda modi iure quo?</p>
                    <p>View Certificate</p>
                </div>

                <div className={styles.resumeCertificatesInfo}>
                    <h2 className={styles.resumeCertificatesInfoTitle}>Amazom Solutions Architech</h2>
                    <img src="/" alt="AWS" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellendus, ad harum, aut ipsa sunt maiores eum enim consequuntur minima neque illo consectetur veritatis aperiam? Maiores assumenda modi iure quo?</p>
                    <p>View Certificate</p>
                </div>

                <div className={styles.resumeCertificatesInfo}>
                    <h2 className={styles.resumeCertificatesInfoTitle}>AI</h2>
                    <img src="/" alt="AWS" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellendus, ad harum, aut ipsa sunt maiores eum enim consequuntur minima neque illo consectetur veritatis aperiam? Maiores assumenda modi iure quo?</p>
                    <p>View Certificate</p>
                </div>

                <div className={styles.resumeCertificatesInfo}>
                    <h2 className={styles.resumeCertificatesInfoTitle}>Amazom Solutions Architech</h2>
                    <img src="/" alt="AWS" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellendus, ad harum, aut ipsa sunt maiores eum enim consequuntur minima neque illo consectetur veritatis aperiam? Maiores assumenda modi iure quo?</p>
                    <p>View Certificate</p>
                </div>
            </article>

        </section>
    );
}