import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BanqueService } from './banque.service';
import { CreateBanqueDto } from './dto/create-banque.dto';
import { UpdateBanqueDto } from './dto/update-banque.dto';

@Controller('banque')
export class BanqueController {
  constructor(private readonly banqueService: BanqueService) {}

  @Post()
  create(@Body() createBanqueDto: CreateBanqueDto) {
    return this.banqueService.create(createBanqueDto);
  }

  @Get()
  findAll() {
    return this.banqueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.banqueService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBanqueDto: UpdateBanqueDto) {
    return this.banqueService.update(id, updateBanqueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.banqueService.remove(id);
  }
}
