import { ArgsType, Field } from "@nestjs/graphql";
import { PictureWhereUniqueInput } from "./PictureWhereUniqueInput";

@ArgsType()
class DeletePictureArgs {
  @Field(() => PictureWhereUniqueInput, { nullable: false })
  where!: PictureWhereUniqueInput;
}

export { DeletePictureArgs };
