import { Module } from "@nestjs/common";
import { AlbumModuleBase } from "./base/album.module.base";
import { AlbumService } from "./album.service";
import { AlbumController } from "./album.controller";
import { AlbumResolver } from "./album.resolver";

@Module({
  imports: [AlbumModuleBase],
  controllers: [AlbumController],
  providers: [AlbumService, AlbumResolver],
  exports: [AlbumService],
})
export class AlbumModule {}
