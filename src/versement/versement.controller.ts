import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VersementService } from './versement.service';
import { CreateVersementDto } from './dto/create-versement.dto';
import { UpdateVersementDto } from './dto/update-versement.dto';

@Controller('versement')
export class VersementController {
  constructor(private readonly versementService: VersementService) {}

  @Post()
  create(@Body() createVersementDto: CreateVersementDto) {
    return this.versementService.create(createVersementDto);
  }

  @Get()
  findAll() {
    return this.versementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.versementService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVersementDto: UpdateVersementDto) {
    return this.versementService.update(id, updateVersementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.versementService.remove(id);
  }
}
