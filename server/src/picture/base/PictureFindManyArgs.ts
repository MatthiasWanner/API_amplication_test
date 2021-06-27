import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PictureWhereInput } from "./PictureWhereInput";
import { Type } from "class-transformer";
import { PictureOrderByInput } from "./PictureOrderByInput";

@ArgsType()
class PictureFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PictureWhereInput,
  })
  @Field(() => PictureWhereInput, { nullable: true })
  @Type(() => PictureWhereInput)
  where?: PictureWhereInput;

  @ApiProperty({
    required: false,
    type: PictureOrderByInput,
  })
  @Field(() => PictureOrderByInput, { nullable: true })
  @Type(() => PictureOrderByInput)
  orderBy?: PictureOrderByInput;

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

export { PictureFindManyArgs };
