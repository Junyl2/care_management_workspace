import HomeHero from '@/components/sections/hero/HomeHero';
/* import { Card } from '@/components/ui'; */
/* import styles from './page.module.css'; */
import { ServiceCardGrid, HospitalSection } from '@/components/pages';

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <section className="pt-2xl">
        <div className="space-top flex-col gap-2">
          <h2 className="section-heading">
            원하는 서비스를 바로 이용해보세요.
          </h2>
          <ServiceCardGrid />
        </div>
        <HospitalSection />
        <HospitalSection />
        <HospitalSection />
        <HospitalSection />
        <HospitalSection />
      </section>
    </main>
  );
}
