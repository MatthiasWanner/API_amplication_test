import { StringFilter } from '../../util/StringFilter';
import { BooleanFilter } from '../../util/BooleanFilter';
import { UserWhereUniqueInput } from '../user/UserWhereUniqueInput';

export type AlbumWhereInput = {
  id?: StringFilter;
  published?: BooleanFilter;
  title?: StringFilter;
  user?: UserWhereUniqueInput;
};
