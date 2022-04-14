import { Module } from '@nestjs/common';
import { ActivityReviewService } from './activity-review.service';
import { ActivityReviewController } from './activity-review.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityReview } from './entities/activity-review.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ActivityReview])],
  controllers: [ActivityReviewController],
  providers: [ActivityReviewService]
})
export class ActivityReviewModule {}
