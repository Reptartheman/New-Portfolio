import useInView from '../../hooks/useInView';
import profileImg from '../../assets/IMG_9222.JPG';
import styles from './About.module.css';

export default function About() {
  const [ref, isInView] = useInView();

  return (
    <section id="about" className={styles.about}>
      <div
        ref={ref}
        className={`${styles.inner} ${isInView ? styles.visible : ''}`}
      >
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <img src={profileImg} alt="Jeff Moro" className={styles.photo} />
            <div className={styles.accent} />
          </div>
        </div>

        <div className={styles.textCol}>
          <h2 className={styles.title}>About</h2>
          <div className={styles.divider} />
          <p className={styles.body}>
            Jeff Moro is the creative force behind EQ You‑i. An audio engineer
            by trade, Jeff brings a unique ear for detail and a love of creative
            problem-solving to every web project.
          </p>
          <p className={styles.body}>
            Whether it's crafting pixel-perfect interfaces, wiring up interactive
            experiences, or optimizing performance under the hood, Jeff treats
            every project like a mix session — balancing each element until the
            whole thing sounds (and looks) just right.
          </p>
          <a
            href="https://docs.google.com/document/d/1LKrsyAXJEAU945qkJyWLn6TWOqp_f9r6dYiQRDMr7Bw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeLink}
          >
            View Résumé →
          </a>
        </div>
      </div>
    </section>
  );
}
