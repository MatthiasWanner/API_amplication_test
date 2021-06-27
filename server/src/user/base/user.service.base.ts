import { PrismaService } from 'nestjs-prisma';
import {
  Prisma,
  User,
  Album,
  Category,
  Picture,
  Profile,
} from '@prisma/client';
import { PasswordService } from '../../auth/password.service';
import { transformStringFieldUpdateInput } from '../../prisma.util';

export class UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {}

  async count<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<number> {
    return this.prisma.user.count(args);
  }

  async findMany<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<User[]> {
    return this.prisma.user.findMany(args);
  }
  async findOne<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>
  ): Promise<User | null> {
    return this.prisma.user.findUnique(args);
  }
  async create<T extends Prisma.UserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>
  ): Promise<User> {
    return this.prisma.user.create<T>({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
  }
  async update<T extends Prisma.UserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>
  ): Promise<User> {
    return this.prisma.user.update<T>({
      ...args,

      data: {
        ...args.data,

        password:
          args.data.password &&
          (await transformStringFieldUpdateInput(
            args.data.password,
            (password) => this.passwordService.hash(password)
          )),
      },
    });
  }
  async delete<T extends Prisma.UserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>
  ): Promise<User> {
    return this.prisma.user.delete(args);
  }

  async findAlbums(
    parentId: string,
    args: Prisma.AlbumFindManyArgs
  ): Promise<Album[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .albums(args);
  }

  async findCategories(
    parentId: string,
    args: Prisma.CategoryFindManyArgs
  ): Promise<Category[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .categories(args);
  }

  async findPictures(
    parentId: string,
    args: Prisma.PictureFindManyArgs
  ): Promise<Picture[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .pictures(args);
  }

  async getProfile(parentId: string): Promise<Profile | null> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .profile();
  }
}
