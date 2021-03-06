import {
  CacheModule,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityModule } from './activity/activity.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './auth/auth.middleware';
import { Activity } from './activity/activity.entity';
import { UserInfo } from './user/user-info/user-info.entity';
import { UserEntity } from './user/user.entity';
import { ActivityReviewModule } from './activity-review/activity-review.module';
import { ActivityReview } from './activity-review/entities/activity-review.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'Sztubeer@123',
      database: 'nest',
      // entities: ["dist/**/*.entity{.ts,.js}"],
      entities: [Activity, UserInfo, UserEntity, ActivityReview],
      synchronize: true,
    }),
    CacheModule.register({
      isGlobal: true,
    }),
    ActivityModule,
    SharedModule,
    UserModule,
    AuthModule,
    ActivityReviewModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    /** 中间件列表 */
    const middlewares = [AuthMiddleware];

    consumer
      .apply(...middlewares)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
