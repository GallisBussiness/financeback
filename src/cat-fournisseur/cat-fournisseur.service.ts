import { Injectable } from '@nestjs/common';
import { CreateCatFournisseurDto } from './dto/create-cat-fournisseur.dto';
import { UpdateCatFournisseurDto } from './dto/update-cat-fournisseur.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { CatFournisseur, CatFournisseurDocument } from './entities/cat-fournisseur.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CatFournisseurService extends AbstractModel<CatFournisseur,CreateCatFournisseurDto,UpdateCatFournisseurDto>{
  constructor(@InjectModel(CatFournisseur.name) private readonly catFournisseurModel: Model<CatFournisseurDocument>){
    super(catFournisseurModel);
  }
}
