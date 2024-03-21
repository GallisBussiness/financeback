import { Test, TestingModule } from '@nestjs/testing';
import { FournissseurService } from './fournissseur.service';

describe('FournissseurService', () => {
  let service: FournissseurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FournissseurService],
    }).compile();

    service = module.get<FournissseurService>(FournissseurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
