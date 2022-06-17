import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSortDto } from './dto/create-sort.dto';

@Injectable()
export class SortService {
  constructor(private prisma: PrismaService) {}
  async create(createSortDto: CreateSortDto) {
    return await this.prisma.sort.create({ data: createSortDto });
  }

  async findAll() {
    return await this.prisma.sort.findMany({
      include: {
        MaterialType: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.sort.findUnique({
      where: {
        Sort_id: id,
      },
      include: {
        MaterialType: true,
      },
    });
  }

  async update(id: number, updateSortDto: CreateSortDto) {
    return await this.prisma.sort.update({
      where: {
        Sort_id: id,
      },
      data: updateSortDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.sort.delete({
      where: {
        Sort_id: id,
      },
    });
  }
}
