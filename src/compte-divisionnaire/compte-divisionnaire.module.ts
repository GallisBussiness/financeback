import { Module } from '@nestjs/common';
import { CompteDivisionnaireService } from './compte-divisionnaire.service';
import { CompteDivisionnaireController } from './compte-divisionnaire.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CompteDivisionnaire, CompteDivisionnaireSchema } from './entities/compte-divisionnaire.entity';

@Module({
  imports:[MongooseModule.forFeatureAsync([{name: CompteDivisionnaire.name,useFactory: () => {
    const schema = CompteDivisionnaireSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}])],
  controllers: [CompteDivisionnaireController],
  providers: [CompteDivisionnaireService],
})
export class CompteDivisionnaireModule {}
