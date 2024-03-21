import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FournissseurService } from './fournissseur.service';
import { CreateFournissseurDto } from './dto/create-fournissseur.dto';
import { UpdateFournissseurDto } from './dto/update-fournissseur.dto';

@Controller('fournisseur')
export class FournissseurController {
  constructor(private readonly fournissseurService: FournissseurService) {}

  @Post()
  create(@Body() createFournissseurDto: CreateFournissseurDto) {
    return this.fournissseurService.create(createFournissseurDto);
  }

  @Get()
  findAll() {
    return this.fournissseurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fournissseurService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFournissseurDto: UpdateFournissseurDto) {
    return this.fournissseurService.update(id, updateFournissseurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fournissseurService.remove(id);
  }
}
