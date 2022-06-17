import { Test, TestingModule } from '@nestjs/testing';
import { MaterialContractLandscapeWorkService } from './material-contract-landscape-work.service';

describe('MaterialContractLandscapeWorkService', () => {
  let service: MaterialContractLandscapeWorkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaterialContractLandscapeWorkService],
    }).compile();

    service = module.get<MaterialContractLandscapeWorkService>(MaterialContractLandscapeWorkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
