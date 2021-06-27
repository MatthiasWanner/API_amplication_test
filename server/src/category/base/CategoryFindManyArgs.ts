import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CategoryWhereInput } from "./CategoryWhereInput";
import { Type } from "class-transformer";
import { CategoryOrderByInput } from "./CategoryOrderByInput";

@ArgsType()
class CategoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CategoryWhereInput,
  })
  @Field(() => CategoryWhereInput, { nullable: true })
  @Type(() => CategoryWhereInput)
  where?: CategoryWhereInput;

  @ApiProperty({
    required: false,
    type: CategoryOrderByInput,
  })
  @Field(() => CategoryOrderByInput, { nullable: true })
  @Type(() => CategoryOrderByInput)
  orderBy?: CategoryOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CategoryFindManyArgs };
