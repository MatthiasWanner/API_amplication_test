import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProfileService } from "./profile.service";
import { ProfileControllerBase } from "./base/profile.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("profiles")
@common.Controller("profiles")
export class ProfileController extends ProfileControllerBase {
  constructor(
    protected readonly service: ProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
