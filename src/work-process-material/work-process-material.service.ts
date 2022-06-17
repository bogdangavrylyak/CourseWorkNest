import { Injectable } from '@nestjs/common';
import { WorkProcessMaterial } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateWorkProcessMaterialDto } from './dto/create-work-process-material.dto';

@Injectable()
export class WorkProcessMaterialService {
  constructor(private prisma: PrismaService) {}
  async create(
    createWorkProcessMaterialDto: CreateWorkProcessMaterialDto,
  ): Promise<WorkProcessMaterial> {
    return await this.prisma.workProcessMaterial.create({
      data: createWorkProcessMaterialDto,
    });
  }

  async findAll() {
    return await this.prisma.workProcessMaterial.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.workProcessMaterial.findUnique({
      where: {
        WorkProcessMaterial_id: id,
      },
    });
  }

  async update(
    id: number,
    updateWorkProcessMaterialDto: CreateWorkProcessMaterialDto,
  ) {
    return await this.prisma.workProcessMaterial.update({
      where: {
        WorkProcessMaterial_id: id,
      },
      data: updateWorkProcessMaterialDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.workProcessMaterial.delete({
      where: {
        WorkProcessMaterial_id: id,
      },
    });
  }
}
