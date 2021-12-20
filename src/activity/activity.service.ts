import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateActivityDto,
  GetActivityDto,
  UpdateActivityDto,
} from './activity.dto';
import { Activity } from './activity.entity';

export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
  ) {}

  create(
    userId: number,
    createActivityDto: CreateActivityDto,
  ): Promise<Activity> {
    const activity = this.activityRepository.create();

    activity.userId = userId;
    activity.title = createActivityDto.title;
    activity.description = createActivityDto.description;
    activity.address = createActivityDto.address;
    activity.cost = createActivityDto.cost;
    activity.startTime = createActivityDto.startTime;

    return this.activityRepository.save(activity);
  }

  async getAll({ page = 1, size = 10 }: GetActivityDto) {
    const list = await this.activityRepository.find({
      skip: (page - 1) * size,
      take: size,
      order: { id: 'DESC' },
    });
    const total = await this.activityRepository.count();
    return {
      list,
      page: Number(page),
      size: Number(size),
      total,
    };
  }

  async getOne(id: number): Promise<Activity> {
    const activity = await this.activityRepository.findOne(id);
    return activity;
  }

  deleteOne(id: number) {
    return this.activityRepository.delete(id);
  }

  editOne(id: number, updateActivityDto: UpdateActivityDto) {
    return this.activityRepository.update(id, updateActivityDto);
  }
}
