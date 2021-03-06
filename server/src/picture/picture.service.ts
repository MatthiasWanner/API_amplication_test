import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PictureServiceBase } from "./base/picture.service.base";

@Injectable()
export class PictureService extends PictureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
