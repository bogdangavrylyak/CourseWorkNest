import { Test, TestingModule } from '@nestjs/testing';
import { WorkProcessMaterialController } from './work-process-material.controller';
import { WorkProcessMaterialService } from './work-process-material.service';

describe('WorkProcessMaterialController', () => {
  let controller: WorkProcessMaterialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkProcessMaterialController],
      providers: [WorkProcessMaterialService],
    }).compile();

    controller = module.get<WorkProcessMaterialController>(WorkProcessMaterialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
