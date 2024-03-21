import { Module } from '@nestjs/common';
import { VirementService } from './virement.service';
import { VirementController } from './virement.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Virement, VirementSchema } from './entities/virement.entity';

@Module({
  imports:[MongooseModule.forFeatureAsync([{name:Virement.name, useFactory: () => {
    const schema = VirementSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}])],
  controllers: [VirementController],
  providers: [VirementService],
})
export class VirementModule {}
