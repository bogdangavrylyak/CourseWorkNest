import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { PrismaService } from '../prisma.service';
import { AuthDto } from './dto/auth.dto';
import { Employee } from '@prisma/client';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}
  async auth(authDto: AuthDto): Promise<Employee | number> {
    const user = await this.prisma.employee.findFirst({
      where: {
        Email: authDto.email,
        Password: authDto.password,
      },
      include: {
        Position: true,
        Department: true,
      },
    });

    if (user) {
      const finalUserCheck = await this.prisma.employee.findUnique({
        where: {
          Employee_id: user.Employee_id,
        },
      });

      if (
        finalUserCheck.Email != authDto.email &&
        finalUserCheck.Password != authDto.password
      ) {
        throw new NotFoundException();
      }
    }

    return user;
  }

  //    console.log('authDto: ', authDto);
  // console.log('user1: ', user);
  // console.log(user);

  async create(createEmployeeDto: CreateEmployeeDto) {
    return await this.prisma.employee.create({ data: createEmployeeDto });
  }

  async findAll() {
    return await this.prisma.employee.findMany({
      include: {
        Position: true,
        Department: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.employee.findUnique({
      where: {
        Employee_id: id,
      },
      include: {
        Position: true,
        Department: true,
      },
    });
  }

  async update(id: number, updateEmployeeDto: CreateEmployeeDto) {
    return await this.prisma.employee.update({
      where: {
        Employee_id: id,
      },
      data: updateEmployeeDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.employee.delete({
      where: {
        Employee_id: id,
      },
    });
  }
}
