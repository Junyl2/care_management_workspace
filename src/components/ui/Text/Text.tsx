import React from 'react';
import styles from './Text.module.css';
import clsx from 'clsx';

type TextProps = {
  children: React.ReactNode;
  variant?: 'heading' | 'subheading' | 'sectionTitle' | 'paragraph' | 'caption';
  as?: keyof JSX.IntrinsicElements; // Allows `p`, `h1`, `span`, etc.
  className?: string;
};

export default function Text({
  children,
  variant = 'paragraph',
  as: Component = 'p',
  className = '',
}: TextProps) {
  return (
    <Component className={clsx(styles[variant], className)}>
      {children}
    </Component>
  );
}
