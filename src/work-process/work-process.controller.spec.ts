import { Test, TestingModule } from '@nestjs/testing';
import { WorkProcessController } from './work-process.controller';
import { WorkProcessService } from './work-process.service';

describe('WorkProcessController', () => {
  let controller: WorkProcessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkProcessController],
      providers: [WorkProcessService],
    }).compile();

    controller = module.get<WorkProcessController>(WorkProcessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
