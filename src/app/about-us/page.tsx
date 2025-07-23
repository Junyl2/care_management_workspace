import AboutHero from '@/components/sections/hero/AboutHero';
import { CaregiverMission, ProblemSolving, Target } from '@/components/pages';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <section className="section-space">
        <CaregiverMission />
      </section>

      <section className="section-space">
        <ProblemSolving />
      </section>

      <section className="section-space">
        <Target />
      </section>
    </main>
  );
}
