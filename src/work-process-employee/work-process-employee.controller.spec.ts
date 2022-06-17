import { Test, TestingModule } from '@nestjs/testing';
import { WorkProcessEmployeeController } from './work-process-employee.controller';
import { WorkProcessEmployeeService } from './work-process-employee.service';

describe('WorkProcessEmployeeController', () => {
  let controller: WorkProcessEmployeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkProcessEmployeeController],
      providers: [WorkProcessEmployeeService],
    }).compile();

    controller = module.get<WorkProcessEmployeeController>(WorkProcessEmployeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
