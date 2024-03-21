import { Test, TestingModule } from '@nestjs/testing';
import { DocEngagementController } from './doc-engagement.controller';
import { DocEngagementService } from './doc-engagement.service';

describe('DocEngagementController', () => {
  let controller: DocEngagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocEngagementController],
      providers: [DocEngagementService],
    }).compile();

    controller = module.get<DocEngagementController>(DocEngagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
