import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateActivityReviewDto {
  @ApiProperty({ description: '用户名' })
  @IsNotEmpty({ message: '请输入用户名' })
  readonly username: string;        

  @ApiProperty({ description: '被举报活动id' })
  @IsNotEmpty({ message: '请输入被举报活动id' })
  readonly activity_id: number;        

  @ApiProperty({ description: '举报类别' })
  @IsNotEmpty({ message: '请选择举报类别' })
  readonly cate_id: number;        

  @ApiProperty({ description: '举报内容' })
  @IsNotEmpty({ message: '请输入举报内容' })
  readonly content: string;       
}
