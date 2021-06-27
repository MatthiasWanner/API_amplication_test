import { Picture as TPicture } from "../api/picture/Picture";

export const PICTURE_TITLE_FIELD = "title";

export const PictureTitle = (record: TPicture) => {
  return record.title;
};
