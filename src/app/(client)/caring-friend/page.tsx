/* import styles from './style.module.css'; */
import {
  DailyLife,
  DataProves,
  CareThatLeads,
  CareGiverWillCome,
  FrequentlyAskedQuestions,
  CaregiversHelp,
} from '@/components/pages/caring-friend';
import CaringHero from '@/components/sections/hero/CaringHero';

export default function CaringFriendPage() {
  return (
    <main>
      <CaringHero />
      <section className="section-spacing">
        <DailyLife />
      </section>

      <section className="section-spacing">
        <DataProves />
      </section>

      <section className="section-spacing">
        <CareThatLeads />
      </section>

      <section className="section-spacing">
        <CareGiverWillCome />
      </section>
      {/* Accordion Here */}
      <section className="section-spacing">
        <FrequentlyAskedQuestions />
      </section>
      <section className="section-spacing">
        <CaregiversHelp />
      </section>
    </main>
  );
}
