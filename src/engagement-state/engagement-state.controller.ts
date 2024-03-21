import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EngagementStateService } from './engagement-state.service';
import { CreateEngagementStateDto } from './dto/create-engagement-state.dto';
import { UpdateEngagementStateDto } from './dto/update-engagement-state.dto';

@Controller('engagement-state')
export class EngagementStateController {
  constructor(private readonly engagementStateService: EngagementStateService) {}

  @Post()
  create(@Body() createEngagementStateDto: CreateEngagementStateDto) {
    return this.engagementStateService.create(createEngagementStateDto);
  }

  @Get('byengagement/:id')
  findByEngagement(@Param('id') id: string) {
    return this.engagementStateService.findByEngagement(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEngagementStateDto: UpdateEngagementStateDto) {
    return this.engagementStateService.update(id, updateEngagementStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.engagementStateService.remove(id);
  }
}
