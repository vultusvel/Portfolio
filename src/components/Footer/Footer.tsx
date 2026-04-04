import Image from 'next/image';
import styles from './Footer.module.scss';

export default function Footer() {
    const socialLinks = [
      { id: 1, title: 'Email', icon: '/logos/Gmail_icon_(2020).svg.png', link: 'mailto:kdkfdk@gmail.com', text: 'kdkfdk@gmail.com' },
      { id: 2, title: 'Github', icon: '/logos/GitHub-Logo.wine.svg', link: 'https://github.com', text: 'github.com' },
      { id: 3, title: 'LinkedIn', icon: '/logos/LinkedIn_icon.svg.webp', link: 'https://linkedin.com', text: 'linkedin.com' },
    ];
  
    return (
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <ul className={styles.socialList}>
            {socialLinks.map((item) => (
              <li key={item.id} className={styles.socialItem}>
                <div className={styles.labelStack}>
                  <span className={styles.label}>{item.title}</span>
                  <Image src={item.icon} alt={item.title} width={24} height={24} className={styles.icon} />
                </div>
                <a href={item.link} target="_blank" className={styles.link}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    );
  }