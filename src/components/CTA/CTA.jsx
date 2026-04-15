import useInView from '../../hooks/useInView';
import styles from './CTA.module.css';

export default function CTA() {
  const [ref, isInView] = useInView();

  return (
    <section id="home" className={styles.cta}>
      <div className={styles.overlay} />
      <div
        ref={ref}
        className={`${styles.content} ${isInView ? styles.visible : ''}`}
      >
        <h1 className={styles.title}>
          EQ You‑i
        </h1>
        <p className={styles.tagline}><span>You</span>r <span>i</span>deas <span>i</span>n tune</p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary}>
            Start a Project
          </a>
          <a href="#work" className={styles.btnSecondary}>
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}
