import { ArgsType, Field } from "@nestjs/graphql";
import { ProfileCreateInput } from "./ProfileCreateInput";

@ArgsType()
class CreateProfileArgs {
  @Field(() => ProfileCreateInput, { nullable: false })
  data!: ProfileCreateInput;
}

export { CreateProfileArgs };
