import { ArgsType, Field } from "@nestjs/graphql";
import { AlbumWhereUniqueInput } from "./AlbumWhereUniqueInput";

@ArgsType()
class DeleteAlbumArgs {
  @Field(() => AlbumWhereUniqueInput, { nullable: false })
  where!: AlbumWhereUniqueInput;
}

export { DeleteAlbumArgs };
