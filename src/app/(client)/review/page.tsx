import styles from './page.module.css';
import CustomerReviewHeroSection from '@/components/sections/customer-review/CustomerReviewHeroSection';
import ReviewGridSection from '@/components/sections/customer-review/ReviewGridSection';
import CommentSection from '@/components/sections/customer-review/CommentSection';

export default function CustomerReviewsPage() {
  return (
    <>
      <CustomerReviewHeroSection />
      <main className={styles.page}>
        <p className={styles.banner}>
          만족도 높은 돌봄대장 서비스와 함께하세요.
        </p>
        <div className={styles.reviewGridSection}>
          <ReviewGridSection />
        </div>
        <CommentSection />
      </main>
    </>
  );
}
