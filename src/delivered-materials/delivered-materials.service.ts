import { Injectable } from '@nestjs/common';
import { CreateDeliveredMaterialDto } from './dto/create-delivered-material.dto';
import { PrismaService } from '../prisma.service';
import { DeliveredMaterials } from '@prisma/client';

@Injectable()
export class DeliveredMaterialsService {
  constructor(private prisma: PrismaService) {}
  async create(
    createDeliveredMaterialDto: CreateDeliveredMaterialDto,
  ): Promise<DeliveredMaterials> {
    return await this.prisma.deliveredMaterials.create({
      data: createDeliveredMaterialDto,
    });
  }

  async findAll() {
    return await this.prisma.deliveredMaterials.findMany({
      include: {
        Material: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.deliveredMaterials.findUnique({
      where: {
        DeliveredMaterials_id: id,
      },
      include: {
        Material: true,
      },
    });
  }

  async update(
    id: number,
    updateDeliveredMaterialDto: CreateDeliveredMaterialDto,
  ) {
    return await this.prisma.deliveredMaterials.update({
      where: {
        DeliveredMaterials_id: id,
      },
      data: updateDeliveredMaterialDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.deliveredMaterials.delete({
      where: {
        DeliveredMaterials_id: id,
      },
    });
  }
}
