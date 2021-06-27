import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AlbumWhereInput = {
  id?: StringFilter;
  published?: BooleanNullableFilter;
  title?: StringFilter;
  user?: UserWhereUniqueInput;
};
