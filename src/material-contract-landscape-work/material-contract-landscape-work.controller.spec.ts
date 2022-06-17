import { Test, TestingModule } from '@nestjs/testing';
import { MaterialContractLandscapeWorkController } from './material-contract-landscape-work.controller';
import { MaterialContractLandscapeWorkService } from './material-contract-landscape-work.service';

describe('MaterialContractLandscapeWorkController', () => {
  let controller: MaterialContractLandscapeWorkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaterialContractLandscapeWorkController],
      providers: [MaterialContractLandscapeWorkService],
    }).compile();

    controller = module.get<MaterialContractLandscapeWorkController>(MaterialContractLandscapeWorkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
