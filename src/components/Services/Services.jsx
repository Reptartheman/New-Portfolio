import useInView from '../../hooks/useInView';
import styles from './Services.module.css';

const SERVICES = [
  {
    icon: '🎨',
    title: 'Web Design',
    description:
      'Clean, modern designs tailored to your brand. From wireframes to pixel-perfect layouts that captivate your audience.',
  },
  {
    icon: '⚡',
    title: 'Web Development',
    description:
      'Fast, responsive, and accessible websites built with modern frameworks and best practices.',
  },
  {
    icon: '🔍',
    title: 'SEO & Strategy',
    description:
      'Data-driven strategies to boost your visibility and connect with the right audience at the right time.',
  },
  {
    icon: '🛠️',
    title: 'Maintenance & Support',
    description:
      'Ongoing updates, performance tuning, and technical support to keep your site running flawlessly.',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description:
      'Seamless experiences across every device — mobile, tablet, and desktop, every time.',
  },
  {
    icon: '🎵',
    title: 'Audio Engineering',
    description:
      'Professional audio mixing, mastering, and sound design to elevate your multimedia projects.',
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
            Everything you need to launch, grow, and maintain a powerful online
            presence.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <div key={s.title} className={styles.card}>
              <span className={styles.icon}>{s.icon}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
