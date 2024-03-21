import { Injectable } from '@nestjs/common';
import { CreateAutorisationDto } from './dto/create-autorisation.dto';
import { UpdateAutorisationDto } from './dto/update-autorisation.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { Autorisation, AutorisationDocument } from './entities/autorisation.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AutorisationService extends AbstractModel<Autorisation,CreateAutorisationDto,UpdateAutorisationDto>{
 constructor(@InjectModel(Autorisation.name) private readonly autorisationModel: Model<AutorisationDocument>){
  super(autorisationModel);
 }
}
