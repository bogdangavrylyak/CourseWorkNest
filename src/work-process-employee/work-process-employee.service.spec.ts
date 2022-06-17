import { Test, TestingModule } from '@nestjs/testing';
import { WorkProcessEmployeeService } from './work-process-employee.service';

describe('WorkProcessEmployeeService', () => {
  let service: WorkProcessEmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkProcessEmployeeService],
    }).compile();

    service = module.get<WorkProcessEmployeeService>(WorkProcessEmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
