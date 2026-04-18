'use client';

import Image from 'next/image';
import styles from './Footer.module.scss';

export default function Footer() {
    const socialLinks = [
      { id: 1, title: 'Github', icon: '/logos/github.png', link: 'https://github.com/vultusvel?tab=repositories' },
      { id: 2, title: 'annagevorgyan628@gmail.com', icon: '/logos/gm.png' },
      { id: 3, title: 'LinkedIn', icon: '/logos/ln.png', link: 'https://www.linkedin.com/in/anahit-gevorgyan-2b3604287/' },
    ];
  
    return (
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <ul className={styles.socialList}>
            {socialLinks.map((item) => (
              <li key={item.id} className={styles.socialItem}>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.mainLink}
                >
                  <div className={styles.labelStack}>
                    <span className={styles.label}>{item.title}</span>
                    <Image 
                      src={item.icon} 
                      alt={item.title} 
                      width={24} 
                      height={22} 
                      className={styles.icon} 
                    />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    );
}
