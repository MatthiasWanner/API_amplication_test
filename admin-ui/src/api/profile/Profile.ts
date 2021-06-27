import { User } from "../user/User";

export type Profile = {
  avatarUrl: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
