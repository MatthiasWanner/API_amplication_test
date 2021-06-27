import { PictureWhereInput } from "./PictureWhereInput";
import { PictureOrderByInput } from "./PictureOrderByInput";

export type PictureFindManyArgs = {
  where?: PictureWhereInput;
  orderBy?: PictureOrderByInput;
  skip?: number;
  take?: number;
};
