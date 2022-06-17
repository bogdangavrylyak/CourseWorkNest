import { Test, TestingModule } from '@nestjs/testing';
import { OrderedMaterialsService } from './ordered-materials.service';

describe('OrderedMaterialsService', () => {
  let service: OrderedMaterialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderedMaterialsService],
    }).compile();

    service = module.get<OrderedMaterialsService>(OrderedMaterialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
