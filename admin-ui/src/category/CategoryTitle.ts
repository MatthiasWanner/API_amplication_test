import { Category as TCategory } from "../api/category/Category";

export const CATEGORY_TITLE_FIELD = "name";

export const CategoryTitle = (record: TCategory) => {
  return record.name;
};
