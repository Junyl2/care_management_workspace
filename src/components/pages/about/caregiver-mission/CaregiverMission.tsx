import React from 'react';
import styles from './CaregiverMission.module.css';

export const CaregiverMission = () => {
  return (
    <div className="container flex flex-col items-center justify-center text-center">
      <div className={styles.container}>
        <div className="flex flex-col items-center justify-between gap-1 ">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <h2>Lorem ipsum dolor sit amet consectetur, adi</h2>
          <p className={styles.marginTop}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            blanditiis soluta. Deleniti magni veritatis debitis facilis
            obcaecati, explicabo unde a aspernatur dignissimos ullam dolore
            excepturi optio repellat ut dolor fugiat?
          </p>
        </div>
      </div>
    </div>
  );
};
