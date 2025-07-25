/* Navbar */
import { Variant } from './global';

export type NavLink = {
  name: string;
  path: string;
};
export type ServiceLink = {
  name: string;
  path: string;
};

export type Service = {
  name: string;
  path: string;
};

//customer review
export type Gender = 'M' | 'F';

export type Details = {
  age: string;
  region: string;
  gender: Gender;
};

export type ReviewVariant =
  | 'hospital'
  | 'care'
  | 'meal'
  | 'exercise'
  | 'bath'
  | 'housekeeping';

export type Review = {
  services: string;
  variant: ReviewVariant;
  profileImg: string;
  name: string;
  ratings: number;
  details: Details;
  commentTitle: string;
  commentDescription: string;
};
