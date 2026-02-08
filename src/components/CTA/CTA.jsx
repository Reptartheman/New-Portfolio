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
        <p className={styles.tagline}>Creative Web Solutions</p>
        <h1 className={styles.title}>
          EQ You‑i
        </h1>
        <p className={styles.subtitle}>
          Balancing the art &amp; science of the web — building beautiful,
          functional digital experiences that amplify your brand.
        </p>
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
