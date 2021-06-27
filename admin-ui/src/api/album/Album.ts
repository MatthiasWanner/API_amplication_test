import { Category } from "../category/Category";
import { Picture } from "../picture/Picture";
import { User } from "../user/User";

export type Album = {
  categories?: Array<Category>;
  createdAt: Date;
  id: string;
  pictures?: Array<Picture>;
  published: boolean | null;
  title: string;
  updatedAt: Date;
  user?: User;
};
