import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCharacteristicValueDto } from './dto/create-characteristic_value.dto';

@Injectable()
export class CharacteristicValueService {
  constructor(private prisma: PrismaService) {}
  async create(createCharacteristicValueDto: CreateCharacteristicValueDto) {
    return await this.prisma.characteristicValue.create({
      data: createCharacteristicValueDto,
    });
  }

  async findAll() {
    return await this.prisma.characteristicValue.findMany({
      include: {
        haracteristic: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.characteristicValue.findUnique({
      where: {
        CharacteristicValue_id: id,
      },
      include: {
        haracteristic: {
          // select: {
          //   haracteristic: true,
          // },
        },
      },
    });
  }

  async update(
    id: number,
    updateCharacteristicValueDto: CreateCharacteristicValueDto,
  ) {
    return await this.prisma.characteristicValue.update({
      where: {
        CharacteristicValue_id: id,
      },
      data: updateCharacteristicValueDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.characteristicValue.delete({
      where: {
        CharacteristicValue_id: id,
      },
    });
  }
}
