import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PictureUpdateInput = {
  description?: string | null;
  title?: string;
  url?: string;
  user?: UserWhereUniqueInput;
};
