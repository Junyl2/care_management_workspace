/* Navbar */
import { Variant } from './global';

export type Links = {
  name: string;
  path: string;
};

export type Service = {
  name: string;
  path: string;
};

export type Review = {
  services: string;
  variant: Variant;
  profileImg: string;
  name: string;
  ratings: string;
  details: string;
  commentTitle: string;
  commentDescription: string;
};
