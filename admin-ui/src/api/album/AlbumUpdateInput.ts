import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AlbumUpdateInput = {
  published?: boolean;
  title?: string;
  user?: UserWhereUniqueInput;
};
