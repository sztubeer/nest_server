import { Test, TestingModule } from '@nestjs/testing';
import { ActivityReviewController } from './activity-review.controller';
import { ActivityReviewService } from './activity-review.service';

describe('ActivityReviewController', () => {
  let controller: ActivityReviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityReviewController],
      providers: [ActivityReviewService],
    }).compile();

    controller = module.get<ActivityReviewController>(ActivityReviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
