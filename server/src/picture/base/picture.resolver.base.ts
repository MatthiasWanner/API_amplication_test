import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreatePictureArgs } from "./CreatePictureArgs";
import { UpdatePictureArgs } from "./UpdatePictureArgs";
import { DeletePictureArgs } from "./DeletePictureArgs";
import { PictureFindManyArgs } from "./PictureFindManyArgs";
import { PictureFindUniqueArgs } from "./PictureFindUniqueArgs";
import { Picture } from "./Picture";
import { PictureService } from "../picture.service";

@graphql.Resolver(() => Picture)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class PictureResolverBase {
  constructor(
    protected readonly service: PictureService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Picture",
    action: "read",
    possession: "any",
  })
  async _picturesMeta(
    @graphql.Args() args: PictureFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Picture])
  @nestAccessControl.UseRoles({
    resource: "Picture",
    action: "read",
    possession: "any",
  })
  async pictures(
    @graphql.Args() args: PictureFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Picture[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Picture",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Picture, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Picture",
    action: "read",
    possession: "own",
  })
  async picture(
    @graphql.Args() args: PictureFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Picture | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Picture",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Picture)
  @nestAccessControl.UseRoles({
    resource: "Picture",
    action: "create",
    possession: "any",
  })
  async createPicture(
    @graphql.Args() args: CreatePictureArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Picture> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Picture",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Picture"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Picture)
  @nestAccessControl.UseRoles({
    resource: "Picture",
    action: "update",
    possession: "any",
  })
  async updatePicture(
    @graphql.Args() args: UpdatePictureArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Picture | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Picture",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Picture"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Picture)
  @nestAccessControl.UseRoles({
    resource: "Picture",
    action: "delete",
    possession: "any",
  })
  async deletePicture(
    @graphql.Args() args: DeletePictureArgs
  ): Promise<Picture | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
