import { Module } from '@nestjs/common';
import { AutorisationService } from './autorisation.service';
import { AutorisationController } from './autorisation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Autorisation, AutorisationSchema } from './entities/autorisation.entity';

@Module({
  imports: [MongooseModule.forFeatureAsync([{name:Autorisation.name,useFactory: () => {
    const schema = AutorisationSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}])],
  controllers: [AutorisationController],
  providers: [AutorisationService],
})
export class AutorisationModule {}
