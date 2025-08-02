export interface CommentProps {
  id: string;
  DateCreated: string;
  AuthorName: string;
  UserProfileImage?: string | undefined | null;
  ContentTitle: string;
  Content: string;
  Images?: string[];
  ServiceType: string;
  Rating: number;
  Age: number;
  Location: string;
  Gender: string;
  Comments?: CommentType[];
  isAdmin?: boolean | undefined;
}

export type CommentType = {
  commentId: string;
  DateCreated: string;
  UserName: string;
  UserProfileImage?: string;
  Comment?: string;
};

export type reviewFormInput = {
  rating: number;
  author_name: string;
  author_gender?: string;
  service_used: string;
  date_of_use?: string;
  service_location?: string;
  senior_gender?: string;
  review: string;
  review_images?: File[];
};
