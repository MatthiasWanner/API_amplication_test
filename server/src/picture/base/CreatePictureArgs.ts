import { ArgsType, Field } from "@nestjs/graphql";
import { PictureCreateInput } from "./PictureCreateInput";

@ArgsType()
class CreatePictureArgs {
  @Field(() => PictureCreateInput, { nullable: false })
  data!: PictureCreateInput;
}

export { CreatePictureArgs };
