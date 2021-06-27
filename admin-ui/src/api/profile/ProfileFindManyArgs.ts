import { ProfileWhereInput } from "./ProfileWhereInput";
import { ProfileOrderByInput } from "./ProfileOrderByInput";

export type ProfileFindManyArgs = {
  where?: ProfileWhereInput;
  orderBy?: ProfileOrderByInput;
  skip?: number;
  take?: number;
};
