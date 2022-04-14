import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateActivityReviewDto } from './dto/create-activity-review.dto';
import { ListDto } from './dto/list.dto';
import { UpdateActivityReviewDto } from './dto/update-activity-review.dto';
import { ActivityReview } from './entities/activity-review.entity';

@Injectable()
export class ActivityReviewService {
  constructor(
    @InjectRepository(ActivityReview)
    private readonly activityReviewRepository: Repository<ActivityReview>
  ) { }

  async create(createActivityReviewDto: CreateActivityReviewDto) {
    const { username, activity_id, cate_id, content } = createActivityReviewDto;
    const newReview = await this.activityReviewRepository.create();
    newReview.username = username;
    newReview.activity_id = activity_id;
    newReview.cate_id = cate_id;
    newReview.content = content;
    await this.activityReviewRepository.save(newReview);
    return ;
  }

  async findAll(listDto:ListDto) { 
    const {page = 1, pageSize = 10} = listDto;
    return await this.activityReviewRepository
      .createQueryBuilder('activityReview')
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .orderBy("activityReview.id", 'DESC')
      .getManyAndCount();
  }

  async findOne(id: number) {
    return await this.activityReviewRepository.findOne(id)
  }

  async update(id: number, updateActivityReviewDto: UpdateActivityReviewDto) {
    let reviewToUpdate = await this.activityReviewRepository.findOne(id);
    if (!reviewToUpdate)  throw new NotFoundException('此数据不存在');
    const { username, activity_id, cate_id, content } = updateActivityReviewDto;
    reviewToUpdate.username = username;
    reviewToUpdate.activity_id = activity_id;
    reviewToUpdate.cate_id = cate_id;
    reviewToUpdate.content = content;
    await this.activityReviewRepository.save(reviewToUpdate);
  }

  async remove(id: number) {
    let reviewToDelete = await this.activityReviewRepository.findOne(id);
    if (!reviewToDelete) throw new NotFoundException('此数据不存在');
    await this.activityReviewRepository.delete(id);
    return;
  }
}
