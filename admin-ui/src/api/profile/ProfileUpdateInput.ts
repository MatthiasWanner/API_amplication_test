import { UserWhereUniqueInput } from '../user/UserWhereUniqueInput';

export type ProfileUpdateInput = {
  avatarUrl?: string | null;
  description?: string | null;
  user: UserWhereUniqueInput;
};
