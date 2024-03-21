import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VirementService } from './virement.service';
import { CreateVirementDto } from './dto/create-virement.dto';
import { UpdateVirementDto } from './dto/update-virement.dto';

@Controller('virement')
export class VirementController {
  constructor(private readonly virementService: VirementService) {}

  @Post()
  create(@Body() createVirementDto: CreateVirementDto) {
    return this.virementService.create(createVirementDto);
  }

  @Get()
  findAll() {
    return this.virementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.virementService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVirementDto: UpdateVirementDto) {
    return this.virementService.update(id, updateVirementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.virementService.remove(id);
  }
}
