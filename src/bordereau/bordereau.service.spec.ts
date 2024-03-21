import { Test, TestingModule } from '@nestjs/testing';
import { BordereauService } from './bordereau.service';

describe('BordereauService', () => {
  let service: BordereauService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BordereauService],
    }).compile();

    service = module.get<BordereauService>(BordereauService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
