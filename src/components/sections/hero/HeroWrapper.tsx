import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './HeroWrapper.module.css';

interface HeroWrapperProps {
  backgroundImage: string;
  height?: string;
  className?: string;
  children: ReactNode;
}

const HeroWrapper = ({
  backgroundImage,
  height,
  className,
  children,
}: HeroWrapperProps) => {
  return (
    <section
      className={clsx(styles.hero, className)}
      style={{ backgroundImage: `url(${backgroundImage})`, height }}
    >
      <div className={styles.overlay}>
        <div className="container">{children}</div>
      </div>
    </section>
  );
};

export default HeroWrapper;
