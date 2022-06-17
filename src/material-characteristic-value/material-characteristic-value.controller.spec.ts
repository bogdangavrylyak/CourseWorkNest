import { Test, TestingModule } from '@nestjs/testing';
import { MaterialCharacteristicValueController } from './material-characteristic-value.controller';
import { MaterialCharacteristicValueService } from './material-characteristic-value.service';

describe('MaterialCharacteristicValueController', () => {
  let controller: MaterialCharacteristicValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaterialCharacteristicValueController],
      providers: [MaterialCharacteristicValueService],
    }).compile();

    controller = module.get<MaterialCharacteristicValueController>(MaterialCharacteristicValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
