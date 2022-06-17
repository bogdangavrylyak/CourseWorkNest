import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCharacteristicDto } from './dto/create-characteristic.dto';

@Injectable()
export class CharacteristicService {
  constructor(private prisma: PrismaService) {}
  async create(createCharacteristicDto: CreateCharacteristicDto) {
    return await this.prisma.haracteristic.create({
      data: createCharacteristicDto,
    });
  }

  async findAll() {
    return await this.prisma.haracteristic.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.haracteristic.findUnique({
      where: {
        haracteristic_id: id,
      },
    });
  }

  async update(id: number, updateCharacteristicDto: CreateCharacteristicDto) {
    return await this.prisma.haracteristic.update({
      where: {
        haracteristic_id: id,
      },
      data: updateCharacteristicDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.haracteristic.delete({
      where: {
        haracteristic_id: id,
      },
    });
  }
}
