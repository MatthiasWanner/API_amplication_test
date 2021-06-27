import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProfileWhereInput } from "./ProfileWhereInput";
import { Type } from "class-transformer";
import { ProfileOrderByInput } from "./ProfileOrderByInput";

@ArgsType()
class ProfileFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProfileWhereInput,
  })
  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  where?: ProfileWhereInput;

  @ApiProperty({
    required: false,
    type: ProfileOrderByInput,
  })
  @Field(() => ProfileOrderByInput, { nullable: true })
  @Type(() => ProfileOrderByInput)
  orderBy?: ProfileOrderByInput;

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

export { ProfileFindManyArgs };
