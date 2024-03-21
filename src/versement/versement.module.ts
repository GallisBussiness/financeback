import { Module } from '@nestjs/common';
import { VersementService } from './versement.service';
import { VersementController } from './versement.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Versement, VersementSchema } from './entities/versement.entity';

@Module({
  imports:[MongooseModule.forFeatureAsync([{name:Versement.name,useFactory: () => {
    const schema = VersementSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}])],
  controllers: [VersementController],
  providers: [VersementService],
  exports:[VersementService]
})
export class VersementModule {}
