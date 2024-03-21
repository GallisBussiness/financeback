import { Injectable } from '@nestjs/common';
import { CreateBanqueDto } from './dto/create-banque.dto';
import { UpdateBanqueDto } from './dto/update-banque.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { Banque, BanqueDocument } from './entities/banque.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BanqueService extends AbstractModel<Banque,CreateBanqueDto,UpdateBanqueDto>{
  constructor(@InjectModel(Banque.name) private readonly banqueModel: Model<BanqueDocument>){
    super(banqueModel);
  }
} 
