import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AlbumCreateInput = {
  published?: boolean | null;
  title: string;
  user: UserWhereUniqueInput;
};
