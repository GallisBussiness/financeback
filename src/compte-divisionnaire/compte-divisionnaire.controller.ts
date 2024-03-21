import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompteDivisionnaireService } from './compte-divisionnaire.service';
import { CreateCompteDivisionnaireDto } from './dto/create-compte-divisionnaire.dto';
import { UpdateCompteDivisionnaireDto } from './dto/update-compte-divisionnaire.dto';

@Controller('compte-divisionnaire')
export class CompteDivisionnaireController {
  constructor(private readonly compteDivisionnaireService: CompteDivisionnaireService) {}

  @Post()
  create(@Body() createCompteDivisionnaireDto: CreateCompteDivisionnaireDto) {
    return this.compteDivisionnaireService.create(createCompteDivisionnaireDto);
  }

  @Get()
  findAll() {
    return this.compteDivisionnaireService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compteDivisionnaireService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompteDivisionnaireDto: UpdateCompteDivisionnaireDto) {
    return this.compteDivisionnaireService.update(id, updateCompteDivisionnaireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compteDivisionnaireService.remove(id);
  }
}
