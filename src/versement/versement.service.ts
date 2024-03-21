import { HttpException, Injectable } from '@nestjs/common';
import { CreateVersementDto } from './dto/create-versement.dto';
import { UpdateVersementDto } from './dto/update-versement.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { Versement, VersementDocument } from './entities/versement.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class VersementService extends AbstractModel<Versement,CreateVersementDto,UpdateVersementDto>{
  constructor(@InjectModel(Versement.name) private readonly versementModel: Model<VersementDocument>){
    super(versementModel);
  }

  async findByCredit(id: string):Promise<Versement[]> {
    try {
        return this.versementModel.find({credit : id});
    } catch (error) {
        throw new HttpException(error.message,500);
    }
 }
}
