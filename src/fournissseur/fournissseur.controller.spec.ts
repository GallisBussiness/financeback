import { Test, TestingModule } from '@nestjs/testing';
import { FournissseurController } from './fournissseur.controller';
import { FournissseurService } from './fournissseur.service';

describe('FournissseurController', () => {
  let controller: FournissseurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FournissseurController],
      providers: [FournissseurService],
    }).compile();

    controller = module.get<FournissseurController>(FournissseurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
