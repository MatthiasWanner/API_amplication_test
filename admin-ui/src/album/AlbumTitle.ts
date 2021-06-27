import { Album as TAlbum } from "../api/album/Album";

export const ALBUM_TITLE_FIELD = "title";

export const AlbumTitle = (record: TAlbum) => {
  return record.title;
};
