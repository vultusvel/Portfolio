import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>

            <ul className={styles.footerList}>
                <li className={styles.footerItem}>
                    <h3>Write me</h3>
                    <Link href="/contact">@kdkfdk@gmail.com</Link>
                </li>
                <li className={styles.footerItem}>
                    <h3>Follow me</h3>
                    <Link href="/contact">Github</Link>
                </li>
            </ul>
        </footer>
    );
}