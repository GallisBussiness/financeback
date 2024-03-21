import { Injectable } from '@nestjs/common';
import { CreateCompteDto } from './dto/create-compte.dto';
import { UpdateCompteDto } from './dto/update-compte.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { Compte, CompteDocument } from './entities/compte.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CompteService extends AbstractModel<Compte,CreateCompteDto,UpdateCompteDto>{
 constructor(@InjectModel(Compte.name) private compteModel: Model<CompteDocument>){
  super(compteModel);
 }
}
