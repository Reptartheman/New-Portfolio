import useInView from '../../hooks/useInView';
import styles from './Music.module.css';

// Placeholder scaffold — swap the copy for real content later. Section ids match
// the /music entries in data/navLinks.js so the header/footer nav can target
// them. Each section reveals on scroll via useInView, like the /web sections.
const SECTIONS = [
  {
    id: 'music-about',
    variant: 'light',
    title: 'About the Music',
    body: 'Placeholder — a short artist bio and musical background go here.',
  },
  {
    id: 'music-listen',
    variant: 'dark',
    title: 'Listen',
    body: 'Placeholder — embed releases, a track player, or a discography grid.',
  },
  {
    id: 'music-shows',
    variant: 'light',
    title: 'Shows',
    body: 'Placeholder — upcoming dates and past highlights.',
  },
  {
    id: 'music-contact',
    variant: 'dark',
    title: 'Booking & Contact',
    body: 'Placeholder — booking details or a contact prompt.',
  },
];

function MusicSection({ id, variant, title, body }) {
  const [ref, isInView] = useInView();

  return (
    <section id={id} className={`${styles.section} ${styles[variant]}`}>
      <div
        ref={ref}
        className={`${styles.inner} ${isInView ? styles.visible : ''}`}
      >
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.body}>{body}</p>
      </div>
    </section>
  );
}

export default function Music() {
  const [heroRef, heroInView] = useInView();

  return (
    <>
      <section id="music-home" className={styles.hero}>
        <div
          ref={heroRef}
          className={`${styles.inner} ${heroInView ? styles.visible : ''}`}
        >
          <h1 className={styles.heroTitle}>The Musician</h1>
          <p className={styles.heroTagline}>
            Placeholder tagline — where the music lives.
          </p>
        </div>
      </section>

      {SECTIONS.map((section) => (
        <MusicSection key={section.id} {...section} />
      ))}
    </>
  );
}
