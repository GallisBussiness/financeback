import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BordereauService } from './bordereau.service';
import { CreateBordereauDto } from './dto/create-bordereau.dto';
import { UpdateBordereauDto } from './dto/update-bordereau.dto';
import { InvoiceNumber } from 'invoice-number';
import { BudgetService } from 'src/budget/budget.service';
import { CreditService } from 'src/credit/credit.service';
import { FournissseurService } from 'src/fournissseur/fournissseur.service';
import { compareDesc } from 'date-fns';

@Controller('bordereau')
export class BordereauController {
  constructor(private readonly bordereauService: BordereauService,
    private budgetService:BudgetService,private readonly creditService:CreditService,
    private readonly fournisseurService:FournissseurService,
    ) {}

  @Post()
  async create(@Body() createBordereauDto: CreateBordereauDto) {
    let numero = 'BR';
    let initNumber = "0001";
    const budget = await this.budgetService.findActive();
    const last = await this.bordereauService.findLast();
    if (last){
      const b = last.numero.split('-')[1];
      if(budget.annee === b){
        numero = InvoiceNumber.next(last.numero);
      }
    }
    else {
      numero += '-' + budget.annee + '-' + initNumber;
    }
    createBordereauDto.numero = numero;
    return this.bordereauService.create(createBordereauDto);
  }

  @Get()
  async findAll() {
    const bordereaux = await this.bordereauService.findAllWithEngagement();
    await Promise.all(bordereaux.map(async (bordereau) => {
      const engagements = await Promise.all(bordereau.engagements.map(async (e) => {
      const credit = await this.creditService.findOne(e.credit);
      const fournisseur = await this.fournisseurService.findOne(e.fournisseur);
      e.credit = credit;
      e.fournisseur = fournisseur;
      return e;
    }))
    bordereau.engagements = engagements;
    bordereau.budget = await this.budgetService.findOne(bordereau.budget);
    }));
   const brx = bordereaux.sort((a,b)=> compareDesc(a.date,b.date));
    return brx;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bordereauService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBordereauDto: UpdateBordereauDto) {
    return this.bordereauService.update(id, updateBordereauDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bordereauService.remove(id);
  }
}
