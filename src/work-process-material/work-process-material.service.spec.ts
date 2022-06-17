import { Test, TestingModule } from '@nestjs/testing';
import { WorkProcessMaterialService } from './work-process-material.service';

describe('WorkProcessMaterialService', () => {
  let service: WorkProcessMaterialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkProcessMaterialService],
    }).compile();

    service = module.get<WorkProcessMaterialService>(WorkProcessMaterialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
