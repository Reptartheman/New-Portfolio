import useInView from '../../hooks/useInView';
import retroNomeImg from '../../assets/RetroNome.png';
import weatherAppImg from '../../assets/WeatherApp.png';
import feedYourHeadImg from '../../assets/feed-your-head.png';
import styles from './WorkSamples.module.css';

const PROJECTS = [
  {
    title: 'RetroNome',
    description: 'A retro-themed metronome app built with vanilla JS and CSS.',
    image: retroNomeImg,
    url: 'https://reptartheman.github.io/RetroNome/',
    tags: ['JavaScript', 'CSS', 'HTML'],
  },
  {
    title: 'Weather App',
    description:
      'Real-time weather dashboard pulling live data from a public API.',
    image: weatherAppImg,
    url: '#',
    tags: ['React', 'API', 'CSS'],
  },
  {
    title: 'Feed Your Head',
    description:
      'A creative content platform built with a focus on bold visual design.',
    image: feedYourHeadImg,
    url: '#',
    tags: ['React', 'Node.js', 'Design'],
  },
];

export default function WorkSamples() {
  const [ref, isInView] = useInView();

  return (
    <section id="work" className={styles.work}>
      <div
        ref={ref}
        className={`${styles.inner} ${isInView ? styles.visible : ''}`}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>Work Samples</h2>
          <p className={styles.subtitle}>
            A selection of recent projects showcasing design and development
            skills.
          </p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.imageWrap}>
                <img src={p.image} alt={p.title} className={styles.image} />
                <div className={styles.hoverOverlay}>
                  <span>View Project →</span>
                </div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.description}</p>
                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
