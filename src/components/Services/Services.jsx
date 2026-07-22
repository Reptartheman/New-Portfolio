import useInView from '../../hooks/useInView';
import styles from './Services.module.css';
import webDevBG from '../../assets/WEB_DEV_BG.png';
import audioBG from '../../assets/AUDIO_BG.png';
import lessonsBG from '../../assets/LESSONS_BG.png';

const SERVICES = [

  {
    backGround: webDevBG,
    title: 'Web Development',
    description: [
      `Websites`,
      `Web Applications`,
      `E-commerce Platforms`,
    ],
  },
  {
    backGround: audioBG,
    title: 'Audio Services',
    description: [
      `Podcasts`,
      `Recording Sessions`,
      `Editing/Mixing/DJing`,
    ],
  },
  {
    backGround: lessonsBG,
    title: 'Private Lessons',
    description: [
      `Instrumental Lessons`,
      `Audio Production`,
      `Band Coaching`,
    ],
  },
];

export default function Services() {
  const [ref, isInView] = useInView();

  return (
    <section id="services" className={styles.services}>
      <div
        ref={ref}
        className={`${styles.inner} ${isInView ? styles.visible : ''}`}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>Services</h2>
          <p className={styles.subtitle}>
            An array of serv<span>i</span>ces to support <span>you</span>r creat<span>i</span>ve v<span>i</span>s<span>i</span>on.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <div key={service.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <img className={styles.bg} src={service.backGround} alt={service.title} />
              <ul className={styles.cardDesc}>
                {service.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
