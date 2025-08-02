'use client';

import React from 'react';
import styles from './Hero.module.css';
import { cn } from '@/lib/utils';

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Hero = ({ id, className, children, ...props }: HeroProps) => {
  return (
    <section id={id} className={cn(styles.hero, className)} {...props}>
      {children}
    </section>
  );
};

export default Hero;
