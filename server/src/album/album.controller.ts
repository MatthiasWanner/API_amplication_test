import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AlbumService } from "./album.service";
import { AlbumControllerBase } from "./base/album.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("albums")
@common.Controller("albums")
export class AlbumController extends AlbumControllerBase {
  constructor(
    protected readonly service: AlbumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
