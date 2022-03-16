import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ExtRequest, RequestUser } from './user.interface';

export const User = createParamDecorator(
  (data: undefined | keyof RequestUser, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<ExtRequest>();
    const user = request.user;
    if (data && typeof data === 'string' && typeof user === 'object') {
      return user[data];
    } else {
      return user;
    }
  },
);
