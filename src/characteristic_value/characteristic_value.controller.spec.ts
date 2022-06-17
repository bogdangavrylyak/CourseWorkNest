import { Test, TestingModule } from '@nestjs/testing';
import { CharacteristicValueController } from './characteristic_value.controller';
import { CharacteristicValueService } from './characteristic_value.service';

describe('CharacteristicValueController', () => {
  let controller: CharacteristicValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacteristicValueController],
      providers: [CharacteristicValueService],
    }).compile();

    controller = module.get<CharacteristicValueController>(CharacteristicValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
