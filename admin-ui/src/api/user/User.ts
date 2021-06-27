import { Album } from '../album/Album';
import { Category } from '../category/Category';
import { Picture } from '../picture/Picture';
import { Profile } from '../profile/Profile';

export type User = {
  albums?: Array<Album>;
  categories?: Array<Category>;
  createdAt: Date;
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  pictures?: Array<Picture>;
  profile?: Profile | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
