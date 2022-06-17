import { Test, TestingModule } from '@nestjs/testing';
import { WorkProcessService } from './work-process.service';

describe('WorkProcessService', () => {
  let service: WorkProcessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkProcessService],
    }).compile();

    service = module.get<WorkProcessService>(WorkProcessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
