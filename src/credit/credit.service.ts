import { HttpException, Injectable } from '@nestjs/common';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UpdateCreditDto } from './dto/update-credit.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { Credit, CreditDocument } from './entities/credit.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CreditService extends AbstractModel<Credit,CreateCreditDto,UpdateCreditDto>{
  constructor(@InjectModel(Credit.name) private readonly creditModel: Model<CreditDocument>){
    super(creditModel);
  }
  async findByBudget(id: string): Promise<Credit[]>{
    try {
      return await this.creditModel.find({budget : id});
    } catch (error) {
      throw new HttpException(error.message,500);
    }
  }
}
