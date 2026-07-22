import { Link } from 'react-router-dom';
import useEntranceAnimation from '../../hooks/useEntranceAnimation';
import styles from './Landing.module.css';
import webDevImg from '../../assets/IMG_9065.JPG';
import musicianImg from '../../assets/IMG_9244.JPG';

export default function Landing() {
  const titleRef = useEntranceAnimation('fromTop');
  const cardLeftRef = useEntranceAnimation('fromLeft');
  const cardRightRef = useEntranceAnimation('fromRight');
  const footerRef = useEntranceAnimation('fromBottom');

  return (
    <div className={styles.page}>
      <section className={styles.container}>
        <div ref={titleRef} className={`${styles.title} ${styles.shadow}`}>
          <h2 className={styles.heading}>Which Jeff do you want to get to know?</h2>
        </div>

        <div className={styles.cards}>
          <div ref={cardLeftRef} className={`${styles.card} ${styles.shadow}`}>
            <Link to="/web" className={styles.cardLink}>
              <h3 className={styles.cardTitle}>The Web Developer</h3>
              <img src={webDevImg} alt="Jeff, the web developer" className={styles.cardImg} />
            </Link>
          </div>

          <div ref={cardRightRef} className={`${styles.card} ${styles.shadow}`}>
            <Link to="/music" className={styles.cardLink}>
              <h3 className={styles.cardTitle}>The Musician</h3>
              <img src={musicianImg} alt="Jeff, the musician" className={styles.cardImg} />
            </Link>
          </div>
        </div>

        <footer ref={footerRef} className={`${styles.footer} ${styles.shadow}`}>
          <p>
            This page was built by Jeff the Web Developer &amp; inspired by Jeff
            the Musician.
          </p>
        </footer>
      </section>
    </div>
  );
}
