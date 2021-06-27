import { ObjectType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../../category/base/Category';
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Picture } from '../../picture/base/Picture';
import { User } from '../../user/base/User';
@ObjectType()
class Album {
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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Picture],
  })
  @ValidateNested()
  @Type(() => Picture)
  @IsOptional()
  pictures?: Array<Picture>;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  published!: boolean;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  user?: User;
}
export { Album };
