import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}
  async create(createOrderDto: CreateOrderDto) {
    const order = await this.prisma.order.create({
      data: {
        OrderNumber: createOrderDto.OrderNumber,
        DateOfOrder: createOrderDto.DateOfOrder,
        Deadline: createOrderDto.Deadline,
        TotalPrice: createOrderDto.TotalPrice,
        CompanySupplierRef: createOrderDto.CompanySupplierRef,
        EmployeeRef: createOrderDto.EmployeeRef,
      },
    });

    return order;
  }

  async findAll() {
    return await this.prisma.order.findMany({
      include: {
        CompanySupplier: {
          include: {
            Address: true,
          },
        },
        Employee: {
          include: {
            Department: true,
            Position: true,
          },
        },
        OrderedMaterials: {
          include: {
            Material: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.order.findUnique({
      where: {
        Order_id: id,
      },
      include: {
        CompanySupplier: {
          include: {
            Address: true,
          },
        },
        Employee: {
          include: {
            Department: true,
            Position: true,
          },
        },
        OrderedMaterials: {
          include: {
            Material: true,
          },
        },
      },
    });
  }

  async update(id: number, updateOrderDto: CreateOrderDto) {
    return await this.prisma.order.update({
      where: {
        Order_id: id,
      },
      data: {
        OrderNumber: updateOrderDto.OrderNumber,
        DateOfOrder: updateOrderDto.DateOfOrder,
        Deadline: updateOrderDto.Deadline,
        TotalPrice: updateOrderDto.TotalPrice,
        CompanySupplierRef: updateOrderDto.CompanySupplierRef,
        EmployeeRef: updateOrderDto.EmployeeRef,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.order.delete({
      where: {
        Order_id: id,
      },
    });
  }
}
