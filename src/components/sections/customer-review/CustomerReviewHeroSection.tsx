import Hero from '@/components/pages/customer-reviews/Hero';
import styles from './CustomerReviewHeroSection.module.css';

const CustomerReviewHeroSection = () => {
  return (
    <Hero>
      <div className={styles.heroContent}>
        <p className={styles.heroTitle}>고객 후기</p>
        <p className={styles.heroDescription}>
          사용자분들이 남겨주신 <br />
          진솔한 후기입니다.
        </p>
      </div>
    </Hero>
  );
};

export default CustomerReviewHeroSection;
