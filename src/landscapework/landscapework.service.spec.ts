import { Test, TestingModule } from '@nestjs/testing';
import { LandscapeworkService } from './landscapework.service';

describe('LandscapeworkService', () => {
  let service: LandscapeworkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LandscapeworkService],
    }).compile();

    service = module.get<LandscapeworkService>(LandscapeworkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
