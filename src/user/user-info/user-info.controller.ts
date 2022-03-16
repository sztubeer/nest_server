import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/decorator/user.decorator';
import {
  GetUserInfoResponseDto,
  UpdateUserInfoRequestDto,
  UpdateUserInfoResponseDto,
} from './user-info.dto';
import { UserInfoService } from './user-info.service';

@Controller('userinfo')
@ApiTags('用户信息')
@UseGuards(AuthGuard)
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}

  /**
   * 获取用户个人信息
   */
  @Get()
  async getUserInfo(
    @User('id') userId: number,
  ): Promise<GetUserInfoResponseDto> {
    const result = await this.userInfoService.getUserInfo(userId);

    return plainToClass(GetUserInfoResponseDto, result);
  }

  /**
   * 更新用户个人信息
   *
   *
   * ### 说明
   *
   * ```markdown
   * 1. 可单项更新。（因此请求方法使用 `PUT` 而不是 `POST`）
   * ```
   */
  @Put()
  async updateUserInfo(
    @User('id') userId: number,
    @Body() body: UpdateUserInfoRequestDto,
  ): Promise<UpdateUserInfoResponseDto> {
    const result = await this.userInfoService.updateUserInfo(userId, body);

    return plainToClass(UpdateUserInfoResponseDto, result);
  }
}
