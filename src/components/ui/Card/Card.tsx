import React from 'react';
import { Size, BaseComponent } from '@/types';
import { cn } from '@/lib/utils';
import styles from './Card.module.css';

interface CardProps extends BaseComponent {
  variant?: 'default' | 'outlined' | 'elevated' | 'clean';
  padding?: Size;
  radius?: Size;
}

// Define subcomponents first
const CardHeader: React.FC<BaseComponent> = ({
  children,
  className,
  ...props
}) => (
  <div className={cn(styles.header, className)} {...props}>
    {children}
  </div>
);

const CardContent: React.FC<BaseComponent> = ({
  children,
  className,
  ...props
}) => (
  <div className={cn(styles.content, className)} {...props}>
    {children}
  </div>
);

const CardFooter: React.FC<BaseComponent> = ({
  children,
  className,
  ...props
}) => (
  <div className={cn(styles.footer, className)} {...props}>
    {children}
  </div>
);

// CardTitle: for headings
const CardTitle: React.FC<BaseComponent> = ({
  children,
  className,
  ...props
}) => (
  <h2 className={cn(styles.title, className)} {...props}>
    {children}
  </h2>
);

// CardText: for body text
const CardText: React.FC<BaseComponent> = ({
  children,
  className,
  ...props
}) => (
  <p className={cn(styles.text, className)} {...props}>
    {children}
  </p>
);

// CardAction: for placing buttons
const CardAction: React.FC<BaseComponent> = ({
  children,
  className,
  ...props
}) => (
  <div className={cn(styles.actions, className)} {...props}>
    {children}
  </div>
);

// Extend Card with subcomponents in type-safe way
type CardComponent = React.FC<CardProps> & {
  Header: typeof CardHeader;
  Content: typeof CardContent;
  Footer: typeof CardFooter;
  Title: typeof CardTitle;
  Text: typeof CardText;
  Action: typeof CardAction;
};

const Card: CardComponent = ({
  children,
  variant = 'default',
  padding = 'md',
  radius = 'radius',
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        styles.card,
        styles[radius],
        styles[variant],
        styles[`padding-${padding}`],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Attach subcomponents
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Text = CardText;
Card.Action = CardAction;

export { Card };
