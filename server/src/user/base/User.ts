import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Album } from "../../album/base/Album";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Category } from "../../category/base/Category";
import { Picture } from "../../picture/base/Picture";
import { Profile } from "../../profile/base/Profile";
@ObjectType()
class User {
  @ApiProperty({
    required: false,
    type: () => [Album],
  })
  @ValidateNested()
  @Type(() => Album)
  @IsOptional()
  albums?: Array<Album>;

  @ApiProperty({
    required: false,
    type: () => [Category],
  })
  @ValidateNested()
  @Type(() => Category)
  @IsOptional()
  categories?: Array<Category>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Picture],
  })
  @ValidateNested()
  @Type(() => Picture)
  @IsOptional()
  pictures?: Array<Picture>;

  @ApiProperty({
    required: false,
    type: () => [Profile],
  })
  @ValidateNested()
  @Type(() => Profile)
  @IsOptional()
  profiles?: Array<Profile>;

  @ApiProperty({
    required: true,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { User };
