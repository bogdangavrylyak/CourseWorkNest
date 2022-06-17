import { Test, TestingModule } from '@nestjs/testing';
import { CompanySupplierService } from './company-supplier.service';

describe('CompanySupplierService', () => {
  let service: CompanySupplierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanySupplierService],
    }).compile();

    service = module.get<CompanySupplierService>(CompanySupplierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
