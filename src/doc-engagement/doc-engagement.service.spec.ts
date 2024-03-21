import { Test, TestingModule } from '@nestjs/testing';
import { DocEngagementService } from './doc-engagement.service';

describe('DocEngagementService', () => {
  let service: DocEngagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocEngagementService],
    }).compile();

    service = module.get<DocEngagementService>(DocEngagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
