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
    createActivityDto: CreateActivityDto,
  ): Promise<Activity> {
    const activity = this.activityRepository.create();

    activity.userId = createActivityDto.userId;
    activity.title = createActivityDto.title;
    activity.description = createActivityDto.description;
    activity.location = createActivityDto.location;
    activity.price = createActivityDto.price;
    activity.date = createActivityDto.date;
    activity.applies = createActivityDto.applies;
    activity.applied = createActivityDto.applied;
    activity.likes = createActivityDto.likes;
    activity.liked = createActivityDto.liked;
    activity.src = createActivityDto.src;

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
