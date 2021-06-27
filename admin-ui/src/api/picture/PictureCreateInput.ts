import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PictureCreateInput = {
  description?: string | null;
  title: string;
  url: string;
  user: UserWhereUniqueInput;
};
