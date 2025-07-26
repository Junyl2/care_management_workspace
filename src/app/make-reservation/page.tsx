import React from 'react';
import { MakeReservation } from '@/components/pages';
import styles from './style.module.css';

export default function MakeReservationPage() {
  return (
    <main className={styles.container}>
      <MakeReservation />
    </main>
  );
}
