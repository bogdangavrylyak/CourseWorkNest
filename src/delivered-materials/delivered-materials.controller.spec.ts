import { Test, TestingModule } from '@nestjs/testing';
import { DeliveredMaterialsController } from './delivered-materials.controller';
import { DeliveredMaterialsService } from './delivered-materials.service';

describe('DeliveredMaterialsController', () => {
  let controller: DeliveredMaterialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveredMaterialsController],
      providers: [DeliveredMaterialsService],
    }).compile();

    controller = module.get<DeliveredMaterialsController>(DeliveredMaterialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
