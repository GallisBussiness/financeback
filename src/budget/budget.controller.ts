import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { CreditService } from 'src/credit/credit.service';
import { EngagementService } from 'src/engagement/engagement.service';
import { CLASSE } from 'src/compte/dto/create-compte.dto';
import { VersementService } from 'src/versement/versement.service';

@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService,
    private readonly creditService: CreditService,
    private readonly engagementService: EngagementService,
    private readonly versementService: VersementService
    ) {}

  @Post()
  create(@Body() createBudgetDto: CreateBudgetDto) {
    return this.budgetService.create(createBudgetDto);
  }

  @Get("all")
  async findWithAll() {
    const budget = await this.budgetService.findActive();
    const credits = await this.creditService.findByBudget(budget._id.toString());
    let charges = [];
    let produits = [];
    await Promise.all(credits.filter(e => e.souscompte.compte_divisionnaire.compte.classe === CLASSE.CHARGE_DE_FONCTIONNEMENT || e.souscompte.compte_divisionnaire.compte.classe === CLASSE.CHARGE_INVESTISSEMENT)
    .map(async (c:any) => {
      const engagements = await this.engagementService.findByCredit(c._id.toString());
      charges.push({_id:c._doc._id,budget:c._doc.budget,prevision:c._doc.prevision,souscompte:c._doc.souscompte,engagements});
    }));
    await Promise.all(credits.filter(e => e.souscompte.compte_divisionnaire.compte.classe === CLASSE.PRODUIT_DE_FONCTIONNEMENT || e.souscompte.compte_divisionnaire.compte.classe === CLASSE.PRODUIT_INVESTISSEMENT)
    .map(async (c:any) => {
      const versements = await this.versementService.findByCredit(c._id.toString());
      produits.push({_id:c._doc._id,budget:c._doc.budget,prevision:c._doc.prevision,souscompte:c._doc.souscompte,versements});
    }));
    return {produits,charges};
  }

  @Get()
  findAll() {
    return this.budgetService.findAll();
  }

  @Get('findactive')
  findActive() {
    return this.budgetService.findActive();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetService.findOne(id);
  }

  @Patch('/toggle/:id')
  toggleState(@Param('id') id: string, @Body() updateStateDto: {etat: boolean}) {
    return this.budgetService.toggleState(id, updateStateDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBudgetDto: UpdateBudgetDto) {
    return this.budgetService.update(id, updateBudgetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetService.remove(id);
  }
}
