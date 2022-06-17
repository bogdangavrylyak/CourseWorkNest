import { Injectable } from '@nestjs/common';
import { City } from '@prisma/client';
import { CreateCityDto } from './dto/create-city.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}
  async create(createCityDto: CreateCityDto): Promise<City> {
    return await this.prisma.city.create({ data: createCityDto });
  }

  async findAll(): Promise<City[]> {
    return await this.prisma.city.findMany();
  }

  async findOne(id: number): Promise<City> {
    return await this.prisma.city.findUnique({
      where: {
        City_id: id,
      },
    });
  }

  async update(id: number, updateCityDto: CreateCityDto) {
    return await this.prisma.city.update({
      where: {
        City_id: id,
      },
      data: updateCityDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.city.delete({
      where: {
        City_id: id,
      },
    });
  }
}
