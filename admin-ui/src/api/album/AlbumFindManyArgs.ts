import { AlbumWhereInput } from "./AlbumWhereInput";
import { AlbumOrderByInput } from "./AlbumOrderByInput";

export type AlbumFindManyArgs = {
  where?: AlbumWhereInput;
  orderBy?: AlbumOrderByInput;
  skip?: number;
  take?: number;
};
