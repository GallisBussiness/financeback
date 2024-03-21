import { Injectable } from '@nestjs/common';
import { CreateVirementDto } from './dto/create-virement.dto';
import { UpdateVirementDto } from './dto/update-virement.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { Virement, VirementDocument } from './entities/virement.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class VirementService extends AbstractModel<Virement,CreateVirementDto,UpdateVirementDto>{
  constructor(@InjectModel(Virement.name) private readonly virementModel: Model<VirementDocument>){
    super(virementModel);
  }
}
