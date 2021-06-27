import { Module } from "@nestjs/common";
import { PictureModuleBase } from "./base/picture.module.base";
import { PictureService } from "./picture.service";
import { PictureController } from "./picture.controller";
import { PictureResolver } from "./picture.resolver";

@Module({
  imports: [PictureModuleBase],
  controllers: [PictureController],
  providers: [PictureService, PictureResolver],
  exports: [PictureService],
})
export class PictureModule {}
