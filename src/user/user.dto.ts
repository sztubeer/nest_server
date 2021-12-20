import { ApiProperty } from "@nestjs/swagger";

export class GetUserDto {
  @ApiProperty({description: 'code'})
  code:string;
}
