import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderedMaterialDto } from './dto/create-ordered-material.dto';

@Injectable()
export class OrderedMaterialsService {
  constructor(private prisma: PrismaService) {}
  async create(createOrderedMaterialDto: CreateOrderedMaterialDto) {
    return await this.prisma.orderedMaterials.create({
      data: createOrderedMaterialDto,
    });
  }

  async findAll() {
    const dbData = await this.prisma.orderedMaterials.findMany({
      include: {
        Order: true,
        Material: true,
      },
    });

    return dbData.map((el) => ({
      ...el,
      ...el.Material,
      ...el.Order,
    }));
  }

  async findOne(id: number) {
    return await this.prisma.orderedMaterials.findUnique({
      where: {
        OrderedMaterials_id: id,
      },
      include: {
        Order: true,
        Material: true,
      },
    });
  }

  async update(id: number, updateOrderedMaterialDto: CreateOrderedMaterialDto) {
    return await this.prisma.orderedMaterials.update({
      where: {
        OrderedMaterials_id: id,
      },
      data: updateOrderedMaterialDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.orderedMaterials.delete({
      where: {
        OrderedMaterials_id: id,
      },
    });
  }
}
