import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}
  async create(createCustomerDto: CreateCustomerDto) {
    return await this.prisma.customer.create({ data: createCustomerDto });
  }

  async findAll() {
    return await this.prisma.customer.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.customer.findUnique({
      where: {
        Customer_id: id,
      },
    });
  }

  async update(id: number, updateCustomerDto: CreateCustomerDto) {
    return await this.prisma.customer.update({
      where: {
        Customer_id: id,
      },
      data: updateCustomerDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.customer.delete({
      where: {
        Customer_id: id,
      },
    });
  }
}
