import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/LOGOBannerBLACKOnTAN SQUARE.png';
import tanOnBlackLogo from '../../assets/LOGOTANonBLACK.png'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <img className={styles.logoImg} src={scrolled? tanOnBlackLogo :logo} alt="EQ You-i company logo: black square with stylized clock icon and company name on tan background" />

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={styles.navLink}
              onClick={handleLinkClick}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
