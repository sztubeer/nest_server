import { CacheModule, Global, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TokenModule } from './token/token.module';
import { TokenService } from './token/token.service';

@Global()
@Module({
  imports: [TokenModule],
  controllers: [AuthController],
  providers:[TokenService],
  exports:[TokenService]
})
export class AuthModule {}
