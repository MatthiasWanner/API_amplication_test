import { SortOrder } from "../../util/SortOrder";

export type AlbumOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  published?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
