import { ArgsType, Field } from "@nestjs/graphql";
import { PictureWhereUniqueInput } from "./PictureWhereUniqueInput";
import { PictureUpdateInput } from "./PictureUpdateInput";

@ArgsType()
class UpdatePictureArgs {
  @Field(() => PictureWhereUniqueInput, { nullable: false })
  where!: PictureWhereUniqueInput;
  @Field(() => PictureUpdateInput, { nullable: false })
  data!: PictureUpdateInput;
}

export { UpdatePictureArgs };
