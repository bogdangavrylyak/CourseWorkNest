import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { PrismaService } from "../prisma.service";

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService) {}
  async create(createStatusDto: CreateStatusDto) {
    return await this.prisma.status.create({ data: createStatusDto });
  }

  async findAll() {
    return await this.prisma.status.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.status.findUnique({
      where: {
        Status_id: id,
      },
    });
  }

  async update(id: number, updateStatusDto: CreateStatusDto) {
    return await this.prisma.status.update({
      where: {
        Status_id: id,
      },
      data: updateStatusDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.status.delete({
      where: {
        Status_id: id,
      },
    });
  }
}
