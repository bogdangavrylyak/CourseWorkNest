import { Injectable } from '@nestjs/common';
import { Soil } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateSoilDto } from './dto/create-soil.dto';

@Injectable()
export class SoilService {
  constructor(private prisma: PrismaService) {}
  async create(createSoilDto: CreateSoilDto): Promise<Soil> {
    return await this.prisma.soil.create({ data: createSoilDto });
  }

  async findAll(): Promise<Soil[]> {
    return await this.prisma.soil.findMany();
  }

  async findOne(id: number): Promise<Soil> {
    return await this.prisma.soil.findUnique({
      where: {
        Soil_id: id,
      },
    });
  }

  async update(id: number, updateSoilDto: CreateSoilDto): Promise<Soil> {
    return await this.prisma.soil.update({
      where: {
        Soil_id: id,
      },
      data: updateSoilDto,
    });
  }

  async remove(id: number): Promise<Soil> {
    return await this.prisma.soil.delete({
      where: {
        Soil_id: id,
      },
    });
  }
}
