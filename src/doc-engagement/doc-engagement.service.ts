import { HttpException, Injectable } from '@nestjs/common';
import { CreateDocEngagementDto } from './dto/create-doc-engagement.dto';
import { UpdateDocEngagementDto } from './dto/update-doc-engagement.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { DocEngagement, DocEngagementDocument } from './entities/doc-engagement.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DocEngagementService extends AbstractModel<DocEngagement,CreateDocEngagementDto,UpdateDocEngagementDto>{
  constructor(@InjectModel(DocEngagement.name) private readonly docEngagementModel: Model<DocEngagementDocument>){
    super(docEngagementModel);
  }

  async createMany(docs:CreateDocEngagementDto[]){
     try {
      return await this.docEngagementModel.insertMany(docs)
     } catch (error) {
      throw new HttpException(error.message,500);
     }
      
  }

  async findByEngagement(id: string): Promise<DocEngagement[]> {
    try {
     return await this.docEngagementModel.find({engagement: id})
    } catch (error) {
     throw new HttpException(error.message,500);
    }
 }
}
