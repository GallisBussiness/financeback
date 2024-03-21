import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EngagementService } from './engagement.service';
import { CreateEngagementDto, EtatEngagement } from './dto/create-engagement.dto';
import { UpdateEngagementDto } from './dto/update-engagement.dto';
import { BudgetService } from 'src/budget/budget.service';
import { InvoiceNumber } from 'invoice-number';
import { EngagementStateService } from 'src/engagement-state/engagement-state.service';
import { UpdateStateDto } from './dto/update-state.dto';
import { compareDesc } from 'date-fns';

@Controller('engagement')
export class EngagementController {
  constructor(private readonly engagementService: EngagementService,private budgetService:BudgetService,
    private engagementSateService: EngagementStateService
    ) {}

  @Post()
  async create(@Body() createEngagementDto: CreateEngagementDto) {
    const {auteur,...rest} = createEngagementDto;
    let numero = 'EGM';
    let initNumber = "0001";
    const budget = await this.budgetService.findActive();
    const last = await this.engagementService.findLast();
    if (last){
      const b = last.numero.split('-')[1];
      if(budget.annee === b){
        numero = InvoiceNumber.next(last.numero);
      }
    }
    else {
      numero += '-' + budget.annee + '-' + initNumber;
    }
    rest.numero = numero;
    const engagement = await this.engagementService.create(rest);
    await this.engagementSateService.create({auteur,engagement:engagement._id.toString(),etat: engagement.etat});
    return engagement;
  }

  @Get()
  async findAll() {
  const eng = await this.engagementService.findAll();
   const engs = eng.sort((a,b)=> compareDesc(a.date,b.date));
  return engs;
  }

  @Get('bybordereau/:id')
  findByBordereau(@Param('id') id: string) { 
    return this.engagementService.findByBordereau(id);
  }

  @Get('bycredit/:id')
  findByCredit(@Param('id') id: string) { 
    return this.engagementService.findByCredit(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.engagementService.findOne(id);
  }

  @Patch('updatestate/:id')
  async updateState(@Param('id') id: string, @Body() stateDto: UpdateStateDto) {
  const engagement = await this.engagementService.update(id, {etat:stateDto.etat});
  await this.engagementSateService.create(stateDto);
  return engagement;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEngagementDto: UpdateEngagementDto) {
    const {auteur,...rest} = updateEngagementDto;
    const eng = await this.engagementService.update(id, {...rest,etat:EtatEngagement.BROUILLON});
    await this.engagementSateService.create({auteur,engagement:eng._id.toString(),etat:EtatEngagement.BROUILLON});
    return eng;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.engagementService.remove(id);
  }
}
