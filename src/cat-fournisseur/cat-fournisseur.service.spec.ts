import { Test, TestingModule } from '@nestjs/testing';
import { CatFournisseurService } from './cat-fournisseur.service';

describe('CatFournisseurService', () => {
  let service: CatFournisseurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatFournisseurService],
    }).compile();

    service = module.get<CatFournisseurService>(CatFournisseurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
