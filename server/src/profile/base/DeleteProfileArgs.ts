import { ArgsType, Field } from "@nestjs/graphql";
import { ProfileWhereUniqueInput } from "./ProfileWhereUniqueInput";

@ArgsType()
class DeleteProfileArgs {
  @Field(() => ProfileWhereUniqueInput, { nullable: false })
  where!: ProfileWhereUniqueInput;
}

export { DeleteProfileArgs };
