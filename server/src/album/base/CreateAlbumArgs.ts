import { ArgsType, Field } from "@nestjs/graphql";
import { AlbumCreateInput } from "./AlbumCreateInput";

@ArgsType()
class CreateAlbumArgs {
  @Field(() => AlbumCreateInput, { nullable: false })
  data!: AlbumCreateInput;
}

export { CreateAlbumArgs };
