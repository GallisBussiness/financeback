import { Test, TestingModule } from '@nestjs/testing';
import { DocVersementService } from './doc-versement.service';

describe('DocVersementService', () => {
  let service: DocVersementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocVersementService],
    }).compile();

    service = module.get<DocVersementService>(DocVersementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
