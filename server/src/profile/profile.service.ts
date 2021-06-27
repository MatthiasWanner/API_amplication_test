import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProfileServiceBase } from "./base/profile.service.base";

@Injectable()
export class ProfileService extends ProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
