import { useLocation } from 'react-router-dom';
import styles from './Footer.module.css';
import linkedinIcon from '../../assets/linkedin-original.svg';
import githubIcon from '../../assets/github (1).svg';
import upworkIcon from '../../assets/upwork.svg';
import { NAV_BY_ROUTE } from '../../data/navLinks';

const SOCIAL = [
  { label: 'LinkedIn', icon: linkedinIcon, url: 'https://www.linkedin.com/in/jeffmoro/' },
  { label: 'GitHub', icon: githubIcon, url: 'https://github.com/Reptartheman' },
  {
    label: 'Upwork',
    icon: upworkIcon,
    url: 'https://www.upwork.com/freelancers/~0176af676e15fe3b49?viewMode=1',
  },
];

export default function Footer() {
  const { pathname } = useLocation();
  const quickLinks = NAV_BY_ROUTE[pathname] ?? [];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <h3 className={styles.logo}>EQ You‑i</h3>
          <p className={styles.tagline}>
            Balancing the art &amp; science of the web.
          </p>
        </div>

        <div className={styles.links}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <nav className={styles.nav}>
            {quickLinks.map((l) => (
              <a key={l.href} href={l.href} className={styles.navLink}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.social}>
          <h4 className={styles.colTitle}>Connect</h4>
          <div className={styles.icons}>
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={styles.iconLink}
              >
                <img src={s.icon} alt={s.label} className={styles.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} EQ You‑i · Built by Jeff Moro</p>
      </div>
    </footer>
  );
}
