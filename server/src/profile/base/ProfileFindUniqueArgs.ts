import { ArgsType, Field } from "@nestjs/graphql";
import { ProfileWhereUniqueInput } from "./ProfileWhereUniqueInput";

@ArgsType()
class ProfileFindUniqueArgs {
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  where!: ProfileWhereUniqueInput;
}

export { ProfileFindUniqueArgs };
