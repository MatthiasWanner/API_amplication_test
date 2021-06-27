import { PrismaService } from "nestjs-prisma";
import { Prisma, Picture, Album, User } from "@prisma/client";

export class PictureServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PictureFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PictureFindManyArgs>
  ): Promise<number> {
    return this.prisma.picture.count(args);
  }

  async findMany<T extends Prisma.PictureFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PictureFindManyArgs>
  ): Promise<Picture[]> {
    return this.prisma.picture.findMany(args);
  }
  async findOne<T extends Prisma.PictureFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PictureFindUniqueArgs>
  ): Promise<Picture | null> {
    return this.prisma.picture.findUnique(args);
  }
  async create<T extends Prisma.PictureCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PictureCreateArgs>
  ): Promise<Picture> {
    return this.prisma.picture.create<T>(args);
  }
  async update<T extends Prisma.PictureUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PictureUpdateArgs>
  ): Promise<Picture> {
    return this.prisma.picture.update<T>(args);
  }
  async delete<T extends Prisma.PictureDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PictureDeleteArgs>
  ): Promise<Picture> {
    return this.prisma.picture.delete(args);
  }

  async findAlbums(
    parentId: string,
    args: Prisma.AlbumFindManyArgs
  ): Promise<Album[]> {
    return this.prisma.picture
      .findUnique({
        where: { id: parentId },
      })
      .albums(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.picture
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
