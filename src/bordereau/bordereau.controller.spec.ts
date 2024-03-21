import { Test, TestingModule } from '@nestjs/testing';
import { BordereauController } from './bordereau.controller';
import { BordereauService } from './bordereau.service';

describe('BordereauController', () => {
  let controller: BordereauController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BordereauController],
      providers: [BordereauService],
    }).compile();

    controller = module.get<BordereauController>(BordereauController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
