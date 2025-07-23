export type Variant = 'primary' | 'secondary' | 'danger' | 'success';

export type Size = 'sm' | 'md' | 'lg' | 'none' | 'no-radius';
export type Radius = 'none' | 'sm' | 'md' | 'lg' | 'full';

export type WebTitle = {
  title: string;
  description: string;
};

export interface BaseComponent {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}
