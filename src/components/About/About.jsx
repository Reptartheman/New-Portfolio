import useInView from "../../hooks/useInView";
import profileImg from "../../assets/IMG_9222.JPG";
import styles from "./About.module.css";

export default function About() {
  const [ref, isInView] = useInView();

  return (
    <section id="about" className={styles.about}>
      <div
        ref={ref}
        className={`${styles.inner} ${isInView ? styles.visible : ""}`}
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
            I find purpose in helping people solve their problems with creative
            solutions. Whether it be building a website for your business, DJing
            your next event, editing your podcast, or playing bass on your next
            record. I am always striving to find ways to improve
            my craft through the use of various technological tools and media.
          </p>
        </div>
      </div>
    </section>
  );
}
