'use client';

import React, { ReactNode } from 'react';
import styles from './BottomBarBase.module.css';

type BottomBarBaseProps = {
  children: ReactNode;
};

export const BottomBarBase: React.FC<BottomBarBaseProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
      <div className={styles.indicator} />
    </div>
  );
};
