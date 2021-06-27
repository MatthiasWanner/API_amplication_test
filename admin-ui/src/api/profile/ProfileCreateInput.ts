import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  avatarUrl?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput;
};
