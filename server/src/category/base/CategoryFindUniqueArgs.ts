import { ArgsType, Field } from "@nestjs/graphql";
import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";

@ArgsType()
class CategoryFindUniqueArgs {
  @Field(() => CategoryWhereUniqueInput, { nullable: false })
  where!: CategoryWhereUniqueInput;
}

export { CategoryFindUniqueArgs };
