import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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
  userId: string;
  @ApiProperty({ description: '举办地点' })
  @IsNotEmpty({ message: '请填写举办地点' })
  location: string;
  @ApiProperty({ description: '费用' })
  @IsNotEmpty({ message: '请填写费用' })
  price: number;
  @ApiProperty({ description: '活动日期' })
  @IsNotEmpty({ message: '请填写活动日期' })
  date: string;
  @ApiProperty({ description: '报名数' })
  applies: number;
  @ApiProperty({ description: '是否已报名' })
  @IsBoolean()
  applied: boolean;
  @ApiProperty({ description: '收藏数' })
  likes: number;
  @ApiProperty({ description: '是否已收藏' })
  liked: boolean;
  @ApiProperty({ description: '图片路径' })
  src: string;
  @ApiProperty({ description: '活动地点纬度' })
  latitude: number;
  @ApiProperty({ description: '活动地点经度' })
  longitude: number;
}

export class UpdateActivityDto {
  @ApiProperty({ description: '活动标题' })
  @IsNotEmpty({ message: '请填写标题' })
  title: string;
  @ApiProperty({ description: '活动详情' })
  @IsNotEmpty({ message: '请填写活动详情' })
  description: string;
  @ApiProperty({ description: '创建者' })
  @IsString()
  userId: string;
  @ApiProperty({ description: '举办地点' })
  @IsNotEmpty({ message: '请填写举办地点' })
  location: string;
  @ApiProperty({ description: '费用' })
  @IsNotEmpty({ message: '请填写费用' })
  price: number;
  @ApiProperty({ description: '活动日期' })
  @IsNotEmpty({ message: '请填写活动日期' })
  date: string;
  @ApiProperty({ description: '报名数' })
  applies: number;
  @ApiProperty({ description: '是否已报名' })
  @IsBoolean()
  applied: boolean;
  @ApiProperty({ description: '收藏数' })
  likes: number;
  @ApiProperty({ description: '是否已收藏' })
  liked: boolean;
  @ApiProperty({ description: '图片路径' })
  src: string;
  @ApiProperty({ description: '活动地点纬度' })
  latitude: number;
  @ApiProperty({ description: '活动地点经度' })
  longitude: number;
}
