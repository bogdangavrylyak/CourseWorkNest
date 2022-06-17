import { Module } from '@nestjs/common';
import { CompanySupplierService } from './company-supplier.service';
import { CompanySupplierController } from './company-supplier.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [CompanySupplierController],
  providers: [CompanySupplierService, PrismaService],
})
export class CompanySupplierModule {}
