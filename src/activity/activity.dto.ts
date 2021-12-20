import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GetActivityDto {
  @ApiProperty({ description: '页数', required: false })
  @IsNumber()
  page?: number;
  @ApiProperty({ description: '页码', required: false })
  @IsNumber()
  size?: number;
}

export class CreateActivityDto {
  @ApiProperty({ description: '活动标题' })
  @IsNotEmpty({ message: '请填写标题' })
  title: string;
  @ApiProperty({ description: '活动详情' })
  @IsNotEmpty({ message: '请填写活动详情' })
  description: string;
  @ApiProperty({ description: '创建者' })
  @IsString()
  userId: number;
  @ApiProperty({ description: '举办地点' })
  @IsNotEmpty({ message: '请填写举办地点' })
  address: string;
  @ApiProperty({ description: '费用' })
  @IsNotEmpty({ message: '请填写费用' })
  cost: number;
  @ApiProperty({ description: '开始时间' })
  @IsNotEmpty({ message: '请填写开始时间' })
  startTime: string;
}

export class UpdateActivityDto {
  @ApiProperty({ description: '活动标题' })
  @IsNotEmpty({ message: '请填写标题' })
  title: string;
  @ApiProperty({ description: '活动详情' })
  @IsNotEmpty({ message: '请填写活动详情' })
  description: string;
  @ApiProperty({ description: '举办地点' })
  @IsNotEmpty({ message: '请填写举办地点' })
  address: string;
  @ApiProperty({ description: '费用' })
  @IsNotEmpty({ message: '请填写费用' })
  cost: number;
  @ApiProperty({ description: '开始时间' })
  @IsNotEmpty({ message: '请填写开始时间' })
  startTime: string;
}
