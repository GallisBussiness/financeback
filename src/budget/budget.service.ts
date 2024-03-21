import { HttpException, Injectable } from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { Budget, BudgetDocument } from './entities/budget.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BudgetService extends AbstractModel<Budget,CreateBudgetDto,UpdateBudgetDto>{
  constructor(@InjectModel(Budget.name) private readonly budgetModel:  Model<BudgetDocument>){
    super(budgetModel);
  }

  async toggleState(id: string, dto: {etat: boolean}):Promise<Budget> {
    try {
     return this.budgetModel.findByIdAndUpdate(id,dto)
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
   }

   async findActive():Promise<Budget> {
    try {
     return this.budgetModel.findOne({etat: true})
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
   }
}
