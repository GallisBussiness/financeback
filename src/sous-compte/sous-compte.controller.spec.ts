import { Test, TestingModule } from '@nestjs/testing';
import { SousCompteController } from './sous-compte.controller';
import { SousCompteService } from './sous-compte.service';

describe('SousCompteController', () => {
  let controller: SousCompteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SousCompteController],
      providers: [SousCompteService],
    }).compile();

    controller = module.get<SousCompteController>(SousCompteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
