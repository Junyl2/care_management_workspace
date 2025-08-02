export type Variant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'hospital'
  | 'meal'
  | 'bath'
  | 'exercise'
  | 'housekeeping'
  | 'tertiary';
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

export interface PickerOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}
