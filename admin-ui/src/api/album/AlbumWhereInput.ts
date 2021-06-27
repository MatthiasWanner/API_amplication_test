import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type AlbumWhereInput = {
  id?: StringFilter;
  published?: BooleanNullableFilter;
  title?: StringFilter;
};
