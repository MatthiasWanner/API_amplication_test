import { ArgsType, Field } from "@nestjs/graphql";
import { AlbumWhereUniqueInput } from "./AlbumWhereUniqueInput";
import { AlbumUpdateInput } from "./AlbumUpdateInput";

@ArgsType()
class UpdateAlbumArgs {
  @Field(() => AlbumWhereUniqueInput, { nullable: false })
  where!: AlbumWhereUniqueInput;
  @Field(() => AlbumUpdateInput, { nullable: false })
  data!: AlbumUpdateInput;
}

export { UpdateAlbumArgs };
