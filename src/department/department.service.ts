import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateDepartmentDto } from './dto/create-department.dto';

@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService) {}
  async create(createDepartmentDto: CreateDepartmentDto) {
    return await this.prisma.department.create({ data: createDepartmentDto });
  }

  async findAll() {
    return await this.prisma.department.findMany({
      include: {
        Address: {
          include: {
            City: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.department.findUnique({
      where: {
        Department_id: id,
      },
      include: {
        Address: {
          include: {
            City: true,
          },
        },
      },
    });
  }

  async update(id: number, updateDepartmentDto: CreateDepartmentDto) {
    return await this.prisma.department.update({
      where: {
        Department_id: id,
      },
      data: updateDepartmentDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.department.delete({
      where: {
        Department_id: id,
      },
    });
  }
}
