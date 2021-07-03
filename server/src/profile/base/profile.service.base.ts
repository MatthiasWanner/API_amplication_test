import { PrismaService } from "nestjs-prisma";
import { Prisma, Profile, User } from "@prisma/client";

export class ProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProfileFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileFindManyArgs>
  ): Promise<number> {
    return this.prisma.profile.count(args);
  }

  async findMany<T extends Prisma.ProfileFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileFindManyArgs>
  ): Promise<Profile[]> {
    return this.prisma.profile.findMany(args);
  }
  async findOne<T extends Prisma.ProfileFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileFindUniqueArgs>
  ): Promise<Profile | null> {
    return this.prisma.profile.findUnique(args);
  }
  async create<T extends Prisma.ProfileCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileCreateArgs>
  ): Promise<Profile> {
    return this.prisma.profile.create<T>(args);
  }
  async update<T extends Prisma.ProfileUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileUpdateArgs>
  ): Promise<Profile> {
    return this.prisma.profile.update<T>(args);
  }
  async delete<T extends Prisma.ProfileDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProfileDeleteArgs>
  ): Promise<Profile> {
    return this.prisma.profile.delete(args);
  }

  async findUser(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.profile
      .findUnique({
        where: { id: parentId },
      })
      .user(args);
  }
}
