import { Test, TestingModule } from '@nestjs/testing';
import { LandscapeworkController } from './landscapework.controller';
import { LandscapeworkService } from './landscapework.service';

describe('LandscapeworkController', () => {
  let controller: LandscapeworkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LandscapeworkController],
      providers: [LandscapeworkService],
    }).compile();

    controller = module.get<LandscapeworkController>(LandscapeworkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
