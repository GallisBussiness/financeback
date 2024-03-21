import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutorisationService } from './autorisation.service';
import { CreateAutorisationDto } from './dto/create-autorisation.dto';
import { UpdateAutorisationDto } from './dto/update-autorisation.dto';

@Controller('autorisation')
export class AutorisationController {
  constructor(private readonly autorisationService: AutorisationService) {}

  @Post()
  create(@Body() createAutorisationDto: CreateAutorisationDto) {
    return this.autorisationService.create(createAutorisationDto);
  }

  @Get()
  findAll() {
    return this.autorisationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autorisationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutorisationDto: UpdateAutorisationDto) {
    return this.autorisationService.update(id, updateAutorisationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autorisationService.remove(id);
  }
}
