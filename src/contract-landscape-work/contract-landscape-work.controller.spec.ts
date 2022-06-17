import { Test, TestingModule } from '@nestjs/testing';
import { ContractLandscapeWorkController } from './contract-landscape-work.controller';
import { ContractLandscapeWorkService } from './contract-landscape-work.service';

describe('ContractLandscapeWorkController', () => {
  let controller: ContractLandscapeWorkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContractLandscapeWorkController],
      providers: [ContractLandscapeWorkService],
    }).compile();

    controller = module.get<ContractLandscapeWorkController>(ContractLandscapeWorkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
