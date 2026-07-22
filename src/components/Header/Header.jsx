import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { NAV_BY_ROUTE } from '../../data/navLinks';
import blackOnTanLogo from '../../assets/LOGO_BLACK.png';
import tanOnBlackLogo from '../../assets/LOGO_SAND-DUNE.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navLinks = NAV_BY_ROUTE[pathname] ?? [];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" aria-label="Back to the chooser">
          <img className={styles.logoImg} src={scrolled? tanOnBlackLogo : blackOnTanLogo} alt="EQ You-i company logo: black square with stylized clock icon and company name on tan background" />
        </Link>

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
          {navLinks.map(({ label, href }) => (
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
