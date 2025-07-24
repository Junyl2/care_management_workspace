import AboutHero from '@/components/sections/hero/AboutHero';
import {
  CaregiverMission,
  ProblemSolving,
  Journey,
  Target,
} from '@/components/pages';
import styles from './style.module.css';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <section className={styles.sectionSpacing}>
        <CaregiverMission />
      </section>

      <section className={styles.sectionSpacing}>
        <ProblemSolving />
      </section>

      <section className={styles.sectionSpacing}>
        <Journey />
      </section>

      <section className={styles.sectionSpacing}>
        <Target />
      </section>
    </main>
  );
}
