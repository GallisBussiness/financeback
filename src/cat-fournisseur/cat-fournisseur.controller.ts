import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatFournisseurService } from './cat-fournisseur.service';
import { CreateCatFournisseurDto } from './dto/create-cat-fournisseur.dto';
import { UpdateCatFournisseurDto } from './dto/update-cat-fournisseur.dto';

@Controller('cat-fournisseur')
export class CatFournisseurController {
  constructor(private readonly catFournisseurService: CatFournisseurService) {}

  @Post()
  create(@Body() createCatFournisseurDto: CreateCatFournisseurDto) {
    return this.catFournisseurService.create(createCatFournisseurDto);
  }

  @Get()
  findAll() {
    return this.catFournisseurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catFournisseurService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatFournisseurDto: UpdateCatFournisseurDto) {
    return this.catFournisseurService.update(id, updateCatFournisseurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catFournisseurService.remove(id);
  }
}
