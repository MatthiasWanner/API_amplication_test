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
import { CreateAlbumArgs } from "./CreateAlbumArgs";
import { UpdateAlbumArgs } from "./UpdateAlbumArgs";
import { DeleteAlbumArgs } from "./DeleteAlbumArgs";
import { AlbumFindManyArgs } from "./AlbumFindManyArgs";
import { AlbumFindUniqueArgs } from "./AlbumFindUniqueArgs";
import { Album } from "./Album";
import { AlbumService } from "../album.service";

@graphql.Resolver(() => Album)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class AlbumResolverBase {
  constructor(
    protected readonly service: AlbumService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Album",
    action: "read",
    possession: "any",
  })
  async _albumsMeta(
    @graphql.Args() args: AlbumFindManyArgs
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

  @graphql.Query(() => [Album])
  @nestAccessControl.UseRoles({
    resource: "Album",
    action: "read",
    possession: "any",
  })
  async albums(
    @graphql.Args() args: AlbumFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Album[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Album",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Album, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Album",
    action: "read",
    possession: "own",
  })
  async album(
    @graphql.Args() args: AlbumFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Album | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Album",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Album)
  @nestAccessControl.UseRoles({
    resource: "Album",
    action: "create",
    possession: "any",
  })
  async createAlbum(
    @graphql.Args() args: CreateAlbumArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Album> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Album",
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
        `providing the properties: ${properties} on ${"Album"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Album)
  @nestAccessControl.UseRoles({
    resource: "Album",
    action: "update",
    possession: "any",
  })
  async updateAlbum(
    @graphql.Args() args: UpdateAlbumArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Album | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Album",
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
        `providing the properties: ${properties} on ${"Album"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => Album)
  @nestAccessControl.UseRoles({
    resource: "Album",
    action: "delete",
    possession: "any",
  })
  async deleteAlbum(
    @graphql.Args() args: DeleteAlbumArgs
  ): Promise<Album | null> {
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
