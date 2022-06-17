import { Test, TestingModule } from '@nestjs/testing';
import { ContractLandscapeWorkService } from './contract-landscape-work.service';

describe('ContractLandscapeWorkService', () => {
  let service: ContractLandscapeWorkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContractLandscapeWorkService],
    }).compile();

    service = module.get<ContractLandscapeWorkService>(ContractLandscapeWorkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
