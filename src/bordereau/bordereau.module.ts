import { Module } from '@nestjs/common';
import { BordereauService } from './bordereau.service';
import { BordereauController } from './bordereau.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bordereau, BordereauSchema } from './entities/bordereau.entity';
import { BudgetModule } from 'src/budget/budget.module';
import { CreditModule } from 'src/credit/credit.module';
import { FournissseurModule } from 'src/fournissseur/fournissseur.module';

@Module({
  imports:[MongooseModule.forFeatureAsync([{name: Bordereau.name, useFactory: () => {
    const schema = BordereauSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}]),
  BudgetModule,
  CreditModule,
  FournissseurModule
],
  controllers: [BordereauController],
  providers: [BordereauService],
})
export class BordereauModule {}
