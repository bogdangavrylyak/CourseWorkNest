import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMaterialCharacteristicValueDto } from './dto/create-material-characteristic-value.dto';

@Injectable()
export class MaterialCharacteristicValueService {
  constructor(private prisma: PrismaService) {}
  async create(
    createMaterialCharacteristicValueDto: CreateMaterialCharacteristicValueDto,
  ) {
    return await this.prisma.materialCharacteristicValue.create({
      data: createMaterialCharacteristicValueDto,
    });
  }

  async findAll() {
    return await this.prisma.materialCharacteristicValue.findMany({
      include: {
        Material: true,
        CharacteristicValue: {
          include: {
            haracteristic: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.materialCharacteristicValue.findUnique({
      where: {
        Material_id: id,
      },
      include: {
        Material: true,
        CharacteristicValue: {
          include: {
            haracteristic: true,
          },
        },
      },
    });
  }

  async update(
    id: number,
    updateMaterialCharacteristicValueDto: CreateMaterialCharacteristicValueDto,
  ) {
    return await this.prisma.materialCharacteristicValue.update({
      where: {
        Material_id: id,
      },
      data: updateMaterialCharacteristicValueDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.materialCharacteristicValue.delete({
      where: {
        Material_id: id,
      },
    });
  }
}
