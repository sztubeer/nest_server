import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateActivityDto, GetActivityDto, UpdateActivityDto } from './activity.dto';
import { ActivityService } from './activity.service';

@Controller('activity')
@ApiTags('活动')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  @ApiOperation({summary:'显示活动列表'})
  async getAll(@Query() getActiviriesDTO: GetActivityDto) {
    const list = await this.activityService.getAll(getActiviriesDTO);
    return list;
  }

  @Post()
  @ApiOperation({summary:'创建活动'})
  async create(@Body() createActivityDto: CreateActivityDto){
    const userId = 123;
    const activity = await this.activityService.create(userId, createActivityDto)
    return activity.id;
  }

  @Get(':id')
  @ApiOperation({summary:'获取活动详情'})
  getOne(@Param('id') id: number){
    return this.activityService.getOne(id);
  }

  @Put(':id')
  @ApiOperation({summary:'编辑活动'})
  editOne(@Param('id') id: number, @Body() updateActivityDto: UpdateActivityDto){
    return this.activityService.editOne(id,updateActivityDto);
  }

  @Delete(':id')
  @ApiOperation({summary:'删除活动'})
  deleteOne(@Param('id') id: number) {
    return this.activityService.deleteOne(id);
  }
}
