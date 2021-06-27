import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PictureWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringFilter;
  url?: StringFilter;
  user?: UserWhereUniqueInput;
};
