import { Injectable, NestMiddleware } from '@nestjs/common';
import { ExtRequest, RequestUser } from './auth.interface'
import { Response, NextFunction } from 'express';
import { TokenService } from './token/token.service';

// 鉴权中间件
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly tokenService: TokenService){}
  async use(request: ExtRequest,response: Response, next: NextFunction):Promise<void> {
    const user: RequestUser = request.user || { id: 0, authType: 'none'};

    const authValue = request.get('authorization');

    if(authValue){
      const [type, value] = authValue.split(' ');
      if(type && type.toUpperCase() === 'TOKEN'){
        user.id = await this.tokenService.getUserIdByToken(value);
        user.authType = 'token';
      }
    }

    request.user = user;

    next();
  }
}
