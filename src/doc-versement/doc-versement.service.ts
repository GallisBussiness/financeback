import { HttpException, Injectable } from '@nestjs/common';
import { CreateDocVersementDto } from './dto/create-doc-versement.dto';
import { UpdateDocVersementDto } from './dto/update-doc-versement.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { DocVersement, DocVersementDocument } from './entities/doc-versement.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DocVersementService extends AbstractModel<DocVersement,CreateDocVersementDto,UpdateDocVersementDto>{
  constructor(@InjectModel(DocVersement.name) private readonly docVersementModel: Model<DocVersementDocument>){
    super(docVersementModel);
  }

  async createMany(docs:CreateDocVersementDto[]){
     try {
      return await this.docVersementModel.insertMany(docs)
     } catch (error) {
      throw new HttpException(error.message,500);
     }
      
  }

  async findByVersement(id: string): Promise<DocVersement[]> {
    try {
     return await this.docVersementModel.find({versement: id})
    } catch (error) {
     throw new HttpException(error.message,500);
    }
 }
}