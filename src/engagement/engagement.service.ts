import { HttpException, Injectable } from '@nestjs/common';
import { CreateEngagementDto, EtatEngagement } from './dto/create-engagement.dto';
import { UpdateEngagementDto } from './dto/update-engagement.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { Engagement, EngagementDocument } from './entities/engagement.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EngagementService extends AbstractModel<Engagement,CreateEngagementDto,UpdateEngagementDto>{
 constructor(@InjectModel(Engagement.name) private readonly engagementModel: Model<EngagementDocument>){
  super(engagementModel);
 }

 async findLast():Promise<Engagement> {
    try {
        return this.engagementModel.findOne().sort({numero:-1}).limit(1).exec();
    } catch (error) {
        throw new HttpException(error.message,500);
    }
 }

 async findByBordereau(id: string):Promise<Engagement[]> {
    try {
        return this.engagementModel.find({bordereau : id});
    } catch (error) {
        throw new HttpException(error.message,500);
    }
 }

 async findByCredit(id: string):Promise<Engagement[]> {
    try {
        return this.engagementModel.find({credit : id});
    } catch (error) {
        throw new HttpException(error.message,500);
    }
 }
}
