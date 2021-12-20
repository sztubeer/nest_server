import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/decorator/user.decorator';
import { RequestUser } from 'src/decorator/user.interface';
import { WxLoginResponseDto } from './auth.dto';
import { TokenService } from './token/token.service';

@Controller('login')
@ApiTags('登录')
export class AuthController {
  constructor(private readonly tokenService: TokenService){}

  @Get()
  async wxLogin(@User() user: RequestUser):Promise<WxLoginResponseDto>{
    if(user.id > 0 && user.authType === 'code') {
      const expiration = 3600 * 24 * 10

      const token = await this.tokenService.createToken(user.id, expiration)

      return { token, expiration }
    }

    throw('登录失败')
  }
}
