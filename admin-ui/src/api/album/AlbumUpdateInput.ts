import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AlbumUpdateInput = {
  published?: boolean | null;
  title?: string;
  user?: UserWhereUniqueInput;
};
