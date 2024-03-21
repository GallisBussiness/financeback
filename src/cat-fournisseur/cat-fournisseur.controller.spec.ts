import { Test, TestingModule } from '@nestjs/testing';
import { CatFournisseurController } from './cat-fournisseur.controller';
import { CatFournisseurService } from './cat-fournisseur.service';

describe('CatFournisseurController', () => {
  let controller: CatFournisseurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatFournisseurController],
      providers: [CatFournisseurService],
    }).compile();

    controller = module.get<CatFournisseurController>(CatFournisseurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
