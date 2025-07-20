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
} from '@/components/pages';

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <section className="section-space">
        <div className={`${styles.container}`}>
          <h2 className="home-section-heading">
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
    </main>
  );
}
