import { HttpException, Injectable } from '@nestjs/common';
import { CreateBordereauDto } from './dto/create-bordereau.dto';
import { UpdateBordereauDto } from './dto/update-bordereau.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { Bordereau, BordereauDocument } from './entities/bordereau.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BordereauService extends AbstractModel<Bordereau,CreateBordereauDto,UpdateBordereauDto>{
  constructor(@InjectModel(Bordereau.name) private readonly bordereauModel: Model<BordereauDocument>){
    super(bordereauModel);
  }

  async findLast():Promise<Bordereau> {
    try {
        return this.bordereauModel.findOne().sort({numero:-1}).limit(1).exec();
    } catch (error) {
        throw new HttpException(error.message,500);
    }
 }
 async findAllWithEngagement():Promise<any[]> {
  try {
      return this.bordereauModel.aggregate([
        {$addFields: {
          id: {$toString: "$_id"}
        }},
       {$lookup: {from: "engagements",
       localField:"id",
       foreignField: 'bordereau',
       as: "engagements"}}
      ]);
  } catch (error) {
      throw new HttpException(error.message,500);
  }
}
}
