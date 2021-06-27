import { ArgsType, Field } from "@nestjs/graphql";
import { AlbumWhereUniqueInput } from "./AlbumWhereUniqueInput";

@ArgsType()
class AlbumFindUniqueArgs {
  @Field(() => AlbumWhereUniqueInput, { nullable: false })
  where!: AlbumWhereUniqueInput;
}

export { AlbumFindUniqueArgs };
