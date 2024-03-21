import { Injectable } from '@nestjs/common';
import { CreateCompteDivisionnaireDto } from './dto/create-compte-divisionnaire.dto';
import { UpdateCompteDivisionnaireDto } from './dto/update-compte-divisionnaire.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { CompteDivisionnaire, CompteDivisionnaireDocument } from './entities/compte-divisionnaire.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CompteDivisionnaireService extends AbstractModel<CompteDivisionnaire,CreateCompteDivisionnaireDto,UpdateCompteDivisionnaireDto>{
  constructor(@InjectModel(CompteDivisionnaire.name) private readonly compteDivisionnaireModel: Model<CompteDivisionnaireDocument>) {
    super(compteDivisionnaireModel);
  }
}
