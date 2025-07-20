// components/ui/Text/Text.tsx
import { ReactNode } from 'react';
import styles from './Text.module.css';

type TextVariant = 'heading' | 'subHeading' | 'subtitle' | 'body' | 'caption';
type TextTag = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'label' | 'strong';

type Props = {
  variant: TextVariant;
  as?: TextTag;
  className?: string;
  children: ReactNode;
};

export default function Text({
  variant,
  as: Tag = 'p',
  className,
  children,
}: Props) {
  const variantClass = styles[variant] || '';
  return (
    <Tag className={`${variantClass} ${className || ''}`.trim()}>
      {children}
    </Tag>
  );
}
