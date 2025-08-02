import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './HeroWrapper.module.css';

interface HeroWrapperProps {
  backgroundImage: string;
  height?: string;
  className?: string;
  noOverlay?: boolean;
  children: ReactNode;
}

const HeroWrapper = ({
  backgroundImage,
  height,
  className,
  noOverlay = false,
  children,
}: HeroWrapperProps) => {
  return (
    <section
      className={clsx(styles.hero, className)}
      style={{ backgroundImage: `url(${backgroundImage})`, height }}
    >
      {noOverlay ? (
        <div className="container">{children}</div>
      ) : (
        <div className={styles.overlay}>
          <div className="container">{children}</div>
        </div>
      )}
    </section>
  );
};

export default HeroWrapper;
