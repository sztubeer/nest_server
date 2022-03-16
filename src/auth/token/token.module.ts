import { Module } from '@nestjs/common';
import { TokenService } from './token.service';

@Module({
  // imports: [CacheModule.register()],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
