import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CategoryCreateInput = {
  name: string;
  user: UserWhereUniqueInput;
};
