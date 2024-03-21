import { Test, TestingModule } from '@nestjs/testing';
import { SousCompteService } from './sous-compte.service';

describe('SousCompteService', () => {
  let service: SousCompteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SousCompteService],
    }).compile();

    service = module.get<SousCompteService>(SousCompteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
