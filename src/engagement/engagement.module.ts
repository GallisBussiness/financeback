import { Module, forwardRef } from '@nestjs/common';
import { EngagementService } from './engagement.service';
import { EngagementController } from './engagement.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Engagement, EngagementSchema } from './entities/engagement.entity';
import { BudgetModule } from 'src/budget/budget.module';
import { EngagementStateModule } from 'src/engagement-state/engagement-state.module';

@Module({
  imports:[MongooseModule.forFeatureAsync([{name: Engagement.name,useFactory: () => {
    const schema = EngagementSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}]),
  forwardRef(() => BudgetModule),
  EngagementStateModule
],
  controllers: [EngagementController],
  providers: [EngagementService],
  exports:[EngagementService]
})
export class EngagementModule {}
