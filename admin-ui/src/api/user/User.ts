import { Album } from "../album/Album";
import { Category } from "../category/Category";
import { Picture } from "../picture/Picture";
import { Profile } from "../profile/Profile";

export type User = {
  albums?: Array<Album>;
  categories?: Array<Category>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  pictures?: Array<Picture>;
  profiles?: Array<Profile>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
