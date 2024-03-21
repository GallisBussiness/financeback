import { Module } from '@nestjs/common';
import { EngagementStateService } from './engagement-state.service';
import { EngagementStateController } from './engagement-state.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EngagementState, EngagementStateSchema } from './entities/engagement-state.entity';

@Module({
  imports:[MongooseModule.forFeatureAsync([{name: EngagementState.name, useFactory: () => {
    const schema = EngagementStateSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}])],
  controllers: [EngagementStateController],
  providers: [EngagementStateService],
  exports: [EngagementStateService]
})
export class EngagementStateModule {}
