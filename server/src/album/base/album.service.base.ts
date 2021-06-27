import { PrismaService } from "nestjs-prisma";
import { Prisma, Album, Category, Picture, User } from "@prisma/client";

export class AlbumServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AlbumFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AlbumFindManyArgs>
  ): Promise<number> {
    return this.prisma.album.count(args);
  }

  async findMany<T extends Prisma.AlbumFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AlbumFindManyArgs>
  ): Promise<Album[]> {
    return this.prisma.album.findMany(args);
  }
  async findOne<T extends Prisma.AlbumFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AlbumFindUniqueArgs>
  ): Promise<Album | null> {
    return this.prisma.album.findUnique(args);
  }
  async create<T extends Prisma.AlbumCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AlbumCreateArgs>
  ): Promise<Album> {
    return this.prisma.album.create<T>(args);
  }
  async update<T extends Prisma.AlbumUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AlbumUpdateArgs>
  ): Promise<Album> {
    return this.prisma.album.update<T>(args);
  }
  async delete<T extends Prisma.AlbumDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AlbumDeleteArgs>
  ): Promise<Album> {
    return this.prisma.album.delete(args);
  }

  async findCategories(
    parentId: string,
    args: Prisma.CategoryFindManyArgs
  ): Promise<Category[]> {
    return this.prisma.album
      .findUnique({
        where: { id: parentId },
      })
      .categories(args);
  }

  async findPictures(
    parentId: string,
    args: Prisma.PictureFindManyArgs
  ): Promise<Picture[]> {
    return this.prisma.album
      .findUnique({
        where: { id: parentId },
      })
      .pictures(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.album
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
