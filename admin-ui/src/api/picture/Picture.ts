import { Album } from "../album/Album";
import { User } from "../user/User";

export type Picture = {
  albums?: Array<Album>;
  createdAt: Date;
  description: string | null;
  id: string;
  title: string;
  updatedAt: Date;
  url: string;
  user?: User;
};
