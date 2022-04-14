import { Test, TestingModule } from '@nestjs/testing';
import { ActivityReviewService } from './activity-review.service';

describe('ActivityReviewService', () => {
  let service: ActivityReviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivityReviewService],
    }).compile();

    service = module.get<ActivityReviewService>(ActivityReviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
