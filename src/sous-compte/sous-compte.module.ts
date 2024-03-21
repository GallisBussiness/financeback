import { Module } from '@nestjs/common';
import { SousCompteService } from './sous-compte.service';
import { SousCompteController } from './sous-compte.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SousCompte, SousCompteSchema } from './entities/sous-compte.entity';

@Module({
  imports:[MongooseModule.forFeatureAsync([{name: SousCompte.name,useFactory: () => {
    const schema = SousCompteSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}])],
  controllers: [SousCompteController],
  providers: [SousCompteService],
})
export class SousCompteModule {}
