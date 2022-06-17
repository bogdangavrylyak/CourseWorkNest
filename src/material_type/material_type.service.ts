import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateMaterialTypeDto } from './dto/create-material_type.dto';

@Injectable()
export class MaterialTypeService {
  constructor(private prisma: PrismaService) {}
  async create(createMaterialTypeDto: CreateMaterialTypeDto) {
    return await this.prisma.materialType.create({
      data: createMaterialTypeDto,
    });
  }

  async findAll() {
    return await this.prisma.materialType.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.materialType.findUnique({
      where: {
        MaterialType_id: id,
      },
    });
  }

  async update(id: number, updateMaterialTypeDto: CreateMaterialTypeDto) {
    return await this.prisma.materialType.update({
      where: {
        MaterialType_id: id,
      },
      data: updateMaterialTypeDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.materialType.delete({
      where: {
        MaterialType_id: id,
      },
    });
  }
}
