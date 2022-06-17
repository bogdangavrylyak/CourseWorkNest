import { Injectable } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PositionService {
  constructor(private prisma: PrismaService) {}
  async create(createPositionDto: CreatePositionDto) {
    return await this.prisma.position.create({ data: createPositionDto });
  }

  async findAll() {
    return await this.prisma.position.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.position.findUnique({
      where: {
        Position_id: id,
      },
    });
  }

  async update(id: number, updatePositionDto: CreatePositionDto) {
    return await this.prisma.position.update({
      where: {
        Position_id: id,
      },
      data: updatePositionDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.position.delete({
      where: {
        Position_id: id,
      },
    });
  }
}
