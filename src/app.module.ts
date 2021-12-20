import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityModule } from './activity/activity.module';
import { SharedModule } from './shared/shared.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CacheModule.register(),
    ActivityModule,
    SharedModule,
    UserModule,
    AuthModule,
  ],

  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
