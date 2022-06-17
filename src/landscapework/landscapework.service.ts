import { Injectable } from '@nestjs/common';
import { CreateLandscapeworkDto } from './dto/create-landscapework.dto';
import { PrismaService } from "../prisma.service";

@Injectable()
export class LandscapeworkService {
  constructor(private prisma: PrismaService) {}
  async create(createLandscapeworkDto: CreateLandscapeworkDto) {
    return await this.prisma.landscapeWork.create({ data: createLandscapeworkDto });
  }

  async findAll() {
    return await this.prisma.landscapeWork.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.landscapeWork.findUnique({
      where: {
        LandscapeWork_id: id,
      },
    });
  }

  async update(id: number, updateLandscapeworkDto: CreateLandscapeworkDto) {
    return await this.prisma.landscapeWork.update({
      where: {
        LandscapeWork_id: id,
      },
      data: updateLandscapeworkDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.landscapeWork.delete({
      where: {
        LandscapeWork_id: id,
      },
    });
  }
}
