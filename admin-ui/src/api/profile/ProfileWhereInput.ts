import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileWhereInput = {
  avatarUrl?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
