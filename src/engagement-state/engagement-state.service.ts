import { HttpException, Injectable } from '@nestjs/common';
import { CreateEngagementStateDto } from './dto/create-engagement-state.dto';
import { UpdateEngagementStateDto } from './dto/update-engagement-state.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { EngagementState, EngagementStateDocument } from './entities/engagement-state.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EngagementStateService extends AbstractModel<EngagementState,CreateEngagementStateDto,UpdateEngagementStateDto>{
    constructor(@InjectModel(EngagementState.name) private readonly engagementStateModel: Model<EngagementStateDocument>){
      super(engagementStateModel);
    }

    async findByEngagement(id: string): Promise<EngagementState[]> {
      try {
        return this.engagementStateModel.find({engagement:id});
      } catch (error) {
        throw new HttpException(error.message,500);
      }
    }
}
