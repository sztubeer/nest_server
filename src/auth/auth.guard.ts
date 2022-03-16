import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { INVALID_AUTH_INFO } from 'src/common/error.constant';
import { ExtRequest } from './auth.interface';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request: ExtRequest = context.switchToHttp().getRequest();
    if (request.user && request.user.id > 0) {
      return true;
    } else {
      throw new HttpException(INVALID_AUTH_INFO, HttpStatus.UNAUTHORIZED);
    }
  }
}
