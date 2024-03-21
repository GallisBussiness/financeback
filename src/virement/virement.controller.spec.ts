import { Test, TestingModule } from '@nestjs/testing';
import { VirementController } from './virement.controller';
import { VirementService } from './virement.service';

describe('VirementController', () => {
  let controller: VirementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VirementController],
      providers: [VirementService],
    }).compile();

    controller = module.get<VirementController>(VirementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
