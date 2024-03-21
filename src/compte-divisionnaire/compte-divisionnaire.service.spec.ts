import { Test, TestingModule } from '@nestjs/testing';
import { CompteDivisionnaireService } from './compte-divisionnaire.service';

describe('CompteDivisionnaireService', () => {
  let service: CompteDivisionnaireService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompteDivisionnaireService],
    }).compile();

    service = module.get<CompteDivisionnaireService>(CompteDivisionnaireService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
