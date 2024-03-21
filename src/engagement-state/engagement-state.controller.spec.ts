import { Test, TestingModule } from '@nestjs/testing';
import { EngagementStateController } from './engagement-state.controller';
import { EngagementStateService } from './engagement-state.service';

describe('EngagementStateController', () => {
  let controller: EngagementStateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EngagementStateController],
      providers: [EngagementStateService],
    }).compile();

    controller = module.get<EngagementStateController>(EngagementStateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
