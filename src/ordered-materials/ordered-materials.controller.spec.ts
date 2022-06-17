import { Test, TestingModule } from '@nestjs/testing';
import { OrderedMaterialsController } from './ordered-materials.controller';
import { OrderedMaterialsService } from './ordered-materials.service';

describe('OrderedMaterialsController', () => {
  let controller: OrderedMaterialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderedMaterialsController],
      providers: [OrderedMaterialsService],
    }).compile();

    controller = module.get<OrderedMaterialsController>(OrderedMaterialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
