import { Injectable } from '@nestjs/common';
import { CreateFournissseurDto } from './dto/create-fournissseur.dto';
import { UpdateFournissseurDto } from './dto/update-fournissseur.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { FournisseurDocument, Fournissseur } from './entities/fournissseur.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FournissseurService extends AbstractModel<Fournissseur,CreateFournissseurDto,UpdateFournissseurDto>{
  constructor(@InjectModel(Fournissseur.name) private readonly fournisseurModel: Model<FournisseurDocument>) {
    super(fournisseurModel);
  }
}
