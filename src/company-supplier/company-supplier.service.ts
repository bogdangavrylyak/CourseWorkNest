import { Injectable } from '@nestjs/common';
import { CreateCompanySupplierDto } from './dto/create-company-supplier.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CompanySupplierService {
  constructor(private prisma: PrismaService) {}
  async create(createCompanySupplierDto: CreateCompanySupplierDto) {
    return await this.prisma.companySupplier.create({ data: createCompanySupplierDto });
  }

  async findAll() {
    return await this.prisma.companySupplier.findMany({
      include: {
        Address: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.companySupplier.findUnique({
      where: {
        CompanySupplier_id: id,
      },
      include: {
        Address: true,
      },
    });
  }

  async update(id: number, updateCompanySupplierDto: CreateCompanySupplierDto) {
    return await this.prisma.companySupplier.update({
      where: {
        CompanySupplier_id: id,
      },
      data: updateCompanySupplierDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.companySupplier.delete({
      where: {
        CompanySupplier_id: id,
      },
    });
  }
}
