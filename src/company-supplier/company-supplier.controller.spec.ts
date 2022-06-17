import { Test, TestingModule } from '@nestjs/testing';
import { CompanySupplierController } from './company-supplier.controller';
import { CompanySupplierService } from './company-supplier.service';

describe('CompanySupplierController', () => {
  let controller: CompanySupplierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanySupplierController],
      providers: [CompanySupplierService],
    }).compile();

    controller = module.get<CompanySupplierController>(CompanySupplierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
