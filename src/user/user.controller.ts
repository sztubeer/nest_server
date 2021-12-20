import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('用户')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: '显示活动列表' })
  async getAll(@Query('code') code:string) {
      console.log(code);
    const res = await this.userService.getUserIdByCode(code);
    return res;
  }
}
