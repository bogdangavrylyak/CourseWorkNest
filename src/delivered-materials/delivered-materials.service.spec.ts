import { Test, TestingModule } from '@nestjs/testing';
import { DeliveredMaterialsService } from './delivered-materials.service';

describe('DeliveredMaterialsService', () => {
  let service: DeliveredMaterialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliveredMaterialsService],
    }).compile();

    service = module.get<DeliveredMaterialsService>(DeliveredMaterialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
