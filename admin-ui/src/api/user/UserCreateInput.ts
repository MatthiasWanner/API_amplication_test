import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type UserCreateInput = {
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  profile?: ProfileWhereUniqueInput | null;
  roles: Array<string>;
  username: string;
};
