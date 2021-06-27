import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  avatarUrl?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
