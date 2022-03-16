import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityController } from './activity.controller';
import { Activity } from './activity.entity';
import { ActivityService } from './activity.service';

@Module({
  providers: [ActivityService],
  imports: [TypeOrmModule.forFeature([Activity])],
  controllers: [ActivityController],
})
export class ActivityModule {}
