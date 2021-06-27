import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CategoryUpdateInput = {
  name?: string;
  user?: UserWhereUniqueInput;
};
