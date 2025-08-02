'use client';

import {
  EasyBooking,
  Instructions,
  Policy,
  UsageProcedure,
} from '@/components/pages/how-to-use';
import HowToUseHero from '@/components/sections/hero/HowToUserHero';

export default function HowToUsePage() {
  return (
    <main>
      <HowToUseHero />
      <section className="section-spacing">
        <Instructions />
      </section>

      <section className="section-spacing">
        <UsageProcedure />
      </section>

      <section className="section-spacing">
        <EasyBooking />
      </section>

      <section className="section-spacing">
        <Policy />
      </section>
    </main>
  );
}
