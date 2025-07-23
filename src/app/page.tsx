import HomeHero from '@/components/sections/hero/HomeHero';
import styles from './page.module.css';
import {
  ServiceCardGrid,
  HospitalSection,
  BathSection,
  ExerciseSection,
  HelpMealSection,
  HouseworkSection,
  About,
  CustomerReview,
  Caring,
  DiscountSection,
  CaregiverSection,
} from '@/components/pages';

export default function HomePage() {
  return (
    <main className="h-screen">
      <HomeHero />
      <section className="section-space ">
        <div className={`${styles.container}`}>
          <h2 className={styles.homeHeading}>
            원하는 서비스를 바로 이용해보세요.
          </h2>
          <ServiceCardGrid />
        </div>
        <HospitalSection />
        <HelpMealSection />
        <HouseworkSection />
        <ExerciseSection />
        <BathSection />
      </section>
      <section className="section-space">
        <About />
      </section>
      <section className="section-space">
        <CustomerReview />
      </section>
      <section className="section-space">
        <Caring />
      </section>
      <section>
        <DiscountSection />
      </section>
      <section>
        <CaregiverSection />
      </section>
    </main>
  );
}
