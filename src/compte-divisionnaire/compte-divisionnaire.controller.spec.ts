import { Test, TestingModule } from '@nestjs/testing';
import { CompteDivisionnaireController } from './compte-divisionnaire.controller';
import { CompteDivisionnaireService } from './compte-divisionnaire.service';

describe('CompteDivisionnaireController', () => {
  let controller: CompteDivisionnaireController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompteDivisionnaireController],
      providers: [CompteDivisionnaireService],
    }).compile();

    controller = module.get<CompteDivisionnaireController>(CompteDivisionnaireController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
