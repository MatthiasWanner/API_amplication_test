import { Album } from "../album/Album";
import { User } from "../user/User";

export type Category = {
  albums?: Array<Album>;
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
  user?: User;
};
