import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}
  async create(createAddressDto: CreateAddressDto) {
    return await this.prisma.address.create({ data: createAddressDto });
  }

  async findAll() {
    return await this.prisma.address.findMany({
      include: {
        City: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.address.findUnique({
      where: {
        Address_id: id,
      },
      include: {
        City: true,
      },
    });
  }

  async update(id: number, updateAddressDto: CreateAddressDto) {
    return await this.prisma.address.update({
      where: {
        Address_id: id,
      },
      data: updateAddressDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.address.delete({
      where: {
        Address_id: id,
      },
    });
  }
}
