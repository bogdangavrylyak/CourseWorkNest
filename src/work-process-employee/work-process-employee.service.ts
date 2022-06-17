import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateWorkProcessEmployeeDto } from './dto/create-work-process-employee.dto';

@Injectable()
export class WorkProcessEmployeeService {
  constructor(private prisma: PrismaService) {}
  async create(createWorkProcessEmployeeDto: CreateWorkProcessEmployeeDto) {
    return await this.prisma.workProcessEmployee.create({
      data: createWorkProcessEmployeeDto,
    });
  }

  async findAll() {
    return await this.prisma.workProcessEmployee.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.workProcessEmployee.findUnique({
      where: {
        WorkProcess_id: id,
      },
    });
  }

  async update(
    id: number,
    updateWorkProcessEmployeeDto: CreateWorkProcessEmployeeDto,
  ) {
    return await this.prisma.workProcessEmployee.update({
      where: {
        WorkProcess_id: id,
      },
      data: updateWorkProcessEmployeeDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.workProcessEmployee.delete({
      where: {
        WorkProcess_id: id,
      },
    });
  }
}
