import { Test, TestingModule } from '@nestjs/testing';
import { MaterialCharacteristicValueService } from './material-characteristic-value.service';

describe('MaterialCharacteristicValueService', () => {
  let service: MaterialCharacteristicValueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaterialCharacteristicValueService],
    }).compile();

    service = module.get<MaterialCharacteristicValueService>(MaterialCharacteristicValueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
