import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ActivityReviewService } from './activity-review.service';
import { CreateActivityReviewDto } from './dto/create-activity-review.dto';
import { ListDto } from './dto/list.dto';
import { UpdateActivityReviewDto } from './dto/update-activity-review.dto';

@Controller('activity-review')
export class ActivityReviewController {
  constructor(private readonly activityReviewService: ActivityReviewService) {}

  @Post()
  @ApiOperation({ summary: '创建举报数据' })
  create(@Body() createActivityReviewDto: CreateActivityReviewDto) {
    return this.activityReviewService.create(createActivityReviewDto);
  }

  @Get()
  @ApiOperation({ summary: '显示所有举报数据' })
  findAll(@Query() listDto: ListDto) {
    return this.activityReviewService.findAll(listDto);
  }

  @Get(':id')
  @ApiOperation({ summary: '显示某个举报数据' })
  findOne(@Param('id') id: string) {
    return this.activityReviewService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '修改举报数据' })
  update(@Param('id') id: string, @Body() updateActivityReviewDto: UpdateActivityReviewDto) {
    return this.activityReviewService.update(+id, updateActivityReviewDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除举报数据' })
  remove(@Param('id') id: string) {
    return this.activityReviewService.remove(+id);
  }
}
