import { Test, TestingModule } from '@nestjs/testing';
import { DocVersementController } from './doc-versement.controller';
import { DocVersementService } from './doc-versement.service';

describe('DocVersementController', () => {
  let controller: DocVersementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocVersementController],
      providers: [DocVersementService],
    }).compile();

    controller = module.get<DocVersementController>(DocVersementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
