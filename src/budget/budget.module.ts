import { Module, forwardRef } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Budget, BudgetSchema } from './entities/budget.entity';
import { CreditModule } from 'src/credit/credit.module';
import { EngagementModule } from 'src/engagement/engagement.module';
import { VersementModule } from 'src/versement/versement.module';

@Module({
  imports:[MongooseModule.forFeature([{name:Budget.name,schema: BudgetSchema}]),
  CreditModule,
  VersementModule,
  forwardRef(() => EngagementModule)
],
  controllers: [BudgetController],
  providers: [BudgetService],
  exports:[BudgetService]
})
export class BudgetModule {}
