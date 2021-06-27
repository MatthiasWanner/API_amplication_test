import { ArgsType, Field } from "@nestjs/graphql";
import { ProfileWhereUniqueInput } from "./ProfileWhereUniqueInput";
import { ProfileUpdateInput } from "./ProfileUpdateInput";

@ArgsType()
class UpdateProfileArgs {
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  where!: ProfileWhereUniqueInput;
  @Field(() => ProfileUpdateInput, { nullable: false })
  data!: ProfileUpdateInput;
}

export { UpdateProfileArgs };
