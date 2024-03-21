import { Test, TestingModule } from '@nestjs/testing';
import { EngagementStateService } from './engagement-state.service';

describe('EngagementStateService', () => {
  let service: EngagementStateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EngagementStateService],
    }).compile();

    service = module.get<EngagementStateService>(EngagementStateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
