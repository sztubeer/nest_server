import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
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
    const activity = await this.activityService.create(createActivityDto)
    return {
      code: 200,
      message: 'success'
    };
  }

  @Get(':id')
  @ApiOperation({summary:'获取活动详情'})
  async getOne(@Param('id') id: number){
    return this.activityService.getOne(id);
  }

  @Patch(':id')
  @ApiOperation({summary:'编辑活动'})
  async editOne(@Param('id') id: number, @Body() updateActivityDto: UpdateActivityDto){
    await this.activityService.editOne(id,updateActivityDto);
    return {
      code: 200,
      message: 'success',
      data: updateActivityDto,
    };
  }

  @Delete(':id')
  @ApiOperation({summary:'删除活动'})
  async deleteOne(@Param('id') id: number) {
    await this.activityService.deleteOne(id);
    return {
      code: 200,
      message: 'success'
    };
  }
}
