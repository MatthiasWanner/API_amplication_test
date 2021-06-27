import { ArgsType, Field } from "@nestjs/graphql";
import { PictureWhereUniqueInput } from "./PictureWhereUniqueInput";

@ArgsType()
class PictureFindUniqueArgs {
  @Field(() => PictureWhereUniqueInput, { nullable: false })
  where!: PictureWhereUniqueInput;
}

export { PictureFindUniqueArgs };
