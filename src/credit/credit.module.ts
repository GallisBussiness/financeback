import { Module } from '@nestjs/common';
import { CreditService } from './credit.service';
import { CreditController } from './credit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Credit, CreditSchema } from './entities/credit.entity';

@Module({
  imports: [MongooseModule.forFeatureAsync([{name: Credit.name,useFactory: () => {
    const schema = CreditSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}])],
  controllers: [CreditController],
  providers: [CreditService],
  exports:[CreditService]
})
export class CreditModule {}
