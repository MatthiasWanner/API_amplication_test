import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CategoryWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  user?: UserWhereUniqueInput;
};
