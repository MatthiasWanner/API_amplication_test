import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AlbumCreateInput = {
  published: boolean;
  title: string;
  user: UserWhereUniqueInput;
};
