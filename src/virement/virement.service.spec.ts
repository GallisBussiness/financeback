import { Test, TestingModule } from '@nestjs/testing';
import { VirementService } from './virement.service';

describe('VirementService', () => {
  let service: VirementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VirementService],
    }).compile();

    service = module.get<VirementService>(VirementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
