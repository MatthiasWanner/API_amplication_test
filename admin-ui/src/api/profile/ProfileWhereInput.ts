import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProfileWhereInput = {
  avatarUrl?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
};
