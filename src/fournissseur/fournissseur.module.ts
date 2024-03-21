import { Module } from '@nestjs/common';
import { FournissseurService } from './fournissseur.service';
import { FournissseurController } from './fournissseur.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Fournissseur, FournissseurSchema } from './entities/fournissseur.entity';

@Module({
  imports:[MongooseModule.forFeatureAsync([{name:Fournissseur.name,useFactory: () => {
    const schema  = FournissseurSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}])],
  controllers: [FournissseurController],
  providers: [FournissseurService],
  exports:[FournissseurService]
})
export class FournissseurModule {}
