import { Test, TestingModule } from '@nestjs/testing';
import { CharacteristicValueService } from './characteristic_value.service';

describe('CharacteristicValueService', () => {
  let service: CharacteristicValueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacteristicValueService],
    }).compile();

    service = module.get<CharacteristicValueService>(CharacteristicValueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
