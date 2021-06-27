import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PictureWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringFilter;
  url?: StringFilter;
};
