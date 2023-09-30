import { User } from '@domain';

export interface Post {
  id: number;
  text: string;
  user_id: number;
  image_url: string;
  is_fixed: boolean;
  is_activated: boolean;
  created_at: string;
  updated_at: string;
  user: User;
  status: string;
  meta: Meta;
}

export interface Meta {
  like_count: string;
  favorite_count: string;
  comments_count: string;
}
