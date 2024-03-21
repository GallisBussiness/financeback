import { Injectable } from '@nestjs/common';
import { CreateSousCompteDto } from './dto/create-sous-compte.dto';
import { UpdateSousCompteDto } from './dto/update-sous-compte.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { SousCompte, SousCompteDocument } from './entities/sous-compte.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SousCompteService extends AbstractModel<SousCompte,CreateSousCompteDto,UpdateSousCompteDto>{
  constructor(@InjectModel(SousCompte.name) private readonly sousCompteModel: Model<SousCompteDocument>) {
    super(sousCompteModel);
  }
}
