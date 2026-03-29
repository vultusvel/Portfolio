import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.headerContainer}>
                <div className={styles.headerMeInfo}>
                    <h1 className={styles.headerMeName}>Anahit Gevorgyan</h1>
                    <h2 className={styles.headerMeTitle}>Software Engineer</h2>
                </div>

                <ul className={styles.headerList}>
                    <li className={styles.headerItem}>
                        <Link href="/contact">About me</Link>
                    </li>
                    <li className={styles.headerItem}>
                        <Link href="/contact">Resume</Link>
                    </li>
                    <li className={styles.headerItem}>
                        <Link href="/contact">Projects</Link>
                    </li>
                    <li className={styles.headerItem}>
                        <Link href="/contact">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}