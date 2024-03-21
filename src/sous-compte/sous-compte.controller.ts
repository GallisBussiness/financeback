import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SousCompteService } from './sous-compte.service';
import { CreateSousCompteDto } from './dto/create-sous-compte.dto';
import { UpdateSousCompteDto } from './dto/update-sous-compte.dto';

@Controller('sous-compte')
export class SousCompteController {
  constructor(private readonly sousCompteService: SousCompteService) {}

  @Post()
  create(@Body() createSousCompteDto: CreateSousCompteDto) {
    return this.sousCompteService.create(createSousCompteDto);
  }

  @Get()
  findAll() {
    return this.sousCompteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sousCompteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSousCompteDto: UpdateSousCompteDto) {
    return this.sousCompteService.update(id, updateSousCompteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sousCompteService.remove(id);
  }
}
